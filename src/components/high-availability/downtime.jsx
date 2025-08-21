import React from "react";
import Image from "next/image";

const card_content = {
  sub_title: (
    <>
      Prevent Downtime <span>With LYSA!</span>
    </>
  ),
  title: (
    <>
      Minimize <span> All Downtime</span>
    </>
  ),
  description: (
    <>
      Besides preventing downtime, we offer true availability solutions that
      include other crucial factors like data protection, data availability,
      cost, performance, and manageability. LYSA is exclusively positioned in
      the industry by providing customers with an absolute set of database
      high-availability solutions that coherently work together to assist in
      reducing both planned and unplanned downtime.
    </>
  ),
};
const { sub_title, title, description } = card_content;

const DowntimeArea = ({ style_service, spacing = "pt-80 pb-30" }) => {
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
                    src="/assets/img/lysa/high-available/minimize-all-downtime.webp"
                    alt="theme-pure"
                    width={800}
                    height={800}
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
                <h4
                  className="inner-section-subtitle"
                  style={{ lineHeight: "1" }}
                >
                  {sub_title}
                </h4>
                <h3
                  className="tp-section-title-3 pb-15"
                  style={{ lineHeight: "1" }}
                >
                  {title}
                </h3>
                <p style={{ lineHeight: "1.5" }}>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DowntimeArea;
