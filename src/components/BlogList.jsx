import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React, { useState, useMemo } from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);

  const currentPaginationData = useMemo(() => {
    const indexOfLastPage = currentPage * pageSize;
    const indexOfFirstPage = indexOfLastPage - pageSize;

    return blogs.posts.slice(indexOfFirstPage, indexOfLastPage);
  }, [currentPage, pageSize]);

  const updateRowsPerPage = (rows) => {
    setPageSize(parseInt(rows));
  };
  const updatePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSize={pageSize}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
