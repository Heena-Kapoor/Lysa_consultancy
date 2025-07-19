"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";

const RecentPost = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "http://blog.lysaconsultancy.com/api/blogs",
          {
            limit: "10",
          }
        );
        setBlogs(response?.data?.data);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      }
    };

    fetchBlogs();
  }, []);

  console.log("blogs", blogs);

  return (
    <div className="sidebar__widget mb-40">
      <div className="sidebar__widge-title-box">
        <h3 className="sidebar__widget-title">Recent Post</h3>
      </div>
      <div className="sidebar__widget-content">
        <div className="sidebar__post rc__post">
          {blogs.map((blog) => (
            <div key={blog.id} className="rc__post mb-20 d-flex">
              <div className="rc__post-thumb mr-20">
                <Link href={`/blog/${blog.slug}`}>
                  <Image
                    src={blog.thumbnail_url || "/assets/img/services/devops1.png"}
                    alt={blog.title}
                    width={80}
                    height={80}
                  />
                </Link>
              </div>
              <div className="rc__post-content">
                <h3 className="rc__post-title">
                  <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h3>
                <div className="rc__meta">
                  <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
