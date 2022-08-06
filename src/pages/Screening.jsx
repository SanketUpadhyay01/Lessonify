import React from "react";
import { useState } from "react";
import Grades from "../components/Grades";
import Categories from "../components/Categories";
import SingleCategory from "../components/singleCategory";
import {useNavigate} from "react-router-dom"

const Screening = () => {
  const navigate = useNavigate()
  const [page, setPage] = useState(1);
  const [data,setData] = useState([]);
  const [selected,setSelected] = useState([])
  const [current,setCurrent] = useState({})
  const [count,setCount] = useState(0)
  const [checked,setChecked] = useState({})
  console.log(selected);

  const PageDisplay = () => {
    
    if (page === 1) {
      return <Grades setData={setData} />;
    } else if (page === 2) {
      return <Categories data={data} selected={selected} />;
    } else if (page > 2) {
      return <SingleCategory checked={checked} setChecked={setChecked} setCount={setCount} current={current}/>;
    }
    
  };
  const next = () => {

    console.log(count)

    if(page > 2 &&  (page < selected.length + 2)){
      localStorage.setItem(`${selected[page-3].name}`,count);
      setCount(0)
      setChecked({})
    }
  
    setPage((p) => p + 1);

    if(page >= selected.length + 2 ){
      localStorage.setItem(`${selected[selected.length-1].name}`,count);
      setCount(0)
      setChecked({})
       navigate('/')
    }


    
    else if(page > 1 ){
      setCurrent(selected[page - 2]);
    }
 
  };
  const prev = () => {
   
      setPage((p) => p - 1);

      if(page >= selected.length + 2 && selected.length){
        setPage((p) => p - 1);
        return;
      }
    
     else if(page > 1 ){
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
            className={`${page===1 ? "disabled" : ""} btn btn-lg rounded-0 ms-3 pe-5 pt-2 pb-2 ps-5 btn-outline-primary`}
          >
            Prev
          </button>
          <button
            onClick={next}
            className={` ${!data.length ? "disabled" : ""} btn btn-lg rounded-0 ms-3 pe-5 pt-2 pb-2 ps-5 btn-outline-primary`}
          >
            {`${page === selected.length+2 && selected.length ? "Finish" : "Next"}`}
          </button>
        </div>
      </div>
    </>
  );
};

export default Screening;
