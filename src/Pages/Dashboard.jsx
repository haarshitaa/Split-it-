import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Layout } from '../Components/layout';
import { DashCom } from '../Components/DashCom';

// export function Dashboard() {
//   const [friends, setFriends] = useState([]);
//   const [token, setToken] = useState(localStorage.getItem("token"));  

//   useEffect(() => {
//     if (token) {
//       async function fetchFriends() {
//         try {
//           const response = await axios.get("http://127.0.0.1:8787/getallfriends", {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           });

//           const data = Array.isArray(response.data) ? response.data : [];
//           console.log(data);  
//           setFriends(data);
//         } catch (error) {
//           console.error("Error fetching friends:", error);
//           toast.error('Error fetching friends!');  
//         }
//       }

//       fetchFriends();
//     }
//   }, [token]);

//   return (
//     // <div className="bg-customBg h-screen w-full relative">
     
//     //   <BarTop friends={friends} />  
//     //   <BarSide />

    
//     //   <Body friends={friends} /> 
//     // </div>
//     <>
//     <Layout friends={friends} ><DashCom/></Layout>
//     </>
//   );
// }

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
      <Layout friends={friends}>
          <DashCom />
      </Layout>
  );
}

