import React from "react";

const company_content = {
  sub_title: "Explore Our Resources",
  title: <>Accelerate Your Database Upgrade And Migration!</>,
  info_1: (
    <>
      Explore our latest and greatest database upgrade and migration resources
      and success stories to learn more about how LYSA CONSULTANCY can assist
      you in unlocking the full power of the database upgrade and migration.
    </>
  ),
};
const { sub_title, title, info_1 } = company_content;

const Getstarted = () => {
  return (
    <>
      <div className="ab-company-area pt-70 pb-30">
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
