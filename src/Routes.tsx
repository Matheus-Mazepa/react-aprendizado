import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Order } from "./pages/Order";
import { Product } from "./pages/Product";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Dashboard /> } />
        <Route path="/products" element={ <Product /> } />
        <Route path="/orders" element={ <Order /> } />
      </Routes>
    </Router>
  )
}