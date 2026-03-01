// Exercise definitions

import { Formula, FormulaParser } from './formulas';

export type RuleType = '\\to_i' | '\\to_e' | '\\wedge_i' | '\\wedge_e' | '\\vee_i' | '\\vee_e' | '\\neg_i' | '\\neg_e' | '\\bot_e' | '\\mathrm{raa}';

export interface Exercise {
    id: number;
    title: string;
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
        title: "Identity",
        goal: "A -> A",
        hypotheses: [],
        difficulty: "easy",
        rules: ['\\to_i']
    },
    {
        id: 2,
        title: "Modus Ponens",
        goal: "B",
        hypotheses: ["A -> B", "A"],
        difficulty: "easy",
        rules: ['\\to_e']
    },
    {
        id: 3,
        title: "Conjunction Elimination",
        goal: "A",
        hypotheses: ["A & B"],
        difficulty: "easy",
        rules: ['\\wedge_e']
    },
    {
        id: 4,
        title: "Conjunction Introduction",
        goal: "A & B",
        hypotheses: ["A", "B"],
        difficulty: "easy",
        rules: ['\\wedge_i']
    },
    {
        id: 5,
        title: "Disjunction Introduction",
        goal: "A | B",
        hypotheses: ["A"],
        difficulty: "easy",
        rules: ['\\vee_i']
    },
    {
        id: 6,
        title: "Hypothetical Syllogism",
        goal: "(A -> B) -> (B -> C) -> (A -> C)",
        hypotheses: [],
        difficulty: "medium",
        rules: ['\\to_i', '\\to_e']
    },
    {
        id: 7,
        title: "Conjunction Commutativity",
        goal: "(A & B) -> (B & A)",
        hypotheses: [],
        difficulty: "medium",
        rules: ['\\to_i', '\\wedge_i', '\\wedge_e']
    },
    {
        id: 8,
        title: "Disjunction from Implication",
        goal: "A | B",
        hypotheses: ["A -> B", "A"],
        difficulty: "medium",
        rules: ['\\to_e', '\\vee_i']
    },
    {
        id: 9,
        title: "Currying",
        goal: "(A & B -> C) -> (A -> B -> C)",
        hypotheses: [],
        difficulty: "medium",
        rules: ['\\to_i', '\\to_e', '\\wedge_i']
    },
    {
        id: 10,
        title: "Uncurrying",
        goal: "(A -> B -> C) -> (A & B -> C)",
        hypotheses: [],
        difficulty: "medium",
        rules: ['\\to_i', '\\to_e', '\\wedge_e']
    },
    {
        id: 11,
        title: "Disjunction Commutativity",
        goal: "(A | B) -> (B | A)",
        hypotheses: [],
        difficulty: "medium",
        rules: ['\\to_i', '\\vee_i', '\\vee_e']
    },
    {
        id: 12,
        title: "Distribution (∧ over ∨)",
        goal: "(A & (B | C)) -> ((A & B) | (A & C))",
        hypotheses: [],
        difficulty: "medium",
        rules: ['\\to_i', '\\wedge_i', '\\wedge_e', '\\vee_i', '\\vee_e']
    },
    {
        id: 13,
        title: "Contraposition (one direction)",
        goal: "(A -> B) -> (¬B -> ¬A)",
        hypotheses: [],
        difficulty: "medium",
        rules: ['\\to_i', '\\to_e', '\\neg_i', '\\neg_e']
    },
    {
        id: 14,
        title: "Double Negation Introduction",
        goal: "A -> ¬¬A",
        hypotheses: [],
        difficulty: "medium",
        rules: ['\\to_i', '\\neg_i', '\\neg_e']
    },
    {
        id: 15,
        title: "Modus Tollens",
        goal: "¬A",
        hypotheses: ["A -> B", "¬B"],
        difficulty: "medium",
        rules: ['\\to_e', '\\neg_i', '\\neg_e']
    },
    {
        id: 16,
        title: "Double Negation Elimination",
        goal: "¬¬A -> A",
        hypotheses: [],
        difficulty: "hard",
        rules: ['\\to_i', '\\neg_e', '\\mathrm{raa}']
    },
    {
        id: 17,
        title: "Excluded Middle",
        goal: "A | ¬A",
        hypotheses: [],
        difficulty: "hard",
        rules: ['\\vee_i', '\\neg_i', '\\neg_e', '\\mathrm{raa}']
    },
    {
        id: 18,
        title: "Peirce's Law",
        goal: "((A -> B) -> A) -> A",
        hypotheses: [],
        difficulty: "hard",
        rules: ['\\to_i', '\\to_e', '\\bot_e', '\\mathrm{raa}']
    },
    {
        id: 19,
        title: "De Morgan (¬(A ∧ B) → ¬A ∨ ¬B)",
        goal: "¬(A & B) -> (¬A | ¬B)",
        hypotheses: [],
        difficulty: "hard",
        rules: ['\\to_i', '\\wedge_i', '\\vee_i', '\\neg_i', '\\neg_e', '\\mathrm{raa}']
    },
    {
        id: 20,
        title: "De Morgan (¬(A ∨ B) → ¬A ∧ ¬B)",
        goal: "¬(A | B) -> (¬A & ¬B)",
        hypotheses: [],
        difficulty: "hard",
        rules: ['\\to_i', '\\wedge_i', '\\vee_i', '\\neg_i', '\\neg_e']
    },
    {
        id: 21,
        title: "Constructive Dilemma",
        goal: "(A -> B) -> (C -> D) -> (A | C) -> (B | D)",
        hypotheses: [],
        difficulty: "hard",
        rules: ['\\to_i', '\\to_e', '\\vee_i', '\\vee_e']
    },
    {
        id: 22,
        title: "Explosion (Ex Falso)",
        goal: "(A & ¬A) -> B",
        hypotheses: [],
        difficulty: "medium",
        rules: ['\\to_i', '\\wedge_e', '\\neg_e', '\\bot_e']
    },
    {
        id: 23,
        title: "Negation of Implication",
        goal: "¬(A -> B) -> A",
        hypotheses: [],
        difficulty: "hard",
        rules: ['\\to_i', '\\bot_e', '\\mathrm{raa}']
    },
    {
        id: 24,
        title: "Complex Derivation",
        goal: "((A -> B) & (B -> C) & A) -> C",
        hypotheses: [],
        difficulty: "medium",
        rules: ['\\to_i', '\\to_e', '\\wedge_e']
    }
];

export const allRules: RuleType[] = ['\\to_i', '\\to_e', '\\wedge_i', '\\wedge_e', '\\vee_i', '\\vee_e', '\\neg_i', '\\neg_e', '\\bot_e', '\\mathrm{raa}'];

export function parseExercise(exercise: Exercise): ParsedExercise {
    return {
        ...exercise,
        goalFormula: FormulaParser.parse(exercise.goal),
        hypothesesFormulas: exercise.hypotheses.map(h => FormulaParser.parse(h))
    };
}
