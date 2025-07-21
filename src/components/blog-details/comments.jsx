"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ReplyIcon from "@/svg/reply-icon";
import Link from "next/link";
import axios from "axios";
import Loader from "@/common/loader";

const Comments = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(
          `http://blog.lysaconsultancy.com/api/blogs/${blogId}/comment`
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

  return (
    <ul>
      {comments.map((item) => (
        <li key={item.id}>
          <div className="postbox__comment-box d-flex">
            <div className="postbox__comment-info">
              <div className="postbox__comment-avater mr-20">
                <Image
                  src={item?.user_image || "/default-avatar.png"} // fallback image
                  alt={item?.user_name || "User"}
                  width={60}
                  height={60}
                />
              </div>
            </div>
            <div className="postbox__comment-text">
              <div className="postbox__comment-name d-flex">
                <h5>{item?.user_name || "Anonymous"}</h5>
                <span className="post-meta">
                  {new Date(item?.created_at).toLocaleDateString()}
                </span>
              </div>
              <p>{item?.comment}</p>
              <div className="postbox__comment-reply">
                <Link href="#">
                  <ReplyIcon /> Reply
                </Link>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Comments;
