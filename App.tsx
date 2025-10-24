
import React, { useState, useCallback, useMemo } from 'react';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';
import type { CategoryId, Question } from './types';
import { questions as allQuestions } from './data/questions';

type GameState = 'start' | 'quiz' | 'results';

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('start');
  const [currentCategory, setCurrentCategory] = useState<CategoryId | null>(null);
  const [score, setScore] = useState(0);

  const quizQuestions = useMemo(() => {
    if (!currentCategory) return [];
    return shuffleArray(allQuestions[currentCategory]);
  }, [currentCategory]);

  const handleCategorySelect = useCallback((categoryId: CategoryId) => {
    setCurrentCategory(categoryId);
    setScore(0);
    setGameState('quiz');
  }, []);

  const handleQuizComplete = useCallback((finalScore: number) => {
    setScore(finalScore);
    setGameState('results');
  }, []);

  const handleRestart = useCallback(() => {
    setCurrentCategory(null);
    setScore(0);
    setGameState('start');
  }, []);

  const renderContent = () => {
    switch (gameState) {
      case 'quiz':
        return (
          currentCategory && (
            <QuizScreen
              categoryId={currentCategory}
              questions={quizQuestions}
              onQuizComplete={handleQuizComplete}
              onBackToMenu={handleRestart}
            />
          )
        );
      case 'results':
        return (
          currentCategory && (
            <ResultsScreen
                score={score}
                totalQuestions={quizQuestions.length}
                category={currentCategory}
                onRestart={handleRestart}
                onTryAgain={() => handleCategorySelect(currentCategory)}
            />
          )
        );
      case 'start':
      default:
        return <StartScreen onCategorySelect={handleCategorySelect} />;
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{backgroundImage: "url('https://picsum.photos/seed/sailing/1920/1080')"}}>
        <div className="min-h-screen bg-sky-800 bg-opacity-80 backdrop-blur-sm flex flex-col items-center justify-center p-4">
            <main className="w-full max-w-4xl mx-auto transition-all duration-500">
                {renderContent()}
            </main>
        </div>
    </div>
  );
};

export default App;
