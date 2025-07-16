import React from "react";
import Image from "next/image";

const sales_content = {
  sub_title: <>GET RESULTS</>,
  title: (
    <>Discover the Benefit Of Our DevOps Consulting Services to Your Company!</>
  ),
  dub_title: <>GET RESULTS</>,
  description: (
    <>
      With our pool of DevOps consulting services, we assist businesses to get
      better quality software and accomplish higher efficiency. Our DevOps
      approach uses the best CI/CD processes, practices, and tools to expedite
      the software delivery process.
    </>
  ),
};
const { sub_title, title, dub_title, description } = sales_content;

const GetResult = ({ style_service }) => {
  return (
    <>
      <div className="tp-sales-area pt-70 pb-70">
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
                <p className="tp-title-anim">{description}</p>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 order-0 order-md-2 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="tp-sales-img-wrapper p-relative text-end">
                <Image
                  src="/assets/img/services/devops1.png"
                  alt="theme-pure"
                  width={550}
                  height={550}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetResult;
