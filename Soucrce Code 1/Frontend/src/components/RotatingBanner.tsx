import { useState, useEffect } from "react";

const bannerContent = {
  title: "PrivLogEdu: An Innovative Framework for Real-Time Engagement Recognition in Hybrid Classrooms Using Non-Visual Log Data While Maintaining Privacy.",
  authors: "By: Palutla Venkata Naveen, Jonnalagadda Mahesh Babu, V.Srilakshmi, Jyothi M, Gujjula Ramanareddy, Dodda Venkata Reddy.",
  guide: "Under the guidelines of Sighakolli Naga Tirumala Rao"
};

const bannerVariants = [
  { bg: "from-blue-600 via-purple-600 to-pink-600", textColor: "text-white" },
  { bg: "from-emerald-600 via-teal-600 to-cyan-600", textColor: "text-white" },
  { bg: "from-orange-600 via-red-600 to-rose-600", textColor: "text-white" },
  { bg: "from-indigo-600 via-violet-600 to-purple-600", textColor: "text-white" },
  { bg: "from-amber-600 via-orange-600 to-red-600", textColor: "text-white" }
];

export const RotatingBanner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentBanner((prev) => (prev + 1) % bannerVariants.length);
        setIsAnimating(false);
      }, 500);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-full flex items-center justify-center">
      <div
        className={`
          absolute inset-0 bg-gradient-to-br ${bannerVariants[currentBanner].bg}
          transition-all duration-500
          ${isAnimating ? "opacity-0 scale-105" : "opacity-100 scale-100"}
        `}
      >
        <div className="absolute inset-0 flex items-center justify-center px-8 md:px-16 lg:px-24">
          <div className="max-w-6xl w-full text-center">
            <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold mb-6 ${bannerVariants[currentBanner].textColor} leading-tight`}>
              {bannerContent.title}
            </h1>
            <p className={`text-lg md:text-2xl mb-4 ${bannerVariants[currentBanner].textColor} opacity-90`}>
              {bannerContent.authors}
            </p>
            <p className={`text-base md:text-xl ${bannerVariants[currentBanner].textColor} opacity-80 italic`}>
              {bannerContent.guide}
            </p>
          </div>
        </div>
      </div>
      
      {/* Banner indicator dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {bannerVariants.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentBanner ? "bg-white w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};