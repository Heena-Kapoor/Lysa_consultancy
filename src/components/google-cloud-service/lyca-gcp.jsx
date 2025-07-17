import gcpService_data from "@/data/gcp-services-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GcpLysa = () => {
  return (
    <>
      <div className="portfolio-area pb-50">
        <div className="container">
          <div className="row grid">
            <h3 className="tp-section-title-6 text-black pb-20 text-center">
              LYSA GCP SERVICES
            </h3>
            <p className=" mb-0 pb-20 text-center">
              GCP provides a robust and comprehensive cloud computing platform
              that enables businesses to run their applications, store and
              manage their data, and leverage advanced analytics and machine
              learning capabilities. GCP services offer a wide range of tools
              and services that can be used by businesses of all sizes, from
              startups to large enterprises. These services are designed to be
              scalable, reliable, and secure, and they can be used to build and
              deploy applications in a flexible and cost-effective manner. Below
              we have highlighted our GCP services that allow businesses to best
              meet their needs and stay ahead of the competition:
            </p>
            {gcpService_data.map((item, i) => {
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
                        <Link href="/google-cloud-service">{item.title}</Link>
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

export default GcpLysa;
