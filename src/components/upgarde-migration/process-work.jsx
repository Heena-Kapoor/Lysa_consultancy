import styles from './DatabaseMigrationProcess.module.css';

const steps = [
  {
    title: "It begins with a plan",
    description:
      "We will examine and comprehend your current architecture, gaps, business needs, and future growth requirements.",
    icon: "/assets/img/lysa/upgration-migration/begins-plan.webp",
  },
  {
    title: "Implementation makes it absolute",
    description:
      "Then it is time to move your current workloads efficiently while minimizing downtime and risk.",
    icon: "/assets/img/lysa/upgration-migration/implementation.webp",
  },
  {
    title: "Custom design makes it yours",
    description:
      "Our next step is to design your target architecture and create your custom migration roadmap.",
    icon: "/assets/img/lysa/upgration-migration/custome-design.webp",
  },
  {
    title: "Post-Implementation support",
    description:
      "You will be worry-free with our 30-day guarantee of monitoring and support for your new environment.",
    icon: "/assets/img/lysa/upgration-migration/support.webp",
  },
];

export default function DatabaseMigrationProcess() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.subtitle}>How Database Migration Works?</p>
        <h2 className={styles.title}>Our Process!</h2>

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
