import databseInner_data from "@/data/databaseInner-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DatabaseInner = () => {
  return (
    <>
      <div className="portfolio-area pb-90">
        <div className="container">
          <div className="row grid">
            <h3 className="tp-section-title-6 text-black pb-20 text-center">
              LYSA DATABASE SERVICES
            </h3>
            <p className=" mb-0 pb-20 text-center">
              Database services offer a scalable and secure infrastructure for
              data storage, retrieval, and analysis. It provides a reliable and
              efficient way to manage and store data, ensuring that businesses
              and organizations can make informed decisions based on accurate
              and up-to-date information. Below we have highlighted our database
              services that allow businesses to best meet their needs and stay
              ahead of the competition:
            </p>
            {databseInner_data.map((item, i) => {
              const delay = (i % 9) * 0.1 + 0.1;
              return (
                <div
                  key={i}
                  className="col-xl-4 col-lg-6 col-md-6 col-sm-6 grid-item wow fadeInUp"
                  data-wow-duration=".9s"
                  data-wow-delay={delay + "s"}
                >
                  <div className="inner-project-item mb-30">
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
                        <Link href="/project-details">{item.title}</Link>
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

export default DatabaseInner;
