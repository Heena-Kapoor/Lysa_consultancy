import Image from "next/image";
import React, { useEffect, useState } from "react";

const platform_content = {
  sub_title: "OVERVIEW OF OUR REMOTE DBA SUPPORT",
  title: "Solutions For Faster ROI!",
};
const { sub_title, title, description } = platform_content;

// plat form data
const platform_data = [
  {
    id: 1,
    cls: "one",
    count: "01",
    title: "Performance Enhancement",
    sub_title: "Performance Enhancement",
    des: (
      <>
        {" "}
        At LYSA CONSULTANCY, we optimize the database and its queries to operate
        in a minimal time and enhance response times. We use highly recognized
        applications of database management systems or database optimization
        solutions to access your database system
      </>
    ),
  },
  {
    id: 2,
    cls: "two",
    count: "02",
    title: "Backup and Recovery Tools",
    sub_title: "Backup and Recovery Tools",
    des: (
      <>
        {" "}
        We configure and use the best backup tools for taking backups and
        ensuring that backup is available in case of any disaster. We offer
        robust disaster recovery plans & remote dba support to provide best
        practices to minimize them.
      </>
    ),
  },
  {
    id: 3,
    cls: "three",
    count: "03",
    title: "Replication",
    sub_title: "Replication",
    des: (
      <>
        We will assist you in creating and maintaining multiple copies of your
        database. Our database management services enhances availability, as the
        slave database servers can be configured to supersede the master
        database server if unavailable.
      </>
    ),
  },
  {
    id: 4,
    cls: "four",
    count: "04",
    title: "Automation",
    sub_title: "Automation",
    des: (
      <>
        We offer the application of database management system that works
        automatically without any manual intervention. With database automation,
        you not only can reduce deployment errors, but increase reliability, and
        accelerate change implementation.
      </>
    ),
  },
  {
    id: 5,
    cls: "five",
    count: "05",
    title: "Daily BAU Support",
    sub_title: "Daily BAU Support",
    des: (
      <>
        We offer Business as usual support including troubleshooting, patching,
        tuning, and changes. We manage all databases’ daily BAU operations and
        help you to concentrate on your dba business/products rather than
        spending time on BAU issues.
      </>
    ),
  },
];

const SloutionArea = ({ style_carrer }) => {
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

export default SloutionArea;
