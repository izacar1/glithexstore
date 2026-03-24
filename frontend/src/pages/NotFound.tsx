import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cyber-black flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-mono text-cyber-cyan text-xs tracking-[0.3em] mb-4">
          {'>'} ERROR 404 — SIGNAL NOT FOUND _
        </p>
        <h1 className="font-orbitron font-black text-6xl md:text-8xl text-white tracking-wider mb-4">
          4<span className="text-cyber-purple">0</span>4
        </h1>
        <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">
          This sector of the network has been corrupted or does not exist. Return to base.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 font-orbitron font-bold text-sm tracking-widest text-white bg-gradient-to-r from-cyber-purple to-cyber-blue hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:scale-105 transition-all duration-300 uppercase"
        >
          RETURN HOME
        </Link>
      </div>
    </div>
  );
}