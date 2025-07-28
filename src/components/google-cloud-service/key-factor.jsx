import React from "react";
import Image from "next/image";
import AnswerQuestion from "@/common/answer-question";
import img from "@/assets/img/faq/faq-1.png";

const faq_content = {
  sub_title: "4 Key Factors!",
  title: <>Why Partner with LYSA for Google Cloud?</>,
};
const { sub_title, title } = faq_content;

const overview_data = [
  {
    id: 1,
    question: "Managed Services?",
    answer: (
      <>
        Take advantage of a range of Google solutions, including application
        modernization, data analytics, and DevOps to run a more scalable,
        cost-efficient business.
      </>
    ),
    accordion_id: "headingOne",
    collapsed: "collapsed",
    data_bs_target: "#collapseOne",
    aria_controls: "collapseOne",
    actice: "",
  },
  {
    id: 2,
    question: "Planning and Migration?",
    answer: (
      <>
        Utilizing our skilled planning, refactoring, and deployment services,
        you can migrate your systems with confidence.
      </>
    ),
    accordion_id: "headingTwo",
    collapsed: "",
    data_bs_target: "#collapseTwo",
    aria_expanded: true,
    aria_controls: "collapseTwo",
    show: true,
    actice: "",
  },
  {
    id: 3,
    question: "Data and Analytics?",
    answer: (
      <>
        Leverage end-to-end data and analytics solutions to make well-informed
        decisions for business processes, growth, and innovation.
      </>
    ),
    accordion_id: "headingThree",
    collapsed: "collapsed",
    data_bs_target: "#collapseThree",
    aria_controls: "collapseThree",
    actice: "",
  },
  {
    id: 4,
    question: "One-Stop-Shop?",
    answer: (
      <>
        A comprehensive range of Google Cloud consulting services to assist you
        in achieving your cloud vision on Google Cloud
      </>
    ),
    accordion_id: "headingFour",
    collapsed: "collapsed",
    data_bs_target: "#collapseFour",
    aria_controls: "collapseFour",
    actice: "",
  },
  {
    id: 5,
    question: "Security and Compliance?",
    answer: (
      <>
        Ensure your cloud infrastructure meets industry security standards and
        compliance regulations with our advanced security solutions and
        governance support.
      </>
    ),
    accordion_id: "headingFive",
    collapsed: "collapsed",
    data_bs_target: "#collapseFive",
    aria_controls: "collapseFive",
    actice: "",
  },
];

const KeyFactor = ({ style_service }) => {
  return (
    <>
      <div className="tp-faq-area pt-50 fix">
        <div className="container">
          <div className="row">
            <div
              className={`col-xl-6 col-lg-6 ${
                style_service && "wow tpfadeLeft"
              }`}
              data-wow-duration={style_service && ".9s"}
              data-wow-delay={style_service && ".4s"}
            >
              <div className="tp-faq-left-wrapper p-relative">
                <div
                  className={`tp-faq-section-box ${
                    style_service && "tp-inner-font tp-inner-faq-box"
                  } pb-20`}
                >
                  <h4
                    className={`${
                      style_service
                        ? "inner-section-subtitle"
                        : "tp-section-subtitle-2"
                    }`}
                  >
                    {sub_title}
                  </h4>
                  <h3
                    className={`${
                      style_service ? "tp-section-title" : "tp-section-title-lg"
                    }`}
                  >
                    {title}
                  </h3>
                </div>
                <div
                  className="tp-faq-img"
                  data-parallax='{"x": -50, "smoothness": 30}'
                  style={{ bottom: "-64%" }}
                >
                  <Image src={img} alt="" />
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <p>
                LYSA ensures a promising move to the Google Cloud platform with
                its sufficient resources, personnel, and time.
              </p>
              <AnswerQuestion data={overview_data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyFactor;
