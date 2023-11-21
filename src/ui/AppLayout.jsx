import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";
function AppLayout() {
	const navigation = useNavigation();
	console.log(navigation);
	return (
		<div className="layout">
			{navigation.state === "loading" && <Loader />}
			<Header />
			<main>
				{" "}
				<Outlet />
			</main>
		</div>
	);
}

export default AppLayout;
