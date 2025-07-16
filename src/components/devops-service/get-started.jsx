import React from "react";

const company_content = {
  sub_title: "Get Started Today",
  title: <>Start Your DevOps Journeywith LYSA!</>,
  info_1: (
    <>
      With our Enterprise DevOps consulting services, we assist large and medium
      enterprises with accomplishing higher efficiency in Development and
      Operations, a better quality of software builds with early identification
      of emerging issues and faster time to market letting the code be in a
      releasable state eternally. Developing a DevOps strategy that will enable
      you to accomplish superior coordination and deliver an excellent user
      experience.
    </>
  ),
};
const { sub_title, title, info_1 } = company_content;

const Getstarted = () => {
  return (
    <>
      <div className="ab-company-area pt-20 pb-30">
        <div className="container">
          <div className="row pb-20">
            <div className="col-xl-6">
              <div className="ab-company-section-box">
                <h4 className="inner-section-subtitle">{sub_title}</h4>
                <h2>{title}</h2>
              </div>
            </div>
            <div
              className="col-xl-6 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="ab-company-right">
                <div className="ab-company-section-text">
                  <p className="pb-10">{info_1}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Getstarted;
