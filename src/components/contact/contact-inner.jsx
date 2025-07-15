import Image from "next/image";
import Link from "next/link";
import React from "react";

import icon_1 from "@/assets/img/contact/contact-icon-sm-1.png";
import icon_2 from "@/assets/img/contact/contact-icon-sm-2.png";
import icon_3 from "@/assets/img/contact/contact-icon-sm-3.png";

const inner_content = {
  title: "Contact Us",
  description: "Have questions? Contact us and we’ll be happy to help!",
  contact_data: [
    {
      id: 1,
      icon: icon_1,
      title: "info@lysaconsultancy.com",
      link: "mailto:info@lysaconsultancy.com",
    },
    {
      id: 2,
      icon: icon_2,
      title: "+91-8595363651",
      link: "tel:+91-8595363651",
    },
    {
      id: 3,
      icon: icon_3,
      title:
        "LYSA Consultancy (OPC) Pvt. Ltd. F No. 16, PD6, Sec 6, Rohini, New Delhi, Delhi - 110085",
      link: "https://maps.app.goo.gl/Wd1dkxV84CNQuBbW6",
    },
  ],
};
const { title, description, contact_data } = inner_content;

const ContactInner = () => {
  return (
    <>
      <div className="contact-inner-area pt-40 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="contact-inner-title-sm-wrap text-center mb-10">
                <h4 className="contact-inner-title-sm">{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div className="contact-inner-wrapper">
            <div className="row gx-0">
              {contact_data.map((item, i) => (
                <div key={i} className="col-xl-4 col-lg-4">
                  <div className="contact-inner-item d-flex align-items-center justify-content-center">
                    <div className="contact-inner-img contact-img-1">
                      <Image src={item.icon} alt="theme-pure" />
                    </div>
                    <Link
                      href={`${item.link}`}
                      target="_blank"
                      className="contact-inner-link"
                    >
                      {item.title}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInner;
