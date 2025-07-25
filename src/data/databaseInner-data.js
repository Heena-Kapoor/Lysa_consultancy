

// thumb img import here 
import thumb_img_1 from "../../public/assets/img/project/project-inner-1.jpg";
import thumb_img_2 from "../../public/assets/img/project/project-inner-2.jpg";
import thumb_img_3 from "../../public/assets/img/project/project-inner-3.jpg";
import thumb_img_4 from "../../public/assets/img/project/project-inner-5.jpg";
import thumb_img_5 from "../../public/assets/img/project/project-inner-4.jpg";
import thumb_img_6 from "../../public/assets/img/project/project-inner-6.jpg";
import thumb_img_7 from "../../public/assets/img/project/project-inner-7.jpg";
import thumb_img_8 from "../../public/assets/img/project/project-inner-8.jpg";
import thumb_img_9 from "../../public/assets/img/project/project-inner-9.jpg";
// brand logo import here
import brand_logo_1 from "../../public/assets/img/project/project-inner-brand-1.png";
import brand_logo_2 from "../../public/assets/img/project/project-inner-brand-2.png";
import brand_logo_3 from "../../public/assets/img/project/project-inner-brand-3.png";
import brand_logo_4 from "../../public/assets/img/project/project-inner-brand-5.png";
import brand_logo_5 from "../../public/assets/img/project/project-inner-brand-4.png";
import brand_logo_6 from "../../public/assets/img/project/project-inner-brand-6.png";
import brand_logo_7 from "../../public/assets/img/project/project-inner-brand-5.png";
import brand_logo_8 from "../../public/assets/img/project/project-inner-brand-4.png";
import brand_logo_9 from "../../public/assets/img/project/project-inner-brand-6.png";


const databseInner_data = [
    {
        id: 1,
        thumb_img: thumb_img_1,
        brand_logo: brand_logo_1,
        job_title: "IaC",
        title: <>Infrastructure as a code</>,
        des: <>IaC allows for the automation of the deployment, configuration, and management of infrastructure resources using code that can be versioned, tested, and deployed in a similar way as any other software application. With IaC, infrastructure is defined using a declarative language or a scripting language that specifies the desired state of the infrastructure. This allows for the creation of templates that can be reused across different environments and configurations, leading to consistent deployments and a reduction in human error. IaC also provides the ability to version control infrastructure configurations, which allows for collaboration, rollbacks, and better auditing of changes.</>,
        delay: ".5s",
    },
    {
        id: 2,
        thumb_img: thumb_img_2,
        brand_logo: brand_logo_2,
        job_title: "Terraform",
        title: <>Terraform</>,
        des: <>Terraform is an open-source infrastructure as code (IaC) tool that allows you to define, provision, and manage infrastructure resources across multiple cloud providers and on-premises environments using a single, declarative language. Terraform allows you to manage your entire database infrastructure as code, including the database itself, as well as any associated resources like network security groups, storage volumes, and virtual machines. By defining your infrastructure as code, you can ensure that your database environment is always in a known and reproducible state, making it easier to manage and troubleshoot issues. Overall, terraform can help you to manage your database infrastructure more efficiently, reduce the risk of errors, and improve the reliability and scalability of your database environment.</>,
        delay: ".5s",
    },
    {
        id: 3,
        thumb_img: thumb_img_3,
        brand_logo: brand_logo_3,
        job_title: "Database",
        title: <>Oracle Database</>,
        des: <>Oracle Database is a relational database management system (RDBMS) and is one of the most widely used enterprise-level database management systems in the world, with a reputation for being reliable, scalable, and secure. Oracle Database is designed to handle large amounts of data and support high-volume transactions in real time. It provides advanced features such as data replication, partitioning, and clustering, which can be used to achieve high availability and performance. Oracle Database supports various data types, including relational data, XML, spatial data, and multimedia data, and provides a comprehensive set of tools and features to manage and manipulate data. It also supports various programming languages such as SQL, PL/SQL, Java, Python, and many others.</>,
        delay: ".5s",
    },
    {
        id: 4,
        thumb_img: thumb_img_4,
        brand_logo: brand_logo_4,
        job_title: "Recovery Manager",
        title: <>Backup and Recovery</>,
        des: <>RMAN (Recovery Manager) is an Oracle utility used for backup and recovery operations. It allows Oracle database administrators to manage and automate the backup and recovery of their Oracle databases. RMAN provides an efficient and reliable way to perform backup and recovery operations. RMAN supports a variety of backup types, including full backups, incremental backups, and backups of specific database objects. It can back up data to disk, tape, or other media. RMAN also provides a set of tools for recovery operations, such as recovering from media failure or restoring lost or corrupted data. RMAN can perform complete database recovery, point-in-time recovery, and tablespace recovery.</>,
        delay: ".5s",
    },
    {
        id: 5,
        thumb_img: thumb_img_5,
        brand_logo: brand_logo_5,
        job_title: "Upgrade",
        title: <>Upgrade</>,
        des: <>Upgrading Oracle Database is necessary to take advantage of new features and capabilities, improve performance, and maintain supportability. Oracle provides several tools and resources to help with the upgrade process, including the Database Upgrade Assistant (DBUA), which automates many of the upgrade steps, and the Oracle Upgrade Companion, which provides guidance on the upgrade process and any prerequisites. Overall, upgrading Oracle Database is an important task that should be carefully planned and executed to ensure a smooth transition to the new version and to minimize any disruptions to business operations.</>,
        delay: ".5s",
    },
    {
        id: 6,
        thumb_img: thumb_img_6,
        brand_logo: brand_logo_6,
        job_title: "Migration",
        title: <>Migration</>,
        des: <>Oracle provides several tools and resources to help with the migration process, including the Oracle Data Pump utility, which can be used to export and import data between databases, and the Oracle Migration Workbench, which can be used to migrate databases from other database management systems to Oracle Database. Migrating an Oracle Database can be a complex process that requires careful planning and execution to ensure a successful transition to the new environment.</>,
        delay: ".5s",
    },
    {
        id: 7,
        thumb_img: thumb_img_7,
        brand_logo: brand_logo_7,
        job_title: "Performance Tunning",
        title: <>Performance Tunning</>,
        des: <>Performance tuning in Oracle Database refers to the process of optimizing the performance of an Oracle database system to ensure that it operates at maximum efficiency. This involves identifying and resolving performance bottlenecks, such as slow SQL queries, disk I/O issues, inefficient use of memory and CPU resources, and other factors that can affect the performance of the system. Overall, performance tuning is an important aspect of managing an Oracle database system, as it helps to ensure that the system is running efficiently and effectively.</>,
        delay: ".5s",
    },
    {
        id: 8,
        thumb_img: thumb_img_8,
        brand_logo: brand_logo_8,
        job_title: "Data Guard",
        title: <>Data Guard</>,
        des: <>It is a critical component of Oracle's high availability and disaster recovery strategy, and it is widely used by enterprises to protect their mission-critical data and applications. It enables creating and managing one or more standby databases, which can be used for failover or disaster recovery in case of a primary database failure. Data Guard provides real-time data protection and synchronization between the primary and standby databases, ensuring that the standby database is always up-to-date with the primary database. It also provides automatic failover and switchover capabilities, allowing the standby database to take over as the primary database in case of a planned or unplanned outage.</>,
        delay: ".5s",
    },
    {
        id: 9,
        thumb_img: thumb_img_9,
        brand_logo: brand_logo_9,
        job_title: "Design Wok, App Design",
        title: <>Real Application Cluster</>,
        des: <>It allows multiple instances to access a single database simultaneously. It provides high availability, scalability, and performance for mission-critical applications by distributing the workload across multiple servers in a cluster. In a RAC environment, multiple instances share access to a single database, providing a single image of the database to all users and applications. Each instance has its own set of memory structures and background processes, but they all access the same database files stored on a shared storage device. This allows for efficient use of hardware resources and provides automatic failover capabilities in case of hardware or software failures. RAC also provides load-balancing capabilities, allowing incoming requests to be distributed across the instances in the cluster, which can improve application performance and scalability.</>,
        delay: ".5s",
    },
    {
        id: 10,
        thumb_img: thumb_img_9,
        brand_logo: brand_logo_9,
        job_title: "Security",
        title: <>Security</>,
        des: <>Security service from Oracle Database refers to the measures taken to protect the database and the data it contains from unauthorized access, use, modification, or destruction. Oracle Database provides a comprehensive set of security features that can be used to protect the database at various levels, including Authentication, Authorization, Data Encryption, Auditing, and Network Security. The security services and tools help organizations protect their databases from external and internal threats and comply with industry regulations.</>,
        delay: ".5s",
    },
    {
        id: 11,
        thumb_img: thumb_img_9,
        brand_logo: brand_logo_9,
        job_title: "Automation",
        title: <>Automation</>,
        des: <>It refers to the use of automated processes and tools to manage and administer various tasks related to database management, such as monitoring, tuning, backup and recovery, and patching. Oracle Database provides a variety of automation features and tools that can help database administrators to streamline operations, reduce manual effort, and ensure consistent and reliable performance of their databases. Automation can help DBAs save time and reduce errors by automating routine tasks and providing proactive monitoring and tuning capabilities.</>,
        delay: ".5s",
    },
]
export default databseInner_data