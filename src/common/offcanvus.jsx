import Link from "next/link";
import React from "react";
import Image from "next/image";
import MobileMenus from "../layout/headers/mobile-menus";

const Offcanvus = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <div className="tpoffcanvas-area">
        <div className={`tpoffcanvas ${sidebarOpen && "opened"}`}>
          <div className="tpoffcanvas__close-btn">
            <button className="close-btn" onClick={() => setSidebarOpen(false)}>
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="tpoffcanvas__logo text-center">
            <Link href="/" onClick={() => setSidebarOpen(false)}>
              <Image
                src="/assets/img/services/lysalogo.png"
                alt="theme-pure"
                width={50}
                height={50}
              />
            </Link>
          </div>
          <div className="mobile-menu mean-container">
            <MobileMenus />
          </div>
          <div className="tpoffcanvas__info text-center">
            <h4 className="offcanva-title">we are here</h4>
            <Link
              href="https://maps.app.goo.gl/Wd1dkxV84CNQuBbW6"
              target="_blank"
            >
              LYSA Consultancy (OPC) Pvt. Ltd. <br />F No. 16, PD6, Sec 6,
              Rohini,
              <br />
              New Delhi, Delhi - 110085
            </Link>
          </div>
          <div className="tpoffcanvas__social">
            <div className="social-icon text-center">
              <Link
                href="https://www.instagram.com/lysaconsultancy/?igsh=MTh5bHl2N3NycTVrbA%3D%3D#"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </Link>
              <Link
                href="https://www.facebook.com/people/Lysa-Consultancy/100092882791546/?rdid=zlO5mNwtD0qrlYVt&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FYMuYZ9Yb%2F"
                target="_blank"
              >
                <i className="fab fa-facebook-square"></i>
              </Link>
              <Link
                href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFoxeyy3zCoowAAAZgdBIQgYf9lI_NwiUHQNnRvyuK4j9YZaLqsFW3yXEQsOhhSVhMDLPAZaFkTMoLPJoKMZI3onY7PrsNjVrF0taX7lqknxovPxswlzUSeVlwgg4Q-r59yySY=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Flysa-consultancy%2F"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`body-overlay ${sidebarOpen && "apply"}`}
        onClick={() => setSidebarOpen(false)}
      ></div>
    </>
  );
};

export default Offcanvus;
