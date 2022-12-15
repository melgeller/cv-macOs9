import "./App.scss";
import Navbar from "./components/Navbar.jsx";
import Draggable from "react-draggable";
import { useState } from "react";
import { Modal } from "./components/Modal";
import { useEffect } from "react";

function App() {
  const open = require('./imgs/barraclosed.png');
  const closed = require('./imgs/barraopen.png');
  const [img, setImg] = useState(true);
  const [loaded, setLoaded] = useState(false)
  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const [estadoModal2, cambiarEstadoModal2] = useState(false);
  const [estadoModal3, cambiarEstadoModal3] = useState(false);
  const [estadoModal4, cambiarEstadoModal4] = useState(false);
  const [estadoModal5, cambiarEstadoModal5] = useState(false);
  const [estadoModal6, cambiarEstadoModal6] = useState(false);

  const imgChangeHandler = () => {
    if(!img) {
      setImg(true);
    }else{
      setImg(false)
    }
  };
  
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 5000)
  })


  return (
    <>
    {loaded ? (
    <div className='desktop'>
      <Navbar></Navbar>
      <div className='draggableContent'>
      <Modal
       estado={estadoModal1}
       cambiarEstado={cambiarEstadoModal1}
       posicionModal={'center'}>
        <img src="../profilepic.png" alt=""/>
      </Modal>
      <Modal
       estado={estadoModal2}
       cambiarEstado={cambiarEstadoModal2}>
        <img src="../about.png" alt=""/>
      </Modal>
      <Modal
       estado={estadoModal3}
       cambiarEstado={cambiarEstadoModal3}>
        <img src="../education.png" alt=""/>
      </Modal>
      <Modal
       estado={estadoModal4}
       cambiarEstado={cambiarEstadoModal4}>
        <img src="../tools.png" alt=""/>
      </Modal>
      <Modal
       estado={estadoModal5}
       cambiarEstado={cambiarEstadoModal5}>
        <img src="../exp.png" alt=""/>
      </Modal>
      <Modal
       estado={estadoModal6}
       cambiarEstado={cambiarEstadoModal6}>
        <img src="../mac.png" alt=""/>
      </Modal>
        <div className='orden'>
          <Draggable>
            <div className='carpetPic'>
              <input onClick={() => cambiarEstadoModal6(!estadoModal6)} type="image" name="hd" id="hd" src="../1.png" alt="hd"/>
              <p>MacintoshHD</p>
            </div>
          </Draggable>
          <Draggable>
            <div className='carpetPic'>
            <input onClick={() => cambiarEstadoModal1(!estadoModal1)} type="image" name="pp" id="pp" src="../77.png" alt="pp"/>
              <p>Profile Pic</p>
            </div>
          </Draggable>
          <Draggable>
            <div className='carpetPic'>
            <input onClick={() => cambiarEstadoModal2(!estadoModal2)} type="image" name="about" id="about" src="../11.png" alt="about"/>
              <p>About Me</p>
            </div>
          </Draggable>
          <Draggable>
            <div className='carpetPic'>
            <input onClick={() => cambiarEstadoModal4(!estadoModal4)} type="image" name="tools" id="tools" src="../58.png" alt="tools"/>
              <p>Tools</p>
            </div>
          </Draggable>
          <Draggable>
            <div className='carpetPic'>
            <input onClick={() => cambiarEstadoModal3(!estadoModal3)} type="image" name="edu" id="edu" src="../44.png" alt="edu"/>
              <p>Education</p>
            </div>
          </Draggable>
          <Draggable>
            <div className='carpetPic'>
            <input onClick={() => cambiarEstadoModal5(!estadoModal5)} type="image" name="work" id="work" src="../62.png" alt="work"/>
              <p>Work Exp</p>
            </div>
          </Draggable>
        </div>
        <div className="trash">
            <Draggable>
              <div className='carpetPic'>
              <a href="https://melgeller-portfolio.vercel.app/"><img src="../6.png" alt=""/></a>
                <p>Trash</p>
              </div>
            </Draggable>
          </div>
      </div>
      <div className="barra">
      <img src={!img ? open : closed } alt="" onClick={imgChangeHandler}/>
      <p>Silvia Abad García, 2022</p>
      </div>
      
    </div>
    
    ) : (
      <div className="loadingPage">
        <img src="../charge.gif" alt=""/>
      </div>
    )}
</> )
}
  

export default App;
