import React from "react";
import VideoPlayer from "./VideoPlayer";
import './About.css';

const About = () => {
  return(
    <>
      <main>
        <div className="About">
          <div className="Content-1">
            <div className="Content-1-img">
              <img src="../images/coffee.jpg" alt="coffeeee" className="Contentİmg-1" />
            </div>
            <div className="Content-subject-All">
              <div className="Content-title">
                <h1 className="Content-title-h1">choose the perfect coffee</h1>
              </div>
              <div className="Content-subject">
                <div className="Content-subject-1">
                  <p>For a perfect coffee experience, it is important to choose coffee beans. Freshly ground coffee beans offer a richer drink in terms of aroma and flavour.</p>
                </div>
                <div className="Content-subject-2">
                  <p>When deciding on the type of coffee, take care to choose the one that best suits your taste buds. Do you want light and fruity flavours, or do you prefer a more intense and chocolatey coffee?</p>
                </div>
                <div className="Content-subject-3">
                  <p>The origin of the coffee is also important. Coffees from certain regions have different flavour profiles. Coffees from Brazil often have nutty and caramel notes, while coffees from Ethiopia can be more floral and fruity.</p>
                </div>
                <div className="Content-subject-4">
                  <p>Finally, make sure to use quality equipment when preparing your coffee. A quality coffee machine or brewing method will help you maximise the taste of your coffee.</p>
                </div>
                <div className="Content-subject-5">
                  <p>Remember, freshly ground beans, the type of coffee that suits your taste, the origin of the coffee and quality equipment are important factors for a perfect coffee experience.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Content-video">
            <h2 className="Content-video-title">Coffee Brewing Methods: French Press vs Pour Over vs AeroPress and more!</h2>
            <div className="video">
              <VideoPlayer />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default About;
//
