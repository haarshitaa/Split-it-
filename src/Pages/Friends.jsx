import { useEffect, useState } from 'react';
import {FriendsBox} from '../Components/FriendsBox'
import axios from 'axios';


import { Layout } from '../Components/layout';

export function Friends() {

  const [token, setToken] = useState(localStorage.getItem("token"));  



  return (
    <div className="bg-customBg h-screen w-full relative">
     
      <Layout><FriendsBox/></Layout> 
    </div>
  );
}


