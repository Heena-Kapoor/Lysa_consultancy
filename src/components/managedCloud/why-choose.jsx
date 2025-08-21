import React from "react";
import styles from "./Whychoose.module.css";
import Image from "next/image";

const platform_content = {
  sub_title: "Why Choose LYSA CONSULTANCY’S?",
  title: "Managed Cloud Database Services",
};
const { sub_title, title, description } = platform_content;

const platform_data = [
  {
    id: 1,
    icon: "/assets/img/lysa/managed-cloud/robust-infrastructure.webp",
    tag: "Robust Infrastructure",
    title: "Robust Infrastructure",
    des: (
      <>
        With our 24X7 management and effective network infrastructure, we
        provide strong infrastructure support. Our specialists can scan,
        monitor, report, update patches, and integrate and align network
        operations with your key business goals.
      </>
    ),
  },
  {
    id: 2,
    icon: "/assets/img/lysa/managed-cloud/data-saftey-recovery.webp",
    tag: "Data Safety and Recovery",
    title: "Data Safety and Recovery",
    des: (
      <>
        Through timely backups and quicker recovery across all cloud
        applications and services, our managed cloud database services guarantee
        data security and early access. Business continuity is thus
        accomplished.
      </>
    ),
  },
  {
    id: 3,
    icon: "/assets/img/lysa/managed-cloud/quick-response-time.webp",
    tag: "Quick Response Time",
    title: "Quick Response Time",
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
    icon: "/assets/img/lysa/managed-cloud/interfacing.webp",
    tag: "Interfacing",
    title: "Interfacing",
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
    icon: "/assets/img/lysa/managed-cloud/planned-investment.webp",
    tag: "Planned Investment",
    title: "Planned Investment",
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

const WhyChoose = ({ style_carrer }) => {
  return (
    <div className={styles.solutionArea}>
      <div className="container">
        <div className="row">
          <div className="tp-platform-section-box">
            <h5
              className={`${
                style_carrer
                  ? "inner-section-subtitle"
                  : "tp-section-subtitle-4"
              }`}
              style={{ paddingBottom: "0px" }}
            >
              {sub_title}
            </h5>
            <h3
              className={`pb-10 ${
                style_carrer ? "tp-section-title" : "tp-section-title-4"
              }`}
            >
              {title}
            </h3>
          </div>
          <div className={styles.gridWrapper}>
            {platform_data.map((item) => (
              <div key={item.id}>
                <div className={styles.card}>
                  <div className={styles.icon}>
                    <Image
                      src={item.icon}
                      width={320}
                      height={400}
                      alt={item.title}
                    />
                  </div>
                  <h4 className={styles.title}>{item.title}</h4>
                  <p className={styles.description}>{item.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
