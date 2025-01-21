// import { useState, useEffect } from 'react';
// import { Card, CardContent, CardMedia, Button, TextField, Chip } from '@mui/material';
// import Autocomplete from '@mui/material/Autocomplete';
// import axios from 'axios';


// export function AddSplitBox({ description, image, currency, amount, note, participants, onSubmit }) {
//     const [options, setOptions] = useState([]);
//     const [formData, setFormData] = useState({
//         description: description || '',
//         image: image || '',
//         currency: currency || '',
//         amount: amount || '',
//         note: note || '',
//         participants: participants || []
//     });
//     const [emailPopup, setEmailPopup] = useState(false);
//     const [tempParticipant, setTempParticipant] = useState({name: '',email:''});

//     useEffect(()=>{
//         const getallusers = async () => {
//             try {
//                 const token = localStorage.getItem('token');
//                 if (!token) { 
//                     console.error('No token found!');
//                     return;
//                 }
//                 const response = await axios.get("http://127.0.0.1:8787/getyourfriends", {
//                     headers: { Authorization: `Bearer ${token}` }
//                 });
//                 const users = response.data.users.map(user => ({ 
//                     name: user.name, 
//                     email: user.email, 
//                     id:user.id }));
//                 setOptions(users);
//             } catch (err) {
//                 console.error("Error fetching users:", err);
//             }
//         };
//         getallusers();
//     }, []);
    
//     useEffect(()=>{
//         if(formData.amount && formData.participants.length > 0){
//             const share  = parseFloat(formData.amount) / (formData.participants.length+1);
//             const updatedParticipants = formData.participants.map((participant)=>({
//                 ...participant,
//                 share: share.toFixed(2),
//             }));
//             setFormData({...formData,participants:updatedParticipants});
//         }
//     },[formData.amount, formData.participants]);
  

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         console.log(e.target.value);
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleParticipantSelection = (event, value) => {
//         const updatedParticipants = value.map(option => ({
//             id: option.id || "",
//             personName: option.name,
//             // email: option.email || "",
//             share: 0 
//         }));
//         setFormData({ ...formData, participants: updatedParticipants });
//     };

   

//     const handleSubmit = (e) => {
//         e.preventDefault();
    
//         const amount = parseFloat(formData.amount);
//         if (isNaN(amount)) {
//             console.error("Amount must be a valid number");
//             // Optionally show an error message to the user
//             return;
//         }
    
//         const updatedFormData = {
//             ...formData,
//             amount: amount,
//         };
    
//         console.log(updatedFormData);
//         onSubmit(updatedFormData); 
//     };
    

//     return (
//         <div className='w-xl h-40 border border-white'>
//             <div className=''>
//             <p>With you and: </p>
//             <div></div>
//                  <Autocomplete
//                         multiple
//                         options={options}
//                         getOptionLabel={(option) => option.name || option}
//                         freeSolo
//                         renderTags={(value, getTagProps) =>
//                         value.map((option, index) => {
//                         const { key, ...tagProps } = getTagProps({ index });
//                         const label = typeof option === 'string' ? option : option.name;
//                         return (
//                        <Chip variant="outlined" label={label} key={key} {...tagProps} />
//             );
//         })
//     }
//     onChange={(event, value) => {
//         // Process the value to handle freeSolo entries and objects
//         const formattedValue = value.map((item) =>
//             typeof item === 'string'
//                 ? { name: item, email: '' } // FreeSolo entries as objects
//                 : item
//         );
//         handleParticipantSelection(event, formattedValue);
//     }}
//     renderInput={(params) => (
//         <TextField {...params} label="Participants" placeholder="Select Participants" id="standard-basic" variant="standard" fullWidth/>
//     )}
//     sx={{ marginBottom: 2 }}
// /></div>
//     <div className='flex justify-end'>
//         <div>
//             <Button>CANCEL</Button>
//         </div>
//         <div>
//             <Button>SAVE</Button>
//         </div>
//     </div>
//         </div>
//     );
// }




// import { useState, useEffect } from 'react';
// import {
//      Button, TextField, Chip, Dialog, DialogActions, DialogContent, DialogTitle
// } from '@mui/material';
// import Autocomplete from '@mui/material/Autocomplete';
// import axios from 'axios';
// import keywordToImageMap from '../utils/imageMappings';


// export function AddSplitBox({ description, image, currency, amount, note, participants, onSubmit }) {
//     const [options, setOptions] = useState([]);
//     const [formData, setFormData] = useState({
//         description: description || '',
//         image: image || '',
//         currency: currency || '',
//         amount: amount || '',
//         note: note || '',
//         participants: participants || []
//     });
//     const [emailPopup, setEmailPopup] = useState(false);
//     const [tempParticipant, setTempParticipant] = useState({ name: '', email: '' });
//     const [showExtendedFields, setShowExtendedFields] = useState(false);

//     useEffect(() => {
//         const getallusers = async () => {
//             try {
//                 const token = localStorage.getItem('token');
//                 if (!token) {
//                     console.error('No token found!');
//                     return;
//                 }
//                 const response = await axios.get("http://127.0.0.1:8787/getyourfriends", {
//                     headers: { Authorization: `Bearer ${token}` }
//                 });
//                 console.log(response);
//                 const users = response.data.users
//                 .map(user => ({
//                     id: user.id,
//                     name: user.personName,
//                     email: user.email || "Email not available",
                    
//                 }));
//                 setOptions(users);
//                 console.log("Transformed Users:", users);
            
//                 // console.log(setOptions);
//             } catch (err) {
//                 console.error("Error fetching users:", err);
//             }
//         };
//         getallusers();
//     }, []);

//     useEffect(() => {
//         if (formData.amount && formData.participants.length > 0) {
//             const share = parseFloat(formData.amount) / (formData.participants.length + 1);
//             const updatedParticipants = formData.participants.map((participant) => ({
//                 ...participant,
//                 share: share.toFixed(2),
//             }));
//             setFormData({ ...formData, participants: updatedParticipants });
//         }
//     }, [formData.amount, formData.participants]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleParticipantSelection = (event, value) => {
//         value.forEach(option => {
//             if (typeof option === 'string') {
//                 setTempParticipant({ name: option, email: '' });
//                 setEmailPopup(true);
//             }
//         });
//         const updatedParticipants = value
//             .filter(option => typeof option !== 'string') // Exclude freeSolo strings
//             .map(option => ({
//                 id: option.id || "",
//                 personName: option.name,
//                 email: option.email || "",
//                 share: 0
//             }));
//         setFormData({ ...formData, participants: updatedParticipants });
//     };

//     const handleEmailSubmit = () => {
//         setFormData((prevFormData) => ({
//             ...prevFormData,
//             participants: [...prevFormData.participants, { ...tempParticipant, share: 0 }]
//         }));
//         setTempParticipant({ name: '', email: '' });
//         setEmailPopup(false);
//         setShowExtendedFields(true);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const amount = parseFloat(formData.amount);
//         if (isNaN(amount)) {
//             console.error("Amount must be a valid number");
//             return;
//         }

//         const updatedFormData = {
//             ...formData,
//             amount: amount,
//         };

//         console.log(updatedFormData);
//         onSubmit(updatedFormData);
//     };

//     return (
//         <div className='w-xl border border-white p-4'>
//             <p>With you and: </p>
//             <Autocomplete
//                 multiple
//                 options={options}
//                 getOptionLabel={(option) => option.name || option}
//                 freeSolo
//                 renderTags={(value, getTagProps) =>
//                     value.map((option, index) => {
//                         const { key, ...tagProps } = getTagProps({ index });
//                         const label = typeof option === 'string' ? option : option.name;
//                         return (
//                             <Chip variant="outlined" label={label} key={key} {...tagProps} />
//                         );
//                     })
//                 }
//                 onChange={(event, value,reason) => {
//                     if (reason === "createOption") {
//                         const newName = value[value.length - 1]; // Get the newly added freeSolo name
//                         setTempParticipant({ name: newName, email: '' });
//                         setEmailPopup(true); // Open the dialog to collect email
//                     } else {
//                         const formattedValue = value.map((item) => ({
//                             id: item.id || null,
//                             name: item.name || "Unnamed Participant",
//                             email: item.email || "Email not available",
//                         }));
//                         setFormData({ ...formData, participants: formattedValue });
//                         handleParticipantSelection(event, formattedValue);
//                     }
                    
//                 }}
//                 renderInput={(params) => (
//                     <TextField {...params} label="Participants" placeholder="Enter names or email addresses" variant="standard" fullWidth />
//                 )}
//                 sx={{ marginBottom: 2 }}
//             />

//             {showExtendedFields && (
//                 <div>
//                     <TextField
//                         label="Amount"
//                         name="amount"
//                         value={formData.amount}
//                         onChange={handleChange}
//                         fullWidth
//                         sx={{ marginBottom: 2 }}
//                     />
//                     <TextField
//                         label="Description"
//                         name="description"
//                         value={formData.description}
//                         onChange={handleChange}
//                         fullWidth
//                         sx={{ marginBottom: 2 }}
//                     />
//                     <TextField
//                         label="Note"
//                         name="note"
//                         value={formData.note}
//                         onChange={handleChange}
//                         fullWidth
//                         sx={{ marginBottom: 2 }}
//                     />
//                 </div>
//             )}

//             <div className='flex justify-end'>
//                 <Button onClick={() => console.log("Cancelled")}>CANCEL</Button>
//                 <Button onClick={handleSubmit}>SAVE</Button>
//             </div>

//             <Dialog open={emailPopup} onClose={() => setEmailPopup(false)}>
//                 <DialogTitle>Enter Email</DialogTitle>
//                 <DialogContent>
//                     <TextField
//                         label="Email"
//                         value={tempParticipant.email}
//                         onChange={(e) =>
//                             setTempParticipant({ ...tempParticipant, email: e.target.value })
//                         }
//                         fullWidth
//                     />
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={() => setEmailPopup(false)}>Cancel</Button>
//                     <Button onClick={handleEmailSubmit}>Add</Button>
//                 </DialogActions>
//             </Dialog>
//         </div>
//     );
// }


import { useState, useEffect } from 'react';
import axios from 'axios';

export function AddSplitBox({ description, image, currency, amount, note, participants, onSubmit }) {
    const [options, setOptions] = useState([]);
    const [formData, setFormData] = useState({
        description: description || '',
        image: image || '',
        currency: currency || '',
        amount: amount || '',
        note: note || '',
        participants: participants || []
    });
    const [emailPopup, setEmailPopup] = useState(false);
    const [tempParticipant, setTempParticipant] = useState({ name: '', email: '' });
    const [showExtendedFields, setShowExtendedFields] = useState(false);

    useEffect(() => {
        const getAllUsers = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    console.error('No token found!');
                    return;
                }
                const response = await axios.get("http://127.0.0.1:8787/getyourfriends", {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const users = response.data.users.map(user => ({
                    id: user.id,
                    name: user.personName,
                    email: user.email || "Email not available",
                }));
                console.log(users);
                setOptions(users);
            } catch (err) {
                console.error("Error fetching users:", err);
            }
        };
        getAllUsers();
    }, []);

    useEffect(() => {
        if (formData.amount && formData.participants.length > 0) {
            const share = parseFloat(formData.amount) / (formData.participants.length + 1);
            const updatedParticipants = formData.participants.map(participant => ({
                ...participant,
                share: share.toFixed(2),
            }));
            setFormData({ ...formData, participants: updatedParticipants });
        }
    }, [formData.amount, formData.participants]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleParticipantSelection = (e) => {
        const values = e.target.value.split(',').map(name => name.trim());
        const newParticipants = values.map(name => ({ name, email: '', share: 0 }));
        setFormData({ ...formData, participants: newParticipants });
    };

    const handleEmailSubmit = () => {
        setFormData(prevFormData => ({
            ...prevFormData,
            participants: [...prevFormData.participants, { ...tempParticipant, share: 0 }]
        }));
        setTempParticipant({ name: '', email: '' });
        setEmailPopup(false);
        setShowExtendedFields(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const amount = parseFloat(formData.amount);
        if (isNaN(amount)) {
            console.error("Amount must be a valid number");
            return;
        }

        const updatedFormData = {
            ...formData,
            amount,
        };

        console.log(updatedFormData);
        onSubmit(updatedFormData);
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
            <p>With you and:</p>
            <input
                type="text"
                placeholder="Enter participants (comma-separated)"
                onBlur={handleParticipantSelection}
                style={{ width: '100%', padding: '8px', marginBottom: '12px' }}
            />

            {showExtendedFields && (
                <div>
                    <input
                        type="text"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="Amount"
                        style={{ width: '100%', padding: '8px', marginBottom: '12px' }}
                    />
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Description"
                        style={{ width: '100%', padding: '8px', marginBottom: '12px' }}
                    />
                    <input
                        type="text"
                        name="note"
                        value={formData.note}
                        onChange={handleChange}
                        placeholder="Note"
                        style={{ width: '100%', padding: '8px', marginBottom: '12px' }}
                    />
                </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button onClick={() => console.log("Cancelled")} style={{ padding: '8px 16px' }}>CANCEL</button>
                <button onClick={handleSubmit} style={{ padding: '8px 16px' }}>SAVE</button>
            </div>

            {emailPopup && (
                <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#fff', padding: '16px', border: '1px solid #ccc', borderRadius: '8px' }}>
                    <h3>Enter Email</h3>
                    <input
                        type="email"
                        value={tempParticipant.email}
                        onChange={(e) =>
                            setTempParticipant({ ...tempParticipant, email: e.target.value })
                        }
                        placeholder="Email"
                        style={{ width: '100%', padding: '8px', marginBottom: '12px' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button onClick={() => setEmailPopup(false)} style={{ padding: '8px 16px', marginRight: '8px' }}>Cancel</button>
                        <button onClick={handleEmailSubmit} style={{ padding: '8px 16px' }}>Add</button>
                    </div>
                </div>
            )}
        </div>
    );
}





