function HomePage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-blue-100 to-indigo-200 flex flex-col items-center">
            <div className="text-center mt-10 p-8 bg-white rounded-2xl shadow-lg w-11/12 max-w-2xl">
                <h1 className="text-4xl font-bold text-blue-600 mb-3">
                    Welcome to My App
                </h1>

                <p className="text-xl text-gray-700 bg-blue-100 rounded-lg p-3">
                    This is my lesson
                </p>
            </div>

            <div className="mt-10 w-11/12 max-w-xl space-y-4 text-center">
                <a href="/light"
                    className="block p-4 rounded-xl bg-white shadow hover:bg-red-100 transition text-xl"
                >
                    Lesson 1 – State of Lightbulb
                </a>

                <a
                    href="/count"
                    className="block p-4 rounded-xl bg-white shadow hover:bg-orange-100 transition text-xl"
                >
                    Lesson 2 – Add / Remove Number
                </a>

                <a
                    href="/form"
                    className="block p-4 rounded-xl bg-white shadow hover:bg-yellow-100 transition text-xl"
                >
                    Lesson 3 – State Form
                </a>

                <a
                    href="/hide"
                    className="block p-4 rounded-xl bg-white shadow hover:bg-green-100 transition text-xl"
                >
                    Lesson 4 – Hide / Unhide Text
                </a>

                <a
                    href="/jikan"
                    className="block p-4 rounded-xl bg-white shadow hover:bg-blue-100 transition text-xl"
                >
                    Lesson 5 – API
                </a>

                <a
                    href="/new"
                    className="block p-4 rounded-xl bg-white shadow hover:bg-purple-100 transition text-xl"
                >
                    Lesson 6 – News
                </a>

                <a
                    href="/shark"
                    className="block p-4 rounded-xl bg-white shadow hover:bg-pink-100 transition text-xl"
                >
                    Lesson 7 – Cheapshark
                </a>
            </div>
        </div>
    );
}

export default HomePage;