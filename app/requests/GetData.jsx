import Menu from "../components/Menu";
import global from "../css/global.module.css";

const MENUS_API = "http://localhost:8000/menus";

async function getData() {
  const res = await fetch(MENUS_API);
  // console.log(res);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Render() {
  const data = await getData();
  // const dataArray=JSON.stringify(data)

  return (
    <div>
      <ul>
        {data?.map(({id,title,hasSubMenu,subMenus}) => (
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
        ))}
      </ul>
    </div>
  );
}

{
  /* {data.title}-{data.id}-{data.hasSubMenu}-{data.subMenus[0].title}
<div>{data.hasSubMenu=='true' ? 'show' : 'hide'}</div> */
}
