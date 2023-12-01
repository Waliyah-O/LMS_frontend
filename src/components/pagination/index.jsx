import { useState } from 'react';


const Pagination = ({ totalPages, onPageChange, currentPage }) => {
  const [displayedPages, setDisplayedPages] = useState(5);

  const generatePageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - Math.floor(displayedPages / 2));

    for (let i = startPage; i <= Math.min(totalPages, startPage + displayedPages - 1); i++) {
      pages.push(i);
    }

    return pages;
  };

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const renderPagination = () => {
    const pages = generatePageNumbers();

    return (
      <ul className="join">
        <button className={`join-item btn mr-2 ${currentPage === 1 ? 'disabled' : ''}`} onClick={() => handlePageChange(currentPage - 1)}>
          <button>&lt;</button>
        </button>

        {pages.map((page) => (
          <li key={page} className={`join-item btn btn-square ${currentPage === page ? 'active' : ''}`} onClick={() => handlePageChange(page)}>
            {page}
          </li>
        ))}

        <li
          className={`join-item btn ml-2 ${currentPage === totalPages ? 'disabled' : ''}`}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <button>&gt;</button>
        </li>
      </ul>
    );
  };
  {
    setDisplayedPages;
  }
  return <div className="pagination-container">{totalPages > 1 && renderPagination()}</div>;
};

export default Pagination;
