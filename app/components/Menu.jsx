"use client";
import global from "../css/global.module.css";

import React, { useState, useEffect } from "react";
import getData from '../requests/GetData'
export default function Menu({menuitem}) {

  const [menus, setMenus] = useState([]);
  const [isLoading, setLoading] = useState(false)


useEffect(() => {
  const getMenus = async () => {
    setLoading(true);
    const menus = await getData('menus');
    setMenus(menus);
    setLoading(false);
  };
  getMenus();
  return () => { 
    // this now gets called when the component unmounts
    //Solution |^|:https://ultimatecourses.com/blog/using-async-await-inside-react-use-effect-hook
  };
}, []);


if (isLoading) return <p>Loading...</p>
return(
<ul>
  {menus?.map(({id,title,hasSubMenu,subMenus}) => (
    <li key={id}>
      <span>{title}</span>
      {hasSubMenu == "true"
              ? subMenus?.map(({id,title}) => (
                  <ul>
                    <li key={id} className={global.sublist}>
                    <span> {title}</span>
                    </li>
                  </ul>
                ))
              : null}
      </li>
  ))}
</ul>)
 
    /* {data.title}-{data.id}-{data.hasSubMenu}-{data.subMenus[0].title}
<div>{data.hasSubMenu=='true' ? 'show' : 'hide'}</div> */



    {/* //بینهایت تکرار میشه چون فکر کنم شروط ورود به ایف هارو 
    //درست اعمال نکردم باید ویدئو حسان رو دوباره ببینم */}
        {/* {menus?.map(({id,title,hasSubMenu,subMenus}) => (
          <li key={id}>
            <Menu menuitem={title} />
            {hasSubMenu == "true"
              ? subMenus.map(({id,title,hasSubMenu,subMenus}) => (
                  <ul>
                    <li key={id} className={global.sublist}>
                      <Menu menuitem={title} />
                    </li>
                  </ul>
                ))
              : null}
          </li>
        ))} */}
   



}
