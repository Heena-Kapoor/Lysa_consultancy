import work_data from "@/data/work-data";
import Image from "next/image";
import React from "react";

const WorkArea = () => {
  return (
    <div className="tp-project__area grey-bg pt-50 pb-50">
      <div className="container">
        <div className="row mb-5">
          <div className="col-xl-6">
            <div className="tp-project__section-box">
              <h3 className="tp-section-title">How we Work?</h3>
              <p>We take care of the Database</p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {work_data.map((item, i) => (
            <div key={i} className="col-xl-3 col-lg-3 col-md-6">
              <div className="work-card p-4 h-100 d-flex flex-column rounded-4 shadow-sm bg-white">
                <div className="work-image mb-3">
                  <Image
                    src={item.img_1}
                    alt={item.title}
                    width={250}
                    height={50}
                    className="rounded"
                  />
                </div>
                <h5 className="fw-bold mb-2 text-dark">{item.title}</h5>
                <p className="text-muted mb-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .work-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .work-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
        }
        .work-image img {
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default WorkArea;
