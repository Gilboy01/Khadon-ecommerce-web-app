import { Link } from "react-router-dom";
import featured from "../../assets/macbooks.jpg";

const FeaturedCollection = () => {
  return (
    <section className="py-6 px-4 lg:px-4">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-gray-200">
        {/* Left content */}
        <div className="lg:w-1/2 p-8 text-center lg:text-left">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            High Quality Tech gadgets
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Your everyday life gadget
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Discover high quality computers that effortlessly blend with your
            style. Designed to make you feel great everyday.
          </p>
          <Link
            to="/collections/all"
            className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800"
          >
            Shop Now
          </Link>
        </div>
        {/* Right Content */}
        <div className="lg:w-1/2">
          <img
            src={featured}
            alt="macbook"
            className="w-[1000px] h-[500px] object-cover lg:rounded-tr-3xl lg:rounded-br-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
