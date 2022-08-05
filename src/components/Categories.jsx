import React,{useState} from "react";

const Categories = ({ data ,selected}) => {

  const [clicked,setClicked] = useState({})

  const selection = (item,i)=>{
    setClicked((prev)=>({...prev, [i] : !prev[i]}))
       const st = selected.indexOf(item);
       if(st === -1){
        selected.push(item)
       }
       else{
        selected.splice(st,1);
       }
  }

  return (
    <div className="container">
      <div className="row p-4">What grade is the person in?</div>
      <div className="row p-4">
        Signs of LDs can be detected in children as young as 4. But often, signs
        don’t show up (or are not noticed) until grades 3-5 —or even later in
        life. And of course, no two people are exactly alike, even if they have
        the same type of LD.
      </div>
      <div className="row">
        <div className="col-md-8 ">
          <div className="row">
            {data.map((item, i) => (
              <button key={i} style={{backgroundColor : `${clicked[i] ? "#0d6efd":""}`,color : `${clicked[i] ? "white":"#0d6efd"}`}} onClick={() => selection(item,i)} className="col-md-3  p-5 m-3 btn border border-primary">
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <div
          style={{ height: "300px" }}
          className="btn btn-primary mt-3 col-md-4"
        ></div>
      </div>
    </div>
  );
};

export default Categories;
