import CommentPost from "@/forms/comment-post";
import Image from "next/image";
import React, { useState } from "react";
import Categories from "../blog-list/categories";
import RecentPost from "../blog-list/recent-post";
import Search from "../blog-list/search";
import Tags from "../blog-list/tags";
import Comments from "./comments";
import Link from "next/link";

const PostboxArea1 = ({ blogData }) => {
  const [searchResults, setSearchResults] = useState([]);

  const tags =
    typeof blogData?.meta_keywords === "string"
      ? blogData.meta_keywords.includes(",")
        ? blogData.meta_keywords
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean)
        : [blogData.meta_keywords.trim()] // Treat it as one tag
      : [];

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  const handleBackToBlog = () => {
    setSearchResults([]); // Reset to show full blog
  };

  const renderBlogItem = (item) => (
    <div key={item.id} className="mb-10 border-b pb-2">
      <h3 className="postbox__comment-title">{item.title}</h3>
      <p>{item.short_description}</p>
    </div>
  );

  return (
    <>
      <div className={`postbox__area pt-50 pb-100`}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="postbox__details-wrapper pr-20">
                {searchResults.length > 0 ? (
                  <>
                    <div className="flex justify-between items-center mb-2">
                      <h2 className="postbox__title">Search Results</h2>
                      <div
                        className="signin-banner-from-btn mb-20"
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <button
                          type="submit"
                          className="signin-btn"
                          onClick={handleBackToBlog}
                          style={{
                            height: "40px",
                            padding: "0px 10px",
                            lineHeight: "35px",
                          }}
                        >
                          Back to Blog
                        </button>
                      </div>
                    </div>
                    {searchResults.map((item) => renderBlogItem(item))}
                  </>
                ) : (
                  blogData && (
                    <article>
                      {blogData.thumbnail_url && (
                        <div className="postbox__thumb mb-40">
                          <Image
                            src={blogData.thumbnail_url}
                            alt={blogData.title}
                            width={300}
                            height={300}
                            className="img-fluid"
                          />
                        </div>
                      )}

                      <div className="postbox__content">
                        <h2 className="postbox__title mb-20">
                          {blogData.title}
                        </h2>
                        <div className="postbox__meta mb-30 flex gap-3 flex-wrap">
                          <span className="border border-gray-300 rounded px-2 py-1 text-sm flex items-center gap-1">
                            <i className="fa-regular fa-calendar-days"></i>
                            {new Date(blogData.created_at).toLocaleDateString()}
                          </span>
                          <span className="border border-gray-300 rounded px-2 py-1 text-sm flex items-center gap-1">
                            <i className="fa-regular fa-folder-open"></i>
                            {blogData.category?.name}
                          </span>
                        </div>
                        <div
                          className="postbox__details-title-box pb-30"
                          dangerouslySetInnerHTML={{ __html: blogData.content }}
                        />
                      </div>
                      <div className="postbox__details tagcloud mb-50">
                        <span>Tags:</span>
                        {Array.isArray(tags) && tags.length > 0 ? (
                          tags.map((tag, i) => (
                            <Link
                              key={i}
                              href="#"
                              style={{ marginLeft: "8px" }}
                            >
                              {tag}
                            </Link>
                          ))
                        ) : (
                          <span style={{ marginLeft: "8px" }}>No tags</span>
                        )}
                      </div>

                      <div className="postbox__comment mb-65">
                        <h3 className="postbox__comment-title">Comments</h3>
                        <Comments blogId={blogData?.id} />
                      </div>
                      <div className="postbox__comment-form">
                        <h3 className="postbox__comment-form-title">
                          Leave A Comment
                        </h3>
                        <CommentPost blogId={blogData?.id} />
                      </div>
                    </article>
                  )
                )}
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="sidebar__wrapper">
                <Search onResults={handleSearchResults} />
                <RecentPost />
                <Categories />
                <Tags tag={tags} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostboxArea1;
