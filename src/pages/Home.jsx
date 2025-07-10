import React from 'react'
import NavBar from '../components/navbar'

const roles = ['Mafia', 'Citizen', 'Sheriff', 'Doctor', 'Ghost'];

const Home = () => {
  return (
    <div className="text-white">

      {/* Welcome Section */}
      <section className="bg-red-950 py-20 px-6 text-center">
        <h1 className="text-5xl font-serif text-white font-bold mb-4"
          style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.6)' }}>
          Mafia Madness</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Welcome to Mafia Madness.
          Step into the shadowy world of deception,
          strategy, and high-stakes bluffing.
          the ultimate online version of the classic party game, Mafia!
          Whether you’re a cunning conspirator, a sharp-eyed detective,
          or just love the thrill of outsmarting your friends, our game is
          designed to keep you on the edge of your seat!
        </p>
      </section>

      {/* Roles Section */}
      <section className="bg-white py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Meet Your Roles</h2>

        <div className="role-scroll-wrapper">
          <div className="role-scroll">
            {roles.map((role, index) => (
              <div key={index} className="role-card">
                <p>{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <a id='How-To-Play'/>
      <section className="bg-gray-100 py-20 px-6 text-gray-900">
        <h2 className="text-3xl font-bold text-center mb-6">How to Play?</h2>
        <div className="max-w-3xl mx-auto text-lg space-y-4">
          <p><strong>Roles Revealed:</strong> Everyone gets a secret role—mafia, citizen, sheriff, or doctor.</p>
          <p><strong>Day Phase:</strong> Players discuss and figure out who the mafia is (while the mafia  tries to blends in).</p>
          <p><strong>Town Meeting Phase:</strong> Each round ends with a vote. Eliminate who you suspect… choose very wisely.</p>
          <p><strong>Night Phase:</strong> The mafia will strike at night Eliminating a player.</p>
          <p><strong>Victory:</strong> Mafia wins by eliminating all others. Citizens win by uncovering and eliminating the mafia. Can you survive the madness?</p>
        </div>
      </section>

    </div>
  );
};

export default Home;

