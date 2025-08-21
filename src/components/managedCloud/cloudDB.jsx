import styles from './CloudDB.module.css';

const steps = [
  {
    title: "Know the score with Client Management",
    description:
      "You will have your own customer portal, regular reviews and reporting, a dedicated account manager, and round-the-clock support.",
    icon: "/assets/img/lysa/managed-cloud/client-management.webp",
  },
  {
    title: "Stay on top with Alerting And Monitoring",
    description:
      "You can feel secure as we monitor your apps and infrastructure, with incident response, log data mining, and proactive alerts.",
    icon: "/assets/img/lysa/managed-cloud/alerting-monitoring.webp",
  },
  {
    title: "Tune up with Performance And Cost Optimization",
    description:
      "We will look after your app performance and cloud usage, your FinOps, and capacity planning. You look after your business.",
    icon: "/assets/img/lysa/managed-cloud/performance-cost-optimization.webp",
  },
  {
    title: "Prevail with Tools & Managed Services Automation",
    description:
      "From automated provisioning, identity access management (IAM), and asset management to release and service delivery management, container and configuration management, and many more, we’re on it.",
    icon: "/assets/img/lysa/managed-cloud/managed-service-automation.webp",
  },
];

export default function CloudDB() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.subtitle}>Overview Of Our Services</p>
        <h2 className={styles.title}>Get Best Cloud Database Services!</h2>

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
