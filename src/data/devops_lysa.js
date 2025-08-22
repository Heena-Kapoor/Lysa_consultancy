

// thumb img import here 
import thumb_img_1 from "../../public/assets/img/lysa/devOps/jekins.webp";
import thumb_img_2 from "../../public/assets/img/lysa/devOps/dockers.webp";
import thumb_img_3 from "../../public/assets/img/lysa/devOps/kubernets.webp";
// brand logo import here
import brand_logo_1 from "../../public/assets/img/project/project-inner-brand-1.png";
import brand_logo_2 from "../../public/assets/img/project/project-inner-brand-2.png";
import brand_logo_3 from "../../public/assets/img/project/project-inner-brand-3.png";


const devopsLysa_data = [
    {
        id: 1,
        thumb_img: thumb_img_1,
        brand_logo: brand_logo_1,
        job_title: "Jenkins",
        title: <>Jenkins</>,
        des: <>Jenkins is an open-source automation server that is widely used in the DevOps community for continuous integration and continuous delivery (CI/CD). Jenkins is a highly extensible tool that can be used to automate a wide range of tasks related to building, testing, and deploying software applications. With Jenkins, developers can automate the build and testing of their code changes, ensuring that new features are thoroughly tested and that bugs are caught early in the development process. Jenkins can also be used to automate the deployment of software changes to production environments, reducing the risk of errors and downtime.</>,
        delay: ".5s",
    },
    {
        id: 2,
        thumb_img: thumb_img_2,
        brand_logo: brand_logo_2,
        job_title: "Docker",
        title: <>Docker</>,
        des: <>Docker is a platform that allows developers to easily create, deploy, and run applications in containers. These containers are isolated, lightweight, and portable, making it easier to move applications between different environments and ensure consistency across deployments. Overall, Docker is a powerful tool for building and deploying applications in AWS, allowing developers to easily create and manage containerized applications in the cloud.It significantly reduces the time required to ship code from development to production, enhancing the overall agility of software delivery.With Docker improved resource utilization in cloud environments like AWS.</>,
        delay: ".5s",
    },
    {
        id: 3,
        thumb_img: thumb_img_3,
        brand_logo: brand_logo_3,
        job_title: "Kubernetes",
        title: <>Kubernetes</>,
        des: <>Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. In AWS, Kubernetes can be used through Amazon Elastic Kubernetes Service (EKS), which is a fully managed Kubernetes service that makes it easy to run Kubernetes on AWS without having to manage the underlying infrastructure. EKS provides a highly available and scalable platform for deploying containerized applications. It supports standard Kubernetes APIs, making it easy to deploy and manage Kubernetes clusters using the same tools and workflows that are used for on-premises deployments.</>,
        delay: ".5s",
    },
]
export default devopsLysa_data