import React from "react";
import styles from "./Whychoose.module.css";

const platform_data = [
  {
    id: 1,
    count: "01",
    title: "Robust Infrastructure",
    sub_title: "Robust Infrastructure",
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
    count: "02",
    title: "Data Safety and Recovery",
    sub_title: "Data Safety and Recovery",
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

const WhyChoose = ({ style_carrer }) => {
  return (
    <div
      className={`fix tp-platform-area ${
        style_carrer
          ? "tp-platform-inner pb-50"
          : "border-tb blue-bg pt-50 pb-50"
      } p-relative z-index`}
      style={{ backgroundColor: "#eaf4fc" }}
    >
      <div className="container">
        <div className={styles.whychooseSection}>
          <div className={styles.whychooseHeader}>
            <p className={styles.subtitle}>Why Choose LYSA CONSULTANCY’S?</p>
            <h2 className={styles.title}>Managed Cloud Database Services</h2>
          </div>

          <div className={styles.whychooseGrid}>
            <div className={styles.card} style={{ gridArea: "item2" }}>
              <img
                src="/assets/img/security/security-1.png"
                alt="icon"
                className={styles.icon}
              />
              <h4>{platform_data[1].title}</h4>
              <p>{platform_data[1].des}</p>
            </div>

            <div className={styles.card} style={{ gridArea: "item4" }}>
              <img
                src="/assets/img/security/security-1.png"
                alt="icon"
                className={styles.icon}
              />
              <h4>{platform_data[3].title}</h4>
              <p>{platform_data[3].des}</p>
            </div>

            <div className={styles.card} style={{ gridArea: "item1" }}>
              <img
                src="/assets/img/security/security-1.png"
                alt="icon"
                className={styles.icon}
              />
              <h4>{platform_data[0].title}</h4>
              <p>{platform_data[0].des}</p>
            </div>

            <div className={styles.card} style={{ gridArea: "item3" }}>
              <img
                src="/assets/img/security/security-1.png"
                alt="icon"
                className={styles.icon}
              />
              <h4>{platform_data[2].title}</h4>
              <p>{platform_data[2].des}</p>
            </div>

            <div className={styles.card} style={{ gridArea: "item5" }}>
              <img
                src="/assets/img/security/security-1.png"
                alt="icon"
                className={styles.icon}
              />
              <h4>{platform_data[4].title}</h4>
              <p>{platform_data[4].des}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
