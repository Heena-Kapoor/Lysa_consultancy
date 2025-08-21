import styles from "./PerksofGoogle.module.css";

const steps = [
  {
    title: "Latest Functionalities",
    description:
      "The changes made on the platform are gradual and small, giving users time to adjust.",
    icon: "/assets/img/lysa/google-cloud/latest-functionality.webp",
  },
  {
    title: "Remote Access",
    description:
      "You will have complete access to the data, which can be accessed at any time, from anywhere.",
    icon: "/assets/img/lysa/google-cloud/remote-access.webp",
  },
  {
    title: "Smooth Collaboration",
    description:
      "By allowing simultaneous access and contribution, Google Cloud makes collaboration on a project easier.",
    icon: "/assets/img/lysa/google-cloud/smooth-collaboration.webp",
  },
  {
    title: "Unmatched Security",
    description:
      "Google is a name connected with security and its cloud counterpart is an appropriate instance for the same.",
    icon: "/assets/img/lysa/google-cloud/unmatched-security.webp",
  },
];

export default function PerksofGoogle() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>The Perks of Google Cloud Services!</h2>

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
