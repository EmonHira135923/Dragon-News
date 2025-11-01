import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Componets/AllNewsCompontes/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const newsdata = useLoaderData();
  // console.log(newsdata);
  const [categorynews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(newsdata);
    } else if (id == "1") {
      const filternews = newsdata.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filternews);
    } else {
      const filternews = newsdata.filter((news) => news.category_id == id);
      setCategoryNews(filternews);
    }
  }, [newsdata, id]);

  return (
    <div>
      <h1 className="font-bold mb-5">
        Total News Found - {categorynews.length}
      </h1>

      <div className="grid grid-cols-1 gap-5">
        {newsdata.map((newscard) => (
          <NewsCard key={newscard.id} newscard={newscard}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
