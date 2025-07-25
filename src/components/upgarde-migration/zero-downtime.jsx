import React from "react";
import Image from "next/image";

const sales_content = {
  sub_title: <>Get Smart Migration With LYSA!</>,
  title: <>Migrate your data seamlessly with <span>Minimal Or Zero Downtime!</span></>,
  dub_title: <>Get smart Migration with LYSA!</>,
  description: (
    <>
      Leveraging unique tools and methods, our migration experts migrate all
      database content swiftly and effectively. We take delight in our extensive
      migration experience with non-Oracle and Oracle migrations. We assist our
      clients in migrating their databases with minimal or Zero downtime.
    </>
  ),
};
const { sub_title, title, dub_title, description } = sales_content;

const ZeroDownTime = ({ style_service }) => {
  return (
    <>
      <div className="tp-sales-area pt-40 pb-70">
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
                <h3 className="tp-section-title-3 pb-15 ">
                  {style_service ? dub_title : title}
                </h3>
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

export default ZeroDownTime;
