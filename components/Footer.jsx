import React from "react";
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 Alfa TEC Todos os direitos Reservados</p>
      <p className="icons">
          <AiFillFacebook/>
          <AiFillInstagram/>
      </p>
    </div>
  )
}
export default Footer