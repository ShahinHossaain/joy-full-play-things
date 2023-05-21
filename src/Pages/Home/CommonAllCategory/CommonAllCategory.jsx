import { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import ToyDetails from "../../../Shared/ToyDetails/ToyDetails";

const CommonAllCategory = ({ toy }) => {
  // console.log(toy);
  const [isOpen, setIsOpen] = useState(false);
  const { pictureUrl, toyName, price, rating } = toy;

  const handleDetails = () => {
    setIsOpen(true);
    console.log("click");
  };
  return (
    <div className="card card-side bg-primary shadow-xl">
      {isOpen && <ToyDetails toy={toy} setIsOpen={setIsOpen}></ToyDetails>}
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
          : {price}
        </p>
        <div className="card-actions justify-end" onClick={handleDetails}>
          <AwesomeButton>Details</AwesomeButton>
        </div>
      </div>
    </div>
  );
};

export default CommonAllCategory;
