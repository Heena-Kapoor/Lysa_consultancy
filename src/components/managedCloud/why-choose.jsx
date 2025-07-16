import Image from "next/image";
import React, { useEffect, useState } from "react";

const platform_content = {
  sub_title: "Why Choose LYSA CONSULTANCY’S?",
  title: "Managed Cloud Database Services",
};
const { sub_title, title, description } = platform_content;

// plat form data
const platform_data = [
  {
    id: 1,
    cls: "one",
    count: "01",
    title: "Robust Infrastructure",
    sub_title: "Robust Infrastructure",
    des: (
      <>
        {" "}
        With our 24X7 management and effective network infrastructure, we
        provide strong infrastructure support. Our specialists can scan,
        monitor, report, update patches, and integrate and align network
        operations with your key business goals.
      </>
    ),
  },
  {
    id: 2,
    cls: "two",
    count: "02",
    title: "Data Safety and Recovery",
    sub_title: "Data Safety and Recovery",
    des: (
      <>
        {" "}
        Through timely backups and quicker recovery across all cloud
        applications and services, our managed cloud database services guarantee
        data security and early access. Business continuity is thus
        accomplished.
      </>
    ),
  },
  {
    id: 3,
    cls: "three",
    count: "03",
    title: "Quick Response Time",
    sub_title: "Quick Response Time",
    des: (
      <>
        Taking care of a problem locally is not the same as doing so remotely
        over the network. As a leading cloud-managed service provider, we take
        responsibility and assure a quick response in case of any issue saving
        you valuable effort and time.
      </>
    ),
  },
  {
    id: 4,
    cls: "four",
    count: "04",
    title: "Interfacing",
    sub_title: "Interfacing",
    des: (
      <>
        In case of any critical issues, cloud MSPs are at the forefront of
        dealing with cloud vendors. We take responsibility for resolving all
        your critical issues and suggest different ways to automate critical
        processes and control costs.
      </>
    ),
  },
  {
    id: 5,
    cls: "five",
    count: "05",
    title: "Planned Investment",
    sub_title: "Planned Investment",
    des: (
      <>
        LYSA CONSULTANCY provides you with robust support to plan your
        disbursement on IT services. Set up a monthly service plan contingent
        upon how much your company spends on IT and make the most of your
        investment in IT support.
      </>
    ),
  },
];

const Whychoose = ({ style_carrer }) => {
  const [active, setActive] = useState(3);
  const handleToggle = (id) => {
    setActive(id);
  };
  const handleAll = (id) => {
    setActive("all");
  };

  function mediaSize() {
    /* Set the matchMedia */
    if (window.matchMedia("(max-width: 768px)").matches) {
      setActive("all");
    } else {
      setActive(3);
    }
  }

  useEffect(() => {
    /* Call the function */
    mediaSize();
    /* Attach the function to the resize event listener */
    window.addEventListener("resize", mediaSize, false);
  }, []);

  return (
    <>
      <div
        className={`fix tp-platform-area ${
          style_carrer
            ? "tp-platform-inner pt-50 pb-50"
            : "border-tb blue-bg pt-50 pb-50"
        } p-relative z-index`}
      >
        {style_carrer ? null : (
          <div className="tp-platform-bg-shape">
            <Image
              src="/assets/img/platform/p-bg.png"
              width={220}
              height={220}
              alt=""
            />
          </div>
        )}
        <div className="container">
          <div
            className={`row align-items-end ${
              style_carrer ? "mb-60" : "mb-40"
            } `}
          >
            <div
              className={`col-xl-7 col-lg-6 ${
                style_carrer && "wow tpfadeLeft"
              }`}
              data-wow-duration={style_carrer && ".9s"}
              data-wow-delay={style_carrer && ".3s"}
            >
              <div className="tp-platform-section-box">
                <h5
                  className={`${
                    style_carrer
                      ? "inner-section-subtitle"
                      : "tp-section-subtitle-4"
                  } pb-10`}
                >
                  {sub_title}
                </h5>
                <h3
                  className={`${
                    style_carrer ? "tp-section-title" : "tp-section-title-4"
                  }`}
                >
                  {title}
                </h3>
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-6  wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-platform-text">
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-2 d-none d-xl-block">
              <div className="tp-platform-img-box">
                <Image
                  src="/assets/img/payment/platform-1.png"
                  width={220}
                  height={220}
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-10 col-lg-12">
              <div className="row-custom-wrapper">
                <div className="row-custom">
                  {platform_data.map((item, i) => (
                    <div
                      key={i}
                      className={`col-custom ${
                        active === "all"
                          ? "active"
                          : item.id === active
                          ? "active"
                          : ""
                      }`}
                      onClick={
                        active !== "all"
                          ? () => handleToggle(item.id)
                          : () => handleAll()
                      }
                    >
                      <div className="tp-panel-item">
                        <div className="tp-panel-content">
                          <span>{item.count}.</span>
                          <h4 className={`tp-panel-title child-${item.cls}`}>
                            {" "}
                            {item.sub_title}
                          </h4>
                        </div>
                      </div>
                      <div className="tp-panel-item-2">
                        <div className="tp-panel-content-2">
                          <span>{item.count}.</span>
                          <h4 className="tp-panel-title-2">{item.title}</h4>
                          <p>{item.des}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whychoose;
