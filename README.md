# React useEffect setTimeout memory leak
This example demonstrates a common error in React applications when using `setTimeout` within the `useEffect` hook without proper cleanup.  Improperly managing the timeout ID can lead to memory leaks and unexpected behavior.

The `bug.js` file contains the buggy code. The `bugSolution.js` file shows how to fix it by correctly managing the timeout ID.

## Bug:
The original code attempts to increment a counter every second using `setTimeout`.  However, if the component unmounts before the timeout completes, the `clearTimeout` function won't be called, resulting in a memory leak and continued counter updates.

## Solution:
The solution uses a `ref` to store the `timeoutId`. This ensures that even if the component unmounts, the timeout is properly cleared and the memory leak is avoided. 