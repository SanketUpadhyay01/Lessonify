import React, { useState } from "react";

const Categories = ({ data, selected }) => {
  const [clicked, setClicked] = useState({});

  const selection = (item, i) => {
    setClicked((prev) => ({ ...prev, [i]: !prev[i] }));
    const st = selected.indexOf(item);
    if (st === -1) {
      selected.push(item);
    } else {
      selected.splice(st, 1);
    }
  };

  return (
    <div className="container">
      <h1
        style={{ fontWeight: "bold" }}
        className="row p-4 text-primary display-4"
      >
        Please select the areas where you think the individual is struggling.
      </h1>
      <p className="row p-4 w-75 lead text-dark">
        Signs of LDs can be detected in children as young as 4. But often, signs
        don’t show up (or are not noticed) until grades 3-5 —or even later in
        life. And of course, no two people are exactly alike, even if they have
        the same type of LD.
      </p>
      <div className="row">
        <div className="col-md-8 ">
          <div className="row">
            {data.map((item, i) => (
              <button
                key={i}
                style={{
                  backgroundColor: `${clicked[i] ? "#0d6efd" : ""}`,
                  color: `${clicked[i] ? "white" : "#0d6efd"}`,
                }}
                onClick={() => selection(item, i)}
                className="col-md-3  p-5 m-3 btn border border-primary"
              >
                <h5 style={{fontWeight:"bold",fontSize:"15px"}}>{item.name}</h5>
              </button>
            ))}
          </div>
        </div>
        <div
          style={{ height: "300px", boxShadow: "inset 0px 0px 0px 10px white" }}
          className="btn btn-primary mt-3 col-md-4 text-center "
        >
          <h2 className="p-2 mt-4 text-white">Did you know?</h2>
          <br />
          <p className="m-2 text-dark">
            Many children with dyslexia also have dyscalculia. And almost half
            of the children who have ADHD also have LD. Learn more from NCLD’s
            “The State of LD” report.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
