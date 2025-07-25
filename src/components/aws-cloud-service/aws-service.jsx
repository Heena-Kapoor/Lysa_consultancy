import React from "react";
import Image from "next/image";

const cta_content = {
  img_box: [
    { id: 1, img: "/assets/img/plan/plan-1.png", cls: "1" },
    { id: 2, img: "/assets/img/plan/plan-2.png", cls: "2 d-none d-sm-block" },
    { id: 3, img: "/assets/img/plan/plan-3.png", cls: "3 d-none d-sm-block" },
    { id: 4, img: "/assets/img/plan/plan-4.png", cls: "4" },
    { id: 5, img: "/assets/img/plan/plan-5.png", cls: "5" },
    { id: 6, img: "/assets/img/plan/plan-6.png", cls: "6" },
  ],
  title: (
    <>
      <span>AWS Services from Lysa Technology</span>
    </>
  ),
  feature_list: [
    {
      title: "Total solution for BI, Applications & Databases!",
      description:
        "LYSA has access to an extensive range of resources and training to deploy, run and manage applications in the AWS cloud Services. From developing your cloud strategies and initial migration analysis to production cutovers and optimization, our certified AWS specialists will guide you through the entire cloud migration lifecycle.",
    },
    {
      title: "Seamlessly manage workloads on AWS cloud!",
      description:
        "LYSA provides tailored and scalable technology solutions to meet their client's specific needs. They have a wide range of cloud capabilities and expertise in AWS database migration services, allowing them to create custom strategies that are tailored to their client's business objectives.",
    },
  ],
};
const { img_box, sub_title, title, des, feature_list } = cta_content;

const AWSservice = () => {
  return (
    <>
      <div className="tp-plan-area pt-60 pb-20">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-7 col-lg-7 wow tpfadeLeft"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="tp-plan-img-box p-relative">
                {img_box.map((item, i) => (
                  <div key={i} className={`tp-plan-img-${item.cls}`}>
                    <Image
                      src={item.img}
                      alt="theme-pure"
                      height={250}
                      width={250}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-5 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-plan-section-box">
                <div className="tp-plan-section-icon pb-30">
                  <Image
                    src="/assets/img/cta/cta-title-icon-1.png"
                    alt="theme-pure"
                    height={50}
                    width={50}
                  />
                </div>
                {/* <span className="tp-section-subtitle-5 text-black">
                  {sub_title}
                </span> */}
                <h3 className="tp-section-title-5 text-black pb-5">{title}</h3>
                {/* <p className=" mb-0 pb-30">{des}</p> */}
                <div className="tp-plan-feature">
                  <ul>
                    {feature_list.map((item, i) => (
                      <li key={i} style={{ marginBottom: "1.5rem" }}>
                        <h4>
                          <i
                            className="far fa-check"
                            style={{ marginRight: "8px" }}
                          ></i>
                          {item.title}
                        </h4>
                        <p
                          style={{
                            marginLeft: "24px",
                            marginTop: "4px",
                            color: "#555",
                          }}
                        >
                          {item.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "2rem" }}
                >
                  <Image
                    src="/assets/img/services/signature.png"
                    alt="theme-pure"
                    height={100}
                    width={100}
                  />
                  <h4 className="text-lg font-semibold">Shuchi Aggarwal</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AWSservice;
