const CommonAllCategory = ({ toy }) => {
  // console.log(toy);
  const { pictureUrl, toyName, price, rating } = toy;
  return (
    <div className="card card-side bg-slate-300 shadow-xl">
      <figure className="w-2/5">
        <img src={pictureUrl} alt="Movie" className="h-full w-full" />
      </figure>
      <div className="card-body">
        <h2>{toyName}</h2>
        <p>Price : {price}</p>
        <p>Rating : {rating}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default CommonAllCategory;
