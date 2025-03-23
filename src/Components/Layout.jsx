import { BarTop } from '../Components/BarTop';
import { BarSide } from '../Components/BarSide';
import { Body } from '../Components/Body';
import { useEffect, useState } from 'react';

// export function Layout({ friends, children }) {
//     return (
//         <div className="bg-customBg h-screen w-full relative">
//             <BarTop friends={friends} />
//             <BarSide />
//             <Body friends={friends}>{children}</Body> 
//         </div>
//     );
// }



export function Layout({ children,user }) {
    const [friends,setFriends] = useState([]);

    useEffect(() => {
        const fetchFriends = async () => {
            try{
                const token = localStorage.getItem('token');
                if(!token) return;

                const response = await fetch('http://localhost:8787/getallfriends',{
                    headers: { Authorization: `Bearer ${token}`}
                });
                const data = await response.json();
                setFriends(data);
            }
            catch(error){
                console.error("Failed to fetch friends:", error);
            }
        };
        fetchFriends();
    }, []);

    return (
        <div className="bg-customBg h-screen w-full relative">
            <BarTop friends={friends} />
            <BarSide user={user} />
            <Body className="pl-[250px] pt-[60px]"> {/* Adjust padding for layout */}
                {children}
            </Body>
        </div>
    );
}
