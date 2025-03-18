import { useNavigate } from "react-router-dom";

// export function Groups() {
//     const navigate = useNavigate();

//     return (
//         <div>
//             <div className="border border-black rounded-full h-10 w-10 flex items-center justify-center">
//                 <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 className="size-6"
//                 >
//                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
//                 </svg>
//             </div>

//         </div>
//     );
// }


export function Groups() {
    const navigate = useNavigate();

    return (
        <div className="relative h-screen w-full">
            <div className="absolute bottom-48 right-10 border border-black rounded-full h-14 w-14 flex items-center justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-8"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </div>
        </div>
    );
}
