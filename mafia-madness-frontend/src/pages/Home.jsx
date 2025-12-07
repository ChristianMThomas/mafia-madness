import React from 'react';
import { Link } from 'react-router-dom';
import SpotlightEffect from '../components/SpotlightEffect';
import ThemeToggle from '../components/ThemeToggle';

const roles = [
  {
    name: 'MAFIA',
    description: 'Eliminate targets under cover of night. Blend in during the day.'
  },
  {
    name: 'CITIZEN',
    description: 'Uncover the conspirators. Vote wisely to survive.'
  },
  {
    name: 'SHERIFF',
    description: 'Investigate suspects. Use your badge to reveal the truth.'
  },
  {
    name: 'DOCTOR',
    description: 'Protect the innocent. Your medical skills can save lives.'
  },
  {
    name: 'GHOST',
    description: 'Even in death, you observe. The truth may yet be revealed.'
  }
];

const Home = () => {
  return (
    <div className="relative min-h-screen transition-colors duration-500">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Spotlight effect */}
      <SpotlightEffect enabled={true} intensity={0.5} />

      {/* Dynamic background - subtle cityscape */}
      <div className="fixed inset-0 opacity-5 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%201000%20300%27%3E%3Cpath%20fill=%27%23A8DADC%27%20d=%27M0%20250h50v50H0zM60%20200h40v100h-40zM110%20220h50v80h-50zM170%20180h60v120h-60zM240%20200h40v100h-40zM290%20160h70v140h-70zM370%20190h50v110h-50zM430%20210h45v90h-45zM485%20170h55v130h-55zM550%20200h50v100h-50zM610%20180h60v120h-60zM680%20195h45v105h-45zM735%20160h65v140h-65zM810%20185h50v115h-50zM870%20205h40v95h-40zM920%20175h80v125h-80z%27/%3E%3C/svg%3E')] bg-bottom bg-cover bg-no-repeat" />

      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,#E63946,transparent_70%)]" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="font-display tracking-[0.1em] mb-6 text-[clamp(3rem,10vw,7rem)] text-theme-primary text-shadow-purple-glow">
            MAFIA MADNESS
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed text-theme-body">
            Step into the shadowy world of deception, strategy, and high-stakes bluffing.
            The ultimate online version of the classic party game where trust is a luxury
            and everyone is a suspect.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/lobby">
              <button className="btn-primary text-xl px-8 py-4">
                CREATE GAME
              </button>
            </Link>
            <Link to="/lobby">
              <button className="btn-ghost text-xl px-8 py-4">
                JOIN GAME
              </button>
            </Link>
          </div>

          {/* How to Play link */}
          <div className="mt-8">
            <a
              href="#how-to-play"
              className="inline-flex items-center gap-2 font-semibold text-theme-primary hover:opacity-80 transition-opacity"
            >
              <span>Learn How to Play</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-display text-center mb-4 tracking-[0.15em] text-[#E63946] transition-colors duration-500">
            CHOOSE YOUR IDENTITY
          </h2>
          <p className="text-center mb-12 text-lg text-theme-body">
            Each role holds unique powers in this deadly game
          </p>

          {/* Scrolling role cards */}
          <div className="role-scroll-wrapper mb-12">
            <div className="role-scroll">
              {/* Duplicate roles for seamless loop */}
              {[...roles, ...roles].map((role, index) => (
                <div key={index} className="role-card">
                  <h3>{role.name}</h3>
                  <p>{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section
        id="how-to-play"
        className="relative py-20 px-6 transition-colors duration-500"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-display text-center mb-12 tracking-[0.15em] text-theme-primary">
            HOW TO SURVIVE
          </h2>

          <div className="space-y-6">
            {[
              {
                title: 'ROLES REVEALED',
                content: 'Everyone receives a secret role—mafia, citizen, sheriff, or doctor. Guard your identity.'
              },
              {
                title: 'DAY PHASE',
                content: 'Players discuss and deduce who the mafia members are, while the mafia try to blend in seamlessly.'
              },
              {
                title: 'TOWN MEETING',
                content: 'Each round ends with a vote. Eliminate who you suspect... but choose very wisely.'
              },
              {
                title: 'NIGHT PHASE',
                content: 'The mafia strikes under cover of darkness, eliminating their chosen target.'
              },
              {
                title: 'VICTORY CONDITIONS',
                content: 'Mafia wins by eliminating all others. Citizens win by uncovering and eliminating all mafia members.'
              }
            ].map((phase, index) => (
              <div
                key={index}
                className="glass-card p-6"
              >
                <h3 className="text-2xl font-display mb-3 tracking-wide text-[#E63946] transition-colors duration-500">
                  {phase.title}
                </h3>
                <p className="text-lg leading-relaxed text-theme-body">
                  {phase.content}
                </p>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16">
            <p className="text-2xl font-bold mb-6 text-theme-primary">
              Can you survive the madness?
            </p>
            <Link to="/lobby">
              <button className="btn-primary text-xl px-12 py-4">
                START PLAYING NOW
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer spacer */}
      <div className="h-20" />
    </div>
  );
};

export default Home;

