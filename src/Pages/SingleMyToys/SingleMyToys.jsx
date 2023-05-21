import Swal from "sweetalert2";

const SingleMyToys = ({
  toy,
  setToys,
  toys,
  setIsmodalOpen,
  setUpdateModalInfo,
}) => {
  // console.log(toy);
  const {
    pictureUrl,
    sellerName,
    toyName,
    subCategory,
    price,
    availableQuantity,
    description,
    rating,
    sellerEmail,
    userEmail,
    _id,
  } = toy;

  const handleUpdate = () => {
    console.log("+++", availableQuantity);
    setUpdateModalInfo({ price, availableQuantity, description, _id });
    setIsmodalOpen(true);
  };
  const handleDelete = (id) => {
    // console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://joy-full-play-things-server.vercel.app/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // this part is for sweet alert
            if (data.deletedCount > 0)
              Swal.fire("Deleted!", "Your file has been deleted.", "success");

            const newCollection = toys.filter((toy) => toy._id !== id);
            setToys(newCollection);
          });
      }
    });
  };
  return (
    <div className="flex flex-col gap-10 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-6xl mx-auto hover:bg-gray-100   dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="md:w-1/3 w-5/6 mt-5 md:mt-0 h-64 md:h-full">
        <img
          src={pictureUrl}
          alt="Chef"
          className="w-full  rounded-md h-full"
        />
      </div>
      <div className="flex flex-col w-2/3 justify-between p-4 leading-normal text-white">
        <div className="flex gap-3">
          <div>Toy email : </div>
          <div>{userEmail}</div>
        </div>
        <div className="flex gap-3">
          <div>Toy Name : </div>
          <div>{toyName}</div>
        </div>
        <div className="flex gap-3">
          <div>Available Quantity : </div>
          <div>{availableQuantity}</div>
        </div>
        <div className="flex gap-3">
          <div>Price : </div>
          <div>{price}</div>
        </div>
        <div className="flex gap-3">
          <div>Category : </div>
          <div>{subCategory}</div>
        </div>
        <div className="flex gap-3">
          <div>Rating : </div>
          <div>{rating}</div>
        </div>
        <div className="flex gap-3">
          <div>Seller Name : </div>
          <div>{sellerName}</div>
        </div>
        <div className="flex gap-3">
          <div>Seller Email : </div>
          <div>{sellerEmail}</div>
        </div>
        <div className="">
          <div>
            <span>Description : </span>
          </div>
          <div>{description}</div>
        </div>
      </div>
      <div className="w-1/6">
        <button className="btn btn-primary my-3" onClick={handleUpdate}>
          Update
        </button>
        <button className="btn btn-primary" onClick={() => handleDelete(_id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleMyToys;
