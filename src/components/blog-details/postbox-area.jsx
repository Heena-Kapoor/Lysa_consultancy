import CommentPost from "@/forms/comment-post";
import Image from "next/image";
import React from "react";
import Categories from "../blog-list/categories";
import RecentPost from "../blog-list/recent-post";
import Search from "../blog-list/search";
import Tags from "../blog-list/tags";
import Comments from "./comments";

const PostboxArea1 = ({ blogData }) => {
  return (
    <>
      <div className={`postbox__area  pt-50 pb-100`}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="postbox__details-wrapper pr-20">
                <article>
                  {/* Blog Thumbnail */}
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

                  {/* Blog Content */}
                  <div className="postbox__content">
                    <h2 className="postbox__title mb-20">{blogData.title}</h2>

                    {/* Blog Meta */}
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

                    {/* Blog Body */}
                    <div
                      className="postbox__details-title-box pb-30"
                      dangerouslySetInnerHTML={{ __html: blogData.content }}
                    />
                  </div>

                  {/* <div className="postbox__details tagcloud mb-50">
                    <span>Tags:</span>
                    <Link href="#">Envato</Link>
                    <Link href="#">Development</Link>
                    <Link href="#">Technology</Link>
                    <Link href="#">Wordpress</Link>
                  </div> */}

                  {/* <div className="postbox__navigation-more mb-70 d-flex justify-content-between">
                    <div className="postbox__navigation-left d-flex align-items-center">
                      <div className="postbox__navigation-img">
                        <Link href="#">
                          <Image src={navigation_img_1} alt="theme-pure" />
                        </Link>
                      </div>
                      <div className="postbox__navigation-content">
                        <Link href="#">
                          <span>
                            <i className="far fa-arrow-left"></i>
                            Previous post
                          </span>
                        </Link>
                        <h5>
                          <Link href="#">Leveraging Feedback...</Link>
                        </h5>
                      </div>
                    </div>
                    <div className="postbox__navigation-right d-flex align-items-center">
                      <div className="postbox__navigation-content">
                        <Link href="#">
                          <span>
                            Next post
                            <i className="far fa-arrow-right"></i>
                          </span>
                        </Link>
                        <h5>
                          <Link href="#">Typing Tutorials For...</Link>
                        </h5>
                      </div>
                      <div className="postbox__navigation-img">
                        <Link href="#">
                          <Image src={navigation_img_2} alt="theme-pure" />
                        </Link>
                      </div>
                    </div>
                  </div> */}

                  {/* <div className="postbox__comment mb-65">
                    <h3 className="postbox__comment-title">Comments</h3>
                    <Comments blogId={blogData?.id} />
                  </div> */}
                  <div className="postbox__comment-form">
                    <h3 className="postbox__comment-form-title">
                      Leave A Comment
                    </h3>
                    <CommentPost blogId={blogData?.id} />
                  </div>
                </article>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="sidebar__wrapper">
                {/* <Search /> */}
                <RecentPost />
                <Categories />
                {/* <Tags /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostboxArea1;
