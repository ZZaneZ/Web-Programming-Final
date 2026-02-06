'use client'
import { useState } from "react";


function Page() {
        const [istextshow, setIsTextShow] = useState(true);    return (
        <div>
            <div className = "text-center text-2xl mt-6 text-shadow-zinc-900 font-light">
                <h1>Lesson 4 - Hide/Unhide text</h1>
            </div>

            <br />

            <div className="text-center">
                {istextshow && <h1 className="text-3xl">message</h1>}
            </div>

            <br />

            <div className="text-center">
                <button type="button" className="bg-green-500 font-bold p-5 rounded-2xl text-2xl cursor-pointer" onClick={() => setIsTextShow(true)}>Show</button>
                <button type="button" className="bg-red-500 font-bold p-5 rounded-2xl text-2xl cursor-pointer" onClick={() => setIsTextShow(false)}>Hide</button>
            </div>
        </div>
    );
}
export default Page