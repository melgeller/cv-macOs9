import React from 'react'
import styled from 'styled-components'

export const Modal = ({children, estado, cambiarEstado, posicionModal}) => {
  return (
    <>
    {estado && 
        <Overlay>
            <ContenedorModal posicionModal={posicionModal}>
            <BotonCerrar onClick={() => cambiarEstado(false)}></BotonCerrar>
            {children}
            </ContenedorModal>
        </Overlay>
    }
    </>
  )
}

const Overlay = styled.div`
width: 88vw;
height: 90vh;
position: fixed;
top: 0;
left: 0;
padding: 30px;
padding-top: 60px;
display: flex;
align-items: ${props => props.posicionModal ? props.posicionModal : 'flex-start'};
justify-content: flex-end;
`
const ContenedorModal = styled.div`
position: relative;

`

const BotonCerrar = styled.button`
position: absolute;
top: 6px;
left: 6px;
width: 15px;
height: 15px;

`