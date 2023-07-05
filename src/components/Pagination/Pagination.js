import React from "react";
import PaginationContainer from "./Pagination.styles";

function Pagination({ totalPosts, postsPerPage, setCurrentPage, currentPage }) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <PaginationContainer>
      {pages.map((page, index) => {
        return (
          <button 
          key={index} 
          onClick={() => setCurrentPage(page)} 
          className={page == currentPage ? "active" : ""}>
            {page}
          </button>
        );
      })}
    </PaginationContainer>
  );
}

export default Pagination;
