import Image from "next/image";
import React from "react";
import styles from "./SloutionArea.module.css";

const platform_content = {
  sub_title: "OVERVIEW OF OUR REMOTE DBA SUPPORT",
  title: "Solutions for faster ROI!",
};
const { sub_title, title, description } = platform_content;

const platform_data = [
  {
    id: 1,
    icon: "/assets/img/lysa/remoteDba/performance.webp",
    tag: "Performance",
    title: "Performance Enhancement",
    des: "At LYSA CONSULTANCY, we optimize the database and its queries to operate in a minimal time and enhance response times. We use highly recognized applications of database management systems or database optimization solutions to access your database system.",
  },
  {
    id: 2,
    icon: "/assets/img/lysa/remoteDba/backup-recovery.webp",
    tag: "Backup",
    title: "Backup and Recovery Tools",
    des: " We configure and use the best backup tools for taking backups and ensuring that backup is available in case of any disaster. We offer robust disaster recovery plans & remote dba support to provide best practices to minimize them.",
  },
  {
    id: 3,
    icon: "/assets/img/lysa/remoteDba/replication.webp",
    tag: "Replication",
    title: "Replication",
    des: "We will assist you in creating and maintaining multiple copies of your database. Our database management services enhances availability, as the slave database servers can be configured to supersede the master database server if unavailable.",
  },
  {
    id: 4,
    icon: "/assets/img/lysa/remoteDba/automation.webp",
    tag: "Automation",
    title: "Automation",
    des: "We offer the application of database management system that works automatically without any manual intervention. With database automation, you not only can reduce deployment errors, but increase reliability, and accelerate change implementation.",
  },
  {
    id: 5,
    icon: "/assets/img/lysa/remoteDba/daily-bau-support.webp",
    tag: "Support",
    title: "Daily BAU Support",
    des: " We offer Business as usual support including troubleshooting, patching, tuning, and changes. We manage all databases’ daily BAU operations and help you to concentrate on your dba business/products rather than spending time on BAU issues.",
  },
];

const SloutionArea = ({ style_carrer }) => {
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

export default SloutionArea;
