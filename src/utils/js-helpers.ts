// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isSet = (variable: any): boolean =>
  typeof variable !== 'undefined' && variable !== null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const notSet = (variable: any): boolean => !isSet(variable);
