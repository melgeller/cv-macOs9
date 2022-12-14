import React from 'react'
import Draggable from 'react-draggable'
import styled from 'styled-components'

export const Modal = ({children, estado, cambiarEstado, posicionModal}) => {
  return (
    <>
    {estado && 
    <Draggable>
        <Overlay>
            <ContenedorModal posicionModal={posicionModal}>
            <BotonCerrar onClick={() => cambiarEstado(false)}></BotonCerrar>
            {children}
            </ContenedorModal>
        </Overlay>
        </Draggable>
    }
    </>
  )
}

const Overlay = styled.div`
width: auto;
height: auto;
position: fixed;
top: 0;
left: 0;
padding: 30px;
padding-top: 60px;
display: flex;
justify-content: center;
`
const ContenedorModal = styled.div`
position: relative;
cursor: move;

`

const BotonCerrar = styled.button`
position: absolute;
top: 6px;
left: 6px;
width: 15px;
height: 15px;
cursor: pointer;

`