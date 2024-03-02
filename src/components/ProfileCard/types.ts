import { ReactNode } from "react";

interface ProfileData{
  age: number;
  firstName:string;
  lastName:string;
  career:string;
  hairColor:string;
  hobby: string;
}
export interface ProfileCardProps {
  profileData:ProfileData;
  imgSrc:string;
  children?:ReactNode;
  }