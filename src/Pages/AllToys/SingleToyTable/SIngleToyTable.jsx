const SIngleToyTable = ({ toy }) => {
  const { sellerName, toyName, subCategory, price, availableQuantity } = toy;

  return (
    <tr>
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td className="pl-16">{availableQuantity}</td>
      <td>
        <button className="btn">Details</button>
      </td>
    </tr>
  );
};

export default SIngleToyTable;
