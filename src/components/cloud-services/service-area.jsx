import serviceArea_data from "@/data/servicearea-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceArea = ({ style_integraton }) => {
  return (
    <>
      <div
        className={`tp-feature-area ${
          style_integraton ? "pt-20" : "grey-bg-3 pt-20"
        }`}
      >
        <div className="container">
          <div className="row gx-0 tp-feature-five-wrapper-main">
            {serviceArea_data.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                <div className="tp-feature-five-wrapper">
                  <div
                    className={`tp-feature-five-item tp-feature-five-item-${item.color} text-center z-index`}
                  >
                    <div className="tp-feature-five-icon p-relative">
                      <Image src={item.img} alt="theme-pure" />
                      <div
                        className={`tp-feature-five-shape-color tp-feature-five-shape-color-${item.color}`}
                      ></div>
                    </div>
                    <div className="tp-feature-five-content">
                      <h4 className="tp-feature-five-title-sm">{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                    <div className="tp-feature-five-btn">
                      <Link className="tp-btn-purple" href={item.link}>
                        {item.button}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
