"use client";
import axios from "axios";
import { useEffect, useState } from "react";

function NewsPage() {
    const [test1, test2] = useState([]);

    useEffect(() => {
        function fetchAnimation() {
            axios
                .get("https://www.cheapshark.com/api/1.0/deals")
                .then((res) => {
                    const filteredData = res.data.filter(
                        (item) => Number(item.savings) > 0
                    );

                    test2(filteredData);
                });
        }
        fetchAnimation();
    }, []);

    return (
        <div>
            <h1 className="text-4xl text-center my-5">Discounted Games</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
                {test1.map((item) => {
                    const discountPercent = Math.round(((item.normalPrice - item.salePrice) / item.normalPrice) * 100);

                    return (
                        <div key={item.dealID} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                            <img src={item.thumb} alt={item.title} className="w-full h-40 object-cover"/>

                            <div className="p-3">
                                <h2 className="font-semibold text-sm line-clamp-2"> {item.title}</h2>
                                <p className="text-xs text-gray-400 mt-1 line-through"> ${item.normalPrice}</p>
                                <p className="text-xs text-green-600 font-bold"> ${item.salePrice}</p>
                                <p className="text-xs text-red-500 font-semibold mt-1"> -{discountPercent}%</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default NewsPage;