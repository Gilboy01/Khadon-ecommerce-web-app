import Hero from "../components/Layout/Hero";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";
import LaptopsCollectionSection from "../components/Products/LaptopsCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";

const placeholderProducts = [
  {
    _id: 1,
    name: "product 1",
    price: 2000,
    images: [{ url: "https://picsum.photos/500/500?random=1" }],
  },
  {
    _id: 2,
    name: "product 1",
    price: 2000,
    images: [{ url: "https://picsum.photos/500/500?random=2" }],
  },
  {
    _id: 3,
    name: "product 3",
    price: 2000,
    images: [{ url: "https://picsum.photos/500/500?random=3" }],
  },
  {
    _id: 4,
    name: "product 4",
    price: 2000,
    images: [{ url: "https://picsum.photos/500/500?random=4" }],
  },
  {
    _id: 5,
    name: "product 5",
    price: 2000,
    images: [{ url: "https://picsum.photos/500/500?random=5" }],
  },
  {
    _id: 6,
    name: "product 6",
    price: 2000,
    images: [{ url: "https://picsum.photos/500/500?random=6" }],
  },
  {
    _id: 7,
    name: "product 7",
    price: 2000,
    images: [{ url: "https://picsum.photos/500/500?random=7" }],
  },
  {
    _id: 8,
    name: "product 8",
    price: 2000,
    images: [{ url: "https://picsum.photos/500/500?random=8" }],
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero component */}
      <Hero />
      {/* Collection section */}
      <LaptopsCollectionSection />
      {/* New Arivals */}
      <NewArrivals />
      {/* Best Seller */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetails />
      {/* imacs */}
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">iMacs</h2>
        <ProductGrid products={placeholderProducts} />
      </div>
      {/* featured */}
      <FeaturedCollection />
      {/* features */}
      <FeaturesSection />
    </div>
  );
};

export default Home;
