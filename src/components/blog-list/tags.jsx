import Link from "next/link";
import React from "react";

const Tags = ({ tag }) => {
  return (
    <div className="sidebar__widget mb-40">
      <div className="sidebar__widge-title-box">
        <h3 className="sidebar__widget-title">Tags</h3>
      </div>
      <div className="sidebar__widget-content">
        <div className="tagcloud">
          {Array.isArray(tag) &&
            tag.map((item, i) => (
              <Link key={i} href="#">
                {item}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;
