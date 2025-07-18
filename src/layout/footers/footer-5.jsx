import { CopyRight } from "@/common/social-links";
import EmailIcon from "@/svg/email";
import EmailFour from "@/svg/email-4";
import PhoneFour from "@/svg/phone-4";
import RightArrow from "@/svg/right-arrow";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import shape_img_1 from "@/assets/img/footer/footer-inner-1.png";
import shape_img_2 from "@/assets/img/footer/footer-inner-2.png";

const footer_content = {
  info: "We put a strong emphasis on developing solutions that not only meet the needs of the present but also assist our clients to be better prepared for the future.",
  phone: "+91-8595363651",
  email: "info@lysaconsultancy.com",

  footer_lisks: [
    {
      id: 1,
      cls_1: "col-xl-3 col-lg-3",
      cls_2: "footer-col-3-2",
      title: "Company",
      delay: ".7s",
      links: [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/about" },
        { name: "Devops", link: "/devops-consulting-services" },
        { name: "Cloud Services", link: "/cloud-services" },
        { name: "Database Services", link: "/database-services" },
        { name: "FAQs", link: "/faq" },
        { name: "Privacy Policy", link: "/privacy-policy" },
        { name: "Contact Us", link: "/contact" },
      ],
    },
    {
      id: 2,
      cls_1: "col-xl-2 col-lg-2",
      cls_2: "footer-col-3-3",
      title: "Solutions",
      delay: ".9s",
      links: [
        { name: "Upgrade & Migration", link: "/upgrade-and-migration" },
        { name: "Remote Dba support", link: "/remote-dba-support" },
        { name: "Managed Cloud", link: "/managed-cloud-database-service" },
        {
          name: "High Availability",
          link: "/high-availability-database-service",
        },
        { name: "Cloud Migration", link: "/cloud-migration-service" },
        { name: "Google Cloud", link: "/google-cloud-service" },
        { name: "AWS Cloud", link: "/aws-cloud-service" },
        { name: "Devops Consulting", link: "/devops-consulting-services" },
      ],
    },
  ],
};
const { info, phone, email, footer_lisks } = footer_content;

const FooterFive = ({ style_contact, bg_style = true, style_team }) => {
  return (
    <>
      <div
        className={`tp-footer__pl-pr ${style_contact && "pt-80"} ${
          bg_style ? "grey-bg-2" : ""
        }`}
      >
        <div
          className={`tp-footer__area ${
            style_contact && "p-relative"
          } tp-footer__tp-border-bottom`}
        >
          {style_contact && (
            <>
              <div className="tp-footer__shape-1 d-none d-xxl-block">
                <Image src={shape_img_1} alt="theme-pure" />
              </div>
              <div className="tp-footer__shape-2 d-none d-xxl-block">
                <Image src={shape_img_2} alt="" />
              </div>
            </>
          )}
          <div className="container">
            <div className="row">
              <div
                className="col-xl-3 col-lg-3 col-md-6 pb-30  wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div
                  className={`tp-footer__widget ${
                    style_team && "tp-footer__input-inner"
                  } footer-widget-3 footer-col-3-1`}
                >
                  <div className="tp-footer__logo mb-25">
                    <Link href="/">
                      <Image
                        src="/assets/img/services/lysalogo.png"
                        alt="lysa_logo"
                        width={90}
                        height={90}
                      />
                    </Link>
                  </div>
                  <div className="tp-footer__contact-info">
                    <p>{info}</p>
                    <ul>
                      <li>
                        <span>
                          <PhoneFour />
                        </span>
                        <Link className="first-child" href={`tel:${phone}`}>
                          {phone}
                        </Link>
                      </li>
                      <li>
                        <span>
                          <EmailFour />
                        </span>
                        <Link href={`mailto:${email}`}>{email}</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {footer_lisks.map((item, i) => (
                <div
                  key={i}
                  className={`${item.cls_1} col-md-6 pb-30 wow tpfadeUp`}
                  data-wow-duration=".9s"
                  data-wow-delay=".7s"
                >
                  <div
                    className={`tp-footer__widget footer-widget-3 ${item.cls_2}`}
                  >
                    <h4 className="tp-footer__widget-title">{item.title}</h4>
                    <div className="tp-footer__content">
                      <ul>
                        {item.links.map((link, i) => (
                          <li key={i}>
                            <Link href={link.link}>{link.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
              <div
                className="col-xl-4 col-lg-4 col-md-6 pb-30  wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".9s"
              >
                <div className="tp-footer__widget footer-widget-3 footer-widget-5 footer-col-3-4">
                  <h4 className="tp-footer__widget-title">Our Newsletter</h4>
                  <div className="tp-footer__input mb-35 p-relative">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <input type="text" placeholder="Business email adress" />
                      <span>
                        <EmailIcon />
                      </span>
                      <button>
                        <RightArrow />
                      </button>
                    </form>
                  </div>
                  <div className="tp-footer__social-3">
                    <h4>Social media</h4>
                    <Link href="https://www.facebook.com/people/Lysa-Consultancy/100092882791546/?rdid=zlO5mNwtD0qrlYVt&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FYMuYZ9Yb%2F" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    {/* <Link href="#">
                      <i className="fab fa-twitter"></i>
                    </Link> */}
                    <Link href="https://www.instagram.com/lysaconsultancy/?igsh=MTh5bHl2N3NycTVrbA%3D%3D#" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFoxeyy3zCoowAAAZgdBIQgYf9lI_NwiUHQNnRvyuK4j9YZaLqsFW3yXEQsOhhSVhMDLPAZaFkTMoLPJoKMZI3onY7PrsNjVrF0taX7lqknxovPxswlzUSeVlwgg4Q-r59yySY=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Flysa-consultancy%2F" target="_blank">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                    {/* <Link href="#">
                      <i className="fab fa-pinterest"></i>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-copyright__area pt-20 pb-20">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="tp-copyright__text tp-copyright__text-3 text-center">
                  <span>
                    <CopyRight />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterFive;
