import aside from '../css/aside.module.css';
import {Sidebar} from '../components';

export function Aside() {
    return (
      <div className={aside.container}>
        <Sidebar/>
      </div>
    );
  }
  