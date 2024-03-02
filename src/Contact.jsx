import React from "react";
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './Contact.css'

const Contact = () => {
  // const GOOGLE_MAPS_API_KEY = import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY; // Sunucuda(vercel) bu anahtar olacak
  // const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY; // local'de bu anahtar olacak
  // const mapStyles = {
  //   height: "55vh",
  //   width: "100%"
  // };

  // const defaultCenter = {
  //   lat: 40.712776,
  //   lng: -74.005974
  // };

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
            <div className="coffeeSticker-1">
              <img src="../images/coffee-bean.png" alt="coffeeSticker-1" />
            </div>
            <div className="Con-Body-ContactUS-Form-title">
              <h3>Contact US</h3>
            </div>
            <ul>
              <li>
                <input className="name" type="text" name="name" id="name" placeholder="NAME" />
                <input className="surname" type="text" name="surname" id="surname" placeholder="SURNAME" />
              </li>
              <li>
                <input className="phone" type="text" name="phone" id="phone" placeholder="PHONE"/>
                <input className="mail" type="text" name="mail" id="mail" placeholder="MAİL"/>
              </li>
              <li>
                <input className="description" type="text" name="description" id="description" placeholder="DESCRİPTİON"/>
              </li>
            </ul>
            <button className="Con-Body-ContactUS-Button">SEND MESSAGE</button>
            <div className="coffeeSticker-2">
              <img src="../images/coffee.png" alt="coffeeSticker-2" />
            </div>
          </div>
          
          {/* <div className="Con-Body-ContactUS-map">
            <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
              <GoogleMap mapContainerStyle={mapStyles} zoom={13}  center={defaultCenter}/>
            </LoadScript>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default Contact;


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