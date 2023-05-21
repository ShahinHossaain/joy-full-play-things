const ToyDetails = ({ isOpen, closeModal, toy }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-6 rounded-lg shadow-xl z-10">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">{toy.name}</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
        <img src={toy.pictureUrl} alt={toy.name} className="mb-4" />
        <div>
          <p>
            <span className="font-bold">Seller Name:</span> {toy.sellerName}
          </p>
          <p>
            <span className="font-bold">Seller Email:</span> {toy.sellerEmail}
          </p>
          <p>
            <span className="font-bold">Sub-category:</span> {toy.subcategory}
          </p>
          <p>
            <span className="font-bold">Price:</span> {toy.price}
          </p>
          <p>
            <span className="font-bold">Rating:</span> {toy.rating}
          </p>
          <p>
            <span className="font-bold">Available Quantity:</span>{" "}
            {toy.quantity}
          </p>
          <p>
            <span className="font-bold">Description:</span> {toy.description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ToyDetails;

// const App = () => {
//   const [modalOpen, setModalOpen] = useState(false);

//   const openModal = () => {
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   const toy = {
//     pictureUrl: "https://example.com/toy-image.jpg",
//     name: "Toy Name",
//     sellerName: "Seller Name",
//     sellerEmail: "seller@example.com",
//     subcategory: "Sub-category",
//     price: "$19.99",
//     rating: 4.5,
//     quantity: 10,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae enim non lacus fermentum finibus.",
//   };

//   return (
//     <div>
//       <button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         onClick={openModal}
//       >
//         View Toy Details
//       </button>
//       <Modal isOpen={modalOpen} closeModal={closeModal} toy={toy} />
//     </div>
//   );
// };

// export default App;
