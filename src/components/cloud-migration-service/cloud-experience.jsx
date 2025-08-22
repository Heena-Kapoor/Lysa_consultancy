import styles from "./CloudExperience.module.css";

const steps = [
  {
    title: "Security",
    description:
      "By centralizing the storage of your company's data and information, the cloud provides much more robust security.",
    icon: "/assets/img/lysa/cloudMigration/security.webp",
  },
  {
    title: "Scalability",
    description:
      "Your company will be better able to scale up or down based on your IT needs and business plan if you move to the cloud.",
    icon: "/assets/img/lysa/cloudMigration/scalability.webp",
  },
  {
    title: "Cost",
    description:
      "Moving to the cloud can assist to reduce operational costs while enhancing IT processes. You only pay for what you use.",
    icon: "/assets/img/lysa/cloudMigration/cost.webp",
  },
  {
    title: "Integration",
    description:
      "Moving to the cloud permits businesses to connect systems together seamlessly and enhance efficiency with all services.",
    icon: "/assets/img/lysa/cloudMigration/integration.webp",
  },
];

export default function CloudExperience() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* <p className={styles.subtitle}>
          Experience The Perks Of AWS Cloud Services!
        </p> */}
        <h2 className={styles.title}>
          Experience the perks of Cloud Migration Services!
        </h2>

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
