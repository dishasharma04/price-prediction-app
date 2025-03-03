import { useState } from "react";
import Form from "./components/Form";
import Prediction from "./components/Prediction";
import ChartComponent from "./components/Chart";
import FeedbackForm from './components/FeedbackForm'; // Import FeedbackForm
import "./styles/styles.css";
import dataset from "./data/dataset.json";

const App = () => {
  const [prediction, setPrediction] = useState(null);
  const [formData, setFormData] = useState(null);
  const [predictedPrices, setPredictedPrices] = useState([]);

  const actualPrices = dataset.map((data) => data.price);

  const handlePrediction = (price, data) => {
    setPrediction(price);
    setFormData(data);
    setPredictedPrices([...predictedPrices, price / 1000]);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App">
      <div className="container">
        <h2>🏘️ Real Estate Price Predictor</h2>  
        <Form setPrediction={handlePrediction} />
        <Prediction price={prediction} formData={formData} />
        <ChartComponent actualPrices={actualPrices} predictedPrices={predictedPrices} />
        <FeedbackForm /> {/* Include FeedbackForm component without setError */}
      </div>
    </div>
  );
};

export default App;
