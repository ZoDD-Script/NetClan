import { useEffect, useRef } from "react";
import car1 from "../../assets/images/carousel1.jpg";
import car2 from "../../assets/images/carousel2.jpg";
import car3 from "../../assets/images/carousel3.jpg";
import car4 from "../../assets/images/carousel4.jpg";
import car5 from "../../assets/images/carousel5.jpg";
import car6 from "../../assets/images/carousel6.jpg";
import car7 from "../../assets/images/carousel7.jpg";
import car8 from "../../assets/images/carousel8.jpg";
import car9 from "../../assets/images/carousel9.jpg";
import car10 from "../../assets/images/carousel10.jpg";
import car11 from "../../assets/images/carousel11.jpg";
import car12 from "../../assets/images/carousel12.jpg";
import car13 from "../../assets/images/carousel13.png";
import car14 from "../../assets/images/carousel14.png";
import car15 from "../../assets/images/carousel15.png";

const Carousel = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const images = [
    car1,
    car2,
    car3,
    car4,
    car5,
    car6,
    car13,
    car14,
    car15,
    car7,
    car8,
    car9,
    car10,
    car11,
    car12,
    car13,
    car14,
    car15,
  ];

  // Triple the images: [...images, ...images, ...images]
  // This ensures smooth infinite scrolling in both directions
  const allImages = [...images, ...images, ...images];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const imageWidth = 474; // Width of each image
    const gap = 24; // gap-6 = 24px
    const slideWidth = imageWidth + gap;
    const totalSlides = images.length;

    // Start at the middle set of images
    scrollContainer.scrollLeft = slideWidth * totalSlides;

    let scrollAmount = scrollContainer.scrollLeft;
    const scrollSpeed = 3; // Increase this number for faster scrolling (try 2, 3, 4, etc.)
    let animationId: number;

    const scroll = () => {
      scrollAmount += scrollSpeed;

      // When we've scrolled past the second set, jump back to the middle set
      if (scrollAmount >= slideWidth * totalSlides * 2) {
        scrollAmount = slideWidth * totalSlides;
        scrollContainer.scrollLeft = scrollAmount;
      }
      // When we've scrolled before the middle set, jump to end of second set
      else if (scrollAmount <= 0) {
        scrollAmount = slideWidth * totalSlides;
        scrollContainer.scrollLeft = scrollAmount;
      } else {
        scrollContainer.scrollLeft = scrollAmount;
      }

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    // Handle manual scrolling
    const handleScroll = () => {
      const current = scrollContainer.scrollLeft;
      scrollAmount = current;

      // Seamlessly loop when manually scrolling
      if (current >= slideWidth * totalSlides * 2) {
        scrollAmount = slideWidth * totalSlides;
        scrollContainer.scrollLeft = scrollAmount;
      } else if (current <= 0) {
        scrollAmount = slideWidth * totalSlides;
        scrollContainer.scrollLeft = scrollAmount;
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [images.length]);

  return (
    <div className="flex flex-col justify-center py-28">
      {/* Full-width Carousel */}
      <div
        ref={scrollRef}
        className="w-full overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollBehavior: "auto",
        }}
      >
        <div className="flex gap-6 px-4">
          {allImages.map((image, index) => (
            <div
              key={index}
              className="shrink-0 w-[474px] h-[407px] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={image}
                alt={`Slide ${(index % images.length) + 1}`}
                loading="lazy"
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* hide scrollbar for webkit */
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
