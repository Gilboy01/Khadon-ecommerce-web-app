import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newArrivals = [
    {
      _id: "1",
      name: "Macbook M1 2021",
      price: 2000,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "macbook m1",
        },
      ],
    },
    {
      _id: "2",
      name: "Macbook M2 2022",
      price: 2000,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "macbook m2",
        },
      ],
    },
    {
      _id: "3",
      name: "Macbook M3 2023",
      price: 2000,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "macbook m3",
        },
      ],
    },
    {
      _id: "4",
      name: "Macbook M4 2024",
      price: 2000,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "macbook m4",
        },
      ],
    },
    {
      _id: "5",
      name: "Macbook M5 2025",
      price: 2000,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "macbook m5",
        },
      ],
    },
    {
      _id: "6",
      name: "Macbook M6 2026",
      price: 2000,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "macbook m6",
        },
      ],
    },
    {
      _id: "7",
      name: "Macbook M1 2021",
      price: 2000,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "macbook m1",
        },
      ],
    },
    {
      _id: "8",
      name: "Macbook M2 2022",
      price: 2000,
      images: [
        {
          url: "https://picsum.photos/500/500?random=8",
          altText: "macbook m1",
        },
      ],
    },
  ];

  const handlePointerDown = (e) => {
    const container = scrollRef.current;
    if (!container) return;

    setIsDragging(true);
    dragStartXRef.current = e.clientX - container.getBoundingClientRect().left;
    dragStartScrollRef.current = container.scrollLeft;
    e.preventDefault();
  };

  const handlePointerMove = (e) => {
    const container = scrollRef.current;
    if (!container || !isDragging) return;

    const x = e.clientX - container.getBoundingClientRect().left;
    const walk = x - dragStartXRef.current;
    container.scrollLeft = dragStartScrollRef.current - walk;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  // scroll direction
  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  //   update scroll buttons
  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable =
        container.scrollWidth > leftScroll + container.clientWidth;

      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }

    // console.log({
    //   scrollLeft: container.scrollLeft,
    //   clientWidth: container.clientWidth,
    //   containerScrollWidth: container.scrollWidth,
    //   offsetLeft: scrollRef.current.offsetLeft,
    // });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateScrollButtons);
    updateScrollButtons();

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
    };
  }, []);

  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest tech gadgets at your comfort.
        </p>
        {/* Scroll button */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border ${canScrollLeft ? "bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"} `}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded border ${canScrollRight ? "bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"} `}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Scrollable content */}
      <div
        ref={scrollRef}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerLeave={stopDragging}
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-[500px] object-cover rounded-lg"
              draggable="false"
              onDragStart={(e) => e.preventDefault()}
            />
            <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
