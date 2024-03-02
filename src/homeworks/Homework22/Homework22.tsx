import { useState, ChangeEvent } from "react";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import {Homework22Wrapper, ButtonsContainer, InputsContainer} 
from "./styles";

function Homework22(){
    const [inputValue1, setInputValue1] = useState<string>("");
  const [inputValue2, setInputValue2] = useState<string>("");

  const onChangeInput1 = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue1(event.target.value);
  };

  const onChangeInput2 = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event.target.value);
  };

    return (
        <Homework22Wrapper>
            <ButtonsContainer>
                <Button name="Send"/>
                <Button name = "Delete" isRed />
                <Button name = "Disable Button" disabled/>
            </ButtonsContainer>
            <InputsContainer>
            <Input
            value={inputValue1}
            onChange={onChangeInput1}
            label="Simple input"
            name="simpleInput"
            id ="simple-input"
            placeholder="Enter your name"/>
            <Input 
            value={inputValue2}
            onChange={onChangeInput2}
            label="Disable input"
            name="disabledInput"
            id ="disable-input"
            placeholder="Enter your name"/>
            disabled


            </InputsContainer>
        </Homework22Wrapper>

    )
}
export default Homework22;