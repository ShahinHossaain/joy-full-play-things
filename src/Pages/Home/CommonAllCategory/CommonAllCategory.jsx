import { useContext, useState } from "react";
import { AwesomeButton } from "react-awesome-button";
// import ToyDetails from "../../../Shared/ToyDetails/ToyDetails";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import ToyDetailsNew from "../../../Shared/ToyDetailsNew/ToyDetailsNew";

const CommonAllCategory = ({ toy }) => {
  // console.log(toy);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const { pictureUrl, toyName, price, rating, _id } = toy;
  // const location = useLocation();

  const handleDetails = () => {
    if (user) setIsOpen(true);
    // else navigate("/login");
    else {
      Swal.fire({
        title: "Hey!!!",
        text: "You have to log in first to view details",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to Login???",
      }).then((result) => {
        if (result.isConfirmed) {
          const pathname = `/toyDetails/${_id}`;
          Swal.fire("", "We are going Login page.", "success");
          navigate("/login", { state: { pathname } });
        }
      });
    }
    console.log("click");
  };
  return (
    <div className="card card-side bg-gray-700 hover:bg-gray-600 shadow-xl">
      {/* {isOpen && <ToyDetails toy={toy} setIsOpen={setIsOpen}></ToyDetails>} */}
      {isOpen && (
        // <ToyDetailsNew toy={toy} setIsOpen={setIsOpen}></ToyDetailsNew>
        <Navigate to={`/toyDetails/${_id}`}></Navigate>
      )}
      <figure className="w-2/5">
        <img src={pictureUrl} alt="Movie" className="h-full w-full" />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-bold font-font3 text-secondary">
          {toyName}
        </h2>
        <p>
          <span className="text-lg font-medium font-font4 text-secondary">
            Rating
          </span>{" "}
          : {rating}
        </p>
        <p>
          <span className="text-lg font-medium font-font4 text-secondary">
            Price
          </span>{" "}
          : ${price}
        </p>
        <div className="card-actions justify-end" onClick={handleDetails}>
          <AwesomeButton>Details</AwesomeButton>
        </div>
      </div>
    </div>
  );
};

export default CommonAllCategory;
