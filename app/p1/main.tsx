'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';

const games = [
  { id: 1, name: 'Mobile Legends', image: '/games/mlbb.jpg' },
  { id: 2, name: 'League of Legends', image: '/games/LOL.jpg' },
  { id: 3, name: 'PUBG', image: '/games/pubg.jpg' },
  { id: 4, name: 'Valorant', image: '/games/valorant.jpg' },
  { id: 5, name: 'Honkai: Star Rail', image: '/games/hsr.jpg' },
  { id: 6, name: 'Genshin Impact', image: '/games/GenshinImpact.jpg' },
  { id: 7, name: 'Dota 2', image: '/games/dota.jpg' },
  { id: 8, name: 'rov', image: '/games/rov.png' },
  { id: 9, name: 'Overwatch', image: '/games/Overwatch.jpg' },
  { id: 10, name: 'Apex Legends', image: '/games/Apex Legends.jpg' },
  { id: 11, name: 'Call of Duty Mobile', image: '/games/Call of Duty.png' },
  { id: 12, name: 'Boold Strike', image: '/games/Boold Strike.jpg' },
  { id: 13, name: 'Delta Force', image: '/games/Delta Force.jpg' },
  { id: 14, name: 'Free Fire', image: '/games/Free Fire.jpg' },
  { id: 15, name: 'LOL Wild Rift', image: '/games/LOL Wild Rift.jpg' },
];

export default function Home() {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const banners = ['News 1', 'News 2', 'News 3'];

  const handlePrevBanner = () => {
    setCurrentBannerIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleNextBanner = () => {
    setCurrentBannerIndex((prev) => (prev + 1) % banners.length);
  };

  const handleNavClick = (label: string) => {
    alert(`${label} button clicked!`);
  };

  const handleGameClick = (gameName: string) => {
    alert(`${gameName} clicked!`);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Search button clicked!');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Bar */}
      <nav className="bg-black py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
          <button
            className="btn btn-ghost text-lg font-bold"
            onClick={() => handleNavClick('Logo')}
          >
            Logo
          </button>

          <div className="flex items-center gap-3">
            <button
              className="btn btn-sm btn-ghost"
              onClick={() => handleNavClick('UID')}
            >
              UID
            </button>
            <button
              className="btn btn-sm btn-ghost"
              onClick={() => handleNavClick('ID PASS')}
            >
              ID PASS
            </button>
            <button
              className="btn btn-sm btn-ghost"
              onClick={() => handleNavClick('SALE')}
            >
              SALE
            </button>
          </div>

          <form
            onSubmit={handleSearch}
            className="flex-1 max-w-md mx-4"
          >
            <div className="input-group">
              <input
                type="text"
                placeholder="Search your game"
                className="input input-bordered input-sm w-full text-black"
              />
              <button
                type="submit"
                className="btn btn-sm btn-ghost"
              >
                <Search size={18} />
              </button>
            </div>
          </form>

          <div className="flex items-center gap-2">
            <button
              className="btn btn-sm btn-ghost"
              onClick={() => handleNavClick('Register')}
            >
              Register
            </button>
            <button
              className="btn btn-sm btn-ghost"
              onClick={() => handleNavClick('Log in')}
            >
              Log in
            </button>
            <button
              className="btn btn-sm btn-ghost"
              onClick={() => handleNavClick('Contact')}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Banner Section */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto relative">
          <div className="bg-white rounded-3xl p-6 flex items-center justify-between">
            <button
              onClick={handlePrevBanner}
              className="btn btn-ghost btn-circle text-black"
              aria-label="Previous banner"
            >
              <ChevronLeft size={32} />
            </button>

            <div className="flex-1 text-center py-12">
              <h2 className="text-4xl font-bold text-black">
                Banner for news
              </h2>
            </div>

            <button
              onClick={handleNextBanner}
              className="btn btn-ghost btn-circle text-black"
              aria-label="Next banner"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          <div className="text-center mt-4">
            <span className="text-sm text-gray-400">
              {currentBannerIndex + 1} / {banners.length}
            </span>
          </div>
        </div>
      </div>

      {/* Games Grid */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {games.map((game) => (
              <div
                key={game.id}
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => handleGameClick(game.name)}
              >
                <div className="w-32 h-32 rounded-3xl bg-white flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-200 overflow-hidden shrink-0">
                  {game.image ? (
                    <Image
                      src={game.image}
                      alt={game.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-700 font-semibold">Game Icon</span>
                  )}
                </div>
                <span className="text-center font-semibold text-gray-300 group-hover:text-white transition-colors">
                  {game.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}