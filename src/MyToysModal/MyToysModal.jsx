import { useState } from "react";

const MyToysModal = ({ setIsmodalOpen, updateModalInfo, setUpdated }) => {
  const [price, setPrice] = useState("");
  const [availableQuantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  console.log("&&&", updateModalInfo);

  const handleUpdate = (e) => {
    // Handle update logic here
    e.preventDefault();
    console.log(price, availableQuantity, description);
    const data = { price, availableQuantity, description };

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
      });

    setIsmodalOpen(false);
  };

  const handleCancel = () => {
    // Handle cancel logic here
    setIsmodalOpen(false);
  };

  return (
    <form onSubmit={handleUpdate}>
      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
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
                  placeholder={updateModalInfo.price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
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
                  placeholder={updateModalInfo.availableQuantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Detail Description:</label>
                <textarea
                  id="description"
                  name="description"
                  className="form-control bg-slate-300 w-full p-4 h-40"
                  value={description}
                  placeholder={updateModalInfo.description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
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
            <button
              type="button"
              className="mr-2 px-4 py-2 bg-gray-500 text-white rounded"
              onClick={handleCancel}
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default MyToysModal;
