import styles from "./css/HomePage.module.css";
import Image from 'next/image'
import profilePic from './images/vercel.svg'
import profilePic2 from './images/next.svg'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.H1}>Main section</h1>
        <a>aks injast
          <Image
              src={profilePic}
              alt="Vercel Logo"
              
              width={100}
              height={24}
              priority
            />
            </a>
            <a>aks2 injast
          <Image
              src={profilePic2}
              alt="next Logo"
              priority
            />
            </a>

            <div className={styles.box}></div>
      </div>
    </main>
  );
}
