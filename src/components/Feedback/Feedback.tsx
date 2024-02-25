import { useState } from "react";
import { FeedbackProps } from "./types";
import { Like, disLike } from "../../assets";

// import Button from "./Button/Button";

import "./styles.css";
import Button from "../Button/Button";

function Feedback({
  likes,
  dislikes,
  onLike,
  onDislike,
  resetResults,
}: FeedbackProps) {
  // Создаем state для likes
  //const [likes, setLikes] = useState(0);
  // Создаем state для dislikes
  //const [dislikes, setDislikes] = useState(0);

  // Создаем функцию, которая будет увеличивать likes на 1
  //const onLike = () => {
  //  setLikes((prevValue) => {
  //    return prevValue + 1;
  //  });
  //};

  // Создаем функцию, которая будет увеличивать dislikes на 1
  //const onDislike = () => {
  //   setDislikes((prevValue) => prevValue + 1);
  //};

  // Создаем функцию, которая будет сбрасывать все результаты
  //const resetResults = () => {
  //  setLikes(0);
  //   setDislikes(0);
  //};

  return (
    <div className="feedback-wrapper">
      <div className="feedback-control">
        <div className="buttonwithcount-container">
          {/* <Button name="Like" onClick={onLike} /> */}
          <div onClick={onLike} className="image-control">
            <img className="image" src={Like} alt="Like img" />
          </div>
          <p className="count">{likes}</p>
        </div>
        <div className="buttonwithcount-container" onClick={onDislike}>
          <div onClick={onDislike}  className="image-control">
          <img className="image" src={disLike} alt="Like img" />
          </div>
          <p className="count">{dislikes}</p>
        </div>
      </div>
      <Button name="Reset Results" onClick={resetResults} />
    </div>
  );
}

export default Feedback;
