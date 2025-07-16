import React from "react";
import Image from "next/image";
import Link from "next/link";

const cta_content = {
  img_box: [
    { id: 1, img: "/assets/img/plan/plan-1.png", cls: "1" },
    { id: 2, img: "/assets/img/plan/plan-2.png", cls: "2 d-none d-sm-block" },
    { id: 3, img: "/assets/img/plan/plan-3.png", cls: "3 d-none d-sm-block" },
    { id: 4, img: "/assets/img/plan/plan-4.png", cls: "4" },
    { id: 5, img: "/assets/img/plan/plan-5.png", cls: "5" },
    { id: 6, img: "/assets/img/plan/plan-6.png", cls: "6" },
  ],
  sub_title: "HOW DOES LYSA MAKE A DIFFERENCE?",
  title: (
    <>
      <span>Streamline, Fill Gaps, Automate, And Innovate!</span>
    </>
  ),
  des: (
    <>
      Our DevOps experts have the guidance, technology, and tools you need for
      consulting services. Utilizing cloud-native technologies and services, we
      at LYSA integrate the development and operational teams for better
      outcomes.
    </>
  ),
  feature_list: [
    {
      title: "Streamline, Automate",
      description:
        "LYSA assists you in integrating your development and operations teams with cloud-native services and technologies. So quickly adapt to dynamic markets through reduced complexity and reusable workloads.",
    },
    {
      title: "Leverage Cutting-Edge Technologies",
      description:
        "Automate processes and take advantage of scalability through DevOps consulting services. Eliminate manual processes that become repetitive and laborious as infrastructure grows rapidly.",
    },
  ],
};
const { img_box, sub_title, title, des, feature_list } = cta_content;

const DiffrenceArea = () => {
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
                      height={200}
                      width={200}
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
                <span className="tp-section-subtitle-5 text-black">
                  {sub_title}
                </span>
                <h3 className="tp-section-title-5 text-black pb-15">{title}</h3>
                <p className=" mb-0 pb-30">{des}</p>
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

export default DiffrenceArea;
