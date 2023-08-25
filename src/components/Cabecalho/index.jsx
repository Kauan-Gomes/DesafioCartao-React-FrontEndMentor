import React from 'react'
import { Fundo, CartaoFrente, CartaoTras } from './style'

import fundoMobile from './bg-main-mobile.png'
import fundoDesktop from './bg-main-desktop.png'
import ImgCartaoFrente from '../../img/bg-card-front.png'
import ImgCartaoTras from '../../img/bg-card-back.png'


export default function Cabecalho() {
  return (
    <Fundo>
      <img src={fundoMobile} alt="" />
      <CartaoFrente>
        <img src={ImgCartaoFrente} alt="parte de frente do cartão" />
        <div>
          <span>
          </span>
          <h2>0000 0000 0000 0000</h2>
          <h3>
             <span>Kauan Gomes silva</span>
             <h4>00/00</h4>
          </h3>
        </div>

      </CartaoFrente>
      <CartaoTras>
        <img src={ImgCartaoTras} alt="parte de trás do cartão" />
        <span>
          000
        </span>
      </CartaoTras>
    </Fundo>
  )
}
