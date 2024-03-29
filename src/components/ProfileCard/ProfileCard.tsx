import { ProfileCardProps } from "./types";
import {
  ProfileCardContainer,
  ProfileAvatar,
  AvatarControl,
  FirstLastName,
  ProfileCardInfo,
}
from "./styles"
// import normalizeFirstLastName, { profile } from "./data";
// Что такое props - это обьект, через котроый вы можете передавать данные от родителя -
// ребенку
function ProfileCard({
  profileData,
   imgSrc, 
   children = <h1>User Card</h1>,}
   : ProfileCardProps) {
    const normalizeFirstLastName =()=>{
      return `
        ${profileData.firstName} ${profileData.lastName}
      `;
    };
  

  // К нам пришли данные с сервера
  // JSX: Передача html кода переменной
  // const cardName = <h1>User info</h1>;

  return (
    <ProfileCardContainer>
      {children}
      <AvatarControl>
        <ProfileAvatar
          alt="Profile Avatar"
          src={imgSrc}
        />
      </AvatarControl>
      <FirstLastName>{normalizeFirstLastName()}</FirstLastName>
      <ProfileCardInfo>Career: {profileData.career}</ProfileCardInfo>


      <ProfileCardInfo>Hair Color: {profileData.hairColor}</ProfileCardInfo>
      <ProfileCardInfo>Hobby: {profileData.hobby}</ProfileCardInfo>
    </ProfileCardContainer>
  );
}

// 3 cпособ экспорта - как default
export default ProfileCard;