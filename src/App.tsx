import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./components/NotFound";
import StockDetails from "./components/stocks/Details";
import StocksSearchLayout from "./components/stocks/SearchLayout";
import "./styles.css";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<StocksSearchLayout />}>
            <Route path="/:id" element={<StockDetails />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}
