import React,{useState} from "react";

const AnswerQuestion = ({style, data, custom}) => {
  const [shadow , setShadow ] = useState(2) 
  
  return (
    <>
      <div className={custom ? `tp-custom-accordion tp-custom-accordion1` : "tp-custom-accordion"}>
        <div className={`accordion ${style && "tp-inner-font"}`} id="accordionExample">
          {data.map((item) => (
            <div onClick={() => setShadow(item.id)} key={item.id} 
                 className={`accordion-items ${item.show} ${shadow === item.id && "tp-faq-active"}`}>
              <h2 className="accordion-header" id={item.accordion_id}>
                <button
                  className={`accordion-buttons ${item.collapsed}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={item.data_bs_target}
                  aria-expanded={item.aria_expanded}
                  aria-controls={item.aria_controls}
                >
                  {item.question}
                  <span className="accordion-btn"></span>
                </button>
              </h2>
              <div
                id={item.aria_controls}
                className={`accordion-collapse collapse ${item.show ? "show" : ""}`}
                aria-labelledby={item.accordion_id}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-content pb-20">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AnswerQuestion;
