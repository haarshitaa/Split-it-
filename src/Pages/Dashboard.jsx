import Button from '@mui/material/Button';
import { useState } from 'react';
import { AddSplitBox } from '../Components/AddSplitBox';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import { MenuIcon } from '../Components/MenuIcon';
import { IconMenu } from '../Components/IconMenu';

export function Dashboard() {
    const [showbox, setShowbox] = useState(false);
    const [sidebaropen, setsidebaropen] = useState(false);

    const navigate = useNavigate();
    const toggleButton = () => {
        setShowbox(!showbox);
    };

    const submit = async (formData) => {
        try {
            const token = localStorage.getItem('token'); 
 
            if (!token) {
                console.error('No token found!');
                return;  
            } 
            console.log(token);
            formData.amount = Number(formData.amount);
            formData.creatorId = formData.creatorId ;
            formData.participants[0].share = Number(formData.participants[0].share);
            const response = await axios.post('http://127.0.0.1:8787/createsplit', formData, {
                headers: {
                    Authorization: `Bearer ${token}`  
                }
            });
            console.log(response.data);
        } catch (err) {
            console.error('Error submitting form: ', err.response ? err.response.data : err.message);
        }
    };

    const hideSideBar = ()=>{
        setsidebaropen((x)=>{!x});
        console.log(x);
        console.log(sidebaropen);
    }

    return (
        <div onClick={hideSideBar}>
            <div className='flex' >
            <IconMenu setsidebaropen={setsidebaropen}/>
            </div>
            THIS IS DASHBOARD
            <br /><br /><br />
            <Button variant="contained" onClick={toggleButton}>Create Split</Button>
            {showbox && (
                <AddSplitBox 
                    description=""  
                    image=""  
                    currency=""  
                    amount=""  
                    note=""   
                    participants={[{personName: "", share: 0}]} 
                    onSubmit={submit} 
                />
            )}<br/> <br /><br /><br />
            <Button variant="contained" onClick={()=>{navigate("/articles")}}>ARTICLES</Button>
        </div>
    );
}
