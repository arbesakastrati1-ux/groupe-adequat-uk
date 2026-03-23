import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms",
  description: "Privacy policy and terms of use for Groupe Adequat UK.",
};

export default function LegalPage() {
  return (
    <div className="section-padding bg-white">
      <div className="container-max mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-dark mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: March 2026</p>

        <div className="prose prose-sm max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-dark">Who we are</h2>
            <p>Groupe Adequat UK is a recruitment business operating in the United Kingdom. We are part of the Groupe Adequat group. Our registered address and company details are available on request.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark">What data we collect</h2>
            <p>We collect personal data when you:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Submit an employer enquiry via our website</li>
              <li>Register as a candidate or apply for a job</li>
              <li>Contact us directly by email or phone</li>
            </ul>
            <p className="mt-3">This data may include your name, email address, phone number, CV, work history, and other information you choose to share.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark">How we use your data</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To respond to your enquiry or application</li>
              <li>To match candidates to suitable roles</li>
              <li>To contact employers about relevant recruitment services</li>
              <li>To comply with our legal and regulatory obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark">Your rights</h2>
            <p>Under UK GDPR, you have the right to access, correct, or request deletion of your personal data. To exercise these rights, please contact us at <a href="mailto:uk@groupeadequat.com" className="text-primary hover:underline">uk@groupeadequat.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark">Cookies</h2>
            <p>Our website uses minimal cookies necessary for the site to function. We do not use tracking or advertising cookies without your consent.</p>
          </section>

          <hr className="border-gray-100 my-10" />

          <section>
            <h2 className="text-3xl font-bold text-dark mb-6">Terms of Use</h2>
            <p>By using this website, you agree to the following terms. The content on this site is provided for general information only and does not constitute professional or legal advice.</p>
            <p className="mt-3">We reserve the right to update or remove content at any time without notice. Links to third-party websites are provided for convenience; we are not responsible for their content.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
