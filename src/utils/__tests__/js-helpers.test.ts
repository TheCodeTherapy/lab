import { isSet, notSet } from 'utils/js-helpers';

test('[isSet] null variable should return false', () => {
  const a = null;
  expect(isSet(a)).toBe(false);
});

test('[notSet] null variable should return true', () => {
  const a = null;
  expect(notSet(a)).toBe(true);
});

test('[isSet] undefined variable should return false', () => {
  type TA = { propertyA?: string; propertyB?: string };
  const a: TA = { propertyA: 'a', propertyB: 'b' };
  delete a.propertyB;
  expect(isSet(a.propertyA)).toBe(true);
  expect(isSet(a.propertyB)).toBe(false);
});

test('[notSet] undefined variable should return true', () => {
  type TA = { propertyA?: string; propertyB?: string };
  const a: TA = { propertyA: 'a', propertyB: 'b' };
  delete a.propertyB;
  expect(notSet(a.propertyA)).toBe(false);
  expect(notSet(a.propertyB)).toBe(true);
});
