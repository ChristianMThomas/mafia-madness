import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Lobby = () => {
  const [roomCode, setRoomCode] = useState("");         //store & create game code 
  const [createdRoom, setCreatedRoom] = useState("");   //store & create game room
  const [joinedRoom, setJoinedRoom] = useState("");
  const [playerName, setPlayerName] = useState("");
  const navigate = useNavigate();

  // Load stored values on first load
  useEffect(() => {
    const savedName = localStorage.getItem("playerName");
    const savedRoom = localStorage.getItem("roomCode");
    if (savedName) setPlayerName(savedName);
    if (savedRoom) {
      setRoomCode(savedRoom);
      setJoinedRoom(savedRoom); // Optional: show code as joined
    }
  }, []);

  const handleCreateRoom = () => {
    if (!playerName.trim()) {
      alert("Please enter your name before creating a room.");
      return;
    }

    const newCode = Math.random().toString(36).substring(2, 7).toUpperCase();
    setCreatedRoom(newCode);
    setJoinedRoom("");
    localStorage.setItem("playerName", playerName.trim());
    localStorage.setItem("roomCode", newCode);
  };

  const handleJoinRoom = () => {
  if (!playerName.trim()) {
    alert('Please enter your name before joining a room.');
    return;
  }

  if (roomCode.trim().length === 5) {
    const joined = roomCode.trim().toUpperCase();

    // Save to localStorage (optional for persistence)
    localStorage.setItem('playerName', playerName.trim());
    localStorage.setItem('roomCode', joined);

    // Redirect to MafiaMadnessGame with state
    navigate('/MafiaMadnessGame', {
      state: {
        playerName: playerName.trim(),
        roomCode: joined,
      },
    });
  } else {
    alert('Please enter a valid 5-character room code.');
  }
};



  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center space-y-12">
      <h1 className="text-4xl font-serif tracking-widest text-red-900 text-center">
        Ready to play?
      </h1>

      {/* Player Name Input */}
      <div className="w-full max-w-md text-center bg-white text-black border-2">
        <label
          htmlFor="playerName"
          className="block text-lg font-semibold mb-2"
        >
          Enter Your Name
        </label>
        <input
          id="playerName"
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="e.g., ShadowFox"
          className="w-full p-3 rounded text-black text-center"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 w-full max-w-5xl">
        {/* Create Room */}
        <div className="bg-gray-800 p-6 rounded shadow-lg flex-1 text-center">
          <h2 className="text-xl font-semibold mb-4">Create a Room</h2>
          <button
            onClick={handleCreateRoom}
            className="bg-red-900 hover:bg-red-400 text-black font-bold py-2 px-4 rounded transition"
          >
            Generate Room Code
          </button>
          {createdRoom && (
            <p className="mt-4 text-lg text-white">
              Room Code: <span className="font-mono">{createdRoom}</span>
            </p>
          )}
        </div>

        {/* Join Room */}
        <div className="bg-gray-800 p-6 rounded shadow-lg flex-1 text-center">
          <h2 className="text-xl font-semibold mb-4">Join a Room</h2>
          <input
            type="text"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
            placeholder="Enter Room Code"
            className="w-full p-2 text-black bg-white rounded mb-4"
            maxLength={5}
          />
          <button
            onClick={handleJoinRoom}
            className="bg-red-900 hover:bg-red-400 text-black font-bold py-2 px-4 rounded transition"
          >
            Join Room
          </button>
          {joinedRoom && (
            <p className="mt-4 text-lg text-yellow-400">
              Joined Room: <span className="font-mono">{joinedRoom}</span>
            </p>
          )}
        </div>
      </div>

      {/* Launch Game */}
      {(createdRoom || joinedRoom) && (
        <button
          onClick={() => {
            navigate("/MafiaMadnessGame", {
              state: {
                roomCode: createdRoom || joinedRoom,
                playerName: playerName,
              },
            });
          }}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded transition mt-6"
        >
          Launch Game
        </button>
      )}
    </div>
  );
};

export default Lobby;
