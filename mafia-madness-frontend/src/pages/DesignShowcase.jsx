import React, { useState } from 'react';
import SpotlightEffect from '../components/SpotlightEffect';
import PlayerSilhouette from '../components/PlayerSilhouette';
import DossierCard from '../components/DossierCard';
import VotingSystem from '../components/VotingSystem';

const DesignShowcase = () => {
  const [showDossier, setShowDossier] = useState(false);
  const [showVoting, setShowVoting] = useState(false);

  const mockPlayers = [
    { id: 1, name: 'Agent Shadow' },
    { id: 2, name: 'Detective Noir' },
    { id: 3, name: 'The Informant' },
    { id: 4, name: 'Silent Observer' },
  ];

  return (
    <div
      className="min-h-screen py-12 px-6"
      style={{ background: 'var(--color-deep-noir)' }}
    >
      <SpotlightEffect enabled={true} intensity={0.5} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className="text-6xl font-display mb-4 tracking-wider"
            style={{
              color: 'var(--color-blood-orange)',
              textShadow: '0 0 40px rgba(230, 57, 70, 0.3)',
              letterSpacing: '0.15em'
            }}
          >
            DESIGN SYSTEM SHOWCASE
          </h1>
          <p
            className="text-xl"
            style={{ color: 'var(--color-ice-blue)' }}
          >
            Midnight Intrigue Design System - Mafia Madness
          </p>
        </div>

        {/* Color Palette */}
        <section className="mb-16">
          <h2
            className="text-4xl font-display mb-8 tracking-wider"
            style={{ color: 'var(--color-blood-orange)' }}
          >
            COLOR PALETTE
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Deep Noir', color: 'var(--color-deep-noir)' },
              { name: 'Blood Orange', color: 'var(--color-blood-orange)' },
              { name: 'Gold Conspiracy', color: 'var(--color-gold-conspiracy)' },
              { name: 'Slate Fog', color: 'var(--color-slate-fog)' },
              { name: 'Ice Blue', color: 'var(--color-ice-blue)' },
              { name: 'Shadow Purple', color: 'var(--color-shadow-purple)' },
              { name: 'Emerald Whisper', color: 'var(--color-emerald-whisper)' },
              { name: 'Dark Slate', color: 'var(--color-dark-slate)' },
            ].map((item) => (
              <div key={item.name} className="glass-card p-4">
                <div
                  className="w-full h-24 rounded mb-3"
                  style={{ background: item.color }}
                />
                <p
                  className="text-sm font-mono text-center"
                  style={{ color: 'var(--color-ice-blue)' }}
                >
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h2
            className="text-4xl font-display mb-8 tracking-wider"
            style={{ color: 'var(--color-blood-orange)' }}
          >
            TYPOGRAPHY
          </h2>
          <div className="glass-card p-8 space-y-6">
            <div>
              <p className="text-sm font-mono mb-2" style={{ color: 'var(--color-slate-fog)' }}>
                Display Font - Bebas Neue
              </p>
              <h1
                className="text-6xl font-display tracking-wider"
                style={{ color: 'var(--color-blood-orange)' }}
              >
                MAFIA MADNESS
              </h1>
            </div>
            <div>
              <p className="text-sm font-mono mb-2" style={{ color: 'var(--color-slate-fog)' }}>
                Body Font - Inter
              </p>
              <p className="text-xl" style={{ color: 'var(--color-ice-blue)' }}>
                Step into the shadowy world of deception and strategy.
              </p>
            </div>
            <div>
              <p className="text-sm font-mono mb-2" style={{ color: 'var(--color-slate-fog)' }}>
                Monospace Font - Courier Prime
              </p>
              <p className="font-mono text-lg" style={{ color: 'var(--color-ice-blue)' }}>
                CLASSIFIED DOCUMENT - TOP SECRET - CODE: XJ94K
              </p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-16">
          <h2
            className="text-4xl font-display mb-8 tracking-wider"
            style={{ color: 'var(--color-blood-orange)' }}
          >
            BUTTONS
          </h2>
          <div className="glass-card p-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="btn-primary">Primary Button</button>
              <button className="btn-danger">Danger Button</button>
              <button className="btn-ghost">Ghost Button</button>
              <button className="btn-primary" disabled>Disabled</button>
            </div>
          </div>
        </section>

        {/* Player Silhouettes */}
        <section className="mb-16">
          <h2
            className="text-4xl font-display mb-8 tracking-wider"
            style={{ color: 'var(--color-blood-orange)' }}
          >
            PLAYER AVATARS
          </h2>
          <div className="glass-card p-8">
            <div className="flex flex-wrap gap-8 justify-center">
              <PlayerSilhouette playerName="Active Player" />
              <PlayerSilhouette playerName="With Role" role="MAFIA" showRole={true} />
              <PlayerSilhouette playerName="Eliminated" isEliminated={true} />
            </div>
          </div>
        </section>

        {/* Glass Cards */}
        <section className="mb-16">
          <h2
            className="text-4xl font-display mb-8 tracking-wider"
            style={{ color: 'var(--color-blood-orange)' }}
          >
            GLASS CARDS
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6">
              <h3
                className="text-2xl font-display mb-3 tracking-wide"
                style={{ color: 'var(--color-blood-orange)' }}
              >
                CARD TITLE
              </h3>
              <p style={{ color: 'var(--color-ice-blue)' }}>
                Frosted glass effect with subtle backdrop blur and gradient border.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3
                className="text-2xl font-display mb-3 tracking-wide"
                style={{ color: 'var(--color-blood-orange)' }}
              >
                HOVER EFFECT
              </h3>
              <p style={{ color: 'var(--color-ice-blue)' }}>
                Cards lift on hover with glowing border effect.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3
                className="text-2xl font-display mb-3 tracking-wide"
                style={{ color: 'var(--color-blood-orange)' }}
              >
                ACCESSIBILITY
              </h3>
              <p style={{ color: 'var(--color-ice-blue)' }}>
                High contrast ratios and clear focus states.
              </p>
            </div>
          </div>
        </section>

        {/* Input Fields */}
        <section className="mb-16">
          <h2
            className="text-4xl font-display mb-8 tracking-wider"
            style={{ color: 'var(--color-blood-orange)' }}
          >
            INPUT FIELDS
          </h2>
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div>
                <label
                  className="block mb-2 font-display text-xl tracking-wider"
                  style={{ color: 'var(--color-blood-orange)' }}
                >
                  AGENT NAME
                </label>
                <input
                  type="text"
                  placeholder="Enter your codename..."
                  className="input-field"
                />
              </div>
              <div>
                <label
                  className="block mb-2 font-display text-xl tracking-wider"
                  style={{ color: 'var(--color-blood-orange)' }}
                >
                  ROOM CODE
                </label>
                <input
                  type="text"
                  placeholder="XXXXX"
                  className="input-field text-center font-mono text-2xl tracking-widest"
                  maxLength={5}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Patterns */}
        <section className="mb-16">
          <h2
            className="text-4xl font-display mb-8 tracking-wider"
            style={{ color: 'var(--color-blood-orange)' }}
          >
            INTERACTIVE PATTERNS
          </h2>
          <div className="space-y-6">
            {/* Dossier Card Demo */}
            <div className="glass-card p-8">
              <h3
                className="text-2xl font-display mb-4 tracking-wide text-center"
                style={{ color: 'var(--color-blood-orange)' }}
              >
                ROLE REVEAL RITUAL
              </h3>
              <p
                className="text-center mb-6"
                style={{ color: 'var(--color-ice-blue)' }}
              >
                Dramatic role assignment with dossier flip and typewriter effect
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => setShowDossier(!showDossier)}
                  className="btn-primary"
                >
                  {showDossier ? 'HIDE DOSSIER' : 'REVEAL ROLE'}
                </button>
              </div>
              {showDossier && (
                <div className="mt-8">
                  <DossierCard
                    role="MAFIA"
                    description="You are part of the conspiracy. Eliminate targets under cover of night while blending in during the day. Trust your fellow mafia members and eliminate all citizens to win."
                    onAcknowledge={() => setShowDossier(false)}
                    autoReveal={true}
                  />
                </div>
              )}
            </div>

            {/* Voting System Demo */}
            <div className="glass-card p-8">
              <h3
                className="text-2xl font-display mb-4 tracking-wide text-center"
                style={{ color: 'var(--color-blood-orange)' }}
              >
                VOTE TENSION BUILDER
              </h3>
              <p
                className="text-center mb-6"
                style={{ color: 'var(--color-ice-blue)' }}
              >
                Suspenseful voting with tally marks and dramatic reveals
              </p>
              <div className="flex justify-center mb-6">
                <button
                  onClick={() => setShowVoting(!showVoting)}
                  className="btn-primary"
                >
                  {showVoting ? 'HIDE VOTING' : 'START VOTE'}
                </button>
              </div>
              {showVoting && (
                <VotingSystem
                  players={mockPlayers}
                  onVoteComplete={(votes) => console.log('Voting complete:', votes)}
                />
              )}
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-20">
          <p
            className="font-mono text-sm"
            style={{ color: 'var(--color-slate-fog)' }}
          >
            ★ MIDNIGHT INTRIGUE DESIGN SYSTEM ★
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesignShowcase;
