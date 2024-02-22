import SearchInput from "./SearchInput";
import WeatherContent from "./WeatherContent";
// import Suggestions from "./suggestions";

const App = () => {
  
  return (
    <div className="container">
      <div className="weather-card">
        <SearchInput />
        {/* <Suggestions/> */}
        <WeatherContent />
      </div>
    </div>
  );
}

export default App;
