import { useRef, useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import Swal from "sweetalert2";

const MyToysModal = ({ setIsmodalOpen, updateModalInfo, setUpdated }) => {
  let [price, setPrice] = useState(updateModalInfo.price);
  let [availableQuantity, setQuantity] = useState(
    updateModalInfo.availableQuantity
  );
  let [description, setDescription] = useState(updateModalInfo.description);
  let data;
  const desRef = useRef(null);
  let p, q, d;
  if (
    updateModalInfo.price &&
    updateModalInfo.availableQuantity &&
    updateModalInfo.availableQuantity
  ) {
    p = updateModalInfo.price;
    q = updateModalInfo.availableQuantity;
    d = updateModalInfo.description;
  }
  console.log("p,q,d", p, q, d);

  const handleUpdate = (e) => {
    // Handle update logic here

    e.preventDefault();

    console.log("&&", price, availableQuantity, description);

    if (!description) setDescription(d);

    // }
    data = { price, availableQuantity, description };
    console.log(data, price, availableQuantity, description);

    fetch(
      `https://joy-full-play-things-server.vercel.app/toys/${updateModalInfo._id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setUpdated((previous) => !previous);
        console.log(data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Toys is updated successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      });

    setIsmodalOpen(false);
  };

  return (
    <form onSubmit={handleUpdate}>
      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 text-gray-500">
        <div className="modal-overlay fixed inset-0 bg-gray-500 opacity-75"></div>

        <div className="modal-container bg-white w-1/2 rounded shadow-lg z-50">
          <div className="modal-header flex items-center justify-between px-4 py-2 bg-gray-200 rounded-t">
            <h5 className="text-lg font-bold">Edit Product</h5>
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setIsmodalOpen(false)}
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

          <div className="modal-body flex items-center px-4 py-2">
            <div className="w-3/5">
              <div className="form-group">
                <label htmlFor="price">Price:</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  className="form-control bg-slate-300 w-full p-2"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="quantity">Available Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  className="form-control bg-slate-300 w-full p-2"
                  value={availableQuantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Detail Description:</label>
                <textarea
                  id="description"
                  name="description"
                  className="form-control bg-slate-300 w-full p-4 h-40"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  ref={desRef}
                ></textarea>
              </div>
            </div>
            <div className="mx-auto">
              <p className=" ">
                Update Toys <br /> Information
              </p>
            </div>
          </div>

          <div className="modal-footer flex justify-end px-4 py-2 bg-gray-200 rounded-b">
            <AwesomeButton onClick={handleUpdate}>Update</AwesomeButton>
          </div>
        </div>
      </div>
    </form>
  );
};

export default MyToysModal;
