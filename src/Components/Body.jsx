import { useState, useEffect } from "react";
import { CreateSplitBox } from "./CreateSplitBox";

export function Body({ friends }) {
    const [user, setUser] = useState(null);
    const [isCreateSplitOpen, setIsCreateSplitOpen] = useState(false);

    useEffect(() => {
        // Retrieve and parse the stored user data
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                if (parsedUser && parsedUser.name) {
                    setUser(parsedUser);
                } else {
                    console.warn("Invalid user data in localStorage.");
                }
            } catch (error) {
                console.error("Error parsing user data from localStorage:", error);
            }
        }
    }, []);

    const handleCreateSplitClick = () => {
        setIsCreateSplitOpen(true);
    }

    return (
        <div
            className="fixed top-16 left-28 right-3 bottom-5 z-50 bg-white rounded-tl-[30px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-[30px] p-10 overflow-hidden"
        >
            <div className="flex">
                <div className="h-72 border w-xl p-3 flex justify-between rounded-xl">
                    <div className="pt-10">
                        <p className="text-4xl font-bold text-black mb-5 parisienne-regular">
                            Hi {user?.name || "Guest"}!
                        </p>
                    </div>
                    <div>
                        <img src="/assets/hellochar.png" className="h-60" alt="Hello" />
                    </div>
                </div>

                <div className="h-16 w-44 border border-gray-300 rounded-2xl flex bg-gradient-to-r from-cyan-200 to-blue-200">
                    <button className="text-xl m-auto text-gray-700 font-medium" onClick={handleCreateSplitClick}>
                        CREATE SPLIT
                    </button>
                </div>
            </div>

            {isCreateSplitOpen && (
                <CreateSplitBox 
                    closeModal={() => setIsCreateSplitOpen(false)} 
                    friends={friends}  
                />
            )}
        </div>
    );
}


