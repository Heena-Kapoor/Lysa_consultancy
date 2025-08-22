// images import  
import img_1 from "../../public/assets/img/lysa/home/database-icon.png";
import img_2 from "../../public/assets/img/lysa/home/cloud-icon.png";
import img_3 from "../../public/assets/img/lysa/home/devops-icon.png";
import img_4 from "../../public/assets/img/lysa/home/contact-icon.png";

const service_data = [
    // for home 01 
    {
        id: 1,
        icon: img_1,
        img: img_1,
        title: "Database Services",
        description: <>Reliable Remote DBA support, seamless upgrades, and cloud-managed databases.
            Ensure high availability and performance for your critical systems.</>,
        delay: ".4s",
        link: "#"
    },
    {
        id: 2,
        icon: img_2,
        img: img_2,
        title: "Cloud Services",
        description: <>Harness the power of AWS and Google Cloud with our expert solutions. Seamlessly migrate your infrastructure to the cloud with confidence.</>,
        delay: ".6s",
        link: "#"
    },
    {
        id: 3,
        icon: img_3,
        img: img_3,
        title: "DevOps Services",
        description: <>Optimize your operations with expert DevOps consulting and automation. Leverage cutting-edge technologies to accelerate delivery and innovation.</>,
        delay: ".7s",
        link: "/devops-consulting-services"
    },
    {
        id: 4,
        icon: img_4,
        img: img_4,
        title: "Contact Us",
        description: <>We are there: from the design stage through installation, implementation, to troubleshooting.</>,
        delay: ".8s",
        link: "/contact"
    },
]
export default service_data