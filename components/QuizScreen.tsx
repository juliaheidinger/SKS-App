
import React, { useState, useEffect } from 'react';
import { getExplanationFromGemini } from '../services/geminiService';
import type { Question, CategoryId } from '../types';
import { AnswerState } from '../types';
import { BrainIcon } from './Icons';
import { CATEGORIES } from '../constants';

interface QuizScreenProps {
  categoryId: CategoryId;
  questions: Question[];
  onQuizComplete: (score: number) => void;
  onBackToMenu: () => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ categoryId, questions, onQuizComplete, onBackToMenu }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>(AnswerState.UNANSWERED);
  const [score, setScore] = useState(0);
  const [explanation, setExplanation] = useState<string | null>(null);
  const [isLoadingExplanation, setIsLoadingExplanation] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const category = CATEGORIES.find(c => c.id === categoryId);
  const Icon = category?.icon;

  useEffect(() => {
    setSelectedAnswer(null);
    setAnswerState(AnswerState.UNANSWERED);
    setExplanation(null);
    setIsLoadingExplanation(false);
  }, [currentQuestionIndex]);
  
  const handleAnswerSelect = (index: number) => {
    if (answerState !== AnswerState.UNANSWERED) return;

    setSelectedAnswer(index);
    if (index === currentQuestion.correctAnswerIndex) {
      setAnswerState(AnswerState.CORRECT);
      setScore(prev => prev + 1);
    } else {
      setAnswerState(AnswerState.INCORRECT);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      onQuizComplete(score);
    }
  };

  const handleGetExplanation = async () => {
    setIsLoadingExplanation(true);
    setExplanation(null);
    const result = await getExplanationFromGemini(currentQuestion);
    setExplanation(result);
    setIsLoadingExplanation(false);
  };
  
  const getButtonClass = (index: number) => {
    if (answerState === AnswerState.UNANSWERED) {
      return 'bg-white/10 hover:bg-white/20';
    }
    if (index === currentQuestion.correctAnswerIndex) {
      return 'bg-green-500/80 ring-2 ring-white';
    }
    if (index === selectedAnswer) {
      return 'bg-red-500/80';
    }
    return 'bg-white/10 opacity-60';
  };

  return (
    <div className="bg-sky-900/50 backdrop-blur-xl rounded-2xl shadow-2xl p-6 md:p-10 text-white w-full max-w-3xl mx-auto">
      <header className="mb-6 border-b border-sky-700 pb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {Icon && <Icon className="w-8 h-8 text-sky-300" />}
            <h1 className="font-display text-3xl font-bold text-sky-100">{category?.name}</h1>
          </div>
          <div className="text-lg font-semibold">
            Frage <span className="text-sky-300">{currentQuestionIndex + 1}</span> / {questions.length}
          </div>
        </div>
        <div className="w-full bg-sky-800 rounded-full h-2.5 mt-4">
          <div className="bg-sky-400 h-2.5 rounded-full" style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}></div>
        </div>
      </header>

      <div className="mb-8">
        <h2 className="text-2xl leading-snug font-medium mb-6">{currentQuestion.question}</h2>
        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={answerState !== AnswerState.UNANSWERED}
              className={`w-full text-left p-4 rounded-lg text-lg transition-all duration-300 ${getButtonClass(index)}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      
      {answerState !== AnswerState.UNANSWERED && (
          <div className="space-y-4">
              <button
                  onClick={handleGetExplanation}
                  disabled={isLoadingExplanation}
                  className="flex items-center justify-center w-full px-6 py-3 bg-sky-600 hover:bg-sky-500 rounded-lg font-semibold transition-colors duration-300 disabled:bg-sky-800 disabled:cursor-not-allowed"
              >
                  <BrainIcon className="w-5 h-5 mr-2"/>
                  {isLoadingExplanation ? 'Erklärung wird geladen...' : 'Erklärung anfordern'}
              </button>
              {explanation && (
                  <div className="bg-black/20 p-4 rounded-lg text-sky-100">
                      <p className="whitespace-pre-wrap">{explanation}</p>
                  </div>
              )}
          </div>
      )}

      <footer className="mt-8 pt-6 border-t border-sky-700 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <button onClick={onBackToMenu} className="px-6 py-2 bg-transparent text-sky-300 hover:bg-white/10 rounded-lg transition-colors">
          Zurück zum Menü
        </button>
        {answerState !== AnswerState.UNANSWERED && (
          <button onClick={handleNextQuestion} className="px-8 py-3 bg-sky-500 hover:bg-sky-400 rounded-lg text-lg font-bold transition-colors">
            {currentQuestionIndex < questions.length - 1 ? 'Nächste Frage' : 'Ergebnis anzeigen'}
          </button>
        )}
      </footer>
    </div>
  );
};

export default QuizScreen;
