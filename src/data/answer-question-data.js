const answer_question_data = [
  {
    id: 1,
    question: "How can I create my first database?",
    answer: <>Before creating your first database, you must first create a virtual cloud network . A private, virtual network that you set up in data centers is known as a VPC. It resembles a conventional network, with firewall rules and certain kinds of communication gateways that you can choose to use. Using the console, CLI, REST APIs, and SDKs, you can then create a database in a database system.</>,
    accordion_id: "headingOne",
    collapsed: "collapsed",
    data_bs_target: "#collapseOne",
    aria_controls: "collapseOne",
    actice: "",
  },
  {
    id: 2,
    question: "What is a database system?",
    answer: <>A database system is a virtual machine that has Oracle Database software deployed and set up with several cores, database versions, and software editions that the user chooses.</>,
    accordion_id: "headingTwo",
    collapsed: "",
    data_bs_target: "#collapseTwo",
    aria_expanded: true,
    aria_controls: "collapseTwo",
    show: true,
    actice: "",

  },
  {
    id: 3,
    question: "Is upgrade time dependent on the size of the database?",
    answer: <>Yes, a database's upgrade time varies depending on its size and the number of changes that need to be applied. The changes only involve, say, updating existing functions and adding new ones, an upgrade can be completed in a matter of minutes. If the changes incorporate updating the database’s internal format, upgrading a large database, such as 100s GB to TBs, can take hours. All data must be read, modified, and safely written back to the disk by the upgrade code.</>,
    accordion_id: "headingThree",
    collapsed: "collapsed",
    data_bs_target: "#collapseThree",
    aria_controls: "collapseThree",
    actice: "",

  },
  {
    id: 4,
    question: "Can we estimate the time to upgrade the database?",
    answer: <>Depending on the size of the database, the server's speed, and the difference between the previous and current versions, the database upgrade can take a long time—from a few minutes to several hours. We recommend running the update after hours when nobody needs access to the database because update times vary from database to database.<br />To get the most accurate estimate of the amount of time that will be needed to upgrade the data, install a standalone environment on a test server, run the update with a copy of the live data, and then perform the update on your live server.</>,
    accordion_id: "headingFour",
    collapsed: "collapsed",
    data_bs_target: "#collapseFour",
    aria_controls: "collapseFour",
    actice: "",

  },
  {
    id: 5,
    question: "How much do Cloud Databases cost?",
    answer: <>Any Cloud Servers, Cloud Sites, or Cloud Load Balancers, or used to access your Cloud Database instances will incur standard charges.</>,
    accordion_id: "headingFive",
    collapsed: "collapsed",
    data_bs_target: "#collapseFive",
    aria_controls: "collapseFive",
    actice: "",

  },
  {
    id: 6,
    question: "What Cloud Databases operations are supported at different service levels?",
    answer: (
      <>
        <p>Service models must evolve with the public cloud. LYSA offers on-demand access to a dedicated team of highly skilled specialists who integrate seamlessly with your team to drive cloud outcomes through close collaboration and continuous evolution of your environment.</p>

        <p>With LYSA, you get direct access to a pod of multi-disciplinary cloud experts who work as an extension of your own team.</p>

        <p><strong>No tickets. No SLAs. Only results.</strong></p>

        <ul>
          <li>Engagement Manager</li>
          <li>Lead Cloud Architect</li>
          <li>Cloud Architect</li>
          <li>Senior Cloud Engineers</li>
          <li>Cloud Engineers</li>
        </ul>
      </>
    ),
    accordion_id: "headingSix",
    collapsed: "collapsed",
    data_bs_target: "#collapseSix",
    aria_controls: "collapseSix",
    actice: "",

  },
  {
    id: 7,
    question: "What are Cloud Databases?",
    answer: <>An IT system's organized and managed collection of data on a public, private, or hybrid cloud computing platform is known as a cloud database. In terms of overall design and functionality aspect, a cloud database is identical to an on-premises database that runs on an organization's own data center systems.</>,
    accordion_id: "headingSeven",
    collapsed: "collapsed",
    data_bs_target: "#collapseSeven",
    aria_controls: "collapseSeven",
    actice: "",
  },
  {
    id: 8,
    question: "What are the benefits of using Cloud Databases?",
    answer: <>Customers who require a high-performance, relational database-specific, purpose-built infrastructure workload-specific engineers can get everything they need from Cloud Databases. Cloud Databases are a fully-managed service for customers who prefer to concentrate on developing their applications rather than managing the underlying infrastructure. The service gives you full control over your database, as well as high availability, on-demand backups and restores, scheduled backups, redundant storage, integrated monitoring, replication, and scalability.</>,
    accordion_id: "headingEight",
    collapsed: "collapsed",
    data_bs_target: "#collapseEight",
    aria_controls: "collapseEight",
    actice: "",
  },
  {
    id: 9,
    question: "Can I provision Cloud Databases if I don't have Cloud Servers or Cloud Load Balancers on my account?",
    answer: <>Yes, High Availability (HA) instance groups enable connections to both internal and external networks via a IP or hostname on the data center's internal service network (ServiceNet). On ServiceNet, only network interfaces are used to provision single instances and replica sets. To connect remotely to one of these Cloud Database instances, the connection must be proxied by either a Cloud Server or a Cloud Load Balancer.</>,
    accordion_id: "headingNine",
    collapsed: "collapsed",
    data_bs_target: "#collapseNine",
    aria_controls: "collapseNine",
    actice: "",
  },
  {
    id: 10,
    question: "What kind of storage solution do Cloud Databases offer?",
    answer: <>Every Cloud Databases instance appears with an attached storage volume. On a shared Internet small computer system interface (iSCSI) storage area network (SAN), storage volumes are automatically provisioned, resulting in improved performance, availability, scalability, and manageability. Applications with great input/output (I/O) insistence are performance-optimized and data is secured through both local and network RAID-10. (The acronym ``RAID`` refers to a redundant array of independent disks.) Furthermore, network RAID offers synchronous replication of volumes with automatic failover of SAN nodes and load balancing across accessible storage clusters.</>,
    accordion_id: "headingTen",
    collapsed: "collapsed",
    data_bs_target: "#collapseTen",
    aria_controls: "collapseTen",
    actice: "",
  },
  {
    id: 11,
    question: "How is performing better than running a MySQL database on a Cloud Server?",
    answer: <>All Cloud Databases instance is optimized for performance. Cloud Databases utilize container-based virtualization, which eradicates the performance bottlenecks that relate to conventional hardware virtualization and empowers your database to run at nearly bare-metal speeds. In addition, Cloud Databases facilitate faster access to your data by utilizing high-speed networking and dedicated SAN storage.</>,
    accordion_id: "headingEleven",
    collapsed: "collapsed",
    data_bs_target: "#collapseEleven",
    aria_controls: "collapseEleven",
    actice: "",
  },
  {
    id: 12,
    question: "Can Cloud Databases be used with dedicated servers?",
    answer: <>No, customers who have Cloud account credentials are the only ones who can use Cloud Databases. Managed Operations Service Level or dedicated customers with LYSA (those customers who also have a Cloud account) have access but can utilize the service only with their LYSA Cloud product resources.</>,
    accordion_id: "headingTwelve",
    collapsed: "collapsed",
    data_bs_target: "#collapseTwelve",
    aria_controls: "collapseTwelve",
    actice: "",
  },
  {
    id: 13,
    question: "Is Cloud Databases available in the Cloud Control Panel?",
    answer: (
      <>
        <p>To access Cloud Databases, follow these steps:</p>
        <ol>
          <li>Log in to the Cloud Control Panel</li>
          <li>In the top navigation bar, click <strong>Select a Product</strong> -&gt; <strong>LYSA Cloud</strong></li>
          <li>Select <strong>Databases</strong></li>
        </ol>

        <p>
          Connecting to a Cloud Database instance remotely requires:
        </p>
        <ul>
          <li>A high availability instance group with a public IP, <strong>or</strong></li>
          <li>
            A single or replica instance connected to:
            <ul>
              <li>A Cloud Load Balancer, or</li>
              <li>A Cloud Server to proxy the connection</li>
            </ul>
          </li>
        </ul>
      </>
    ),
    accordion_id: "headingThirteen",
    collapsed: "collapsed",
    data_bs_target: "#collapseThirteen",
    aria_controls: "collapseThirteen",
    actice: "",
  },
  {
    id: 14,
    question: "Can I write to my database instance during a backup?",
    answer: <>The storage engine that you use for tables determines the behavior of your instance during a backup. Write access to your database instance is not suspended if you only use InnoDB. Nevertheless, if you have MyISAM tables, those databases are write-locked throughout the backup process.</>,
    accordion_id: "headingFourteen",
    collapsed: "collapsed",
    data_bs_target: "#collapseFourteen",
    aria_controls: "collapseFourteen",
    actice: "",
  },
  {
    id: 15,
    question: "What is AWS Database Migration Service?",
    answer: <>The managed migration and replication service known as AWS Database Migration Service (AWS DMS) assists you in securely and quickly moving your analytics workloads and databases to AWS. During the migration, the source database remains fully operational, minimizing downtime for database-dependent applications. Your data can be evaluated, converted, and migrated to and from the most popular commercial and open-source databases using the AWS Database Migration Service.</>,
    accordion_id: "headingFifteen",
    collapsed: "collapsed",
    data_bs_target: "#collapseFifteen",
    aria_controls: "collapseFifteen",
    actice: "",
  },
  {
    id: 16,
    question: "How do I get started with AWS Database Migration Service?",
    answer: <>AWS Database Migration Service is easy to use and quick to get started with. Most tasks involving data replication can be set up in less than ten minutes.<br />Enter the Start Migration wizard by going to the AWS Database Migration Service section of the AWS Management Console. Cite your source and target endpoints, choose an existing replication instance, or create a new one, and accept the default schema mapping rules or determine your own transformations. After you have completed the wizard, the replication of the data will begin immediately.</>,
    accordion_id: "headingSixteen",
    collapsed: "collapsed",
    data_bs_target: "#collapseSixteen",
    aria_controls: "collapseSixteen",
    actice: "",
  },
  {
    id: 17,
    question: "How much does AWS DMS cost?",
    answer: <>To migrate your databases and analytics workloads, AWS DMS is a reasonable, cost-effective option. Only the replication instances and any additional log storage are billed to you. Data transfer is free. The DMS pricing page provides comprehensive pricing information.</>,
    accordion_id: "headingSeventeen",
    collapsed: "collapsed",
    data_bs_target: "#collapseSeventeen",
    aria_controls: "collapseSeventeen",
    actice: "",
  },
  {
    id: 18,
    question: "How much does AWS DMS Schema Conversion cost?",
    answer: <>As part of DMS, AWS DMS Schema Conversion can be used for free. Pay only for the storage used.</>,
    accordion_id: "headingEighteen",
    collapsed: "collapsed",
    data_bs_target: "#collapseEighteen",
    aria_controls: "collapseEighteen",
    actice: "",
  },
  {
    id: 19,
    question: "What are the database migration steps when using AWS Database Migration Service?",
    answer: <>During a typical simple database migration, you will create a target database, migrate the database schema, set up the data replication process, initiate the full load and a subsequent change data capture and apply, and wind up with a switchover of your production environment to the new database when the target database catches up to the source database.</>,
    accordion_id: "headingNinteen",
    collapsed: "collapsed",
    data_bs_target: "#collapseNinteen",
    aria_controls: "collapseNinteen",
    actice: "",
  },
  {
    id: 20,
    question: "Can I monitor the progress of a database migration task?",
    answer: <>Yes. The AWS Management Console displays a variety of metrics for the AWS Database Migration Service. It offers an end-to-end view of the data replication process, along with diagnostic and performance data for each point in the replication pipeline.<br />AWS Database Migration Service also accommodates other AWS services like CloudTrail and CloudWatch Logs. Additionally, you can make use of the AWS Command Line Interface (AWS CLI) and the AWS Database Migration Service API to integrate with the tools you already have or create custom monitoring tools to meet your specific requirements.</>,
    accordion_id: "headingTwenty",
    collapsed: "collapsed",
    data_bs_target: "#collapseTwenty",
    aria_controls: "collapseTwenty",
    actice: "",
  },
  {
    id: 21,
    question: "How do I integrate AWS Database Migration Service with other applications?",
    answer: <>Using the provisioning API provided by AWS Database Migration Service, you can either script the creation of replication tasks at predetermined times throughout the day or create them directly from your development environment. Developers and database administrators can automate the creation, management, restart, and termination of replication tasks using the service API and CLI.</>,
    accordion_id: "headingTwentyOne",
    collapsed: "collapsed",
    data_bs_target: "#collapseTwentyOne",
    aria_controls: "collapseTwentyOne",
    actice: "",
  },
];
export default answer_question_data;
