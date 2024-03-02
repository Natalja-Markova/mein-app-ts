
export type {ChangeEvent } from "react";

import LoginForm from  "components/LoginForm/LoginForm"
import {
    Lesson23Wrapper,
    ContainerWrapper,
    BoxBlueContainer,
    BoxGreenContainer,
    BoxRedContainer,
    InputComponent
  } from "./styles";
import { useState } from "react";


  
  function Lesson23() {
    const[inputValue,setInputValue] =  useState <string>("");
    const onChangeInput = (event :any) =>{
      setInputValue(event.target.value);
    }
    return (
      <Lesson23Wrapper>
        <ContainerWrapper>
          <BoxBlueContainer>Blue box</BoxBlueContainer>
          <BoxGreenContainer>Green box</BoxGreenContainer>
          <BoxRedContainer>Red box</BoxRedContainer>
        </ContainerWrapper>
        <InputComponent onChange={onChangeInput}
         value={inputValue} 
         placeholder="Enter something"/>
         <LoginForm/>
      </Lesson23Wrapper>
    );
  }
  
  export default Lesson23;
  
