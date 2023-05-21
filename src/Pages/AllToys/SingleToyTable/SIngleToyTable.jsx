import { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import AllToysDetails from "../../AllToysDetails/AllToysDetails";

const SIngleToyTable = ({ toy }) => {
  const { sellerName, toyName, subCategory, price, availableQuantity } = toy;
  const [open, setOpen] = useState(false);
  const handleDetails = () => {
    setOpen(true);
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
