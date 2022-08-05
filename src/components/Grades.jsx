import React from 'react'
import {preSchool} from '../Data/data'

const Grades = ({setData}) => {
  return (
   
    <div className="container">
        <div className="row p-4">
        What grade is the person in?
        </div>
          <div className="row p-4">
          Signs of LDs can be detected in children as young as 4. But often, signs don’t show up (or are not noticed) until grades 3-5 —or even later in life. And of course, no two people are exactly alike, even if they have the same type of LD.
          </div>
      <div className="row">
        <div className="col-md-8 ">
          <div className="row">
            <button onClick={()=>setData(preSchool)} className="col-md-5  p-5 m-3 btn btn-outline-primary">Preschool</button>
            <button className="col-md-5  p-5 m-3 btn btn-outline-primary">Grades K-4</button>
            <button className="col-md-5 p-5  m-3 btn btn-outline-primary">Grades 5-8</button>
            <button className="col-md-5 p-5 m-3 btn btn-outline-primary">High School / Young Adult</button>
          </div>
        </div>
        <div style={{height:"300px"}} className="btn btn-primary mt-3 col-md-4"></div>
      </div>
    </div>
    
  )
}

export default Grades