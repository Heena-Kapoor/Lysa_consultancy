import devopsLysa_data from "@/data/devops_lysa";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DevopsLysa = () => {
  return (
    <>
      <div className="portfolio-area pb-50">
        <div className="container">
          <div className="row grid">
            <h3 className="tp-section-title-6 text-black pb-20 text-center">
              LYSA DEVOPS SERVICES
            </h3>
            <p className=" mb-0 pb-20 text-center">
              DevOps services are used to streamline the development and
              deployment of software applications by creating a more
              collaborative and automated approach to software development.
              DevOps services can help organizations to achieve their goals of
              faster time-to-market, higher quality software, lower costs,
              increased collaboration, and continuous delivery. Below we have
              highlighted our DevOps services that allow businesses to best meet
              their needs and stay ahead of the competition:
            </p>
            {devopsLysa_data.map((item, i) => {
              const delay = (i % 9) * 0.1 + 0.1;
              return (
                <div
                  key={i}
                  className="col-xl-4 col-lg-6 col-md-6 col-sm-6 grid-item wow fadeInUp"
                  data-wow-duration=".9s"
                  data-wow-delay={delay + "s"}
                >
                  <div
                    className="inner-project-item mb-30"
                    style={{ height: "900px !important" }}
                  >
                    <div className="inner-project-img fix p-relative">
                      <Image
                        className="w-100"
                        src={item.thumb_img}
                        alt="theme-pure"
                      />
                      <div className="inner-project-brand">
                        <Image src={item.brand_logo} alt="theme-pure" />
                      </div>
                    </div>
                    <div className="inner-project-content">
                      <span className="inner-project-category-title">
                        {item.job_title}
                      </span>
                      <h4 className="inner-project-title">
                        <Link href="/devops-consulting-services">{item.title}</Link>
                      </h4>
                      <p>{item.des}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DevopsLysa;
