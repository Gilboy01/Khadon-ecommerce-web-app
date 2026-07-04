import { Link } from "react-router-dom";
import laptopImage from "../../assets/macbooks.jpg";
import imacImage from "../../assets/imacs.jpg";
const LaptopsCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Macbook collection */}
        <div className="relative flex-1">
          <img
            src={laptopImage}
            alt="macbook"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              MacBook collection
            </h2>
            <Link
              to="/collections/all?laptop=macbook"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
        {/* imac collection */}
        <div className="relative flex-1">
          <img
            src={imacImage}
            alt="iMac"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              iMac collection
            </h2>
            <Link
              to="/collections/all?laptop=imac"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaptopsCollectionSection;
