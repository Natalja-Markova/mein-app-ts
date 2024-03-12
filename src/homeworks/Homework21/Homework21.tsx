import { Children, useState } from "react";
import Feedback from "../../components/Feedback/Feedback"; 

import "./styles.css";
import Input from "../../components/Input/Input";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import LoginForm from "../../components/LoginForm/LoginForm";
import { type } from "os";
//import Button from "../Button/Button";

function Homework21() {
  // Создаем state для likes
  const [likes, setLikes] = useState<number>(0);
  // Создаем state для dislikes
  const [dislikes, setDislikes] = useState<number>(0);

  // Создаем функцию, которая будет увеличивать likes на 1
  const onLike = ():void => {
    setLikes((prevValue) => {
      return prevValue + 1;
    });
  };

  // Создаем функцию, которая будет увеличивать dislikes на 1
  const onDislike = ():void => {
    setDislikes((prevValue) =>{ 
      return prevValue + 1});
    
  };

  // Создаем функцию, которая будет сбрасывать все результаты
  const resetResults = ():void => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div>
    Homework 21: Feedback
    <Feedback likes={likes} dislikes={dislikes} onDislike={onDislike}
    onLike={onLike} resetResults={resetResults} />
  Homework 21: ProfilCard
  {/* <ProfileCard children={"imHere"} imgSrc={""} ProfileData={"DataProfil"} /> */}
  Homework 21: LoginForm
    <LoginForm  />
  </div>
  );
}
type CustomArreyType<Type>=Type[];

const stringsArray:string[] = ["Cat","Dog","Lion"]
const booleanArray:CustomArreyType<boolean>=[true,true,false]

export default Homework21;