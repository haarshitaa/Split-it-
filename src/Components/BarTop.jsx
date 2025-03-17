import React, { useEffect, useState } from 'react';
import { Avatar, AvatarGroup } from '@mui/material';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import { toast } from 'react-toastify';  // Import react-toastify for showing toast notifications
import { Friends } from '../Pages/Friends';

export function BarTop({ friends }) {
  const navigate = useNavigate();  // Initialize the navigate function
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      toast.error('No token found! Redirecting to login.');  // Use toast to show error
      navigate('/login');
    }
  }, [navigate, token]);  // Run when token or navigate changes

  // Function to get the initials of the user's name
  const getInitials = (name) => {
    const nameParts = name.split(' ');
    const initials = nameParts.map((part) => part.charAt(0).toUpperCase()).join('');
    return initials;
  };

  const handleFriends = () => {
    navigate('/friends');
  }

  return (
    <div className="w-full fixed z-60 bg-customBg h-16 top-0">
      <div className="ml-96 flex items-center justify-between h-full px-4 border border-black">
        <div className="ml-24 flex gap-8 border border-black mt-4">
          <div className="mx-10">
            <p className="font-mono font-normal text-2xl text-white">DASHBOARD</p>
          </div>
          <div className="mx-10">
            <Link to="/history">
              <p className="font-mono font-normal text-2xl text-white cursor-pointer">
                HISTORY
              </p>
            </Link>
          </div>
          <div className="mx-10">
            <p className="font-mono font-normal text-2xl text-white">GROUPS</p>
          </div>
        </div>

        <div className="border border-black" onClick={handleFriends}>
          {/* Displaying friends using AvatarGroup */}
          <AvatarGroup max={4}>
            {friends.map((friend) => (
              <Avatar key={friend.id}>
                {getInitials(friend.name)} 
              </Avatar>
            ))}
          </AvatarGroup>
        </div>
      </div>
    </div>
  );
}
