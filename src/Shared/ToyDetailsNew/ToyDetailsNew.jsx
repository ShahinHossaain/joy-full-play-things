import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const ToyDetailsNew = () => {
  const toy = useLoaderData();
  const { isOpen, setIsOpen } = useContext(AuthContext);
  const nevigate = useNavigate();
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="modal-overlay fixed inset-0 bg-gray-500 opacity-75 "></div>

          <div className="modal-container bg-white w-1/2 rounded shadow-lg z-50">
            <div className="modal-header flex items-center justify-between px-4 py-2 bg-gray-200 rounded-t">
              <h5 className="text-lg font-bold text-black">Toy Details</h5>
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700"
                onClick={() => {
                  setIsOpen(false);
                  nevigate("/");
                }}
              >
                <svg
                  className="fill-current h-7 w-7"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849l.707-.707L10.707 10l4.348-4.142-.707-.707L10 9.293 5.651 4.142 4.944 4.85 9.293 9l-4.348 4.142.707.707L10 10.707l4.349 4.142z"></path>
                </svg>
              </button>
            </div>

            <div className="modal-body bg-primary px-4 py-2">
              <img
                src={toy.pictureUrl}
                alt={toy.name}
                className="mb-4 h-72 mx-auto w-96"
              />
              <div className="text-secondary">
                <p>
                  <span className="font-bold">Seller Name:</span>{" "}
                  {toy.sellerName}
                </p>
                <p>
                  <span className="font-bold">Seller Email:</span>{" "}
                  {toy.sellerEmail}
                </p>
                <p>
                  <span className="font-bold">Sub-category:</span>{" "}
                  {toy.subCategory}
                </p>
                <p>
                  <span className="font-bold">Price:</span> {toy.price}
                </p>
                <p>
                  <span className="font-bold">Rating:</span> {toy.rating}
                </p>
                <p>
                  <span className="font-bold">Available Quantity:</span>{" "}
                  {toy.availableQuantity}
                </p>
                <p>
                  <span className="font-bold">Description:</span>{" "}
                  {toy.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToyDetailsNew;
