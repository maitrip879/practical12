
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Outlet
} from "react-router-dom";
import "./App.css";

function CurrentOrders() {
  return (
    <div>
      <h2>Current Orders</h2>
      <p>Order #101 - Laptop - ₹45000</p>
      <p>Order #102 - Mobile - ₹15000</p>
    </div>
  );
}

function OrdersHistory() {
  return (
    <div>
      <h2>Orders History</h2>
      <p>Order #201 - Headphones - Delivered</p>
      <p>Order #202 - Keyboard - Delivered</p>
    </div>
  );
}

function CancelledOrders() {
  return (
    <div>
      <h2>Cancelled Orders</h2>
      <p>Order #301 - Smart Watch - Cancelled</p>
      <p>Order #302 - Speaker - Cancelled</p>
    </div>
  );
}

function OrderLayout() {
  return (
    <div className="container">
      <h1>E-commerce Order Management</h1>

      <nav>
        <NavLink to="current">Current Orders</NavLink>
        <NavLink to="history">Orders History</NavLink>
        <NavLink to="cancelled">Cancelled Orders</NavLink>
      </nav>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrderLayout />}>
          <Route index element={<CurrentOrders />} />
          <Route path="current" element={<CurrentOrders />} />
          <Route path="history" element={<OrdersHistory />} />
          <Route path="cancelled" element={<CancelledOrders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
