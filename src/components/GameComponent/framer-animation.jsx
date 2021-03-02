import React from "react";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import skyUrl from '../../assets/img/mario/sky.png';

export const PreviewContainer = styled.div`
  width: 10em;
  height: 22em;
  display: flex;
  flex-direction: column;
  &:not(:last-of-type) {
    //margin-right: 4em;
  }
`;

export const AnimationContainer = styled.div`
  width: 100%;
  height: 17em;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GroundContainer = styled.div`
  width: 100%;
  height: 4px;
  background-color: #000;
  border-radius: 10px;
  position: absolute;
  bottom: 0;
`;

export const AnimationTitle = styled.h3`
  color: #353535;
`;
const Ball = styled(motion.div)`
  width: 4em;
  height: 4em;
  border-radius: 50%;
  background-color: #00cec9;
  border: 2px solid #252525;
`;

const bounceTransition = {
  y: {
    duration: 1,
    yoyo: Infinity,
    ease: "easeIn",
  },
  backgroundColor: {
    duration: 0,
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: 1,
  },
};

const BackgroundBody = styled.div`
  width: 100vw;
  height: 50vh;
  background-color: red;
  margin: 0;
  padding: 0;
`;

const moving = keyframes`
0% {
  background-position: 0 0;
}

100% {
  background-position: 95% 0;
}
`;

const Wrapper = styled.div`
margin: 0;
padding: 0;
`;


const viewHeight = 90;

const BackImage = styled.div`
position: relative;
background: url(${skyUrl});
height: ${viewHeight}vh;
-webkit-background-size: cover;
background-size: cover;
background-position: 0 0;
background-repeat: repeat-x;
-webkit-animation: ${moving} 5s linear infinite;
animation: ${moving} 25s linear infinite;
`;


const FramerAnimation = props => {

  /*********************** */

  /******************* */

  return (
    <>
      <BackgroundBody>
        <Wrapper>
          <BackImage>

          </BackImage>
        </Wrapper>
      </BackgroundBody>
      <PreviewContainer>
        <AnimationTitle>Framer Motion</AnimationTitle>
        <AnimationContainer>
          <Ball
            transition={bounceTransition}
            animate={{
              y: ["0em", "12.8em"],
              //backgroundColor: ["#9b59b6", "#f1c40f"],
            }}
          />
          <GroundContainer />
        </AnimationContainer>
      </PreviewContainer>
    </>
  );
}

export default FramerAnimation