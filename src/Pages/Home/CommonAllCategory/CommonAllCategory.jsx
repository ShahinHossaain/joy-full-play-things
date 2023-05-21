import { AwesomeButton } from "react-awesome-button";

const CommonAllCategory = ({ toy }) => {
  // console.log(toy);
  const { pictureUrl, toyName, price, rating } = toy;
  return (
    <div className="card card-side bg-primary shadow-xl">
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
        <div className="card-actions justify-end">
          <AwesomeButton>Details</AwesomeButton>
        </div>
      </div>
    </div>
  );
};

export default CommonAllCategory;
