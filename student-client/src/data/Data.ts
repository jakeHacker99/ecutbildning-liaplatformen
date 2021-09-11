import { Link } from "react-router-dom";
export interface row{
  id: number;
  Företag: String,
  Email: String;
  Hemsida: String;
  Favoriter: Boolean;
}




export const rows = [
  {
    id: 1,
    Företag: "Volvo",
    Email: "ribet@optonline.net",
    Utbildningar: ["java", "linux", "php"],
    Hemsida: "volvo.se",
    Favoriter: true
  }as row,
  {
    id: 2,
    Företag: "Google",
    Email: "johndo@live.com",
    Hemsida: "google.se",
    Utbildningar: ["react", "typescript", "php"],
    Favoriter: false,
  }as row,
  {
    id: 3,
    Företag: "NetonNet",
    Email: "andersbr@yahoo.com",
    Utbildningar: ["flutter", "typescript", "firebase"],
    Hemsida: "NetonNet.se",
    Favoriter: true,
  }as row,
  {
    id: 4,
    Företag: "MediaMarkt",
    Email: "reziac@me.com",
    Utbildningar: ["Kotlin", "tdd"],
    Hemsida: "MediaMarkt.se",
    Favoriter: false,
  }as row,
  {
    id: 5,
    Företag: "elgiganten",
    Email: "moonlapse@aol.com",
    Utbildningar: ["Redis", "Graphql"],
    Hemsida: "elgiganten.se",
    Favoriter: false,
  }as row,
  {
    id: 6,
    Företag: "Amazon",
    Email: "mbswan@sbcglobal.net",
    Utbildningar: ["Junit 5", "MongoDb"],
    Hemsida: "Amazon.se",

    Favoriter: true,
  }as row,
  {
    id: 7,
    Företag: "Netflix",
    Email: "floxy@icloud.com",
    Hemsida: "Netflix.se",
    Favoriter: false,
  }as row ,
  {
    id: 8,
    Företag: "Facebook",
    Email: "Facebook@icloud.com",
    Hemsida: "Facebook.se",
    Favoriter: true,
  }as row,
  {
    id: 9,
    Företag: "Beats",
    Email: "Beats@icloud.com",
    Hemsida: "Beats.se",
    Favoriter: false,
  }as row,
  {
    id: 10,
    Företag: "Netflix",
    Email: "floxy@icloud.com",
    Hemsida: "volvo.se",
    Favoriter: false,
  }as row,
  {
    id: 11,
    Företag: "Netflix",
    Email: "floxy@icloud.com",
    Hemsida: "volvo.se",
    Favoriter: false,
  }as row,
  {
    id: 12,
    Företag: "Netflix",
    Email: "floxy@icloud.com",
    Hemsida: "volvo.se" ,
    Favoriter: false ,
  }as row, 
  {
    id: 13,
    Företag: "Netflix",
    Email: "floxy@icloud.com",
    Hemsida: "volvo.se",
    Favoriter: false,
  }as row,
  {
    id: 14,
    Företag: "Netflix",
    Email: "floxy@icloud.com",
    Hemsida: "volvo.se",
    Favoriter: false,
  }as row,
  {
    id: 15,
    Företag: "Netflix",
    Email: "floxy@icloud.com",
    Hemsida: "volvo.se",
    Favoriter: false,
  }as row,
];
export enum Teknologier {
  Java = "java",
  Typescript = "Typescript",
  Php = "Php",
  Linux = "Linux",
  Javascript = "Javascript",
  C = "C",
  Apputveckling = "Apputveckling",
  Testare = "Testare",
  Python = "Python",
  NET = "NET",
}
export const columns =[

]