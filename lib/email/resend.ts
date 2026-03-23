import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = process.env.RESEND_FROM_EMAIL ?? "noreply@groupeadequat.co.uk";
const TO = process.env.RESEND_TO_EMAIL ?? "uk@groupeadequat.com";

export async function sendEnquiryEmail(data: {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message: string;
  service?: string;
}) {
  return resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: data.email,
    subject: `New Employer Enquiry from ${data.name} – ${data.company}`,
    html: `
      <h2>New Employer Enquiry</h2>
      <table>
        <tr><td><strong>Name:</strong></td><td>${data.name}</td></tr>
        <tr><td><strong>Email:</strong></td><td>${data.email}</td></tr>
        <tr><td><strong>Company:</strong></td><td>${data.company}</td></tr>
        ${data.phone ? `<tr><td><strong>Phone:</strong></td><td>${data.phone}</td></tr>` : ""}
        ${data.service ? `<tr><td><strong>Service:</strong></td><td>${data.service}</td></tr>` : ""}
        <tr><td><strong>Message:</strong></td><td>${data.message}</td></tr>
      </table>
    `,
  });
}

export async function sendApplicationEmail(data: {
  name: string;
  email: string;
  phone?: string;
  coverNote?: string;
  jobTitle: string;
  jobSlug: string;
}) {
  return resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: data.email,
    subject: `New Job Application – ${data.jobTitle} (${data.name})`,
    html: `
      <h2>New Job Application</h2>
      <table>
        <tr><td><strong>Job:</strong></td><td>${data.jobTitle}</td></tr>
        <tr><td><strong>Name:</strong></td><td>${data.name}</td></tr>
        <tr><td><strong>Email:</strong></td><td>${data.email}</td></tr>
        ${data.phone ? `<tr><td><strong>Phone:</strong></td><td>${data.phone}</td></tr>` : ""}
        ${data.coverNote ? `<tr><td><strong>Cover Note:</strong></td><td>${data.coverNote}</td></tr>` : ""}
      </table>
      <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/jobs/${data.jobSlug}">View Job</a></p>
    `,
  });
}

export async function sendCVEmail(data: {
  name: string;
  email: string;
  phone?: string;
  message?: string;
}) {
  return resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: data.email,
    subject: `CV Registration – ${data.name}`,
    html: `
      <h2>New CV Registration</h2>
      <table>
        <tr><td><strong>Name:</strong></td><td>${data.name}</td></tr>
        <tr><td><strong>Email:</strong></td><td>${data.email}</td></tr>
        ${data.phone ? `<tr><td><strong>Phone:</strong></td><td>${data.phone}</td></tr>` : ""}
        ${data.message ? `<tr><td><strong>Message:</strong></td><td>${data.message}</td></tr>` : ""}
      </table>
    `,
  });
}
