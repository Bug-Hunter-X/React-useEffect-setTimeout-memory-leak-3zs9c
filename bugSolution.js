```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const timeoutIdRef = useRef(null);

  useEffect(() => {
    const intervalFunc = () => {
      setCount((prevCount) => prevCount + 1);
    };
    timeoutIdRef.current = setTimeout(intervalFunc, 1000);
    return () => clearTimeout(timeoutIdRef.current);
  }, []);

  return <div>Count: {count}</div>;
}

export default MyComponent;
```