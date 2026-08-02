export type InputScenario = {
  testName: string;
  value: string;
};

export const inputScenarios: InputScenario[] = [
  {
    testName: 'positive number',
    value: '25',
  },
  {
    testName: 'negative number',
    value: '-10',
  },
  {
    testName: 'zero',
    value: '0',
  },
  {
    testName: 'decimal number',
    value: '12.5',
  },
];
