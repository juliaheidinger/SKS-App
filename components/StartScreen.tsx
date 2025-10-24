
import React from 'react';
import { CATEGORIES } from '../constants';
import type { CategoryId } from '../types';

interface StartScreenProps {
  onCategorySelect: (categoryId: CategoryId) => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onCategorySelect }) => {
  return (
    <div className="text-center text-white p-4 sm:p-8">
      <header className="mb-10">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-2">SKS Segel-Trainer</h1>
        <p className="text-lg md:text-xl text-sky-200">Wählen Sie eine Kategorie, um Ihr Wissen zu testen.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {CATEGORIES.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category.id)}
              className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 text-left hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center space-x-6">
                <div className="bg-sky-500 p-4 rounded-lg text-white group-hover:bg-sky-400 transition-colors duration-300">
                  <Icon className="w-10 h-10" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{category.name}</h2>
                  <p className="text-sky-200">{category.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StartScreen;
