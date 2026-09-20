import React from 'react'
import { Link } from 'react-router-dom'
import { Reveal, SplitText } from '../components/anim.jsx'

const MAIL = 'team@elevateautomation.in'
const WA = 'https://wa.me/918200191137'

function Prose({ title, updated, sections }) {
  return (
    <>
      <section className="page-hero" style={{ paddingBottom: '1rem' }}>
        <div className="hero-glow" />
        <div className="container">
          <Reveal><div className="breadcrumb"><Link to="/">Home</Link><span className="sep">/</span><span>{title}</span></div></Reveal>
          <h1><SplitText text={title} /></h1>
        </div>
      </section>
      <section className="section tight">
        <div className="container">
          <Reveal className="prose">
            <p className="updated">Last updated: {updated}</p>
            {sections.map((s, i) => (
              <React.Fragment key={i}>
                {s.h ? <h2>{s.h}</h2> : null}
                {s.p && s.p.map((para, k) => <p key={k}>{para}</p>)}
                {s.ul && <ul>{s.ul.map((li, k) => <li key={k}>{li}</li>)}</ul>}
              </React.Fragment>
            ))}
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', marginTop: '2rem' }}>This document is provided as a general template and should be reviewed by qualified legal counsel before publication to ensure it meets your specific obligations.</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}

const contact = <>Questions? Email <a href={`mailto:${MAIL}`}>{MAIL}</a> or message us on <a href={WA} target="_blank" rel="noopener">WhatsApp</a>.</>

export function Privacy() {
  return <Prose title="Privacy Policy" updated="16 September 2026" sections={[
    { p: ['Elevate Automation ("we", "us", "our") respects your privacy. This policy explains what information we collect through our website and our AI WhatsApp automation and CRM services, how we use it, and the choices you have. By using our website or services, you agree to this policy.'] },
    { h: '1. Information we collect', ul: ['Enquiry details you send us — such as your name, company, email, phone number and message — when you contact us or request a demo.', "Client service data — for our clients, this may include product catalogues, buyer conversations on WhatsApp, and lead records processed by the assistant on the client's behalf.", 'Usage data — basic technical information such as browser type, device and pages visited, used to keep the site secure and improve it.'] },
    { h: '2. How we use information', ul: ['To respond to enquiries, provide demos and prepare quotes.', 'To deliver, operate, monitor and support our services for clients.', 'To improve our website, products and customer experience.', 'To comply with legal obligations.'] },
    { h: '3. WhatsApp & third-party platforms', p: ["Our services run on the Meta WhatsApp Business Platform and use third-party AI providers (such as Groq and Google Gemini) and cloud hosting to deliver features. When you interact with a client's WhatsApp assistant, your messages are processed to generate responses. These platforms process data under their own terms and privacy policies."] },
    { h: '4. How we share information', p: ['We do not sell your personal information. We share it only with service providers who help us operate (for example, hosting, messaging and AI providers), when required by law, or with your consent. For client service data, we act as a processor on behalf of our clients and handle it according to our agreement with them.'] },
    { h: '5. Data retention', p: ['We keep information only as long as needed for the purposes above, to meet legal requirements, or as agreed with our clients, after which it is deleted or anonymised.'] },
    { h: '6. Security', p: ['We use managed, monitored infrastructure with access controls and, on applicable plans, dedicated servers and daily backups. No method of transmission or storage is completely secure, but we take reasonable steps to protect your information.'] },
    { h: '7. Your rights', p: ['Subject to applicable law, you may request access to, correction of, or deletion of your personal information. Contact us using the details below and we will respond within a reasonable time.'] },
    { h: '8. Cookies', p: ['Our website uses minimal cookies or local storage only where needed for functionality. You can control cookies through your browser settings.'] },
    { h: '9. Changes to this policy', p: ['We may update this policy from time to time. The "last updated" date above reflects the latest version.'] },
    { h: '10. Contact us', p: [contact] },
  ]} />
}

export function Terms() {
  return <Prose title="Terms of Service" updated="16 September 2026" sections={[
    { p: ['These Terms of Service ("Terms") govern your use of the Elevate Automation website and services. By accessing our website or engaging our services, you agree to these Terms. Specific engagements are also governed by the quotation, order form or agreement signed with you, which prevails in case of conflict.'] },
    { h: '1. Services', p: ['We provide AI-powered WhatsApp automation and CRM services, including an AI assistant on your WhatsApp Business number, catalogue ingestion, lead scoring, cross-sell, automated follow-ups, an admin dashboard, and related hosting and support, as described in your plan.'] },
    { h: '2. Client responsibilities', ul: ['Provide a verified Meta WhatsApp Business number.', 'Supply product PDFs, photos and content in usable form.', 'Use the services lawfully and in compliance with WhatsApp/Meta and applicable messaging regulations.', 'Obtain any consents required to message your buyers.'] },
    { h: '3. Acceptable use', p: ["You agree not to use the services to send spam or unlawful, misleading or harmful content, to infringe others' rights, or to attempt to disrupt or reverse-engineer the services."] },
    { h: '4. Fees & billing', p: ['Fees, billing cycles and minimum terms are set out in your quotation or order form. Third-party charges — such as Meta per-conversation messaging fees and AI usage beyond fair-use — may be billed at actuals as described in your quotation.'] },
    { h: '5. Third-party platforms', p: ['The services rely on third parties including Meta (WhatsApp Business Platform), AI providers (such as Groq and Google Gemini) and cloud infrastructure. Their availability and terms are outside our control, and your use may be subject to their terms.'] },
    { h: '6. Intellectual property', p: ['We retain all rights to our platform, software and materials. You retain rights to your catalogue and business data. You grant us a limited licence to process your content solely to provide the services.'] },
    { h: '7. Confidentiality', p: ["Each party will protect the other's confidential information and use it only to perform under these Terms."] },
    { h: '8. Warranties & disclaimer', p: ['We provide the services with reasonable skill and care. Except as expressly stated, the services are provided "as is" without further warranties. AI outputs may occasionally be imperfect; you are responsible for reviewing critical communications.'] },
    { h: '9. Limitation of liability', p: ['To the maximum extent permitted by law, neither party is liable for indirect or consequential losses, and our total liability is limited as set out in your agreement or, absent that, to the fees paid for the services in the preceding period.'] },
    { h: '10. Term & termination', p: ['Term, notice periods and termination rights are as stated in your quotation or order form. We may suspend services for non-payment or breach.'] },
    { h: '11. Governing law', p: ['These Terms are governed by the laws of India, and the courts of India have exclusive jurisdiction, unless your agreement states otherwise.'] },
    { h: '12. Changes', p: ['We may update these Terms from time to time. Continued use after changes constitutes acceptance.'] },
    { h: '13. Contact', p: [contact] },
  ]} />
}
