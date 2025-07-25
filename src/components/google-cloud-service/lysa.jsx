import styles from "./LysaProcess.module.css";

const LysaProcess = () => {
  const steps = [
    {
      title: "Doing an Assessment",
      description:
        "Before you start, you will need to evaluate your current landscape, including third-party interfaces, integrations, and legacy products.",
      icon: "/assets/img/security/security-1.png",
    },
    {
      title: "Comprehending your Migration Approaches",
      description:
        "Modification? Lift and shift? Rip and replace? Each workload will need a different migration strategy.",
      icon: "/assets/img/security/security-1.png",
    },
    {
      title: "Comprehending your Workloads",
      description: "Determine the kinds of workloads that need to be migrated.",
      icon: "/assets/img/security/security-1.png",
    },
    {
      title: "Planning your Journey",
      description: "Create a roadmap, including timelines, costs, and risks.",
      icon: "/assets/img/security/security-1.png",
    },
  ];

  return (
    <section className={styles.container}>
      <h4 className={styles.subtitle}>
        SUCCESSFUL MIGRATION TO THE GOOGLE CLOUD SERVER
      </h4>
      <h2 className={styles.title}>LYSA Process!</h2>
      <div className={styles.columns}>
        <div className={styles.column} style={{ marginTop: "50px" }}>
          <div className={styles.card}>
            <img
              src={steps[0].icon}
              alt={steps[0].title}
              className={styles.icon}
            />
            <div>
              <h3 className={styles.cardTitle}>{steps[0].title}</h3>
              <p className={styles.cardDescription}>{steps[0].description}</p>
            </div>
          </div>
          <div className={styles.card}>
            <img
              src={steps[2].icon}
              alt={steps[2].title}
              className={styles.icon}
            />
            <div>
              <h3 className={styles.cardTitle}>{steps[2].title}</h3>
              <p className={styles.cardDescription}>{steps[2].description}</p>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.card}>
            <img
              src={steps[1].icon}
              alt={steps[1].title}
              className={styles.icon}
            />
            <div>
              <h3 className={styles.cardTitle}>{steps[1].title}</h3>
              <p className={styles.cardDescription}>{steps[1].description}</p>
            </div>
          </div>
          <div className={styles.card}>
            <img
              src={steps[3].icon}
              alt={steps[3].title}
              className={styles.icon}
            />
            <div>
              <h3 className={styles.cardTitle}>{steps[3].title}</h3>
              <p className={styles.cardDescription}>{steps[3].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LysaProcess;
