
import React, { useState } from 'react';
import { CHARACTERS } from '../constants';
import { Faction } from '../types';
import { Search, Heart } from 'lucide-react';

const CharacterViewer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterFaction, setFilterFaction] = useState<Faction | 'All'>('All');

  const filteredChars = CHARACTERS.filter(char => {
    const matchesSearch = char.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          char.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFaction = filterFaction === 'All' || char.faction === filterFaction;
    return matchesSearch && matchesFaction;
  });

  const getFactionStyle = (faction: Faction) => {
    switch (faction) {
      case Faction.WEI: return { border: 'border-blue-500', bg: 'bg-blue-950/40', text: 'text-blue-200', avatarBg: 'b6e3f4' };
      case Faction.SHU: return { border: 'border-red-500', bg: 'bg-red-950/40', text: 'text-red-200', avatarBg: 'ffdfdf' };
      case Faction.WU: return { border: 'border-green-500', bg: 'bg-green-950/40', text: 'text-green-200', avatarBg: 'd1fae5' };
      case Faction.QUN: return { border: 'border-gray-400', bg: 'bg-gray-800/40', text: 'text-gray-200', avatarBg: 'f1f5f9' };
      case Faction.JIN: return { border: 'border-purple-500', bg: 'bg-purple-950/40', text: 'text-purple-200', avatarBg: 'e9d5ff' };
      case Faction.GOD: return { border: 'border-yellow-500', bg: 'bg-yellow-950/40', text: 'text-yellow-200', avatarBg: 'fef08a' };
      default: return { border: 'border-slate-500', bg: 'bg-slate-800', text: 'text-slate-200', avatarBg: 'ffffff' };
    }
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input 
            type="text"
            placeholder="搜尋角色或技能..."
            className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-blue-500 text-white shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          <button
              onClick={() => setFilterFaction('All')}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                filterFaction === 'All' ? 'bg-white text-slate-900 shadow-md scale-105' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              全部
            </button>
          {Object.values(Faction).map((faction) => (
            <button
              key={faction}
              onClick={() => setFilterFaction(faction)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                filterFaction === faction 
                  ? 'bg-blue-600 text-white shadow-md scale-105' 
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {faction.split(' ')[0]}
            </button>
          ))}
        </div>
        <div className="text-slate-500 text-sm text-right px-2">
          共 {filteredChars.length} 位武將
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredChars.map((char) => {
          const style = getFactionStyle(char.faction);
          // Use generic stick figure avatar if no specific image provided
          const avatarUrl = char.imageUrl || `https://api.dicebear.com/9.x/micah/svg?seed=${char.id}&backgroundColor=${style.avatarBg}&radius=10`;
          
          return (
            <div key={char.id} className={`relative group overflow-hidden rounded-2xl border-2 ${style.border} bg-slate-900 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1`}>
              {/* Card Image Area */}
              <div className={`h-48 w-full ${style.bg} relative overflow-hidden border-b border-slate-700/50`}>
                 <img 
                   src={avatarUrl} 
                   alt={char.name}
                   className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-110"
                   loading="lazy"
                 />
                 <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-white border border-white/20">
                   {char.faction.split(' ')[0]}
                 </div>
                 <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-red-400 font-bold border border-red-500/30">
                    <span>{char.health}</span>
                    <Heart size={14} fill="currentColor" />
                 </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className={`text-2xl font-black mb-4 ${style.text} tracking-wide`}>{char.name}</h3>
                <div className="space-y-3">
                  {char.skills.map((skill, idx) => (
                    <div key={idx} className="relative pl-3">
                      <div className={`absolute left-0 top-2 w-1.5 h-1.5 rounded-full ${style.bg.replace('/40','')} opacity-80`}></div>
                      <p className="text-sm text-slate-300 leading-relaxed font-medium">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterViewer;
