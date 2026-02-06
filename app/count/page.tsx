'use client'
import { useState } from "react";

function CountPage() {
    const [count, setCount] = useState(1)
    return <div>
        <div className = "text-center text-2xl mt-6 text-shadow-zinc-900 font-light">
            <h1 className="text-3xl">Lesson 2 - Add/Remove number</h1>
        </div>

        <div className = "flex justify-center mt-5">
            <h1 className ="text-center text-6xl">{count}</h1>
        </div>

        <div className="flex justify-center mt-5">
            <button className = "p-5 text-2xl bg-blue-500 rounded-2xl font-bold cursor-pointer" onClick={() => setCount(count + 1)}>+1</button>
            <button className = "p-5 text-2xl bg-red-500 rounded-2xl font-bold cursor-pointer" onClick={() => setCount(count - 1)}>-1</button>
        </div>
    </div>
}

export default CountPage;