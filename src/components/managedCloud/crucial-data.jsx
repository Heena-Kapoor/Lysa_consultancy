import React from "react";
import Image from "next/image";

const sales_content = {
  sub_title: <>Your Crucial Data. Your Assured Cloud.</>,
  title: <>Leave Your Cloud Infrastructure Management To The Specialists!</>,
  dub_title: <>Your Crucial Data. Your Assured Cloud.</>,
  description: (
    <>
      <p>
        {" "}
        Our cloud computing specialists and decades of experience facilitate
        seamless cloud infrastructure setup and management. Your crucial
        cloud-based systems are often safe, available, and highly performant
        systems with our 24/7 Managed Cloud Database Services.
      </p>
      <p>
        Our Managed Cloud Database Services take the hassle out of managing your
        cloud environment whilst providing you the advantage of a strong pool of
        cloud infra specialists, enterprise-grade management tools, and reliable
        support you can count on.
      </p>
    </>
  ),
};
const { sub_title, title, dub_title, description } = sales_content;

const CrucialData = ({ style_service }) => {
  return (
    <>
      <div className="tp-sales-area pt-30 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-6 order-1 order-md-1 wow tpfadeLeft"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-sales-section-box pb-20">
                <h4
                  className="inner-section-subtitle"
                  style={{ lineHeight: "1" }}
                >
                  {sub_title}
                </h4>
                <h4 className="tp-section-title-2 pb-15 ">
                  {style_service ? dub_title : title}
                </h4>
                {description}
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 order-0 order-md-2 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="tp-sales-img-wrapper p-relative text-end">
                <Image
                  src="/assets/img/card/card-bg.png"
                  alt="theme-pure"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrucialData;
