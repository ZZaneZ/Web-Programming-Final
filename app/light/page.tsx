"use client"
import { useState } from "react";

function LightPage() {
    const [isLightOn, setIsLightOn] = useState(false);
    return (
        <div>
            <div className = "text-center text-2xl mt-6 text-shadow-zinc-900 font-light">
                <h1>First Lesson - State of Lightbulb</h1>
            </div>

            <div className = "flex justify-center mt-5">
                <button 
                    type = "button" 
                    className = "bg-green-500 p-5 rounded-2xl text-xl font-bold cursor-pointer hover:bg-red-600" 
                    onClick = {() => setIsLightOn(!isLightOn)}
                >
                    Light Switch
                </button>
            </div>

            <div className = "text-center tex-5xl mt-6">
                <h1>Light Status - {isLightOn ? "On" : "Off"} </h1>

                <div className = "flex justify-center mt-8">
                    {isLightOn ? (
                    <img src = "https://www.w3schools.com/js/pic_bulbon.gif"/>
                ) : (
                    <img src = "https://www.w3schools.com/js/pic_bulboff.gif"/>
                )}
                </div>             
            </div>
        </div>
    );
}

export default LightPage