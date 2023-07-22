"use client";

import React, { useState, useEffect } from "react";

export default function Menu({menuitem}) {

  const [menu, setMenu] = useState({});



// const obj3 = JSON.parse('{"name":"John", "age":30, "city":"New York"}');

// console.log(obj3);
useEffect(() => {
    // console.log("useEffect called");
    // setMenu(obj3)

  }, []);
    // console.log(menu.name);

  return (
    <>
{menuitem}

    </>
  );
}
