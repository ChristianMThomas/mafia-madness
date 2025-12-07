import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpotlightEffect from "../components/SpotlightEffect";
import ThemeToggle from "../components/ThemeToggle";

const Lobby = () => {
  const [roomCode, setRoomCode] = useState("");
  const [createdRoom, setCreatedRoom] = useState("");
  const [joinedRoom, setJoinedRoom] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [copiedCode, setCopiedCode] = useState(false);
  const navigate = useNavigate();

  // Load stored values on first load
  useEffect(() => {
    const savedName = localStorage.getItem("playerName");
    const savedRoom = localStorage.getItem("roomCode");
    if (savedName) setPlayerName(savedName);
    if (savedRoom) {
      setRoomCode(savedRoom);
      setJoinedRoom(savedRoom);
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

    // Redirect to MafiaMadnessGame with state
    navigate("/MafiaMadnessGame", {
      state: {
        playerName: playerName.trim(),
        roomCode: newCode,
        isHost: true,
      },
    });
  };

  const handleJoinRoom = () => {
    if (!playerName.trim()) {
      alert("Please enter your name before joining a room.");
      return;
    }

    if (roomCode.trim().length === 5) {
      const joined = roomCode.trim().toUpperCase();

      localStorage.setItem("playerName", playerName.trim());
      localStorage.setItem("roomCode", joined);

      navigate("/MafiaMadnessGame", {
        state: {
          playerName: playerName.trim(),
          roomCode: joined,
          isHost: false,
        },
      });
    } else {
      alert("Please enter a valid 5-character room code.");
    }
  };

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen px-6 py-16 flex flex-col items-center relative transition-colors duration-500">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Spotlight effect */}
      <SpotlightEffect enabled={true} intensity={0.6} />

      {/* Background pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_25%_25%,#E63946_1px,transparent_1px),radial-gradient(circle_at_75%_75%,#E63946_1px,transparent_1px)] [background-size:50px_50px]" />

      <div className="relative z-10 w-full max-w-6xl space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-6xl font-display tracking-[0.15em] mb-4 text-theme-primary text-shadow-purple-md">
            READY TO PLAY?
          </h1>
          <p className="text-xl text-theme-body">
            Enter the shadows and begin your investigation
          </p>
        </div>

        {/* Player Name Input - Centered */}
        <div className="max-w-md mx-auto">
          <div className="glass-card p-8">
            <label
              htmlFor="playerName"
              className="block text-2xl font-display mb-4 text-center tracking-wider text-[#E63946] transition-colors duration-500"
            >
              AGENT CODENAME
            </label>
            <input
              id="playerName"
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="Enter your alias..."
              className="input-field text-center text-lg"
              autoComplete="off"
            />
            <p className="text-xs mt-3 text-center font-mono text-theme-muted">
              This identity will be used throughout the operation
            </p>
          </div>
        </div>

        {/* Create or Join Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Create Room */}
          <div className="glass-card p-8 flex flex-col">
            <div className="flex-1">
              <div className="text-center mb-6">
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-[#E63946]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <h2 className="text-3xl font-display tracking-wider mb-2 text-theme-primary">
                  CREATE OPERATION
                </h2>
                <p className="text-sm text-theme-body">
                  Establish a new game room
                </p>
              </div>

              <button
                onClick={handleCreateRoom}
                className="btn-primary w-full mb-4"
                disabled={!playerName.trim()}
              >
                GENERATE ROOM CODE
              </button>

              {createdRoom && (
                <div className="mt-4 p-4 rounded text-center bg-[#8B5CF6]/10 border-2 border-[#8B5CF6]">
                  <p className="text-sm mb-2 font-mono text-theme-muted">
                    OPERATION CODE:
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-3xl font-mono font-bold tracking-widest text-theme-primary">
                      {createdRoom}
                    </span>
                    <button
                      onClick={() => handleCopyCode(createdRoom)}
                      className={`p-2 rounded transition-colors text-theme-primary ${
                        copiedCode ? 'bg-[#8B5CF6]/20' : 'bg-transparent hover:bg-[#8B5CF6]/10'
                      }`}
                      aria-label="Copy room code"
                    >
                      {copiedCode ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Join Room */}
          <div className="glass-card p-8 flex flex-col">
            <div className="flex-1">
              <div className="text-center mb-6">
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-theme-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                <h2 className="text-3xl font-display tracking-wider mb-2 text-theme-primary">
                  JOIN OPERATION
                </h2>
                <p className="text-sm text-theme-body">
                  Enter an existing game room
                </p>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  value={roomCode}
                  onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                  placeholder="ENTER CODE"
                  className="input-field text-center text-2xl font-mono tracking-widest uppercase"
                  maxLength={5}
                  autoComplete="off"
                />
              </div>

              <button
                onClick={handleJoinRoom}
                className="btn-danger w-full"
                disabled={!playerName.trim() || roomCode.trim().length !== 5}
              >
                INFILTRATE ROOM
              </button>

              {joinedRoom && (
                <div className="mt-4 p-4 rounded text-center bg-[#8B5CF6]/10 border-2 border-[#8B5CF6]">
                  <p className="text-sm mb-1 font-mono text-theme-muted">
                    CONNECTED TO:
                  </p>
                  <span className="text-2xl font-mono font-bold tracking-widest text-[#10B981]">
                    {joinedRoom}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Helper text */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-mono text-theme-muted">
            ★ CLASSIFIED ★ All communications are encrypted ★ Trust no one ★
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lobby;
