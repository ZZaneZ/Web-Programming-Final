"use client";
import axios from "axios";
import { useEffect, useState } from "react";

function NewsPage() {
    const [test1, test2] = useState([]);

    useEffect(() => {
        function fetchAnimation() {
            axios.get("https://newsdata.io/api/1/latest?apikey=pub_5281385ba9e64182517f03918881c22ab1bf1&language=th").then((res) => {
                test2(res.data.results)
            });
        }
        fetchAnimation();
    }, []);

    return <div>
        <h1 className="text-4xl text-center my-5"> News from API </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {test1.map((item) => (
                <div key = {item.article_id} className = "border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                    <img src = {item.image_url} alt = {item.title} className = "w-full h-40 object-cover"/>
                    <div className = "p-3">
                        <h2 className = "font-semibold text-sm line-clamp-2"> {item.title} </h2>
                        <p className = "text-xs text-gray-500 mt-1"> {item.source_name} </p>
                        <a href={item.link} target="_blank" className = "text-blue-500 text-xs mt-2 inline-block"> อ่านต่อ </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default NewsPage;