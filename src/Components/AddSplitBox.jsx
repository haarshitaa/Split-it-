import { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Button, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
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

    const getallusers = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('No token found!');
                return;
            }
            const response = await axios.get("http://127.0.0.1:8787/getusers", {
                headers: { Authorization: `Bearer ${token}` }
            });
            const users = response.data.users.map(user => ({ name: user.name, email: user.email }));
            setOptions(users);
        } catch (err) {
            console.error("Error fetching users:", err);
        }
    };

    useEffect(() => {
        getallusers();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleParticipantSelection = (event, value) => {
        const updatedParticipants = value.map(option => ({
            personName: option.name,
            email: option.email,
            share: 0 
        }));
        setFormData({ ...formData, participants: updatedParticipants });
    };

    const handleParticipantShareChange = (index, value) => {
        const updatedParticipants = [...formData.participants];
        updatedParticipants[index].share = parseFloat(value);
        setFormData({ ...formData, participants: updatedParticipants });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData); 
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={formData.image || 'https://via.placeholder.com/150'}
                title="Split Image"
            />
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="Image URL"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="Currency"
                        name="currency"
                        value={formData.currency}
                        onChange={handleChange}
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="Amount"
                        name="amount"
                        type="number"
                        value={formData.amount}
                        onChange={handleChange}
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="Note"
                        name="note"
                        value={formData.note}
                        onChange={handleChange}
                        sx={{ marginBottom: 2 }}
                    />
                    <Autocomplete
                        multiple
                        options={options}
                        getOptionLabel={(option) => option.name}
                        filterSelectedOptions
                        onChange={handleParticipantSelection}
                        renderInput={(params) => (
                            <TextField {...params} label="Participants" placeholder="Select Participants" />
                        )}
                        sx={{ marginBottom: 2 }}
                    />
                    {formData.participants.map((participant, index) => (
                        <div key={index} style={{ marginBottom: '16px' }}>
                            <TextField
                                fullWidth
                                label={`Share for ${participant.personName}`}
                                type="number"
                                value={participant.share}
                                onChange={(e) => handleParticipantShareChange(index, e.target.value)}
                                sx={{ marginBottom: 1 }}
                            />
                        </div>
                    ))}
                    <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>
                        Submit
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
