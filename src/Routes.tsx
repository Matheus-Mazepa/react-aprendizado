import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Order } from "./pages/Order";
import { Product } from "./pages/Product";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={ <Product /> } />
        <Route path="/orders" element={ <Order /> } />
      </Routes>
    </Router>
  )
}