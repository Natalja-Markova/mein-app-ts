import Button from "components/Button/Button";
import {PageTitle,
  Lesson22Wrapper, 
  ButtonControl, 
  ContainerWrapper, 
  GreenContainer, 
  BlueContainer, 
  RedContainer} from "./styles"
function Lesson22() {
    // inline - style Objekt
    // библиотека- Emotion, styled-components.
return (<Lesson22Wrapper>
    {/*<p style={{color: 'blue', fontSize:"30px"}}>Lesson22</p>*/}
    
     <PageTitle isRed={false}>Lesson22</PageTitle> 
     <ButtonControl>
       <Button type="button" name="Send"/>
     </ButtonControl>
     <ButtonControl>
        <Button type="button" isRed = {true} name="Delete"/> 
     </ButtonControl>
     <ContainerWrapper>
        <GreenContainer>Green</GreenContainer>
        <RedContainer>Red</RedContainer>
        <BlueContainer>Blue</BlueContainer>
      </ContainerWrapper>
     </Lesson22Wrapper>
     
);
}
export default Lesson22;