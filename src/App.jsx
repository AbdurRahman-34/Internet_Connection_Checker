import './App.css'
import onlineIcon from '../src/assets/images/online.gif';
import offlineIcon from '../src/assets/images/offline.gif';
import { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState(true);

  useEffect(()=>{
    const handelOnline = () => {
      setStatus(true)
    }

    const handelOffline = () => {
      setStatus(false)
    }
    return () => {
      window.addEventListener("online", handelOnline);
      window.addEventListener("offline", handelOffline);
    }
    
  },[status])

  return (
    <div className='icon-container'>
     <div className="connection-icons">
     <h2 className='head-titel'>Internet Connection Checker</h2>
     {status ?
       (<img src={onlineIcon} alt="online icon" />)
       :
      (<img src={offlineIcon} alt=" offline icon" />)
     }
     </div>
    </div>
  )
}
export default App
