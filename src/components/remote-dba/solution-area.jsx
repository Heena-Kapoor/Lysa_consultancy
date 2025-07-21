import Image from "next/image";
import React from "react";
import styles from "./SloutionArea.module.css";

const platform_content = {
  sub_title: "OVERVIEW OF OUR REMOTE DBA SUPPORT",
  title: "Solutions For Faster ROI!",
};
const { sub_title, title, description } = platform_content;

const platform_data = [
  {
    id: 1,
    icon: "/assets/img/blog/image.jpg",
    tag: "Performance",
    title: "Performance Enhancement",
    des: "At LYSA CONSULTANCY, we optimize the database and its queries to operate in minimal time and enhance response times.",
  },
  {
    id: 2,
    icon: "/assets/img/blog/image.jpg",
    tag: "Backup",
    title: "Backup and Recovery Tools",
    des: "We configure and use the best backup tools and offer disaster recovery plans & remote DBA support.",
  },
  {
    id: 3,
    icon: "/assets/img/blog/image.jpg",
    tag: "Replication",
    title: "Replication",
    des: "We assist in creating and maintaining multiple copies of your DB to ensure high availability.",
  },
  {
    id: 4,
    icon: "/assets/img/blog/image.jpg",
    tag: "Automation",
    title: "Automation",
    des: "Database automation to reduce deployment errors, increase reliability, and accelerate change implementation.",
  },
  {
    id: 5,
    icon: "/assets/img/blog/image.jpg",
    tag: "Support",
    title: "Daily BAU Support",
    des: "We offer BAU support including troubleshooting, patching, tuning, and daily database operations.",
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "20px",
            }}
          >
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
