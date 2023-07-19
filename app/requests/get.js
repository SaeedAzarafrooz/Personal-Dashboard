// "use client"

// import React, { Component } from "react"
// import axios from "axios"
// const jsonserver_LocalURL="http://localhost:8000"

// export default class extends Component {
//     componentDidMount() {
// axios.get(`${jsonserver_LocalURL}/menus`)
// .then(response => {
//     console.log(response.data)
//   })
//   .catch(error => {
//     console.log(error)
//   })
// }

// render() {
//     return (
//       <div>
//         <span>{response.data} Page Content Goes Here</span>
//       </div>
//     )
//   }
// }

import axios from "axios"
const jsonserver_LocalURL="http://localhost:8000"
async function getMenus() {
    axios.get(`${jsonserver_LocalURL}/menus`)
    .then(response => {
        // console.log(response.data)
    //  return response.data;
          })
          .catch(error => {
            console.log(error)
          })
        }

  export default async function Menus() {
    const menus = await getMenus()
    // console.log(menus);
    return (
    <ul>
       
    {menus?.map((menu) => (
      <li key={menu.id}>
        <a href='#'>{menu.title}</a>
        {/* <Link href={`/menus/${user.id}`}>{user.title}</Link> */}
      </li>
    ))}
  </ul>
  )
  }