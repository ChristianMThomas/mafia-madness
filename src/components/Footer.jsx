import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Brand & Copyright */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white">Mind-Forge </h3>
          <p className="text-sm">&copy; {new Date().getFullYear()} Mind-Forge. All rights reserved.</p>
        </div>

        <div className='text-center'>
          <img src='./src/assets/images/Mind-ForgeLogo.png ' width={100} />
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 text-xl">
          <a href="mailto:ct17183@mind-forge-cthomas.com" className="hover:text-yellow-400 transition duration-200" title="Email">
            📧
          </a>
          <a href="https://github.com/ChristianMThomas" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-200" title="GitHub">
            💻
          </a>
          <a href="https://twitter.com/MindForge2LLC" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-200" title="Twitter">
            🐦
          </a>
          <a href="https://discord.gg/jcQffV4VXF" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-200" title="Discord">
            🗨️
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;