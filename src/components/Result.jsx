import React from 'react'

const Result = ({ selected }) => {
    return (
          <div>
            { selected.map((item,i) => (
                <div key={i} className="d-flex">
                    <h5>{item.name} :</h5>
                    <h5>{(localStorage.getItem(`${item.name}`)/item.questions.length)*100}%</h5>
                </div>
            ))
          }
            </div> 
    
    )
}

export default Result