import "./App.css";
import NbLoader from "./components/nb-loader";

import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(1);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://www.randomuser.me/api?results=${limit}`,
          { signal: abortController.signal }
        );
        const people = await res.json();
        setData(people.results);
        setIsLoading(false);
      } catch (err) {
        setData([]);
        setError(err.message);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [limit]);

  return (
    <div>
      <h1>people list</h1>
      <form>
        <label htmlFor="limit">Limit</label>
        <input
          id="limit"
          onChange={(e) => setLimit(e.target.value)}
          type="number"
          value={limit}
        ></input>
      </form>
      {data && !isLoading && data.length > 0 && (
        <ul>
          {data.map((person, index) => (
            <li data-testid={`item_${index}`} key={index}>
              {person.email}
            </li>
          ))}
        </ul>
      )}
      {isLoading && <NbLoader />}
      {error && <div>Erorr ehreejrnejnj</div>}
    </div>
  );
}

export default App;
