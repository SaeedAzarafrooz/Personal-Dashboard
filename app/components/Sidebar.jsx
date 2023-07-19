import sidebar from '../css/sidebar.module.css';
import Image from 'next/image';
import DashSidbarIcon from '../images/speedometer-icon.png';


export function Sidebar() {
    return (
        <div>
            <Image src={DashSidbarIcon}
              alt="Dashboard Logo"
              width={100}
              height={24}
              priority/>
            <h1 className={sidebar.titleH1}>sidebar component</h1>
        </div>
    );
}