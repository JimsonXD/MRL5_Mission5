import React, { useState } from 'react';
import axios from 'axios'; 

function MessageFromMongo() {
  const [message, setMessage] = useState('');

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

  return (
<div className="bg-blue-200 p-4 rounded-lg shadow-lg">
  <header className="text-center">
    <p className="text-xl font-semibold">
      {message || 'Click the button to fetch a message from the backend.'}
    </p>
    <button
      onClick={fetchMessage}
      className="mt-4 bg-primary text-white hover:bg-blue-600 px-4 py-2 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
    >
      Fetch Message
    </button>
  </header>
</div>

  );
}

export default MessageFromMongo;