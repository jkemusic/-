import React, { useState } from 'react';
import CardViewer from './components/CardViewer';
import CharacterViewer from './components/CharacterViewer';
import RuleBook from './components/RuleBook';
import AIArbiter from './components/AIArbiter';
import HealthTracker from './components/HealthTracker';
import { BookOpen, Users, LayoutGrid, MessageSquareText, Activity } from 'lucide-react';

enum Tab {
  CARDS = 'Cards',
  CHARACTERS = 'Characters',
  RULES = 'Rules',
  ARBITER = 'AI Arbiter',
  TRACKER = 'Tracker'
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.CHARACTERS);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-amber-500/30">
      {/* Header */}
      <header className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50 shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center text-slate-950 font-bold text-xl border-2 border-amber-400">
                    殺
                </div>
                <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
                火柴人三國殺助手
                </h1>
            </div>
            
            <nav className="flex gap-1 md:gap-2 bg-slate-900/50 p-1 rounded-xl overflow-x-auto max-w-full">
              <TabButton 
                active={activeTab === Tab.CHARACTERS} 
                onClick={() => setActiveTab(Tab.CHARACTERS)} 
                icon={<Users size={18} />} 
                label="角色" 
              />
              <TabButton 
                active={activeTab === Tab.CARDS} 
                onClick={() => setActiveTab(Tab.CARDS)} 
                icon={<LayoutGrid size={18} />} 
                label="卡牌" 
              />
              <TabButton 
                active={activeTab === Tab.RULES} 
                onClick={() => setActiveTab(Tab.RULES)} 
                icon={<BookOpen size={18} />} 
                label="規則" 
              />
              <TabButton 
                active={activeTab === Tab.TRACKER} 
                onClick={() => setActiveTab(Tab.TRACKER)} 
                icon={<Activity size={18} />} 
                label="計分板" 
              />
               <TabButton 
                active={activeTab === Tab.ARBITER} 
                onClick={() => setActiveTab(Tab.ARBITER)} 
                icon={<MessageSquareText size={18} />} 
                label="AI 裁判" 
              />
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {activeTab === Tab.CARDS && <CardViewer />}
        {activeTab === Tab.CHARACTERS && <CharacterViewer />}
        {activeTab === Tab.RULES && <RuleBook />}
        {activeTab === Tab.TRACKER && <HealthTracker />}
        {activeTab === Tab.ARBITER && <AIArbiter />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>基於自製火柴人三國殺桌遊。</p>
        </div>
      </footer>
    </div>
  );
};

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

const TabButton: React.FC<TabButtonProps> = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-all text-sm md:text-base whitespace-nowrap ${
      active 
        ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20 font-medium' 
        : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default App;