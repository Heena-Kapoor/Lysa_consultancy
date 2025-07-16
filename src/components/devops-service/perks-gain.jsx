import styles from "./PerksGain.module.css";

const steps = [
  {
    title: "Speed",
    description:
      "With the promise of faster efficiency in the development process and the power of DevOps, you can innovate for your customers faster. Drive business outcomes and remain adaptable to market changes.",
    icon: "/assets/img/feature/fea-circle-5-1.png",
  },
  {
    title: "Improved Collaboration",
    description:
      "DevOps cultural model gives you more control of accountability and ownership with improved collaboration in your business operations. Teams can intently work with combined workflows.",
    icon: "/assets/img/feature/fea-circle-5-1.png",
  },
  {
    title: "Faster Delivery",
    description:
      "DevOps will enhance your product development efficiency, allowing you to quickly deliver new features and bug fixes to customers and gain a competitive advantage over those who have yet to adopt DevOps.",
    icon: "/assets/img/feature/fea-circle-5-1.png",
  },
  {
    title: "Security",
    description:
      "One of the key DevOps solutions is retaining control and preserving compliance. It leverages automated compliance policies and configuration management methods to promote a better ecosystem.",
    icon: "/assets/img/feature/fea-circle-5-1.png",
  },
];

export default function PerksGain() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>The Perks You Gain With DevOps!</h2>

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
