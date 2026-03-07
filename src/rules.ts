import { FormulaType } from './formulas';

export const RULE_NAMES = [
  'axiom',
  'impl-intro',
  'impl-elim',
  'and-intro',
  'and-elim-left',
  'and-elim-right',
  'or-intro-left',
  'or-intro-right',
  'or-elim',
  'neg-intro',
  'neg-elim',
  'absurd',
  'raa'
] as const;

export type RuleName = typeof RULE_NAMES[number];

export const INTRO_RULES = [
  'impl-intro',
  'and-intro',
  'or-intro-left',
  'or-intro-right',
  'neg-intro'
] as const;

export const ELIMINATION_RULES = [
  'impl-elim',
  'and-elim-left',
  'and-elim-right',
  'or-elim',
  'neg-elim'
] as const;

export const OTHER_RULES = ['axiom', 'absurd', 'raa'] as const;

export const RULES_REQUIRING_FORMULA_INPUT = [
  'impl-elim',
  'and-elim-left',
  'and-elim-right',
  'or-elim',
  'neg-elim'
] as const;

export type ModalRuleName = typeof RULES_REQUIRING_FORMULA_INPUT[number];
const modalRuleSet = new Set<RuleName>(RULES_REQUIRING_FORMULA_INPUT);

export const isModalRuleName = (rule: RuleName): rule is ModalRuleName => modalRuleSet.has(rule);

export type RuleOperator = Extract<FormulaType, 'impl' | 'and' | 'or' | 'neg'> | 'absurd' | 'raa';
export const RULE_OPERATORS: readonly RuleOperator[] = ['impl', 'and', 'or', 'neg', 'absurd', 'raa'];
