import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { AwesomeButton } from "react-awesome-button";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);

  const userEmail = user.email;

  const [pictureUrl, setPictureUrl] = useState("");
  const [toyName, setToyName] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [availableQuantity, setAvailableQuantity] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(
    //   pictureUrl,
    //   toyName,
    //   sellerName,
    //   sellerEmail,
    //   subCategory,
    //   price,
    //   rating,
    //   availableQuantity,
    //   description
    // );

    const toysInfo = {
      pictureUrl,
      toyName,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      availableQuantity,
      description,
      userEmail,
    };
    // console.log(toysInfo);

    fetch("https://joy-full-play-things-server.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toysInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "New Toy is added to My Toys",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="w-full md:max-w-6xl p-10 mx-auto bg-slate-200 text-gray-500">
      <Helmet>
        <title>Joy Full Play Things | Add Toys</title>
      </Helmet>
      <form onSubmit={handleSubmit}>
        <div className="md:grid grid-cols-2 gap-5">
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="pictureUrl"
            >
              Picture URL
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-sm"
              type="text"
              name="pictureUrl"
              id="pictureUrl"
              value={pictureUrl}
              onChange={(e) => setPictureUrl(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="toyName"
            >
              Toy Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-sm"
              type="text"
              name="toyName"
              id="toyName"
              value={toyName}
              onChange={(e) => setToyName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="sellerName"
            >
              Seller Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-sm"
              type="text"
              name="sellerName"
              id="sellerName"
              value={sellerName}
              onChange={(e) => setSellerName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="sellerEmail"
            >
              Seller Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-sm"
              type="email"
              name="sellerEmail"
              id="sellerEmail"
              value={sellerEmail}
              onChange={(e) => setSellerEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="subCategory"
            >
              Sub-category
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-sm"
              name="subCategory"
              id="subCategory"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              required
            >
              <option value="">Select a sub-category</option>
              <option value="Math Toys">Math Toys</option>
              <option value="Engineering Toys">Engineering Toys</option>
              <option value="Language Toys">Language Toys</option>
              <option value="Science Toys">Science Toys</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="price"
            >
              Price
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-sm"
              type="text"
              name="price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="rating"
            >
              Rating
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-sm"
              type="text"
              name="rating"
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="availableQuantity"
            >
              Available Quantity
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-sm"
              type="text"
              name="availableQuantity"
              id="availableQuantity"
              value={availableQuantity}
              onChange={(e) => setAvailableQuantity(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="description"
          >
            Detail Description
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-sm"
            name="description"
            id="description"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button type="submit">
            <AwesomeButton>Submit</AwesomeButton>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToys;
