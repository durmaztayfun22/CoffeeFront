import React from "react";

const About = () => {
  return (
    <>
      <div>
        <main>
          <h1 className="visually-hidden">Who We Are?</h1>

          <div className="px-4 py-5 my-5 text-center">
            <img
              className="d-block mx-auto mb-4"
              src="https://www.impactplus.com/hs-fs/hubfs/blog-image-uploads/best-about-us-pages.jpg?length=780&name=best-about-us-pages.jpg"
              alt=""
              width="748"
              height="490"
            />
            <h1 className="display-5 fw-bold text-body-emphasis">ABOUT US</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">
                ABOUT US

                Who We Are?

                As Example Company, we have been operating in the field of [Company's Field of Activity] since [Year of Establishment of the Company]. Our mission is defined as [Mission of the Company]. We aim to meet the needs of our customers in the best way by providing quality products and services to our customers.

                Our vision is defined as [Vision of the Company]. In this direction, we aim to be a pioneer in the sector by continuously developing innovative solutions and maintaining our customer-oriented approach.

                What We Do?

                Our company offers various products and services in [Company's Field of Activity]. These include the following:
                - [Product or Service 1]
                - [Product or Service 2]
                - [Product or Service 3]
                ...

                Our Team

                As Sample Company, we have an experienced and expert team. Each of our employees is specialised in their own field and works to provide the best service to our customers. By adopting a customer satisfaction and quality-oriented approach, we are signing successful projects.

                Contact Us

                Feel free to contact us! For any enquiry, suggestion or co-operation offer, you can contact us at the contact details below.

                Address: [Company Address]
                Telephone: [Company Phone Number]
                Email: [Company Email Address]

              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
                  Primary button
                </button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                  Secondary
                </button>
              </div>
            </div>
          </div>

          <div className="b-example-divider"></div>

          <div className="px-4 pt-5 my-5 text-center border-bottom">
            <h1 className="display-4 fw-bold text-body-emphasis">Example Event Management</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">
                Example Event Management is a company that has been operating in event organisation and management since [Year of Establishment of the Company]. Our mission is to exceed our customers' expectations by providing them with unforgettable and unique event experiences and to create impressive memories.

                Our vision is to be a leading event management company and to make a difference in the industry by providing creative, innovative and sustainable event solutions.

                What We Do?

                As Example Event Management, we offer services in a wide range of events:

                - Corporate Events: Planning and management of corporate events such as company meetings, seminars, conferences, award ceremonies, launches and workplace parties.

                - Special Events: Organisation and coordination of special events such as weddings, engagements, birthday parties, graduation ceremonies.

                - Cultural Events: Organisation and management of cultural events such as exhibitions, concerts, festivals, art events.

                - Social Responsibility Projects: Planning and implementation of activities aimed at making a difference in society.

                - Corporate Training Programmes: Design and management of corporate training programmes such as in-house trainings, team building events, leadership development seminars.
              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">
                  Primary button
                </button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                  Secondary
                </button>
              </div>
            </div>
            <div className="overflow-hidden" style={{ maxHeight: '30vh' }}>
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

          {/* Diğer bileşenler buraya gelir */}
        </main>
      </div>
    </>
  );
};

export default About;
