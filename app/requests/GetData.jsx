import Menu from "../components/Menu";
import global from "../css/global.module.css";
const axios = require('axios');
const MENUS_API = "http://localhost:8000";

export default async function getData(param) {
 try {const response = await axios.get(`${MENUS_API}/${param}`);
  console.log("axios",response.data);
  return response.data;
} catch (error) {
  console.error(error);
}









//   const res = await fetch(`${MENUS_API}/${param}`);
//   //  console.log(`${MENUS_API}/${param}`);
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }




}
