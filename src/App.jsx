import Tours from "./components/Tours";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";
const url = "https://course-api.com/react-tours-project";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTours = (id) => {
    const newTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newTours);
  };
  async function fetchData() {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setTours(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      {isLoading && <Loading />}
      {tours && <Tours tours={tours} removeTours={removeTours} />}
      {tours.length === 0 && <RefreshComponent fetchData={fetchData} />}
    </main>
  );
};
const RefreshComponent = ({ fetchData }) => {
  return (
    <main>
      <div className="title">
        <h2>no tours Left</h2>
        <button
          type="button"
          className="btn"
          style={{ marginTop: "1em" }}
          onClick={() => {
            fetchData();
          }}
        >
          Refresh
        </button>
      </div>
    </main>
  );
};
export default App;
