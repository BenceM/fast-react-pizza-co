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
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<AppLayout />}>
			<Route path="/" element={<Home />} />
			<Route path="/menu" element={<Menu />} loader={menuLoader} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/order/:id" element={<Order />} />
			<Route path="/order/new" element={<CreateOrder />} />
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
