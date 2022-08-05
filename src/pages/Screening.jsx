import React from "react";
import { useState } from "react";
import Grades from "../components/Grades";
import Categories from "../components/Categories";
import SingleCategory from "../components/singleCategory";

const Screening = () => {
  const [page, setPage] = useState(1);
  const [data,setData] = useState([]);
  const [selected,setSelected] = useState([])
  const [current,setCurrent] = useState({})
  console.log(selected);

  const PageDisplay = () => {
    
    if (page === 1) {
      return <Grades setData={setData} />;
    } else if (page === 2) {
      return <Categories data={data} selected={selected} />;
    } else if (page >= 2) {
      return <SingleCategory current={current} />;
    }
  };
  const next = () => {
    if(page -1 <= selected.length){
      setPage((p) => p + 1);
    }
    
    console.log(page)
    if(page > 1 && (page-2) < selected.length){
      setCurrent(selected[page - 2]);
    }
  };
  const prev = () => {
    if (page > 0) {
      setPage((p) => p - 1);
    }
    if(page > 1 && (page-2) < selected.length){
      setCurrent(selected[page - 2]);
    }
  };
  return (
    <>
     
      <div className="">{PageDisplay()}</div>
      <div className="d-flex justify-content-center position-relative m-3">
        <div
        >
          <button
            onClick={prev}
            className={`${page===0 ? "disabled" : ""} btn btn-lg rounded-0 ms-3 pe-5 pt-2 pb-2 ps-5 btn-outline-primary`}
          >
            Prev
          </button>
          <button
            onClick={next}
            className={` ${!data.length ? "disabled" : ""} btn btn-lg rounded-0 ms-3 pe-5 pt-2 pb-2 ps-5 btn-outline-primary`}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Screening;
