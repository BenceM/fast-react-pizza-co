import { useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order, { loader as orderLoader } from "./features/order/Order";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import { action as updateAction } from "./features/order/UpdateOrder";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />} errorElement={<Error />}>
      <Route path="/" element={<Home />} />
      <Route
        path="/menu"
        element={<Menu />}
        loader={menuLoader}
        errorElement={<Error />}
      />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/order/:id"
        element={<Order />}
        loader={orderLoader}
        errorElement={<Error />}
        action={updateAction}
      />
      <Route
        path="/order/new"
        element={<CreateOrder />}
        action={createOrderAction}
      />
    </Route>,
  ),
);

function App() {
  return (
    <RouterProvider router={router}>
      <h1>Hello</h1>
    </RouterProvider>
  );
}

export default App;
