import React from "react";
import './Contact.css'

const Contact = () => {
  return (
    <div className="container" style={{ width: '100%' }}>
      <h1>Contact our page.</h1>
      <main>
          <div className="card" style={{ width: '100%' }}>
            <div className="card-text">
              <img src="https://gcdnb.pbrd.co/images/pFSaAb1xAHL2.jpg?o=1" alt="contact" />
              <p><span>Address: 1234 Örnek Cadde, Sample Neighbourhood, Sample City, Country, 12345</span></p>
              <p><span>Telephone: (123) 456-7890, E-mail: info@ornek.com, Contact Form: [Form]</span></p>

              <p><span>Social Media: - Facebook: [Facebook], - Twitter: [Twitter], - Instagram: [Instagram]</span></p>
              <p><span>Map [Map View]</span></p>
              <p><span>Working Hours: Monday - Friday: 9:00 - 17:00, Saturday - Sunday: Closed</span></p>
              <p><span>Frequently Asked Questions (FAQ): [FAQ Page]</span></p>
            </div>
          </div>
      </main>
    </div>
  );
};

export default Contact;
