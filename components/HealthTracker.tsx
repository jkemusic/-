import React, { useState } from 'react';
import { Plus, Minus, RefreshCcw } from 'lucide-react';

const HealthTracker: React.FC = () => {
  const [players, setPlayers] = useState<{id: number, hp: number, maxHp: number}[]>([
    { id: 1, hp: 4, maxHp: 4 },
    { id: 2, hp: 4, maxHp: 4 },
    { id: 3, hp: 4, maxHp: 4 },
    { id: 4, hp: 4, maxHp: 4 },
  ]);

  const updateHp = (id: number, delta: number) => {
    setPlayers(prev => prev.map(p => {
      if (p.id !== id) return p;
      const newHp = Math.min(p.maxHp, Math.max(0, p.hp + delta));
      return { ...p, hp: newHp };
    }));
  };

  const reset = () => {
     setPlayers(prev => prev.map(p => ({...p, hp: p.maxHp})));
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-200">生命值追蹤</h2>
        <button onClick={reset} className="text-slate-400 hover:text-white flex items-center gap-1 text-sm">
            <RefreshCcw size={14} /> 重置全部
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {players.map(p => (
          <div key={p.id} className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex flex-col items-center">
            <div className="text-slate-400 font-medium mb-2">玩家 {p.id}</div>
            <div className={`text-4xl font-bold mb-4 ${
                p.hp <= 1 ? 'text-red-500 animate-pulse' : 
                p.hp <= 2 ? 'text-orange-400' : 'text-green-400'
            }`}>
                {p.hp} <span className="text-sm text-slate-500 font-normal">/ {p.maxHp}</span>
            </div>
            <div className="flex gap-3">
                <button 
                    onClick={() => updateHp(p.id, -1)}
                    className="w-10 h-10 rounded-full bg-red-900/50 border border-red-700 text-red-400 hover:bg-red-800/50 flex items-center justify-center"
                >
                    <Minus size={20} />
                </button>
                <button 
                    onClick={() => updateHp(p.id, 1)}
                    className="w-10 h-10 rounded-full bg-green-900/50 border border-green-700 text-green-400 hover:bg-green-800/50 flex items-center justify-center"
                >
                    <Plus size={20} />
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthTracker;