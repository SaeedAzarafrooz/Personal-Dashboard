import sidebar from '../css/sidebar.module.css';
import Image from 'next/image';
import DashSidbarIcon from '../images/speedometer-icon.png';
import HomeIcon from '../images/home-icon.png';
import GoalsIcon from '../images/goals-icon.png';
import TasksIcon from '../images/tasks-icon.png';
import TimeboxingIcon from '../images/timeboxing-icon.png';
import TrophyIcon from '../images/trophy-icon.png';
import StatisticsIcon from '../images/statistics-icon.png';
import AppsIcon from '../images/apps-icon.png';
import DocumentsIcon from '../images/documents-icon.png';
import SettingsIcon from '../images/settings-icon.png';
import Render from '../requests/GetData';




export function Sidebar() {
    return (
        <div className={sidebar.container}>
            <div className={sidebar.headerContainer}>
                <Image className={sidebar.icon} src={DashSidbarIcon}
                        alt="Dashboard Logo" priority/>
                <h1 className={sidebar.h1}>iDashboard</h1>
            </div>
     
<Render/>
   
  
            <div className={sidebar.menuContainer}>
                <ul>
                    <li>
                        <div className={sidebar.mainListItem}><Image src={HomeIcon} width={24} alt="Home Icon" priority/><a>Home</a></div>
                        <ul className={sidebar.subList}>
                            <li><Image src={GoalsIcon} width={20} alt="Goals Icon" priority/><a>Goals</a></li>
                            <li><Image src={TasksIcon} width={20} alt="Tasks Icon" priority/><a>Tasks</a></li>
                            <li><Image src={TimeboxingIcon} width={20} alt="TimeBoxing Icon" priority/><a>TimeBoxing</a></li>
                            <li><Image src={TrophyIcon} width={20} alt="Points & Trophies Icon" priority/><a>Points & Trophies</a></li>
                            <li><Image src={StatisticsIcon} width={20} alt="Statistics Icon" priority/><a>Statistics</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className={sidebar.mainListItem}><Image src={AppsIcon} width={24} alt="Apps Icon" priority/><a>Apps</a></div>
                    </li>
                    <li>
                        <div className={sidebar.mainListItem}><Image src={DocumentsIcon} width={24} alt="Documents Icon" priority/><a>Documents</a></div>
                    </li>
                    <li>
                        <div className={sidebar.mainListItem}><Image src={SettingsIcon} width={24} alt="Setting Icon" priority/><a>Setting</a></div>
                    </li>
                </ul>
            </div>



        </div>
    );
}