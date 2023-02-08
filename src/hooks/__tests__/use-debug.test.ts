import { renderHook } from '@testing-library/react';
import useDebug from 'hooks/use-debug';

test('should use debug', () => {
  const { result } = renderHook(() => useDebug(false));
  expect(typeof result).toBe('object');
});
