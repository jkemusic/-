import React, { useState } from 'react';
import { CARDS } from '../constants';
import { CardType } from '../types';
import { Search, Sword, Shield, Scroll, Zap } from 'lucide-react';

const CardViewer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<CardType | 'All'>('All');

  const filteredCards = CARDS.filter(card => {
    const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          card.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'All' || card.type === filterType;
    return matchesSearch && matchesType;
  });

  const getIcon = (type: CardType) => {
    switch (type) {
      case CardType.WEAPON: return <Sword size={16} className="text-red-400" />;
      case CardType.ARMOR: return <Shield size={16} className="text-blue-400" />;
      case CardType.SCROLL: return <Scroll size={16} className="text-yellow-400" />;
      case CardType.BASIC: return <Zap size={16} className="text-green-400" />;
      default: return null;
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input 
            type="text"
            placeholder="搜尋卡牌..."
            className="w-full bg-slate-800 border border-slate-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-blue-500 text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {['All', ...Object.values(CardType)].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type as CardType | 'All')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                filterType === type 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              {type === 'All' ? '全部' : type}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCards.map((card) => (
          <div key={card.id} className="bg-slate-800 border border-slate-700 rounded-xl p-4 shadow-lg hover:border-blue-500/50 transition-all">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-amber-100">{card.name}</h3>
              <span className="bg-slate-900/50 p-1 rounded-md">{getIcon(card.type)}</span>
            </div>
            <span className="text-xs uppercase tracking-wider text-slate-400 mb-2 block">{card.type}</span>
            <p className="text-slate-300 text-sm">{card.description}</p>
            {card.distance && (
              <div className="mt-3 text-xs bg-slate-900 inline-block px-2 py-1 rounded text-blue-300">
                距離: {card.distance}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardViewer;