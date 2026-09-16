/**
 * Generate the social share image (og-image.png) and PNG favicons from the
 * SVG sources. Run from anywhere:
 *
 *   NODE_PATH=/opt/node22/lib/node_modules node scripts/gen-assets.cjs
 *
 * Requires Node + Playwright (Chromium). Outputs into assets/img/.
 */
const { chromium } = require('playwright');
const path = require('path');

const SCRIPTS = __dirname;
const ROOT = path.join(__dirname, '..');
const IMG = path.join(ROOT, 'assets', 'img');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ deviceScaleFactor: 1 });

  // 1) OG image 1200x630
  const og = await ctx.newPage();
  await og.setViewportSize({ width: 1200, height: 630 });
  await og.goto('file://' + path.join(SCRIPTS, 'og.html'), { waitUntil: 'load' });
  try { await og.evaluate(() => document.fonts && document.fonts.ready); } catch (e) {}
  await og.waitForTimeout(1200);
  await og.screenshot({ path: path.join(IMG, 'og-image.png'), clip: { x: 0, y: 0, width: 1200, height: 630 } });
  console.log('og-image.png done');
  await og.close();

  // 2) favicon PNGs from favicon.svg (transparent corners)
  async function renderIcon(size, out) {
    const p = await ctx.newPage();
    await p.setViewportSize({ width: size, height: size });
    await p.setContent(
      '<body style="margin:0;padding:0;background:transparent">' +
      '<img src="file://' + path.join(IMG, 'favicon.svg') + '" width="' + size + '" height="' + size + '" style="display:block" />' +
      '</body>', { waitUntil: 'load' });
    await p.waitForTimeout(200);
    await p.screenshot({ path: path.join(IMG, out), omitBackground: true, clip: { x: 0, y: 0, width: size, height: size } });
    console.log(out + ' done');
    await p.close();
  }

  await renderIcon(180, 'apple-touch-icon.png');
  await renderIcon(32, 'favicon-32.png');
  await renderIcon(512, 'icon-512.png');

  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
