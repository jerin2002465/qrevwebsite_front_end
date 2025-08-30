// Video loader
export const VideoLoader = () => {
  return (
    <div className="relative w-full max-w-4xl h-[350px] rounded-xl overflow-hidden bg-gray-300 mx-auto">
      {/* Shimmer background */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />

      {/* Circle shimmer (play button placeholder) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-14 h-14 rounded-full bg-gray-400 overflow-hidden">
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
        </div>
      </div>
    </div>
  );
};

// Review Loader
export const ClientReviewLoader = () => {
  return (
    <div
      className="bg-[#EEFAF9] border border-white-95 p-8 lg:p-10 rounded-[10px] 
                    flex flex-col justify-between h-[320px] space-y-3 relative overflow-hidden"
    >
      {/* Shimmer animation */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />

      {/* Fake review text */}
      <div className="space-y-2">
        <div className="w-full h-4 bg-gray-300 rounded"></div>
        <div className="w-5/6 h-4 bg-gray-300 rounded"></div>
        <div className="w-4/6 h-4 bg-gray-300 rounded"></div>
        <div className="w-2/3 h-4 bg-gray-300 rounded"></div>
      </div>

      {/* Fake client name */}
      <div className="border-t border-t-green-90 pt-4 mt-auto flex justify-between items-center">
        <div className="w-32 h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

// Founder Image Loader
// Founder Image Loader
export const FounderImageLoader = () => {
  return (
    <div className="flex flex-col items-center p-10 px-5 rounded-[50px] shadow-[0px_0px_3px_rgba(0,0,0,0.5)] bg-white relative overflow-hidden">
      {/* Shimmer overlay */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />

      {/* Circle shimmer for founder image */}
      <div className="relative w-[150px] h-[150px] mt-4 rounded-full bg-gray-300 overflow-hidden">
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
      </div>

      {/* Name shimmer */}
      <div className="w-40 h-5 bg-gray-300 rounded mt-6"></div>

      {/* Role shimmer */}
      <div className="w-32 h-4 bg-gray-300 rounded mt-4"></div>
    </div>
  );
};

// Client Logo Loader
export const ClientLogoLoader = () => {
  return (
    <div className="mx-8 flex items-center">
      <div className="h-12 w-28 bg-gray-300 rounded-md relative overflow-hidden">
        {/* shimmer animation */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
      </div>
    </div>
  );
};

// footer loader
export const FooterLoader = () => {
  return (
    <div className="space-y-4 animate-pulse">
      {/* Email shimmer */}
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
        <div className="h-4 w-40 bg-gray-300 rounded"></div>
      </div>

      {/* Phone shimmer */}
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
        <div className="h-4 w-32 bg-gray-300 rounded"></div>
      </div>

      {/* Address shimmer (2–3 lines) */}
      <div className="flex items-start gap-3">
        <div className="w-5 h-5 bg-gray-300 rounded-full mt-1"></div>
        <div className="space-y-2">
          <div className="h-4 w-52 bg-gray-300 rounded"></div>
          <div className="h-4 w-40 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};
