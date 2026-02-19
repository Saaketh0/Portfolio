import { CONTACT } from "../constants/siteConfig";

function ContactSection() {
  return (
    <section className="sections1" id="Contact">
      <h1 className="Header">Contact Me</h1>
      <p>Email: {CONTACT.emails.join(" / ")}</p>
      <p>Phone Number: {CONTACT.phone}</p>
      <p>
        LinkedIn:{" "}
        <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">
          LinkedIn Profile
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a href={CONTACT.github} target="_blank" rel="noreferrer">
          GitHub Profile
        </a>
      </p>
    </section>
  );
}

export default ContactSection;
