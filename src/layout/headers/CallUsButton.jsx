import React from "react";
import Link from "next/link";
import PhoneFour from "@/svg/phone-4";

const CallUsButton = () => {
  return (
    <Link
      href="tel:+918595363651"
      className="call-us-button d-none d-md-inline-flex align-items-center"
      style={{ textDecoration: "none" }}
    >
      {/* Icon on the left */}
      <div
        style={{
          marginRight: "12px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <PhoneFour height={32} width={32}/>
      </div>

      {/* Text on the right */}
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
        <span style={{ fontSize: "14px", fontWeight: 500, color: "#000" }}>
          Call us now
        </span>
        <span style={{ fontSize: "16px", fontWeight: 600, color: "#6865FF" }}>
          +91-8595363651
        </span>
      </div>
    </Link>
  );
};

export default CallUsButton;
