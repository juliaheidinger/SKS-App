
// FIX: Import `ComponentType` to resolve the 'React' namespace error.
import type { ComponentType } from 'react';

export interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string; // Optional pre-defined explanation
}

export type CategoryId = 'navigation' | 'seamanship' | 'law' | 'weather';

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  // FIX: Use `ComponentType` instead of `React.ComponentType`.
  icon: ComponentType<{ className?: string }>;
}

export enum AnswerState {
    UNANSWERED,
    CORRECT,
    INCORRECT,
}