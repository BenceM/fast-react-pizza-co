import { useState } from "react";
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Home />} />
			<Route path="/menu" element={<Menu />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/order/:id" element={<Order />} />
			<Route path="/order/new" element={<CreateOrder />} />
		</>,
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
