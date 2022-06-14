import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Form from "../Form";
import "./index.css";

function Items({ currentItems, handleChange }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <Form
            key={index}
            question={item.questions}
            handleChange={handleChange}
            name={item.title + index}
          />
        ))}
    </>
  );
}

export const Pagination = ({ itemsPerPage, items }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [score, setScore] = useState();
  console.log(items);
  const handleChange = (e) => {
    setScore({
      ...score,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <Items currentItems={currentItems} handleChange={handleChange}/>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Berikutnya"
        onPageChange={handlePageClick}
        previousLabel="Sebelumnya"
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        nextLinkClassName="next-link"
      />
    </>
  );
};
