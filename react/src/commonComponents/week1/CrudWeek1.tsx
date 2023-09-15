/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CrudWeek1() {
    const [message, setMessage] = useState('');
    const [newMessage, setNewMessage] = useState('');
    const [editMessage, setEditMessage] = useState('');
    const [editId, setEditId] = useState('');
    const [error, setError] = useState('');
  
  
    const apiUrl = 'http://localhost:8080/api/message';
  
  
    const fetchMessage = async () => {
        try {
          const response = await axios.get('http://localhost:8080/api/message');
          const data = response.data;
          setMessage(data.message);
    
          console.log('Response data:', data);
        } catch (error) {
          console.error(error);
          setMessage('Error fetching message from the backend');
        }
      };
  
  
   const createMessage = async () => {
      try {
        const response = await axios.post(apiUrl, { message: newMessage });
        setMessage(response.data.message);
        setNewMessage('');
      } catch (err) {
        handleApiError(err, 'Error creating message');
      }
    };
  
    const updateMessage = async () => {
      try {
        const response = await axios.put(`${apiUrl}/${editId}`, { message: editMessage });
        setMessage(response.data.message);
        setEditId('');
        setEditMessage('');
      } catch (err) {
        handleApiError(err, 'Error updating message');
      }
    };
  
    const deleteMessage = async () => {
      try {
        await axios.delete(`${apiUrl}/${editId}`);
        setMessage('Message deleted successfully');
      } catch (err) {
        handleApiError(err, 'Error deleting message');
      }
    };
  
    const handleApiError = (err: unknown, errorMessage: React.SetStateAction<string>) => {
      console.error(err);
      setError(errorMessage);
    };
  
  
    function setDeleteId(value: string): void {
        throw new Error('Function not implemented.');
    }

    return (
  <div className=" p-4 rounded-lg shadow-lg">
    <header className="text-center">
      {message !== null ? ( 
        <p className="text-xl font-semibold">{message}</p>
      ) : (
        <p className="text-xl font-semibold">Click the button to fetch a message from the backend.</p>
      )}
      <button
        onClick={fetchMessage}
        className="mt-4 bg-green text-white hover:bg-blue-600 px-4 py-2 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
      >
        Fetch Message
      </button>
    </header>
  





  
    <form className="mt-4 text-primary">



    <div className="flex items-center mb-4">
    <input
      type="text"
      placeholder="Enter a new message"
      value={newMessage}
      onChange={(e) => setNewMessage(e.target.value)}
      className="rounded-l-lg w-1/2 py-2 px-4 outline-none focus:ring focus:ring-blue-300"
    />
    <button onClick={createMessage} type="button" className="bg-green hover:bg-blue-600 text-white py-2 px-4 rounded-r-lg">
    Fetch Message
    </button>
  </div>










      
  <div className="flex items-center mb-4">
    <input
      type="text"
      placeholder="Enter a new message"
      value={newMessage}
      onChange={(e) => setNewMessage(e.target.value)}
      className="rounded-l-lg w-1/2 py-2 px-4 outline-none focus:ring focus:ring-blue-300"
    />
    <button onClick={createMessage} type="button" className="bg-primary hover:bg-blue-600 text-white py-2 px-4 rounded-r-lg">
      Create Message
    </button>
  </div>
  <div className="flex items-center mb-4">




    <input
      type="text"
      placeholder="Edit message"
      value={editMessage}
      onChange={(e) => setEditMessage(e.target.value)}
      className="rounded-l-lg w-1/2 py-2 px-4 outline-none focus:ring focus:ring-blue-300"
    />

    <button onClick={updateMessage} type="button" className="bg-primary hover:bg-blue-600 text-white py-2 px-4 rounded-r-lg">
      Update Message
    </button>
  </div>
  <div className="flex items-center">



    <input
      type="text"
      placeholder="Message ID to delete"
    
      onChange={(e) => setDeleteId(e.target.value)}
      className="rounded-l-lg w-1/2 py-2 px-4 outline-none focus:ring focus:ring-red-300"
    />
    <button onClick={deleteMessage} type="button" className="bg-red hover:bg-red-600 text-white py-2 px-4 rounded-r-lg">
      Delete Message
    </button>
  </div>
</form>
  
    
  </div>
  
    );
  }

export default CrudWeek1;
