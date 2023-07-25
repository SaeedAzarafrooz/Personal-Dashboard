import styles from "./css/HomePage.module.css";
import Image from 'next/image'
import profilePic from './images/vercel.svg'
import profilePic2 from './images/next.svg'
import Link from "next/link";


export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.H1}>Main section</h1>
        <Link href="/about/10">about/10</Link>
      </div>
    </main>
  );
}
