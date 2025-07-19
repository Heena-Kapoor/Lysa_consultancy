"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Loader from "@/common/loader";

const Portfolio = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "http://blog.lysaconsultancy.com/api/blogs",
          {
            limit: "10",
          }
        );

        if (response.data.status && Array.isArray(response.data.data)) {
          const blogData = response?.data?.data;

          setBlogs(blogData);
          setFilteredBlogs(blogData);

          // Extract categories
          const uniqueCategories = [
            ...new Set(
              blogData.map((blog) => blog.category?.name || "Uncategorized")
            ),
          ];
          setCategories(["All", ...uniqueCategories]);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Filter logic
  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(
        blogs.filter((blog) => blog.category?.name === category)
      );
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="portfolio blog-grid-inner pt-30 mb-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="tp-about__section-box text-center mb-10">
              <h3 className="tp-section-title">Accomplish more, Together</h3>
              <p>LYSA blog is your knowledge center for everything remote.</p>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="row">
          <div className="col-xl-12">
            <div className="portfolio-filter masonary-menu text-center mb-35">
              {categories.map((category, i) => (
                <button
                  key={i}
                  onClick={() => filterItems(category)}
                  className={category === activeCategory ? "active" : ""}
                >
                  <span>{category}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="row grid blog-grid-inner">
          {filteredBlogs.map((item, i) => {
            const delay = (i % 9) * 0.1 + 0.1;
            return (
              <div
                key={item.id}
                className="col-xl-4 col-lg-6 col-md-6 mb-30 grid-item wow fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay={`${delay}s`}
              >
                <div className="tp-blog-item">
                  <div className="tp-blog-thumb fix">
                    <Link href={`/blog/${item.slug}`}>
                      <Image
                        src={item.thumbnail_url}
                        alt={item.title}
                        width={400}
                        height={400}
                        layout="responsive"
                      />
                    </Link>
                  </div>
                  <div className="tp-blog-content">
                    <div className="tp-blog-meta d-flex align-items-center">
                      <div className="tp-blog-category category-color-1">
                        <span>{item.category?.name}</span>
                      </div>
                      <div className="tp-blog-date">
                        <span>
                          {new Date(item.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="tp-blog-title-box">
                      <Link
                        className="tp-blog-title-sm"
                        href={`/blog/${item.slug}`}
                      >
                        {item.title}
                      </Link>
                    </div>
                    <div className="tp-blog-author-info-box d-flex align-items-center">
                      <div className="tp-blog-avata">
                        <Image
                          src="/assets/img/services/lysalogo.png"
                          alt="LYSA_Logo"
                          width={35}
                          height={35}
                        />
                      </div>
                      <div className="tp-blog-author-info">
                        <h5>Lysa technology</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
