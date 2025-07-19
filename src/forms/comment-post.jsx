import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const CommentPost = ({ blogId }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emojiRegex =
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD00-\uDDFF])/g;
    const specialCharRegex = /[^a-zA-Z0-9\s.,!?'"()-]/g;
    const offensiveWords = [
      "fuck",
      "shit",
      "bitch",
      "asshole",
      "bastard",
      "damn",
      "dick",
      "piss",
      "cunt",
      "slut",
      "whore",
      "nigger",
      "fag",
      "faggot",
      "retard",
      "moron",
      "idiot",
      "suck",
      "douche",
      "bollocks",
      "wanker",
      "twat",
      "arse",
      "crap",
      "prick",
      "jerk",
      "motherfucker",
      "cock",
      "pussy",
      "nuts",
      "balls",
      "boobs",
      "dildo",
      "nude",
      "sex",
      "kill",
      "die",
      "rape",
      "abuse",
      "screw",
      "bloody",
      "shithead",
      "scumbag",
      "loser",
    ];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const { name, email, message, agree } = formData;

    if (!agree) {
      alert("You must agree before submitting.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (emojiRegex.test(message)) {
      alert("Please remove emojis from your message.");
      return;
    }

    if (specialCharRegex.test(message)) {
      alert("Message contains disallowed special characters.");
      return;
    }

    const lowerCaseMessage = message.toLowerCase();
    const containsOffensive = offensiveWords.some((word) =>
      lowerCaseMessage.includes(word)
    );

    if (containsOffensive) {
      alert("Message contains offensive content. Please revise.");
      return;
    }

    try {
      const response = await axios.post(
        `http://blog.lysaconsultancy.com/api/blogs/${blogId}/comment`,
        { name, email, message }
      );
      console.log("Comment submitted:", response.data);
      toast("Comment submitted successfully!", {
        icon: false,
        progressStyle: {
          background: "#600EE4",
        },
      });
      setFormData({ name: "", email: "", message: "", agree: false });
    } catch (error) {
      console.error("Failed to submit comment:", error);
      alert("Failed to submit comment.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="box">
        <div className="row gx-20">
          <div className="col-xxl-4 col-xl-6 col-lg-4">
            <div className="postbox__comment-input mb-35">
              <input
                type="text"
                className="inputText"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <span className="floating-label">Your Name</span>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-6 col-lg-4">
            <div className="postbox__comment-input mb-35">
              <input
                type="email"
                className="inputText"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <span className="floating-label">Your Email</span>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-input mb-20">
              <textarea
                className="textareaText"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <span className="floating-label-2">Your Comment</span>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-agree">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  I agree that my submitted data is being collected and stored.
                </label>
              </div>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-btn">
              <button type="submit" className="tp-btn-inner">
                Post comment
              </button>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default CommentPost;
