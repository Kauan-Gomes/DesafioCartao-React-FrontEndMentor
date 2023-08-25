import { styled } from "styled-components";

export const Fundo = styled.section`
    height: 200px;
    position: relative;
    
`

export const CartaoFrente = styled.div`
    position: absolute;
    top: 130px;
    left: 30px;
    z-index: 2;
    
    div{
        span{
        position: absolute;
        background-color: #fff;
        height: 35px;
        width: 35px;
        z-index: 1;
        border-radius: 100%;
        top: 20px;
        left: 20px;
        }
        
        h2{
            font-weight: 500;
            color: #fff;
            font-size: 16px;
            position: absolute;
            background-color: transparent;
            width: 200px;
            z-index: 1;
            top: 75px;
            left: 40px;
        }
        h3{
            font-weight: 500;
            color: #fff;
            display: flex;
            justify-content: space-around;
            font-size: 16px;
            position: absolute;
            background-color: transparent;
            width: 200px;
            z-index: 1;
            top: 85px;
            left: 40px;

            span{
                font-weight: 500;
                position: absolute;
                background-color: transparent;
                font-size: 12px;
                width: 130px;
                left: 0;
                
            }
            h4{
                font-weight: 500;
                font-size: 10px;
                position: absolute;
                right: 14px;
                margin: 0;
                top: 22px;
            }
        }
    }

    img{
        position: absolute;
        height: 150px;
        width: 240px;
        z-index: 1;
        
        border: .5px solid #000;
        border-radius: 12px;
    }
`



export const CartaoTras = styled.div`
    position: absolute;
    top: 40px;
    left: 60px;
    z-index: 1;

    img{
        position: absolute;
        height: 150px;
        width: 240px;
        border: .5px solid #000;
        border-radius: 12px;
        z-index: 0;
    }
    span{
        color: #fff;
        position: absolute;
        left: 170px;
        top: 63px;
        z-index: 2;
        font-size: 16px;
        background-color: transparent;
    }
`