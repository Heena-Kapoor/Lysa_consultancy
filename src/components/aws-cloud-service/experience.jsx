import styles from "./Experience.module.css";

const steps = [
  {
    title: "Unparalleled Security",
    description:
      "AWS uses and enforces industry-leading compliance measures enabling its user base with the security required to deliver confidence and unrivaled trust.",
    icon: "/assets/img/feature/fea-circle-5-1.png",
  },
  {
    title: "Peak Performance",
    description:
      "Scaling is quick and simple, leveraging a combination of software, workload, infrastructure components, and configuration. Enjoy near 100% SLA in application deployment reliability.",
    icon: "/assets/img/feature/fea-circle-5-1.png",
  },
  {
    title: "An Industry Leader",
    description:
      "Capitalize on Amazon’s global computing infrastructure for highly reliable, scalable, low-cost, and secure database, application, and BI management.",
    icon: "/assets/img/feature/fea-circle-5-1.png",
  },
  {
    title: "Choose Your Option",
    description:
      "Whether deploying applications under AWS RDS for basic system administration services, or EC2 cloud, feel sure knowing both provide support for all famous database platforms, applications, and BI.",
    icon: "/assets/img/feature/fea-circle-5-1.png",
  },
];

export default function Experience() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.subtitle}>
          Experience The Perks Of AWS Cloud Services!
        </p>
        <h2 className={styles.title}>Amazing AWS support from Lysa!</h2>

        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.card}>
              <img src={step.icon} alt="icon" className={styles.icon} />
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
