import React from "react";
import Image from "next/image";

const card_content = {
  title: <>Unlock <span>Remote DBA Benefits!</span></>,
  description: (
    <>
      Every day, LYSA's expert database administrators (DBAs) assist customers
      to win by ensuring mission-critical availability and enhancing application
      stability. Our globally distributed, best teams of accomplished database
      administrators provide 24/7 proactive, expert, comprehensive support for
      all remote database management activities.
    </>
  ),
};
const { title, description } = card_content;

const ResultArea = ({ style_service, spacing = "pt-80 pb-30" }) => {
  return (
    <>
      <div className={`tp-card-area tp-card-space ${spacing}`}>
        <div className="container">
          <div className="row">
            <div
              className="col-xl-6 col-lg-6 wow tpfadeLeft"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-card-thumb-wrapper p-relative">
                <div className={`tp-card`}>
                  <Image
                    src="/assets/img/card/card-bg.png"
                    alt="theme-pure"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="tp-card-title-box">
                <h3 className="tp-section-title-3 pb-15">{title}</h3>
                <p className="">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultArea;
