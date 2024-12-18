import Button from '@mui/material/Button';
import { useState } from 'react';
import { AddSplitBox } from '../Components/AddSplitBox';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export function Dashboard() {
    const [showbox, setShowbox] = useState(false);

    const navigate = useNavigate();
    const toggleButton = () => {
        setShowbox(!showbox);
        // console.log(showbox);
    };

    const submit = async (formData) => {
        try {
            const token = localStorage.getItem('authToken');  
            console.log(token);
            const response = await axios.post('http://127.0.0.1:8787/createsplit', formData, {
                headers: {
                    Authorization: `Bearer ${token}`  
                }
            });
            console.log(response.data);
        } catch (err) {
            console.error('Error submitting form: ', err);
        }
    };

    return (
        <div>
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
                    participants={[]} 
                    onSubmit={submit} 
                />
            )}<br/>
            <Button variant="contained" onClick={()=>{navigate("/articles")}}>ARTICLES</Button>
        </div>
    );
}
