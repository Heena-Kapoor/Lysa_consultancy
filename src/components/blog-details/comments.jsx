"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Loader from "@/common/loader";

const Comments = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(
          `http://blog.lysaconsultancy.com/api/blogs/${blogId}/comments`,
          {
            params: {
              limit: 5,
            },
          }
        );

        if (res.data.success) {
          setComments(res.data.data);
        } else {
          console.warn("Search failed or returned no results.");
          setComments([]);
        }
      } catch (err) {
        console.error("Failed to fetch comments:", err);
      } finally {
        setLoading(false);
      }
    };

    if (blogId) fetchComments();
  }, [blogId]);

  if (loading) return <Loader />;
  if (!comments.length)
    return (
      <p style={{ fontStyle: "italic", fontWeight: "bold" }}>
        No comments found.
      </p>
    );

  console.log("comments", comments);

  return (
    <ul>
      {comments.map((item) => (
        <li key={item.id}>
          <div className="postbox__comment-box d-flex">
            <div className="postbox__comment-info">
              <div className="postbox__comment-avater mr-20">
                <Image
                  src={item?.user_image || "/assets/img/blog/blog-avata-1.png"} // fallback image
                  alt={item?.name || "User"}
                  width={60}
                  height={60}
                />
              </div>
            </div>
            <div className="postbox__comment-text">
              <div className="postbox__comment-name d-flex">
                <h5>{item?.name || "Anonymous"}</h5>
                <span className="post-meta">
                  {new Date(item?.created_at).toLocaleDateString()}
                </span>
              </div>
              <p>{item?.message}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Comments;
