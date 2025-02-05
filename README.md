# React useEffect setInterval memory leak and incorrect count update

This repository demonstrates a common bug in React applications involving the `useEffect` hook and `setInterval`.  The example shows how forgetting to clear the interval in the cleanup function of `useEffect` leads to memory leaks and unexpected behavior.

The bug is in the `MyComponent` component. The `setInterval` function is used to update the count every second. However, the interval is never cleared, resulting in multiple intervals running concurrently, leading to memory leaks.  Additionally, the `count` value used inside the `setInterval` callback is stale, resulting in incorrect count updates.

The solution provides a corrected implementation that addresses the memory leak and ensures correct state updates.