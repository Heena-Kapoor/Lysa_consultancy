import React from 'react';

import plan_img_1 from "../../../../public/assets/img/lysa/home/thrive-anywhere.webp"
import plan_img_2 from "../../../../public/assets/img/plan/plan-2.png"
import plan_img_3 from "../../../../public/assets/img/plan/plan-3.png"
import plan_img_4 from "../../../../public/assets/img/plan/plan-4.png"
import plan_img_5 from "../../../../public/assets/img/plan/plan-5.png"
import plan_img_6 from "../../../../public/assets/img/plan/plan-6.png"
import Image from 'next/image';

import img from "../../../../public/assets/img/cta/cta-title-icon-1.png";
import Link from 'next/link';

const cta_content = {
    img_box: [
        { id: 1, img: plan_img_1, cls: "1", },
        // { id: 2, img: plan_img_2, cls: "2 d-none d-sm-block", },
        // { id: 3, img: plan_img_3, cls: "3 d-none d-sm-block", },
        // { id: 4, img: plan_img_4, cls: "4", },
        // { id: 5, img: plan_img_5, cls: "5", },
        // { id: 6, img: plan_img_6, cls: "6", },
    ],
    sub_title: "Works About",
    title: <><span>Thrive Anywhere</span><br />Modernize with Confidence</>,
    des: <>LYSA strongly believes in growing together and creating a harmonious work environment. Our goal, as a consultant, is to come up with high-end or managed IT solutions and services that will enhance the productivity of your brand.</>,
    feature_list: [
        "Strive for the Best",
        "Solve with 100% Quality"
    ]

}
const { img_box, sub_title, title, des, feature_list } = cta_content


const CtaArea = () => {
    return (
        <>
            <div className="tp-plan-area pt-60 pb-20">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-7 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
                            <div className="tp-plan-img-box p-relative">
                                {img_box.map((item, i) =>
                                    <div key={i} className={`tp-plan-img-${item.cls}`}>
                                        <Image src={item.img} alt="theme-pure" />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                            <div className="tp-plan-section-box">
                                <div className="tp-plan-section-icon pb-30">
                                    <Image src={img} alt="theme-pure" />
                                </div>
                                <span className="tp-section-subtitle-5 text-black">{sub_title}</span>
                                <h3 className="tp-section-title-5 text-black pb-15">{title}</h3>
                                <p className=" mb-0 pb-30">{des}</p>
                                <div className="tp-plan-feature">
                                    <ul>
                                        {feature_list.map((list, i) => <li key={i}><i className="far fa-check"></i>{list}</li>)}
                                    </ul>
                                </div>
                                <div className="mt-20">
                                    <Link className="tp-btn-yellow-lg text-black" href="/contact" target='_blank'>Contact Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CtaArea;