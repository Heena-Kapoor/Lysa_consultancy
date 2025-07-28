import React from "react";
import Image from "next/image";
import AnswerQuestion from "@/common/answer-question";

import img from "@/assets/img/faq/faq-1.png";

const faq_content = {
  sub_title: "Overview Of Our Services!",
  title: <>Database High Availability Solutions!</>,
};
const { sub_title, title } = faq_content;

const overview_data = [
  {
    id: 1,
    question: "Oracle RAC?",
    answer: (
      <>
        With Oracle RAC One Node, get higher availability by preventing the database server as a single point of failure.
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
    question: "Oracle Multitenant?",
    answer: (
      <>
      An Oracle database can function as a multitenant container database (CDB) with the help of multitenant architecture.
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
    question: "Recovery Manager?",
    answer: (
      <>
        LYSA offers Recovery Manager (RMAN), an Oracle utility that can restore, backup, and recover files.
      </>
    ),
    accordion_id: "headingThree",
    collapsed: "collapsed",
    data_bs_target: "#collapseThree",
    aria_controls: "collapseThree",
    actice: "",
  },
];

const Overview = ({ style_service }) => {
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
                >
                  <Image src={img} alt="" />
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <AnswerQuestion data={overview_data} custom={true}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
