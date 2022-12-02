import "./App.scss";
import Navbar from "./components/Navbar.jsx";
import Draggable from "react-draggable";

function App() {
  return (
    <div className='desktop'>
      <Navbar></Navbar>
      <div className='draggableContent'>
        <div className='orden'>
          <Draggable>
            <div className='carpetPic'>
              <img src='../1.png' alt='' />
              <p>MacintoshHD</p>
            </div>
          </Draggable>
          <Draggable>
            <div className='carpetPic'>
              <img src='../77.png' alt='' />
              <p>Profile Pic</p>
            </div>
          </Draggable>
          <Draggable>
            <div className='carpetPic'>
              <img src='../11.png' alt='' />
              <p>About Me</p>
            </div>
          </Draggable>
          <Draggable>
            <div className='carpetPic'>
              <img src='../58.png' alt='' />
              <p>Tools</p>
            </div>
          </Draggable>
          <Draggable>
            <div className='carpetPic'>
              <img src='../44.png' alt='' />
              <p>Education</p>
            </div>
          </Draggable>
          <Draggable>
            <div className='carpetPic'>
              <img src='../62.png' alt='' />
              <p>Work Exp</p>
            </div>
          </Draggable>
        </div>
        <div className="trash">
            <Draggable>
              <div className='carpetPic'>
                <img src='../6.png' alt='' />
                <p>Trash</p>
              </div>
            </Draggable>
          </div>
      </div>
      <div className="barra">
      <img src="../barraopen.png" alt=""/>
      </div>
    </div>
  );
}

export default App;
