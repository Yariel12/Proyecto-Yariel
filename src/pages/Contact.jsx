import React from "react";
import ContactComponent from "../components/contactComponent.jsx";
import ContactInformation from "../components/contactInformation.jsx";

function Contact() {
  return (
    <div>
      <ContactInformation />
      <ContactComponent />
    </div>
  );
}

export default Contact;
