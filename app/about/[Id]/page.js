import getData from '../../requests/GetData'


// export const getStaticPaths=async () => {
//     const res= await getData('menus');
//     // const data = await res.json();
//     const paths=res.map(menus=>{
//         console.log(menus.id);
//         return{
//             params:{id: menus.id.toString()}
//         }
//     })
//     return {
//         paths,
//         fallback: false
//     }
// }

// export const getStaticProps=async (context)=>{
//     const id=context.params.id;
//     const res=await fetch('http://localhost:8000/menus/'+id);
//     const data = await res.json();
//     return{
//         props: {menus:data}
//     }
// }
// export default async function UserPosts({params}) {
//     const userFirstPost = await getUserPosts(params['userId'])
//     const postData = userFirstPost[0]

// }

export default function AboutDetails({ params }) {
    return <h1>About Page id:  - {params.id}</h1>;
  }