import useMultipleAnime from '@/hooks/useMultipleAnime';
import feature_data from '@/data/feature-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const feature_content = {
    title: <>Lysa <span>IT Solutions!</span></>,
    des: <>Experience</>,
    integraton_title: "Lysa IT Solutions!",
    integraton_des: <>Experience</>,
}
const {title, des, integraton_title, integraton_des}  = feature_content


const FeatureArea = ({style_integraton}) => {
    return (
        <>
            <div className={`tp-feature-area ${style_integraton ? "pt-10 pb-30" : "grey-bg-3 pt-20 pb-110"}`}>
                  <div className="container">
                     <div className="row">
                        <div className="col-12">
                           <div className="tp-feature-five-section-box text-center mb-40">
                            {style_integraton ? 
                                <>
                                <h3 className="tp-section-title-5 text-black">
                                    <span>
                                        {integraton_title}
                                    </span>
                                </h3>
                                    <p>{integraton_des}</p>
                                </>
                                :
                                <>
                                <h3 className="tp-section-title-5 text-black">{title}</h3>
                                <p>{des}</p>                                
                                </>
                            }
                           </div>
                        </div>
                     </div>
                     <div className="row gx-0 tp-feature-five-wrapper-main">
                        {feature_data.map((item, i) => 
                            <div key={i} className="col-xl-3 col-lg-6 col-md-6">
                                <div className="tp-feature-five-wrapper">
                                    <div className={`tp-feature-five-item tp-feature-five-item-${item.color} text-center z-index`}>
                                        <div className="tp-feature-five-icon p-relative">
                                            <Image src={item.img} alt="theme-pure" />
                                            <div className={`tp-feature-five-shape-color tp-feature-five-shape-color-${item.color}`}></div>
                                        </div>
                                        <div className="tp-feature-five-content">
                                            <h4 className="tp-feature-five-title-sm">{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="tp-feature-five-btn">
                                            <Link className="tp-btn-purple" href="/">Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                     </div>
                     <div className="row">
                        <div className="col-12">
                           <div className="tp-feature-five-link text-center">
                              <span>Check out all of our <Link href="/">Services</Link></span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
        </>
    );
};

export default FeatureArea;