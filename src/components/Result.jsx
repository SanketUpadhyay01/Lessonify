import React from 'react'
import Progress from './progress'

const Result = ({ selected }) => {

  const display = (item) =>{
    let res = (localStorage.getItem(`${item.name}`)/item.questions.length)*100;

    if(res <= 40){
      return <div>
                <h5>{item.low}</h5>
            </div>
    }
    else{
      return <div>
         <h5 className="p-2" >{item.medium}</h5>
         <p>{item.common}</p>
      </div>
    }

  }

    return (
          <div>
            { selected.map((item,i) => (
             <div className="card text-center m-5">
             <div className="card-header">
               {item.name}
             </div>
             <div className="card-body">
               <Progress done={((localStorage.getItem(`${item.name}`)/item.questions.length)*100).toFixed(2)} />
               <p className="card-text">{display(item)}</p>
             </div>
           </div>
            ))
          }
            </div> 
    
    )
}

export default Result