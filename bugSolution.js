```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1); // Correct way to update state
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup function to clear the interval
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```