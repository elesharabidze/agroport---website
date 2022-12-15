import styled, { keyframes } from "styled-components"

export const ScrollToTopIconAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  5.55556% {
    transform: translateY(0);
  }
  11.11111% {
    transform: translateY(0);
  }
  22.22222% {
    transform: translateY(-15px);
  }
  27.77778% {
    transform: translateY(0);
  }
  33.33333% {
    transform: translateY(-15px);
  }
  44.44444% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
`
export const ScrollTopWrapper = styled.div `
  position: fixed;
  width: 100%;
  bottom: 60px;
  height: 20px;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
  opacity: 0.5;
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  background-color: transparent;
  &:hover{
      opacity: 1;
  }
  @media (max-width: 700px){
    bottom: 50px;
  }
`
export const ScrollTopIcon = styled.img`
  width: 75px;
  padding-right: 15px;
  animation-iteration-count: infinite;
  animation-duration: 1.5s;
  animation: bounce 3.6s ease infinite;
  animation-name: ${ScrollToTopIconAnimation};
  transform-origin: 50% 50%;
  @media (max-width: 700px){
    width: 65px;
    padding-right: 10px;
  }  
`