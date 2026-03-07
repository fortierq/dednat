// Exercise definitions

import { Formula, FormulaParser } from './formulas';
import { RuleOperator } from './rules';

export type RuleType = RuleOperator;

export interface Exercise {
    id: number;
    goal: string;
    hypotheses: string[];
    difficulty: 'easy' | 'medium' | 'hard';
    rules: RuleType[];
}

export interface ParsedExercise extends Exercise {
    goalFormula: Formula;
    hypothesesFormulas: Formula[];
}

export const exercises: Exercise[] = [
    {
        id: 1,
        goal: "A -> A",
        hypotheses: [],
        difficulty: "easy",
        rules: ['impl']
    },
    {
        id: 2,
        goal: "B",
        hypotheses: ["A -> B", "A"],
        difficulty: "easy",
        rules: ['impl']
    },
    {
        id: 3,
        goal: "A",
        hypotheses: ["A & B"],
        difficulty: "easy",
        rules: ['and']
    },
    {
        id: 4,
        goal: "A & B",
        hypotheses: ["A", "B"],
        difficulty: "easy",
        rules: ['and']
    },
    {
        id: 5,
        goal: "A | B",
        hypotheses: ["A"],
        difficulty: "easy",
        rules: ['or']
    },
    {
        id: 6,
        goal: "(A -> B) -> (B -> C) -> (A -> C)",
        hypotheses: [],
        difficulty: "medium",
        rules: ['impl']
    },
    {
        id: 7,
        goal: "(A & B) -> (B & A)",
        hypotheses: [],
        difficulty: "medium",
        rules: ['impl', 'and']
    },
    {
        id: 8,
        goal: "A & B",
        hypotheses: ["A -> B", "A"],
        difficulty: "medium",
        rules: ['impl', 'and']
    },
    {
        id: 9,
        goal: "(A & B -> C) -> (A -> B -> C)",
        hypotheses: [],
        difficulty: "medium",
        rules: ['impl', 'and']
    },
    {
        id: 10,
        goal: "(A -> B -> C) -> (A & B -> C)",
        hypotheses: [],
        difficulty: "medium",
        rules: ['impl', 'and']
    },
    {
        id: 11,
        goal: "(A | B) -> (B | A)",
        hypotheses: [],
        difficulty: "medium",
        rules: ['impl', 'or']
    },
    {
        id: 12,
        goal: "(A & (B | C)) -> ((A & B) | (A & C))",
        hypotheses: [],
        difficulty: "medium",
        rules: ['impl', 'and', 'or']
    },
    {
        id: 13,
        goal: "(A -> B) -> (!B -> !A)",
        hypotheses: [],
        difficulty: "medium",
        rules: ['impl', 'neg']
    },
    {
        id: 14,
        goal: "A -> !!A",
        hypotheses: [],
        difficulty: "medium",
        rules: ['impl', 'neg']
    },
    {
        id: 15,
        goal: "!A",
        hypotheses: ["A -> B", "!B"],
        difficulty: "medium",
        rules: ['impl', 'neg']
    },
    {
        id: 16,
        goal: "!!A -> A",
        hypotheses: [],
        difficulty: "hard",
        rules: ['impl', 'neg', 'raa']
    },
    {
        id: 17,
        goal: "A | !A",
        hypotheses: [],
        difficulty: "hard",
        rules: ['or', 'neg', 'raa']
    },
    {
        id: 18,
        goal: "((A -> B) -> A) -> A",
        hypotheses: [],
        difficulty: "hard",
        rules: ['impl', 'absurd', 'raa']
    },
    {
        id: 19,
        goal: "!(A & B) -> (!A | !B)",
        hypotheses: [],
        difficulty: "hard",
        rules: ['impl', 'and', 'or', 'neg', 'raa']
    },
    {
        id: 20,
        goal: "!(A | B) -> (!A & !B)",
        hypotheses: [],
        difficulty: "hard",
        rules: ['impl', 'and', 'or', 'neg']
    },
    {
        id: 21,
        goal: "(A -> B) -> (C -> D) -> (A | C) -> (B | D)",
        hypotheses: [],
        difficulty: "hard",
        rules: ['impl', 'or']
    },
    {
        id: 22,
        goal: "(A & !A) -> B",
        hypotheses: [],
        difficulty: "medium",
        rules: ['impl', 'and', 'neg', 'absurd']
    },
    {
        id: 23,
        goal: "!(A -> B) -> A",
        hypotheses: [],
        difficulty: "hard",
        rules: ['impl', 'absurd', 'raa']
    },
    {
        id: 24,
        goal: "((A -> B) & (B -> C) & A) -> C",
        hypotheses: [],
        difficulty: "medium",
        rules: ['impl', 'and']
    }
];

export function parseExercise(exercise: Exercise): ParsedExercise {
    return {
        ...exercise,
        goalFormula: FormulaParser.parse(exercise.goal),
        hypothesesFormulas: exercise.hypotheses.map(h => FormulaParser.parse(h))
    };
}
