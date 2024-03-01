import React from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import config from '../config';
import './Contact.css'

const Contact = () => {
  const { GOOGLE_MAPS_API_KEY } = config;
  const mapStyles = {
    height: "100vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: 40.712776,
    lng: -74.005974
  };

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
        <div className="Con-Body-ContactUS">
          <div className="Con-Body-ContactUS-Form">
            <ul>
              <li>
                <input type="text" name="name" id="name" placeholder="NAME" />
              </li>
              <li>
                <input type="text" name="surname" id="surname" placeholder="SURNAME" />
              </li>
              <li>
                <input type="text" name="phone" id="phone" placeholder="PHONE"/>
              </li>
              <li>
                <input type="text" name="mail" id="mail" placeholder="MAİL"/>
              </li>
              <li>
                <input type="text" name="description" id="description" placeholder="DESCRİPTİON"/>
              </li>
            </ul>
            <button className="Con-Body-ContactUS-Button">GÖNDER</button>
          </div>
          <div className="Con-Body-ContactUS-map">
            <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
              <GoogleMap mapContainerStyle={mapStyles} zoom={13}  center={defaultCenter}/>
            </LoadScript>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;

//Kayıt ol veya Contact Us 
//name, surname, phone, mail, description    AIzaSyCn7Zw5u6aqg41Cr1rkU0z6WR8TCyfiXjQ

// Kahve Formu
// Kahve içeceğiniz sıklık nedir?
// Tat tercihiniz nasıldır? (Tatlı, ekşi, acı, vb.)
// Diğer içeceklerde hangi tatları tercih edersiniz?
// Kahvenizin yoğunluğunu nasıl tercih edersiniz? (Hafif, orta, yoğun)
// Kahve aromalarında hangi çeşitleri seversiniz? (Çikolata, vanilya, meyvemsi, fındık, vb.)
// Şeker veya kremalı içecekleri tercih ediyor musunuz?
// Hangi sıcaklıkta içmeyi tercih edersiniz?
// Kahve içerken genellikle hangi çikolata, kurabiye veya atıştırmalıkları tercih edersiniz?
// Kahve türlerinden hangilerini daha önce denediniz (örneğin, Amerikano, espresso, latte, cappuccino, gibi)?
// Diğer içeceklerde alerjiniz veya hassasiyetiniz var mı?