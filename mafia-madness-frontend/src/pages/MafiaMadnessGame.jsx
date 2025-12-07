import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";

// 🎯 Connect to the Socket.IO server
const socket = io("http://localhost:3001");

const MafiaMadnessGame = () => {
  const location = useLocation();
  const { roomCode, playerName, isHost } = location.state || {};
  const [players, setPlayers] = useState([]);
  const [playerCount, setPlayerCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!roomCode || !playerName) return;

    if (isHost) {
      socket.emit("createRoom", { roomCode, playerName });
    }

    // 🟢 Emit join event to server
    socket.emit("joinRoom", { roomCode, playerName });

    // 🔄 Listen for updated player list
    const handleUpdatePlayers = (list) => {
      setPlayers(list);
      setPlayerCount(list.length);
    };
    const handleJoinError = (message) => {
      alert(message); // Show simple error popup
      window.location.href = "/Lobby"; // Redirect to lobby
    };

    socket.on("updatePlayers", handleUpdatePlayers);
    socket.on("joinError", handleJoinError);

    // 🧹 Cleanup listeners when leaving
    return () => {
      socket.off("updatePlayers", handleUpdatePlayers);
      socket.off("joinError", handleJoinError);
    };
  }, [roomCode, playerName, isHost]);

  return (
    <div className="w-screen h-screen bg-[url(./assets/images/WaitingRoomBackground.jpg)] bg-cover">
      <h1 className="text-4xl text-white text-center font-semibold p-8">
        Waiting for all players...
      </h1>

      <div className="bg-gray-700 max-w-7xl h-4/6 mx-auto opacity-70 rounded-lg border-white border-2">
        {/* 🔐 Room Info */}
        <div className="bg-gray-900 text-red-900 flex flex-row justify-around text-2xl p-2 rounded-t-md">
          <h1>Room Code: {roomCode}</h1>
          <h2>Player Count: {playerCount} / 8</h2>
        </div>

        {/* 👥 Joined Players */}
        <div className="flex flex-wrap justify-start gap-4 m-2.5">
          {players.map((player, index) => (
            <div
              key={index}
              className="player-card rounded-lg border-2 w-[22%] bg-gray-800 text-white font-serif p-4 text-center"
            >
              <h1 className="text-2xl">{player}</h1>
            </div>
          ))}
        </div>

        {/* 🚀 Start Button (can be host-only later) */}
        <section className="flex justify-center">
          <button className="bg-black text-2xl text-white text-center p-3 mx-auto mt-12 w-2/12 rounded-lg border-2">
            Start
          </button>

          <button
            className="bg-red-950 text-2xl text-white text-center p-3 mx-auto mt-12 w-2/12 rounded-lg border-2"
            onClick={() => {
              socket.disconnect();
              navigate("/Lobby");
            }}
          >
            Leave
          </button>
        </section>
      </div>
    </div>
  );
};

export default MafiaMadnessGame;
