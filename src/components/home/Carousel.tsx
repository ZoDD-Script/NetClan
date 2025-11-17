import { useEffect, useRef } from "react";

const Carousel = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const images = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
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
    const scrollSpeed = 5; // Increase this number for faster scrolling (try 2, 3, 4, etc.)
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
