"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import FooterFive from "@/layout/footers/footer-5";
import PostboxArea from "@/components/blog-details/postbox-area";
import axios from "axios";
import Loader from "@/common/loader";
import BreadcrumbNew from "@/common/breadcrumbs/breadcrumbNew";
import ContextProvider from "@/context/ContextProvider";
import HeaderFive from "@/layout/headers/header-5";
import Link from "next/link";
import Image from "next/image";

const BlogDetails = () => {
  const { slug } = useParams(); // ✅ Gets slug from URL
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `http://blog.lysaconsultancy.com/api/blogs/${slug}`
        );

        const blogDetailData = res?.data?.data;
        setBlogData(blogDetailData);
      } catch (err) {
        console.error("Failed to fetch blog:", err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchBlog();
  }, [slug]);

  return (
    <ContextProvider>
      {loading ? (
        <Loader />
      ) : !blogData || blogData.length === 0 ? (
        <div className="tp-error-area pt-140 p-relative">
          <div className="tp-error-content-box text-center mb-40">
            <Image
              src="/assets/img/login/text-404.png"
              width={300}
              height={300}
              alt="Not Found"
            />
          </div>
          <div className="tp-error-text-box text-center">
            <h4 className="error-title-sm">Blog Not Found</h4>
            <p>Oops! We couldn’t find the blog you're looking for.</p>
            <Link
              className="tp-btn-inner tp-btn-hover alt-color-black"
              href="/blog"
            >
              <span>Go Back to Blog</span>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <HeaderFive />
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <main>
                <BreadcrumbNew title={"Blog Details"} />
                <PostboxArea blogData={blogData} />
              </main>
              <FooterFive
                style_contact={true}
                style_team={true}
                bg_style={false}
              />
            </div>
          </div>
        </>
      )}
    </ContextProvider>
  );
};

export default BlogDetails;
