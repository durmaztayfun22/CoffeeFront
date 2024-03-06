import React, { useState } from "react";
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './Contact.css'
import axios from "axios";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const api = 'https://strapidevelopment.onrender.com/api/forms';


const Contact = () => {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [description, setDescription] = useState('');

  const ContactMessage = async(e) => {
    e.preventDefault();

    const formData = {
      data: {
          name: name,
          surname: surname,
          phone: phone,
          mail: mail,
          description: description
      }
      
    };

    console.log(formData);

    try {
  
      const response = await axios.post(api, formData, { 
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response)
      console.log('veriler gönderildi');
  
      if (response.status === 201) {
        setName('');
        setSurname('');
        setPhone('');
        setMail('');
        setDescription('');
      }
    } catch (error) {
      console.log(error);
    }
  }
  
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
              <img src="https://gcdnb.pbrd.co/images/9O6dRPgRg0IZ.png?o=1" alt="coffeeSticker-1" />
            </div>
            <div className="Con-Body-ContactUS-Form-title">
              <h3>Contact US</h3>
            </div>
            <ul>
              <li>
                <input className="name" value={name} onChange={e => setName(e.target.value)} type="text" name="name" id="name" placeholder="NAME" />
                <input className="surname" value={surname} onChange={e => setSurname(e.target.value)} type="text" name="surname" id="surname" placeholder="SURNAME" />
              </li>
              <li>
                <input className="phone" value={phone} onChange={e => setPhone(e.target.value)} type="text" name="phone" id="phone" placeholder="PHONE"/>
                <input className="mail" value={mail} onChange={e => setMail(e.target.value)} type="text" name="mail" id="mail" placeholder="MAİL"/>
              </li>
              <li>
                <input className="description" value={description} onChange={e => setDescription(e.target.value)} type="text" name="description" id="description" placeholder="DESCRİPTİON"/>
              </li>
            </ul>
            <button className="Con-Body-ContactUS-Button" onClick={ContactMessage}>SEND MESSAGE</button>
            <div className="coffeeSticker-2">
              <img src="https://gcdnb.pbrd.co/images/6yxw8nS2525P.png?o=1" alt="coffeeSticker-2" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;


//-------------------------------------------------------------------------------------------------------------------------------
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
  // <div className="Con-Body-ContactUS-map">
  //           <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
  //             <GoogleMap mapContainerStyle={mapStyles} zoom={13}  center={defaultCenter}/>
  //           </LoadScript>
  //         </div>
//-------------------------------------------------------------------------------------------------------------------------------
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