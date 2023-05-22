import { useContext, useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import AllToysDetails from "../../AllToysDetails/AllToysDetails";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SIngleToyTable = ({ toy }) => {
  const { sellerName, toyName, subCategory, price, availableQuantity, _id } =
    toy;
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleDetails = () => {
    console.log("click");

    if (user) setOpen(true);
    // else navigate("/login");9*6*
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
    <tr>
      {open && (
        <td>
          {open && (
            <AllToysDetails toy={toy} setOpen={setOpen}></AllToysDetails>
          )}
        </td>
      )}
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td className="pl-16">{availableQuantity}</td>
      <td>
        <div className="card-actions justify-end" onClick={handleDetails}>
          <AwesomeButton>Details</AwesomeButton>
        </div>
      </td>
    </tr>
  );
};

export default SIngleToyTable;
