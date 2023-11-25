import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";
import CartOverview from "../features/cart/CartOverview";
function AppLayout() {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {navigation.state === "loading" && <Loader />}
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl ">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
