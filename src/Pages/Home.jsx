import { useNavigate } from "react-router-dom";

export function Home() {
    const navigate = useNavigate();

    return (
        <div>
            WELCOME TO SPLIT IT
            <br/>
            <button onClick={() => navigate("/signup")}>
                Get Started
            </button>
        </div>
    );
}





// function Appbar(){
//   const navigate = useNavigate();
//   return(
//     <div>
//     <button onClick={()=>{
//       navigate( "/");
//     }}>Landing </button>
//       <button onClick={()=>{
//         navigate("/dashboard");
//       }}>Dashboard</button>
//     </div>
//   )