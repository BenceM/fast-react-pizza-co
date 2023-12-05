import React from "react";
import Button from "../../ui/Button";
import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant";
import { useState } from "react";
function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  const [isUpdate, setIsUpdate] = useState(false);
  return (
    <>
      {!isUpdate ? (
        <div className="text-center">
          <Button type="primary" onClick={() => setIsUpdate(true)}>
            Update Info
          </Button>
        </div>
      ) : (
        <fetcher.Form method="PATCH" className="flex justify-between ">
          <input
            className="input grow"
            type="text"
            name="address"
            id="address"
          />
          <Button type="primary">Make Priority</Button>
        </fetcher.Form>
      )}
    </>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const formData = await request.formData();
  const dataObject = Object.fromEntries(formData);
  const data = { address: dataObject.address, priority: true };
  console.log(data);
  await updateOrder(params.id, data);
  console.log("update");
  return null;
}
