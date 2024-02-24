import React from "react";
import './Contact.css'

const Contact = () => {
  return ( 
    <main>
      <div className="ConAll">
        <div className="Con-Body">
          <div className="Con-Body-Text">
            <div className="Con-TextH3">
              <h3 className="Con-Text-h3">Contact Us For The Best Coffee Preferences</h3>
            </div>
            <div className="Con-TextP">
              <p className="Con-Text-p">Get in touch, we’d love to hear from you.</p>
              <p className="Con-Text-p">Let's choose the best coffee to suit your taste.</p>
              <p className="Con-Text-p">The best coffees are always the ones with the best flavour.</p>
            </div>
          </div>
          <div className="Con-BodyImg">
            <img src="https://gcdnb.pbrd.co/images/PdDQJf37lwrX.jpg?o=1" alt="Support" className="Con-Body-img" />
          </div>
        </div>
        <div className="Con-Body-Subject">
          <div className="Con-Body-Subject-Text">
            <div className="Con-Body-SubjectH3">
              <h3 className="Con-Body-Subject-h3">Contact Us</h3>
            </div>
            <div className="Con-Body-Subject-Text">
              <div className="Con-Body-Subject-TextAdress">
                <p className="Con-Body-Subject-Text-Adress">Adress : Champ de Mars, 5 Avenue Anatole France, 75007 Paris, Fransa</p>
                <p className="Con-Body-Subject-Text-Adress"><a href="durmaztayfun178@gmail.com">Click here to contact via e-mail</a></p>
                <p className="Con-Body-Subject-Text-Adress"><a href="https://www.linkedin.com/in/tayfun-durmaz-405399277/">Click here to get in touch via LinkedIn</a></p>
                <p className="Con-Body-Subject-Text-Adress"><a href="https://profile.indeed.com/?hl=tr_TR&co=TR&from=gnav-jobseeker-profile--profile-one-frontend">Click here to contact via Indeed</a></p>
                <p className="Con-Body-Subject-Text-Adress"><a href="https://www.kariyer.net/hesabim">Click here to contact via Kariyer.net</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="Con-Head">
          <div className="Con-h1">
            <h1 className="Conh1">How about a coffee break?🫵</h1>
          </div>
          <div className="Con-Img1">
            <img src="https://gcdnb.pbrd.co/images/TFPmgSFol3oD.jpg?o=1" alt="Acoffee" className="Con-Img-1"/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
