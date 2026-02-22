import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import accordionData from "./Data/Data";

function App() {
  const [id, setid] = useState([]);

  function func(index){


    if(id.includes(index)){
     const arr = id.filter((val) => {
        return val!=index;
      })

      setid(arr);


    }else{

      setid([...id, index]);

    }

  }

  return (
    <>
      <div className="main-div">
        <div className="innerdiv">
          {accordionData.map((val, index) => (
            <div key={index}>
              <div onClick={() => func(index)} className="accodio-heading">
                {val.question}
              </div>

              {id.includes(index) && (
                <div className="accordion-content">{val.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
