import React from 'react';
import { RULES_TEXT } from '../constants';

const RuleBook: React.FC = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-serif font-bold text-amber-500 mb-6 text-center">規則書</h2>
      <div className="space-y-8">
        {RULES_TEXT.map((section, idx) => (
          <div key={idx} className="bg-slate-800/50 border border-amber-900/30 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-amber-200 mb-4 border-b border-slate-700 pb-2">
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.content.map((rule, rIdx) => (
                <li key={rIdx} className="flex items-start gap-3 text-slate-300">
                  <span className="bg-amber-900/50 text-amber-200 text-xs rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {rIdx + 1}
                  </span>
                  <span className="leading-relaxed">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RuleBook;