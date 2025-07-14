'use client';
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import CtaArea from "../contact/cta-area";
import BreadcrumbNew from "@/common/breadcrumbs/breadcrumbNew";
import FaqArea from "../homes/home-2/faq-area";

const FAQ = () => {
    return (
        <>
            <HeaderSix />
            <BreadcrumbNew title={"Help & FAQs"} />
            <FaqArea style_service={true} />
            <CtaArea />
            <FooterFive style_contact={true} style_team={true} />
        </>
    );
};

export default FAQ;
