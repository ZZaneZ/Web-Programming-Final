"use client";
import axios from "axios";
import { useEffect, useState } from "react";

function JikanPage() {
    const [animations, setAnimation] = useState([]);

    useEffect(() => {
        function fetchAnimation() {
            axios.get("https://api.jikan.moe/v4/anime").then((res) => {
                setAnimation(res.data.data)
            });
        }
        fetchAnimation();
    }, []);

    return <div>
        <h1 className = "text-4x text-center my-5"> Anime from Jikan API </h1>
        <div className = "grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {animations.map((item) => {
                return (
                    <div key = {item.title} className = "bg-gray-600 w-full rounded-xl">
                        <h2 className = "text-center text-2xl">{item.title}</h2>
                        <div className = "flex justify-center mt-2">
                            <img src = {item.images.jpg.image_url} alt = {item.title}/>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>;
}

export default JikanPage;