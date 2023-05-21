import { useLoaderData } from "react-router-dom";
import SIngleToyTable from "../SingleToyTable/SIngleToyTable";

const AllToys = () => {
  const toys = useLoaderData();
  // console.log(toys);
  return (
    <div className="my-10">
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <SIngleToyTable key={toy._id} toy={toy}></SIngleToyTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
