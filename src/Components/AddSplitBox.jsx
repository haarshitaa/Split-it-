import { useState } from 'react';
import { Card, CardContent, CardMedia, CardActions, Button, Typography, TextField } from '@mui/material';

export function AddSplitBox({ description, image, currency, amount, note, participants, onSubmit }) {
    const [formData, setFormData] = useState({
        description: description ,
        image: image || '',
        currency: currency,
        amount: amount ,
        note: note || '',
        participants: participants 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);  // Pass data to parent component to send to backend
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={image || 'https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-flat-cinema-background-with-icons-abstract-old-reel-vector-png-image_39014356.png'}
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
                    <TextField
                        fullWidth
                        label="Participants"
                        name="participants"
                        value={formData.participants}
                        onChange={handleChange}
                        sx={{ marginBottom: 2 }}
                    />
                    <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>
                        Submit
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
