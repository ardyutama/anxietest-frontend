import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Form from "../Form";
import Quiz from "../../pages/test-page/question";
import "./index.css";

function Items({ currentItems, handleChange }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <Form
            key={index}
            id={item.id}
            question={item.questions}
            handleChange={handleChange}
            name={item.title}
            value={item.value}
            checked={item.isChecked}
          />
        ))}
    </>
  );
}

export const Pagination = ({ itemsPerPage }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [question, setQuestion] = useState([]);

  const fetchQuestion = () => {
    setQuestion([]);
    Quiz.map((item) => {
      return item.questions.map((question, index) => {
        var data = {
          id: item.title + index,
          title: item.title,
          questions: question,
          value: "0",
        };
        return setQuestion((prev) => [...prev, data]);
      });
    });
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  const setValue = (id, value) => {
    currentItems.map((item) => {
      if (item.id === id) {
        item.value = value;
      }
      return item;
    });
  };

  //TODO: Mengupdate state/ menyimpan value ketika sudah diklik radio button
  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setValue(id, value);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(question.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(question.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % question.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <Items currentItems={currentItems} handleChange={handleChange} />
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
