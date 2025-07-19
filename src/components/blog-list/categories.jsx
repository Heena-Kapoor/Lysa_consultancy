import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://blog.lysaconsultancy.com/api/categories-with-blogs",
          {
            params: { limit: 1000000 },
          }
        );
        console.log("response", response);

        setCategories(response?.data?.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="sidebar__widget mb-40">
      <div className="sidebar__widge-title-box">
        <h3 className="sidebar__widget-title">Categories</h3>
      </div>
      <div className="sidebar__widget-content">
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <Link href={`/blog?category=${category.slug}`}>
                <span>{category.name}</span>
                <span>{category.blogs_count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
