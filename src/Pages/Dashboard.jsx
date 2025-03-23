import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Layout } from '../Components/layout';
import { DashCom } from '../Components/DashCom';
import { useNavigate } from "react-router-dom";

// export function Dashboard() {
//   const [friends, setFriends] = useState([]);
//   const [token, setToken] = useState(localStorage.getItem("token"));  

//   useEffect(() => {
//       if (token) {
//           async function fetchFriends() {
//               try {
//                   const response = await axios.get("http://127.0.0.1:8787/getallfriends", {
//                       headers: {
//                           Authorization: `Bearer ${token}`,
//                       },
//                   });

//                   const data = Array.isArray(response.data) ? response.data : [];
//                   console.log(data);  
//                   setFriends(data);
//               } catch (error) {
//                   console.error("Error fetching friends:", error);
//                   toast.error('Error fetching friends!');  
//               }
//           }

//           fetchFriends();
//       }
//   }, [token]);

//   return (
//       <Layout friends={friends}>
//           <DashCom />
//       </Layout>
//   );
// }



// export function Dashboard() {
//     const navigate = useNavigate();
//     const [friends, setFriends] = useState([]);
//     const [token, setToken] = useState(localStorage.getItem("token"));

//     useEffect(() => {
//         if (!token) {
//             console.log("navigating to /signin")
//             navigate("/signin"); // Redirect to login page
//             return;
//         }

//         async function fetchFriends() {
//             try {
//                 const response = await axios.get("http://127.0.0.1:8787/getallfriends", {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 const data = Array.isArray(response.data) ? response.data : [];
//                 console.log(data);
//                 setFriends(data);
//             } catch (error) {
//                 console.error("Error fetching friends:", error);
//                 toast.error("Error fetching friends!");
//             }
//         }

//         fetchFriends();
//     }, [token, navigate]);

//     return (
//         <Layout friends={friends}>
//             <DashCom />
//         </Layout>
//     );
// }


export function Dashboard() {
    const navigate = useNavigate();
    const [friends, setFriends] = useState([]);
    const [user, setUser] = useState({ name: "Guest" }); // Store user details
    const [token, setToken] = useState(localStorage.getItem("token"));

    useEffect(() => {
        if (!token) {
            console.log("navigating to /signin");
            navigate("/signin");
            return;
        }

        async function fetchUserData() {
            try {
                const response = await axios.get("http://127.0.0.1:8787/getuser", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.data && response.data.name) {
                    setUser({ name: response.data.name });
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        }

        async function fetchFriends() {
            try {
                const response = await axios.get("http://127.0.0.1:8787/getallfriends", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setFriends(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.error("Error fetching friends:", error);
                toast.error("Error fetching friends!");
            }
        }

        fetchUserData();
        fetchFriends();
    }, [token, navigate]);

    return (
        <Layout friends={friends} user={user}>
            <DashCom user={user} />
        </Layout>
    );
}
