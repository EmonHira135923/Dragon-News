import React from "react";
import { FaShareAlt, FaBookmark, FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ newscard }) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden max-w-md mx-auto mb-5">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={newscard.author.img}
            alt={newscard.author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-gray-800 text-sm">
              {newscard.author.name}
            </h2>
            <p className="text-xs text-gray-500">
              {new Date(newscard.author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500">
          <FaBookmark className="cursor-pointer hover:text-gray-700" />
          <FaShareAlt className="cursor-pointer hover:text-gray-700" />
        </div>
      </div>

      {/* Title */}
      <h3 className="px-4 text-lg font-semibold text-gray-900 leading-snug">
        {newscard.title}
      </h3>

      {/* Image */}
      <img
        src={newscard.image_url}
        alt="news"
        className="w-full h-52 object-cover mt-3"
      />

      {/* Details */}
      <div className="p-4">
        <p className="text-sm text-gray-600 leading-relaxed">
          {newscard.details.slice(0, 200)}...
          <span className="text-orange-500 font-medium cursor-pointer ml-1">
            Read More
          </span>
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-200">
          <div className="flex items-center gap-2 text-orange-400">
            {[...Array(newscard.rating.number)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-gray-700 text-sm font-medium">
              {newscard.rating.number}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <FaEye />
            <span>{newscard.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
