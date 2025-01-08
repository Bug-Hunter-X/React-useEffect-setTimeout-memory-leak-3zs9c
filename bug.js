```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using a closure over a mutable variable
    let timeoutId;
    const intervalFunc = () => {
      setCount((prevCount) => prevCount + 1);
    };
    timeoutId = setTimeout(intervalFunc, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return <div>Count: {count}</div>;
}
```