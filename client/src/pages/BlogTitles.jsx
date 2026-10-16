import React, { useState } from "react";
import { Sparkles, Edit, Hash } from "lucide-react";


function BlogTitles() {

    const categories = [
        { cat: "General" },
        { cat: "Technology" },
        { cat: "Business" },
        { cat: "Health" },
        { cat: "LifeStyle" },
        { cat: "Education" },
        { cat: "Travel" },
        { cat: "Food" }
    ]

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    }

    const [selectedCat, setSelectedCat] = useState(categories[0])
    const [input, setInput] = useState('');
    return (
        <div className="h-full overflow-y-scroll p-6 items-start flex flex-row gap-4
       text-slate-700">

            <form  onSubmit={onSubmitHandler}  className="w-full max-w-lg p-4 bg-white rounded-lg border
        border-gray-200">

                <div className="flex items-center gap-3">
                    <Sparkles className='w-6 text-[#864688]' />
                    <h1 className="text-xl font-semibold">
                        AI Title Generator
                    </h1>
                </div>
                <p className="mt-6 text-sm forn-medium">Keyword</p>
                <input onChange={(e) => setInput(e.target.value)} value={input} className="w-full p-2 px-3 mt-2 outline-none text-sm
                    rounded-md border border-gray-300" type="text" placeholder="The future of artificial intelligence.." required />

                <p className="mt-6 mb-3 text-sm forn-medium">Category</p>
                <div className="flex flex-wrap gap-2 mt-3">
                    {
                        categories.map((item, index) => (
                            <span onClick={() => setSelectedCat(item)} className={`text-xs px-2 py-1 m-1 border rounded-full cursor-pointer justify-between ${selectedCat.cat === item.cat ? 'bg-purple-50 text-purple-700' : 'text-gray-500 border-gray-300'} `} key={index}>{item.cat}</span>
                        ))
                    }
                </div>
                <br />
                <button className="w-full flex justify-center items-center gap-2
                bg-gradient-to-r from-[#a95395] to-[#864688] text-white px-4 py-2 mt-6
                text-sm rounded-lg cursor-pointer"><Hash className="w-5" />
                    Generate title</button>

            </form>

            <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border
            border-gray-200 min-h-96 max-h-[600px]">
                <div className="flex items-center gap-3">
                    <Hash className="w-5 h-5 text-[#864688]" />
                    <h1 className="text-xl font-semibold">Generated Titles</h1>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <div className="text-sm flex flex-col items-center gap-5
                    text-gray-400">
                        <Hash className="w-9 h-9" />
                        <p>Enter a topic click "Generate titles" to get started</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BlogTitles;