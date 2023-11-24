import ReactPaginate from 'react-paginate';


const Pagination = ({ pageCount, onPageChange }) => {
    const handlePageClick = (data) => {
      const selectedPage = data.selected + 1;
      onPageChange(selectedPage);
    };
  
    return (
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={3} // Adjust as needed
        marginPagesDisplayed={1} // Adjust as needed
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName='active'
      />
    );
  };


export default Pagination 