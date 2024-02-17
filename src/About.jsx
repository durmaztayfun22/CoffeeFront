import React from "react";
import './About.css'
const About = () => {
  return (
    <>
      <div>
        <main>
          <h1 className="visually-hidden">Who We Are?</h1>
          <div className="px-4 py-5 my-5 text-center">
            <img
              className="card-img"
              src="https://www.impactplus.com/hs-fs/hubfs/blog-image-uploads/best-about-us-pages.jpg?length=780&name=best-about-us-pages.jpg"
              alt=""
              width="748"
              height="490"
            />
            <div className="my-frame">
              <div className="row">
                <div className="col-md-6">
                  <div className="card-header">
                    <h1 className="card-title">ABOUT US</h1>
                  </div>
                  <div className="card-body">
                    <div className="card-text">
                      <p>ABOUT US</p>
                      <p>Who We Are?</p>
                      <p>
                        <span>As Example Company, we have been operating in the field of [Company's Field of Activity] since [Year of Establishment of the Company]. Our mission is defined as [Mission of the Company]. We aim to meet the needs of our customers in the best way by providing quality products and services to our customers.</span>
                      </p>
                      <p>
                        <span>Our vision is defined as [Vision of the Company]. In this direction, we aim to be a pioneer in the sector by continuously developing innovative solutions and maintaining our customer-oriented approach.</span>
                      </p>
                      <p>What We Do?</p>
                      <p>
                        <span>Our company offers various products and services in [Company's Field of Activity]. These include the following:</span>
                      </p>
                      <ul>
                        <li>
                          <span>[Product or Service 1]</span>
                        </li>
                        <li>
                          <span>[Product or Service 2]</span>
                        </li>
                        <li>
                          <span>[Product or Service 3]</span>
                        </li>
                      </ul>
                      <p>Our Team</p>
                      <p>
                        <span>As Sample Company, we have an experienced and expert team. Each of our employees is specialized in their own field and works to provide the best service to our customers. By adopting a customer satisfaction and quality-oriented approach, we are signing successful projects.</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card-header">
                    <h1 className="card-title">Example Event Management</h1>
                  </div>
                  <div className="card-body">
                    <div className="card-text">
                      <p>Example Event Management is a company that has been operating in event organisation and management since [Year of Establishment of the Company]. Our mission is to exceed our customers' expectations by providing them with unforgettable and unique event experiences and to create impressive memories.</p>
                      <p>Our vision is to be a leading event management company and to make a difference in the industry by providing creative, innovative and sustainable event solutions.</p>
                      <p>What We Do?</p>
                      <p>As Example Event Management, we offer services in a wide range of events:</p>
                      <ul>
                        <li>
                          <span>Corporate Events: Planning and management of corporate events such as company meetings, seminars, conferences, award ceremonies, launches and workplace parties.</span>
                        </li>
                        <li>
                          <span>Special Events: Organisation and coordination of special events such as weddings, engagements, birthday parties, graduation ceremonies.</span>
                        </li>
                        <li>
                          <span>Cultural Events: Organisation and management of cultural events such as exhibitions, concerts, festivals, art events.</span>
                        </li>
                        <li>
                          <span>Social Responsibility Projects: Planning and implementation of activities aimed at making a difference in society.</span>
                        </li>
                        <li>
                          <span>Corporate Training Programmes: Design and management of corporate training programmes such as in-house trainings, team building events, leadership development seminars.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 pt-5 my-5 text-center border-bottom"> 
            <div className="overflow-hidden" style={{ maxHeight: '70vh' }}>
              <div className="container px-5">
                <img
                  src="https://vanityfair.blob.core.windows.net/vanityfair19831001thumbnails/Spreads/0x420/42.jpg"
                  className="img-fluid border rounded-3 shadow-lg mb-4"
                  alt="Example image"
                  width="700"
                  height="500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default About;
