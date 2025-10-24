
import React from 'react';
import { CATEGORIES } from '../constants';
import type { CategoryId } from '../types';

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  category: CategoryId;
  onRestart: () => void;
  onTryAgain: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ score, totalQuestions, category, onRestart, onTryAgain }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const categoryName = CATEGORIES.find(c => c.id === category)?.name;

  const getFeedback = () => {
    if (percentage >= 80) return { title: 'Exzellent!', message: 'Du bist bereit für die Prüfung!', color: 'text-green-400' };
    if (percentage >= 50) return { title: 'Gut gemacht!', message: 'Noch ein bisschen Übung, dann sitzt es perfekt.', color: 'text-yellow-400' };
    return { title: 'Weiter üben!', message: 'Wiederholung macht den Meister. Gib nicht auf!', color: 'text-red-400' };
  };

  const feedback = getFeedback();

  return (
    <div className="bg-sky-900/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 md:p-12 text-white text-center w-full max-w-2xl mx-auto">
      <header className="mb-6">
        <h1 className="font-display text-4xl md:text-5xl font-bold">Ergebnis: {categoryName}</h1>
        <p className={`text-2xl font-bold mt-4 ${feedback.color}`}>{feedback.title}</p>
        <p className="text-sky-200 mt-2 text-lg">{feedback.message}</p>
      </header>
      
      <div className="my-10">
        <p className="text-xl text-sky-100">Du hast</p>
        <p className="text-7xl font-bold my-2 text-white">{score} / {totalQuestions}</p>
        <p className="text-xl text-sky-100">Fragen richtig beantwortet.</p>
        <p className="text-4xl font-bold text-sky-300 mt-4">{percentage}%</p>
      </div>

      <footer className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <button 
          onClick={onTryAgain}
          className="w-full sm:w-auto px-8 py-3 bg-sky-500 hover:bg-sky-400 rounded-lg text-lg font-bold transition-colors duration-300"
        >
          Nochmal versuchen
        </button>
        <button 
          onClick={onRestart}
          className="w-full sm:w-auto px-6 py-2 bg-transparent text-sky-300 hover:bg-white/10 rounded-lg transition-colors"
        >
          Andere Kategorie
        </button>
      </footer>
    </div>
  );
};

export default ResultsScreen;
