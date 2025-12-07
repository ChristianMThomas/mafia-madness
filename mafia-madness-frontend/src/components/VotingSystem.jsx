import React, { useState, useEffect } from 'react';
import PlayerSilhouette from './PlayerSilhouette';

const VotingSystem = ({ players, onVoteComplete }) => {
  const [votes, setVotes] = useState({});
  const [revealedVotes, setRevealedVotes] = useState([]);
  const [isRevealing, setIsRevealing] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handleVote = (playerId) => {
    if (selectedPlayer || isRevealing) return;
    setSelectedPlayer(playerId);
  };

  const confirmVote = () => {
    if (!selectedPlayer) return;

    // In a real game, this would send the vote to the server
    const newVotes = { ...votes };
    newVotes[selectedPlayer] = (newVotes[selectedPlayer] || 0) + 1;
    setVotes(newVotes);

    // Start the dramatic reveal
    setIsRevealing(true);
    revealVotesWithTension(newVotes);
  };

  const revealVotesWithTension = (voteData) => {
    // Create array of all votes
    const allVotes = [];
    Object.keys(voteData).forEach(playerId => {
      for (let i = 0; i < voteData[playerId]; i++) {
        allVotes.push(playerId);
      }
    });

    // Shuffle for suspense
    const shuffled = allVotes.sort(() => Math.random() - 0.5);

    // Reveal one vote at a time with 3-second delays
    shuffled.forEach((playerId, index) => {
      setTimeout(() => {
        setRevealedVotes(prev => [...prev, { playerId, index }]);

        // Add screen shake on final vote
        if (index === shuffled.length - 1) {
          document.body.style.animation = 'screen-shake 0.5s ease-in-out';
          setTimeout(() => {
            document.body.style.animation = '';
            if (onVoteComplete) {
              onVoteComplete(voteData);
            }
          }, 500);
        }
      }, index * 3000);
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Phase indicator */}
      <div
        className="text-center mb-8 py-4 rounded"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(230, 57, 70, 0.2), transparent)',
          borderTop: '2px solid var(--color-blood-orange)',
          borderBottom: '2px solid var(--color-blood-orange)'
        }}
      >
        <h2
          className="text-4xl font-display tracking-wider"
          style={{ color: 'var(--color-blood-orange)' }}
        >
          {isRevealing ? 'COUNTING VOTES...' : 'VOTING PHASE'}
        </h2>
        <p style={{ color: 'var(--color-ice-blue)' }} className="mt-2">
          {isRevealing ? 'The town has spoken' : 'Choose who to eliminate'}
        </p>
      </div>

      {/* Players grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {players.map(player => {
          const playerVotes = revealedVotes.filter(v => v.playerId === player.id).length;

          return (
            <div
              key={player.id}
              className="relative"
              onClick={() => handleVote(player.id)}
            >
              <div className={`
                transition-all duration-300
                ${selectedPlayer === player.id ? 'ring-4 ring-[#E63946] rounded-full' : ''}
                ${!isRevealing ? 'cursor-pointer hover:scale-105' : ''}
              `}>
                <PlayerSilhouette
                  playerName={player.name}
                  isEliminated={false}
                />
              </div>

              {/* Vote tally marks */}
              {playerVotes > 0 && (
                <div
                  className="absolute -top-2 -right-2 flex gap-1"
                  style={{ transform: 'rotate(15deg)' }}
                >
                  {Array.from({ length: playerVotes }).map((_, i) => (
                    <div
                      key={i}
                      className="relative"
                      style={{
                        animation: `scratch-appear 0.6s ease-out ${i * 0.3}s backwards`
                      }}
                    >
                      <svg width="20" height="40" viewBox="0 0 20 40">
                        <line
                          x1="10"
                          y1="0"
                          x2="10"
                          y2="35"
                          stroke="var(--color-blood-orange)"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeDasharray="35"
                          strokeDashoffset="0"
                          style={{
                            filter: 'drop-shadow(0 0 4px rgba(230, 57, 70, 0.6))'
                          }}
                        />
                      </svg>
                    </div>
                  ))}
                </div>
              )}

              {/* Vote count badge */}
              {playerVotes > 0 && (
                <div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full font-bold text-sm"
                  style={{
                    background: 'var(--color-blood-orange)',
                    color: 'white',
                    boxShadow: '0 0 20px rgba(230, 57, 70, 0.6)'
                  }}
                >
                  {playerVotes} {playerVotes === 1 ? 'vote' : 'votes'}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Confirm vote button */}
      {selectedPlayer && !isRevealing && (
        <div className="text-center">
          <button
            onClick={confirmVote}
            className="btn-danger text-xl px-12 py-4"
          >
            CAST VOTE
          </button>
          <button
            onClick={() => setSelectedPlayer(null)}
            className="btn-ghost ml-4 px-8 py-4"
          >
            Cancel
          </button>
        </div>
      )}

      {/* Add screen shake animation */}
      <style>{`
        @keyframes screen-shake {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-10px, -5px); }
          20% { transform: translate(10px, 5px); }
          30% { transform: translate(-10px, 5px); }
          40% { transform: translate(10px, -5px); }
          50% { transform: translate(-10px, -5px); }
          60% { transform: translate(10px, 5px); }
          70% { transform: translate(-10px, 5px); }
          80% { transform: translate(10px, -5px); }
          90% { transform: translate(-10px, -5px); }
        }
      `}</style>
    </div>
  );
};

export default VotingSystem;
