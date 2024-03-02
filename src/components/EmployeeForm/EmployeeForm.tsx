import { ChangeEvent, Dispatch,
   SetStateAction, 
   useState, } from  "react";

import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { EmployeeInfo } from "./types";
import { EmployeeCard, 
  EmployeeFormContainer, 
  EmployeeFormWrapper, 
  EmployeeInfoContainer, 
  EmployeeInfoText, 
  EmployeeTitle } from "./styles";

function EmployeeForm () {
 const [nameValue, setNameValue]= useState<string>("");
 const [lastNameValue, setLastNameValue]=useState<string>("");
 const [ageValue, setAgeValue] = useState  <string>("");
 const [jobPositionValue, setJobPositionValue] = useState<string>("");
 const[isSchowcard, setIsSchowCard]= useState<boolean>(false)
const [userInfo, setUserInfo]= useState<EmployeeInfo>({
  name: " ",
  lastName: " ",
  ageValue: " ",
  jobPosition: " ",

});
const onChangeFieldsValue = (
  event : ChangeEvent <HTMLInputElement>,
  setFieldValue: Dispatch<SetStateAction<string>>
)=>{
  setFieldValue(event.target.value);
};
const createEmployeeCard = () => {
  if (!!nameValue && !!lastNameValue && !!ageValue 
    && !!jobPositionValue) {
      setUserInfo({
       name: nameValue,
       lastName: lastNameValue,
       ageValue: ageValue,
       jobPosition: jobPositionValue,
      });
      setIsSchowCard(true);
    }else{
      setIsSchowCard(false);
      setTimeout(()=> alert ("Введите данные во все поля"),0);
    }
};
return (
  <EmployeeFormWrapper>
    <EmployeeFormContainer>
      <Input
      id = "fristName_id"
      name = "firstName"
      onChange={(event:ChangeEvent<HTMLInputElement>)=>
      onChangeFieldsValue(event, setNameValue)}
      value= {nameValue}
      label = "Имя"
      placeholder="Иван"/>
      <Input
      id = "last_name_id"
      name="lastName"
      onChange={(event:ChangeEvent<HTMLInputElement>)=>
      onChangeFieldsValue(event, setLastNameValue)}
      value = {lastNameValue}
      label = "Фамилия"
      placeholder = "Василевский"/>
      <Input
        id="age_id"
        name="age"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
         onChangeFieldsValue(event, setAgeValue)} 
         value={ageValue} 
         label="Возраст" 
         placeholder="25"      
         />
         <Input
          id="job_position_id"
          name="job_position"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChangeFieldsValue(event, setJobPositionValue)
          }
          value={jobPositionValue}
          label="Должность"
          placeholder="Старший специалист"
        />
        <Button name="Создать" onClick={createEmployeeCard} />
      </EmployeeFormContainer>
      {/* Если в левой части от && у вас false, то правая часть(JSX элементы) не показываются, 
      если же левая часть от && true, то правая часть(JSX элементы) отображается */}
      {isSchowcard && (
        <EmployeeCard>
          <EmployeeInfoContainer>
            <EmployeeTitle>Имя</EmployeeTitle>
            <EmployeeInfoText>{userInfo.name}</EmployeeInfoText>
          </EmployeeInfoContainer>
          <EmployeeInfoContainer>
            <EmployeeTitle>Фамилия</EmployeeTitle>
            <EmployeeInfoText>{userInfo.lastName}</EmployeeInfoText>
          </EmployeeInfoContainer>
          <EmployeeInfoContainer>
            <EmployeeTitle>Возраст</EmployeeTitle>
            <EmployeeInfoText>{userInfo.ageValue}</EmployeeInfoText>
          </EmployeeInfoContainer>
          <EmployeeInfoContainer>
            <EmployeeTitle>Должность</EmployeeTitle>
            <EmployeeInfoText>{userInfo.jobPosition}</EmployeeInfoText>
          </EmployeeInfoContainer>
        </EmployeeCard>
      )}
    </EmployeeFormWrapper>
)
}
export default EmployeeForm;
