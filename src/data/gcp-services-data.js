// thumb img import here 
import thumb_img_1 from "../../public/assets/img/lysa/google-cloud/compute-engine.webp";
import thumb_img_2 from "../../public/assets/img/lysa/google-cloud/cloud-storage.webp";
import thumb_img_3 from "../../public/assets/img/lysa/google-cloud/vpc.webp";
import thumb_img_4 from "../../public/assets/img/lysa/google-cloud/stackdriver-monitoring.webp";
import thumb_img_5 from "../../public/assets/img/lysa/google-cloud/cloud-logging.webp";
import thumb_img_6 from "../../public/assets/img/lysa/google-cloud/file-store.webp";
import thumb_img_7 from "../../public/assets/img/lysa/google-cloud/container-engine.webp";
import thumb_img_8 from "../../public/assets/img/lysa/google-cloud/cloud-sql.webp";
import thumb_img_9 from "../../public/assets/img/lysa/google-cloud/dms.webp";
import thumb_img_10 from "../../public/assets/img/lysa/google-cloud/persistent.webp";
import thumb_img_11 from "../../public/assets/img/lysa/google-cloud/dns.webp";
import thumb_img_12 from "../../public/assets/img/lysa/google-cloud/load-balancer.webp";
import thumb_img_13 from "../../public/assets/img/lysa/google-cloud/iam.webp";
// brand logo import here
import brand_logo_1 from "../../public/assets/img/project/project-inner-brand-1.png";
import brand_logo_2 from "../../public/assets/img/project/project-inner-brand-2.png";
import brand_logo_3 from "../../public/assets/img/project/project-inner-brand-3.png";


const gcpService_data = [
    {
        id: 1,
        thumb_img: thumb_img_1,
        brand_logo: brand_logo_1,
        job_title: "Compute Engine",
        title: <>Compute Engine</>,
        des: <>It is a virtual machine (VM) hosting service that allows users to create and run virtual machines on Google's infrastructure. Compute Engine provides a variety of VM options, including predefined machine types, custom machine types, and sole-tenant nodes. Users can choose from a range of operating systems and configure their virtual machines to suit their needs. Compute Engine also offers various features such as load balancing, autoscaling, and virtual private cloud (VPC) networking, which makes it easy to build and manage scalable, high-performance applications.</>,
        delay: ".5s",
    },
    {
        id: 2,
        thumb_img: thumb_img_2,
        brand_logo: brand_logo_2,
        job_title: "Cloud Storage",
        title: <>Cloud Storage</>,
        des: <>It is a highly scalable and durable object storage service that allows users to store and access data in the cloud using simple and cost-effective methods. With Cloud Storage, users can store and retrieve any type of data, including images, videos, audio files, documents, and backups. Data is stored in buckets, which can be located in different regions around the world, providing global access to data. Cloud Storage provides a range of features, including versioning, lifecycle management, access control, and encryption, which makes it easy to manage and secure data. It also offers a pay-as-you-go pricing model, allowing users to only pay for the storage they use, without any upfront costs or long-term commitments.</>,
        delay: ".5s",
    },
    {
        id: 3,
        thumb_img: thumb_img_3,
        brand_logo: brand_logo_3,
        job_title: "Cloud Virtual N/W",
        title: <>Cloud Virtual N/W</>,
        des: <>Cloud Virtual Network (VPC) is a networking service that allows users to create and manage their own virtual private network in the cloud. A virtual network is created by defining subnets, IP addresses, routes, and firewall rules. The virtual network provides a private, isolated environment in which GCP resources can communicate securely with each other. Additionally, GCP's VPC allows users to connect their on-premises network to their cloud environment using VPN (Virtual Private Network) or Dedicated Interconnect connections. Overall, GCP's VPC service provides a scalable and flexible networking solution for building and managing cloud-based applications.</>,
        delay: ".5s",
    },
    {
        id: 4,
        thumb_img: thumb_img_4,
        brand_logo: brand_logo_3,
        job_title: "Stackdriver Monitoring",
        title: <>Stackdriver Monitoring</>,
        des: <>Stackdriver Monitoring is a monitoring and logging service that helps users monitor their cloud infrastructure and applications. With Stackdriver Monitoring, users can collect, view, and analyze metrics, logs, and traces from their GCP resources, such as virtual machines, containers, and applications, in one centralized location. This service provides a comprehensive view of the health and performance of the user's GCP resources, allowing users to troubleshoot issues, identify trends, and optimize their resources. Stackdriver Monitoring offers preconfigured dashboards and alerting capabilities, allowing users to set up customized notifications based on metrics and logs thresholds. Users can also create custom dashboards, charts, and alerts using the monitoring data collected from their GCP resources.</>,
        delay: ".5s",
    },
    {
        id: 5,
        thumb_img: thumb_img_5,
        brand_logo: brand_logo_3,
        job_title: "Cloud Logging",
        title: <>Cloud Logging</>,
        des: <>Cloud Logging is a logging service provided by Google Cloud Platform (GCP) that allows users to collect, store, search, analyze, and alert on logs generated from their GCP resources, such as virtual machines, containers, and applications. With Cloud Logging, users can collect logs from various sources including Google Cloud Platform services, third-party applications, and custom applications running on GCP resources. These logs can be stored in a centralized location, and users can search and filter logs using advanced querying capabilities to find specific events and troubleshoot issues. Cloud Logging also provides real-time log ingestion and analysis, allowing users to create alerts and notifications based on log data.</>,
        delay: ".5s",
    },
    {
        id: 6,
        thumb_img: thumb_img_6,
        brand_logo: brand_logo_3,
        job_title: "File Store",
        title: <>File Store</>,
        des: <>Filestore is a managed file storage service that allows users to create and manage file shares that can be mounted as a network file system (NFS) or Server Message Block (SMB) file share. With Filestore, users can create file shares that can be used by applications running on GCP virtual machines or on-premises infrastructure connected to GCP via VPN or interconnect. Filestore allows users to scale up or down their file share capacity as needed, without requiring any modifications to the applications using the file share. Filestore also provides data replication, automatic backups, and snapshots for data protection and disaster recovery.</>,
        delay: ".5s",
    },
    {
        id: 7,
        thumb_img: thumb_img_7,
        brand_logo: brand_logo_3,
        job_title: "Container Engine",
        title: <>Container Engine</>,
        des: <>Google Kubernetes Engine (GKE) is a managed container orchestration service that allows users to deploy, manage, and scale containerized applications using Kubernetes. With GKE, users can create a cluster of virtual machines that are automatically provisioned, configured, and managed by GCP. Users can deploy and manage their containerized applications using Kubernetes, an open-source container orchestration platform that provides advanced features such as load balancing, auto-scaling, and self-healing capabilities. GKE also provides integrated monitoring and logging capabilities using Stackdriver, allowing users to monitor the health and performance of their applications and troubleshoot issues using real-time metrics, logs, and traces.</>,
        delay: ".5s",
    },
    {
        id: 8,
        thumb_img: thumb_img_8,
        brand_logo: brand_logo_3,
        job_title: "Cloud SQL",
        title: <>Cloud SQL</>,
        des: <>Cloud SQL is a fully managed relational database service that allows users to create, manage, and scale MySQL, PostgreSQL, and SQL Server databases in the cloud. With Cloud SQL, users can easily provision and manage their databases without the need for managing the underlying infrastructure. Cloud SQL provides high availability, automatic backups, and replication for data protection and disaster recovery. Cloud SQL supports popular database engines such as MySQL, PostgreSQL, and SQL Server, providing users with the flexibility to choose the database engine that best fits their needs. Users can also choose the machine type and storage size of their Cloud SQL instances, allowing them to scale their database performance and capacity based on their workload requirements.</>,
        delay: ".5s",
    },
    {
        id: 9,
        thumb_img: thumb_img_9,
        brand_logo: brand_logo_3,
        job_title: "DMS",
        title: <>DMS (Database Migration Service)</>,
        des: <>DMS is a fully managed service that allows users to migrate their databases to GCP with minimal downtime and disruption. With DMS, users can migrate their databases to GCP from various sources including on-premises data centers, other cloud providers, or existing GCP instances. DMS supports the migration of popular database engines such as MySQL, PostgreSQL, and SQL Server, and provides a flexible and scalable solution for migrating databases of all sizes. DMS provides a highly available and secure migration process, ensuring data consistency and minimal downtime during the migration process. DMS also provides a real-time monitoring dashboard and detailed logs, allowing users to track the status of their migration and troubleshoot any issues that may arise.</>,
        delay: ".5s",
    },
    {
        id: 10,
        thumb_img: thumb_img_10,
        brand_logo: brand_logo_3,
        job_title: "Persistent Disk",
        title: <>Persistent Disk</>,
        des: <>Persistent Disk is a block storage service that allows users to create and manage durable block storage volumes for their virtual machine instances. With Persistent Disk, users can create and attach durable block storage volumes to their virtual machine instances, providing reliable and persistent storage for their data. Persistent Disk volumes are replicated within a region and can be configured for high availability, providing protection against data loss in the event of hardware failure. Persistent Disk volumes support multiple machine types, allowing users to select the right performance and capacity for their workload requirements. Users can also resize their Persistent Disk volumes without having to detach or delete the volume, providing flexibility and scalability for their storage needs.</>,
        delay: ".5s",
    },
    {
        id: 11,
        thumb_img: thumb_img_11,
        brand_logo: brand_logo_3,
        job_title: "Cloud DNS",
        title: <>Cloud DNS</>,
        des: <>Cloud DNS is a scalable and reliable Domain Name System (DNS) service that allows users to manage their domain names and DNS records in the cloud. With Cloud DNS, users can create and manage DNS zones and records for their domain names, providing a scalable and reliable solution for DNS resolution. Cloud DNS provides low latency and high availability, allowing users to handle large query volumes with ease. Cloud DNS also provides advanced features such as DNSSEC (DNS Security Extensions) for enhanced security, DNS forwarding for routing DNS queries to other DNS resolvers, and DNS peering for private DNS resolution between VPC networks.</>,
        delay: ".5s",
    },
    {
        id: 12,
        thumb_img: thumb_img_12,
        brand_logo: brand_logo_3,
        job_title: "Load Balancer",
        title: <>Load Balancer</>,
        des: <>Allows users to distribute incoming network traffic across multiple instances of their applications or services, providing high availability, scalability, and performance. With Load Balancer, users can create and manage global, regional, or zonal load balancers for their applications or services, providing a scalable and reliable solution for handling incoming network traffic. Load Balancer supports various load balancing algorithms such as round-robin, least connections, and IP hash, allowing users to distribute traffic based on their specific requirements. Load Balancer also provides advanced features such as SSL/TLS termination for secure communication, HTTP(S) load balancing for web applications, TCP/UDP load balancing for non-HTTP services, and Cloud Armor for DDoS protection.</>,
        delay: ".5s",
    },
    {
        id: 13,
        thumb_img: thumb_img_13,
        brand_logo: brand_logo_3,
        job_title: "IAM",
        title: <>IAM (Identity and Access Management)</>,
        des: <>Allows users to manage access control and permissions for their cloud resources. With IAM, users can create and manage roles, permissions, and access policies for their GCP resources, providing a secure and flexible solution for managing access to their cloud-based applications and services. IAM allows users to assign roles to users, groups, or service accounts, providing granular control over who can access and perform actions on specific resources. IAM provides predefined roles for common GCP services, as well as the ability to create custom roles for specific resource types and actions. IAM also supports fine-grained permission control using resource-level permissions, allowing users to restrict access to specific resources and operations within a service.</>,
        delay: ".5s",
    },
]
export default gcpService_data