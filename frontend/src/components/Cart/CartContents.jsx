import { RiDeleteBin3Line } from "react-icons/ri";

const CartContents = () => {
  const cartProducts = [
    {
      produdtId: 1,
      name: "mackbook air 2015",
      size: "14 inch",
      color: "gray",
      quantity: 1,
      price: 2000,
      image: "https://picsum.photos/200?random=1",
    },
    {
      produdtId: 2,
      name: "mackbook pro 2015",
      size: "14 inch",
      color: "gray",
      quantity: 1,
      price: 2000,
      image: "https://picsum.photos/200?random=2",
    },
    {
      produdtId: 3,
      name: "mackbook pro 2019",
      size: "14 inch",
      color: "gray",
      quantity: 1,
      price: 4000,
      image: "https://picsum.photos/200?random=3",
    },
  ];
  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                Size: {product.size} | color: {product.color}
              </p>
              <div className="flex items-center mt-2">
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  -
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>$ {product.price.toLocaleString()}</p>
            <button>
              <RiDeleteBin3Line className="w-6 h-6 mt-2 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
