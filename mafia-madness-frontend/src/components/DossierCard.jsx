import React, { useState, useEffect } from 'react';

const DossierCard = ({
  role,
  description,
  onAcknowledge,
  autoReveal = true
}) => {
  const [isRevealed, setIsRevealed] = useState(!autoReveal);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showStamp, setShowStamp] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');

  useEffect(() => {
    if (autoReveal) {
      // Wait a moment then reveal
      const revealTimer = setTimeout(() => {
        setIsFlipping(true);
        setTimeout(() => {
          setIsRevealed(true);
          setIsFlipping(false);
          setShowStamp(true);
        }, 400); // Half of flip animation
      }, 500);

      return () => clearTimeout(revealTimer);
    }
  }, [autoReveal]);

  useEffect(() => {
    if (isRevealed && description) {
      // Typewriter effect for description
      let index = 0;
      const timer = setInterval(() => {
        if (index <= description.length) {
          setTypewriterText(description.substring(0, index));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 30);

      return () => clearInterval(timer);
    }
  }, [isRevealed, description]);

  return (
    <div className="dossier-card mx-auto">
      <div className={`dossier-inner ${isFlipping ? 'flipping' : ''}`}>
        {/* Top secret header */}
        <div className="text-center mb-4">
          <div
            className="inline-block px-4 py-1 font-mono text-xs tracking-widest"
            style={{
              background: 'var(--color-blood-orange)',
              color: 'white',
              letterSpacing: '0.2em'
            }}
          >
            ★ TOP SECRET ★
          </div>
        </div>

        {/* Role reveal */}
        <div className="text-center mb-6">
          <h2
            className="text-5xl font-display tracking-wider mb-2"
            style={{
              color: 'var(--color-blood-orange)',
              textShadow: '0 0 20px rgba(230, 57, 70, 0.3)'
            }}
          >
            YOUR ROLE
          </h2>
          <div
            className="text-6xl font-display tracking-wide"
            style={{
              color: 'var(--color-blood-orange)',
              textShadow: '0 0 30px rgba(230, 57, 70, 0.5)'
            }}
          >
            {role}
          </div>
        </div>

        {/* Divider line */}
        <div
          className="h-px mb-6"
          style={{ background: 'linear-gradient(to right, transparent, var(--color-blood-orange), transparent)' }}
        />

        {/* Description with typewriter effect */}
        <div className="mb-8">
          <h3
            className="text-sm font-mono tracking-widest mb-3 uppercase"
            style={{ color: 'var(--color-ice-blue)' }}
          >
            Mission Briefing:
          </h3>
          <p
            className="text-base leading-relaxed font-body min-h-[4rem]"
            style={{ color: 'var(--color-ice-blue)' }}
          >
            {typewriterText}
            {typewriterText.length < description?.length && (
              <span className="animate-pulse">▊</span>
            )}
          </p>
        </div>

        {/* Confidential stamp */}
        {showStamp && (
          <div
            className="absolute bottom-6 right-6 transform rotate-[-5deg]"
            style={{
              animation: 'stamp-impact 0.6s ease-out'
            }}
          >
            <div
              className="border-4 rounded px-6 py-3 font-mono font-bold text-2xl tracking-wider"
              style={{
                borderColor: 'var(--color-blood-orange)',
                color: 'rgba(230, 57, 70, 0.4)',
                transform: 'rotate(-2deg)'
              }}
            >
              CONFIDENTIAL
            </div>
          </div>
        )}

        {/* Acknowledge button */}
        {onAcknowledge && isRevealed && typewriterText.length === description?.length && (
          <div className="text-center mt-8">
            <button
              onClick={onAcknowledge}
              className="btn-primary"
              aria-label="I understand my role"
            >
              I UNDERSTAND
            </button>
          </div>
        )}

        {/* Background texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none rounded-[var(--radius-md)] opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              var(--color-ice-blue) 2px,
              var(--color-ice-blue) 3px
            )`
          }}
        />
      </div>
    </div>
  );
};

export default DossierCard;
