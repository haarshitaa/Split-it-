import { useEffect, useState } from 'react';
import axios from 'axios';

import { toast } from 'react-toastify';
import {BarTop} from '../Components/BarTop';
import {BarSide} from '../Components/BarSide';
import {Body} from '../Components/Body';

export function Dashboard() {
  const [friends, setFriends] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));  

  useEffect(() => {
    if (token) {
      async function fetchFriends() {
        try {
          const response = await axios.get("http://127.0.0.1:8787/getallfriends", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const data = Array.isArray(response.data) ? response.data : [];
          console.log(data);  
          setFriends(data);
        } catch (error) {
          console.error("Error fetching friends:", error);
          toast.error('Error fetching friends!');  
        }
      }

      fetchFriends();
    }
  }, [token]);

  return (
    <div className="bg-customBg h-screen w-full relative">
     
      <BarTop friends={friends} />  
      <BarSide />

    
      <Body friends={friends} /> 
    </div>
  );
}


