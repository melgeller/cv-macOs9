import "./App.scss";
import Navbar from "./components/Navbar.jsx";
import Draggable from "react-draggable";
import { useState } from "react";

function App() {
  const open = require('./imgs/barraclosed.png');
  const closed = require('./imgs/barraopen.png');
  const [img, setImg] = useState(false);

  const imgChangeHandler = () => {
    if(!img) {
      setImg(true);
    }else{
      setImg(false)
    }
  };
  return (
    <div className='desktop'>
      <Navbar></Navbar>
      <div className='draggableContent'>
        <div className='orden'>
          <Draggable>
            <div className='carpetPic'>
              <input type="image" name="hd" id="hd" src="../1.png" alt="hd"/>
              <p>MacintoshHD</p>
            </div>
          </Draggable>
          <Draggable>
            <div className='carpetPic'>
            <input type="image" name="pp" id="pp" src="../77.png" alt="pp"/>
              <p>Profile Pic</p>
            </div>
          </Draggable>
          <Draggable>
            <div className='carpetPic'>
            <input type="image" name="about" id="about" src="../11.png" alt="about"/>
              <p>About Me</p>
            </div>
          </Draggable>
          <Draggable>
            <div className='carpetPic'>
            <input type="image" name="tools" id="tools" src="../58.png" alt="tools"/>
              <p>Tools</p>
            </div>
          </Draggable>
          <Draggable>
            <div className='carpetPic'>
            <input type="image" name="edu" id="edu" src="../44.png" alt="edu"/>
              <p>Education</p>
            </div>
          </Draggable>
          <Draggable>
            <div className='carpetPic'>
            <input type="image" name="work" id="work" src="../62.png" alt="work"/>
              <p>Work Exp</p>
            </div>
          </Draggable>
        </div>
        <div className="trash">
            <Draggable>
              <div className='carpetPic'>
              <input type="image" name="trash" id="trash" src="../6.png" alt="trash"/>
                <p>Trash</p>
              </div>
            </Draggable>
          </div>
      </div>
      <div className="barra">
      <img src={!img ? open : closed } alt="" onClick={imgChangeHandler}/>
      </div>
      
    </div>
    
  );
}

export default App;
