import React from "react";
import { preSchool,Grades_K_4,High_School_Young_Adult, Grades_5_8  } from "./Data/data";

const Grades = ({ setData }) => {
  return (
    <div className="container">
      <h1
        style={{ fontWeight: "bold" }}
        className="row p-4 text-primary display-4"
      >
        What grade is the person in?
      </h1>
      <p className="row p-4 w-75 lead text-dark">
        Signs of LDs can be detected in children as young as 4. But often, signs
        don’t show up (or are not noticed) until grades 3-5 —or even later in
        life. And of course, no two people are exactly alike, even if they have
        the same type of LD.
      </p>
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <button
              onClick={() => setData(preSchool)}
              className="col-md-5  p-5 m-3 btn btn-outline-primary"
            >
              <h5>Preschool</h5>
            </button>
            <button onClick={() => setData(Grades_K_4)} className="col-md-5  p-5 m-3 btn btn-outline-primary">
              <h5>Grades K-4</h5>
            </button>
            <button onClick={() => setData( Grades_5_8 )} className="col-md-5 p-5  m-3 btn btn-outline-primary">
              <h5>Grades 5-8</h5>
            </button>
            <button onClick={() => setData(High_School_Young_Adult)} className="col-md-5 p-5 m-3 btn btn-outline-primary">
              <h5>High School / Young Adult</h5>
            </button>
          </div>
        </div>
        <div
          style={{ height: "300px",boxShadow:"inset 0px 0px 0px 10px white"}}
          className="btn btn-primary mt-3 col-md-4 text-center "
        >
          <h2 className="p-2 mt-3 text-white">Did you know?</h2>
          <br />
          <p className="m-2 text-dark" >
            Researchers have used brain imaging technology to study the
            structure of the brain and how it works. Comparing people with and
            without LDs, they found differences in brain structures and in how
            the brain works when reading and doing math.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Grades;
