import { Children, useState } from "react";
import Feedback from "../../components/Feedback/Feedback"; 
import { Like } from "../../assets";


 //import Button from "/MyFolder/TSReact/mein-app-ts/src/components/Button/Button";

import "./styles.css";
import Input from "../../components/Input/Input";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import LoginForm from "../../components/LoginForm/LoginForm";
//import Button from "../Button/Button";

function Homework21() {
  // Создаем state для likes
  const [likes, setLikes] = useState(0);
  // Создаем state для dislikes
  const [dislikes, setDislikes] = useState(0);

  // Создаем функцию, которая будет увеличивать likes на 1
  const onLike = () => {
    setLikes((prevValue) => {
      return prevValue + 1;
    });
  };

  // Создаем функцию, которая будет увеличивать dislikes на 1
  const onDislike = () => {
    setDislikes((prevValue) =>{ return prevValue + 1});
    
  };

  // Создаем функцию, которая будет сбрасывать все результаты
  const resetResults = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div>
    Homework 21: Feedback
    <Feedback likes={likes} dislikes={dislikes} onDislike={onDislike}
    onLike={onLike} resetResults={resetResults} />
  Homework 21: ProfilCard
  <ProfileCard children={"imHere"} imgSrc={""} profileData={"DataProfil"} />
  Homework 21: LoginForm
    <LoginForm  />
  </div>
  );
}

export default Homework21;