import React from 'react';

const PlayerSilhouette = ({
  playerName,
  isEliminated = false,
  role = null,
  showRole = false,
  onClick
}) => {
  return (
    <div
      className={`player-silhouette ${isEliminated ? 'eliminated' : ''} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={`Player: ${playerName}${isEliminated ? ' (eliminated)' : ''}`}
    >
      {/* Silhouette icon - using simple person shape */}
      <svg
        viewBox="0 0 100 100"
        className="w-20 h-20"
        fill="currentColor"
        style={{
          color: isEliminated ? 'rgba(168, 218, 220, 0.2)' : 'var(--color-ice-blue)',
          filter: isEliminated ? 'blur(2px)' : 'none'
        }}
      >
        {/* Head */}
        <circle cx="50" cy="30" r="15" />
        {/* Body */}
        <path d="M 35 45 Q 35 50 25 70 L 25 85 L 35 85 L 35 70 L 50 70 L 50 85 L 65 85 L 65 70 L 65 85 L 75 85 L 75 70 Q 65 50 65 45 Q 65 42 50 42 Q 35 42 35 45 Z" />
      </svg>

      {/* Player name badge */}
      <div
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap"
        style={{
          background: isEliminated
            ? 'rgba(71, 85, 105, 0.5)'
            : 'linear-gradient(135deg, rgba(230, 57, 70, 0.2), rgba(211, 47, 58, 0.2))',
          border: `1px solid ${isEliminated ? 'var(--color-slate-fog)' : 'var(--color-blood-orange)'}`,
          color: isEliminated ? 'rgba(168, 218, 220, 0.5)' : 'var(--color-blood-orange)'
        }}
      >
        {playerName}
      </div>

      {/* Role indicator if shown */}
      {showRole && role && (
        <div
          className="absolute top-2 right-2 px-2 py-1 rounded text-xs font-mono font-bold"
          style={{
            background: 'var(--color-shadow-purple)',
            color: 'white',
            fontSize: '0.625rem'
          }}
        >
          {role}
        </div>
      )}

      {/* Eliminated X mark */}
      {isEliminated && (
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ color: 'var(--color-blood-orange)' }}
        >
          <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
            <line x1="20" y1="20" x2="80" y2="80" />
            <line x1="80" y1="20" x2="20" y2="80" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default PlayerSilhouette;
