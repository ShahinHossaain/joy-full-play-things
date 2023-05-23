import { useLoaderData } from "react-router-dom";
import SIngleToyTable from "../SingleToyTable/SIngleToyTable";
import { Helmet } from "react-helmet";
import { useState } from "react";

const AllToys = () => {
  const toys = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredToys, setFilteredToys] = useState([]);
  // console.log(toys);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filteredToys = toys.filter((toy) =>
      toy.toyName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredToys(filteredToys);
  };

  return (
    <div className="my-10">
      <Helmet>
        <title>Joy Full Play Things | All Toys</title>
      </Helmet>
      <div className="overflow-x-auto">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search by Toy Name"
          className="bg-primary text-secondary w-3/5 py-2 px-5 rounded-xl block mx-auto mb-10"
        />
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-secondary">
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody className="">
            {(searchQuery ? filteredToys : toys).map((toy) => (
              <SIngleToyTable key={toy._id} toy={toy}></SIngleToyTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
