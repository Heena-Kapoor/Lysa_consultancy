import styles from "./WhychooseLysa.module.css";

const steps = [
  {
    title: "Complex Delivery Experience",
    description:
      "We have extensive experience assisting organizations streamline the release cycles of various applications, from legacy to agile and beyond. Our specialists make sure that the best CI/CD practices are used for more excellent quality and efficiently maintainable code, and quicker product release time to market.",
    icon: "/assets/img/security/security-1.png",
  },
  {
    title: "Best Security Integration",
    description:
      "At LYSA, we consider compliance and security at the initial stages of the project with the goal that any potential deformity is eliminated early on and you get decreased costs and quicker product release time to market. Through DevSecOps as a service, our engineers integrate security into the product's core while offering proven methods to monitor outcomes.",
    icon: "/assets/img/security/security-1.png",
  },
  {
    title: "Proficient And Talented Engineers",
    description:
      "Our DevOps engineers have experience and expertise in all the advanced technologies, providing you with excellence at each stage of your DevOps transformation journey. Our specialists design products with a focus on process orientation, agile culture, and excellence in delivery.",
    icon: "/assets/img/security/security-1.png",
  },
  {
    title: "Dedicated DevOps team",
    description:
      "Each client receives a dedicated team of DevOps specialists who address their concerns with an individual approach. Using the best DevOps practices and a thorough understanding of your project's requirements, our team achieves the desired outcomes for your business.",
    icon: "/assets/img/security/security-1.png",
  },
];

export default function WhychooseLysa() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.subtitle}>
          Why Choose LYSA as Your DevOps Services Company?
        </p>
        <h2 className={styles.title}>
          Increase Business Agility, Reduce Costs, and Enhance Efficiency
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
