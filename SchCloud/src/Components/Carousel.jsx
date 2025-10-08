import { useState, useEffect, Children } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function Carousel({ children, autoSlideInterval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slides = Children.toArray(children)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (autoSlideInterval > 0) {
      const interval = setInterval(nextSlide, autoSlideInterval)
      return () => clearInterval(interval)
    }
  }, [autoSlideInterval])

  return (
    <div className="relative w-full ">
      <div className="relative h-265 md:h-100 overflow-hidden mx-10 rounded-lg shadow-xl">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          >
            {slide}
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 z-70 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/10 hover:border shadow-xl p-2 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/10 hover:border shadow-xl p-2 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      <div className="absolute bottom-1 md:-bottom-1 md:mb-1 left-1/2 -translate-x-1/2 flex gap-2 z-60 items-center justify-center ">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-blue-600 w-5'
                : 'bg-gray-400 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
