import { Eye, Bookmark, Share2 } from "lucide-react";

const features = [
  {
    icon: Eye,
    text: "Track films you’ve watched.",
  },
  {
    icon: Bookmark,
    text: "Save those you want to see.",
  },
  {
    icon: Share2,
    text: "Tell your friends what’s good.",
  },
];

const FeaturesGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-6 text-black">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div
            key={index}
            className="flex flex-col items-center text-center py-4 md:p-6 lg:p-8"
          >
            <Icon className="text-black w-10 h-10 mb-4" />
            <p className="font-bold text-xl md:text-2xl lg:text-3xl">
              {feature.text}
            </p>
          </div>
        );
      })}
    </div>
  );
};
