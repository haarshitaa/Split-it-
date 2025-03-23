import React, { useState } from "react";
import axios from "axios";

export function CreateSplitBox({ isOpen, onClose }) {
  const user = JSON.parse(localStorage.getItem("user")); // Get logged-in user
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    description: "",
    image: "",
    currency: "INR", // Default currency
    amount: "",
    note: "",
    participants: [{ name: "", email: "" }], // At least one additional participant
  });

  const [errors, setErrors] = useState(null); // Store validation errors

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "amount" ? Number(value) || 0 : value,
    });
  };

  // Handle participant changes
  const handleParticipantChange = (index, field, value) => {
    const updatedParticipants = [...formData.participants];
    updatedParticipants[index][field] = value;
    setFormData({ ...formData, participants: updatedParticipants });
  };

  // Add a new participant field
  const addParticipant = () => {
    setFormData({
      ...formData,
      participants: [...formData.participants, { name: "", email: "" }],
    });
  };

  // Remove a participant (ensuring at least one additional remains)
  const removeParticipant = (index) => {
    if (formData.participants.length > 1) {
      setFormData({
        ...formData,
        participants: formData.participants.filter((_, i) => i !== index),
      });
    }
  };

  // Submit the form
  const handleSubmit = async () => {
    setErrors(null); // Reset errors

    const amountValue = Number(formData.amount) || 0;
    if (amountValue <= 0) {
      setErrors([{ message: "Amount must be greater than zero." }]);
      return;
    }

    if (formData.participants.length < 1) {
      setErrors([{ message: "At least one participant is required." }]);
      return;
    }

    try {
      console.log("yes");
      const response = await axios.post(
        "http://127.0.0.1:8787/createsplit",
        {
          description: formData.description,
          image: formData.image || "https://img.com",
          currency: formData.currency,
          amount: amountValue,
          note: formData.note || null,
          participants: formData.participants, // Do not include logged-in user; backend handles it
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Split created:", response.data);
      onClose();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrors(error.response.data.errors || [{ message: "Invalid request data." }]);
      } else {
        alert(error);
        console.error("Error creating split:", error);
      }
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg w-96 p-6">
          <h2 className="text-xl font-semibold mb-4">Create a New Split</h2>

          {errors && (
  <div className="bg-red-100 text-red-600 p-2 rounded mb-2">
    {errors.map((err, i) => {
      console.log("Validation Error:", err); 
      return <p key={i}>{err.message}</p>;
    })}
  </div>
)}


          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Description</label>
              <input
                name="description"
                placeholder="Enter description"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 block w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Image (optional)</label>
              <input
                name="image"
                placeholder="Enter image URL"
                value={formData.image}
                onChange={handleChange}
                className="mt-1 block w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Amount</label>
              <input
                name="amount"
                type="number"
                placeholder="Enter amount"
                value={formData.amount}
                onChange={handleChange}
                className="mt-1 block w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Currency</label>
              <input
                name="currency"
                placeholder="Enter currency"
                value={formData.currency}
                onChange={handleChange}
                className="mt-1 block w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Note (optional)</label>
              <input
                name="note"
                placeholder="Enter note"
                value={formData.note}
                onChange={handleChange}
                className="mt-1 block w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Participants</label>
              {formData.participants.map((participant, index) => (
                <div key={index} className="flex space-x-2 mt-2">
                  <input
                    placeholder="Name"
                    value={participant.name}
                    onChange={(e) => handleParticipantChange(index, "name", e.target.value)}
                    className="block w-full border rounded p-2"
                  />
                  <input
                    placeholder="Email"
                    value={participant.email}
                    onChange={(e) => handleParticipantChange(index, "email", e.target.value)}
                    className="block w-full border rounded p-2"
                  />
                  {formData.participants.length > 1 && (
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => removeParticipant(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={addParticipant}
              >
                Add Participant
              </button>
            </div>
          </div>

          <div className="mt-4 flex justify-end space-x-2">
            <button
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleSubmit}
            >
              Create Split
            </button>
          </div>
        </div>
      </div>
    )
  );
}


