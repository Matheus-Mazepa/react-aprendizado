import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Order } from "./pages/Order";
import { Product } from "./pages/Product";
import { Login } from "./pages/Login";
import { RequireAuth } from "./pages/RequireAuth";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <>
          <Route path='login' element={ <Login/> } />

          <Route path="/" element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          } />

          <Route path="/products" element={
            <RequireAuth>
              <Product />
            </RequireAuth>
          } />

          <Route path="/orders" element={
            <RequireAuth>
              <Order />
            </RequireAuth>
          } />
        </>
      </Routes>
    </Router>
  )
}