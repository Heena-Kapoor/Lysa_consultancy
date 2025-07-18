import React from "react";
import Image from "next/image";

const sales_content = {
  sub_title: <>Raise Your Game: Migrate To The Cloud Efficiently!</>,
  title: <>Ensure Long-Term Cloud Migration Success With LYSA!</>,
  dub_title: <>Raise Your Game: Migrate To The Cloud Efficiently!</>,
  description: (
    <>
      <p>
        For long-term success, migrate to the cloud with the services, best
        practices, and technical expertise you need. LYSA has guided hundreds of
        companies to successfully migrate to the cloud. Our experts are
        well-versed in the advantages and disadvantages of each cloud strategy
        and can assist you in evaluating and choosing which architecture and
        products will best meet your unique business needs.
      </p>
      <p>
        Whether you are migrating a single application or thousands, our
        hassle-free cloud migration services will help you expedite your
        business transformation and get the most out of your data. For companies
        of all sizes, LYSA has vast experience working with cloud solutions. We
        assist you in achieving a successful cloud migration by offering you
        crucial insights prior to beginning your cloud initiatives.
      </p>
    </>
  ),
};
const { sub_title, title, dub_title, description } = sales_content;

const EnsureLong = ({ style_service }) => {
  return (
    <>
      <div className="tp-sales-area pt-30 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-6 order-1 order-md-1 wow tpfadeLeft"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-sales-section-box pb-20">
                <h4
                  className="inner-section-subtitle"
                  style={{ lineHeight: "1" }}
                >
                  {sub_title}
                </h4>
                <h4 className="tp-section-title-2 pb-15 ">
                  {style_service ? dub_title : title}
                </h4>
               {description}
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 order-0 order-md-2 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="tp-sales-img-wrapper p-relative text-end">
                <Image
                  src="/assets/img/services/devops1.png"
                  alt="theme-pure"
                  width={550}
                  height={550}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnsureLong;
