import React, { useState } from "react";
import { Edit, Sparkles } from 'lucide-react';

function WriteArticles() {

    const articleLength = [
        {length: 800, text: "Short (500-800 words)"},
        {length: 1200, text: "Medium (800-1200 words)"},
        {length: 800, text: "Long (1200+ words)"}
    ]

    const [selectedLength, setSelectedLength] = useState(articleLength[0]);
    const [input, setInput] = useState('');

    const onSubmitHandler = async(e)=> {
        e.preventDefault();
    }
    return (
        <div className="h-full overflow-y-scroll p-6 items-start flex-wrap gap-4
       text-slate-700">

            {/*Right col */}
            <form onSubmit={onSubmitHandler} className="w-full max-w-lg p-4 bg-white rounded-lg border
        border-gray-200">
                <div className="flex items-center gap-3">
                    <Sparkles className='w-6 text-[#4A7AFF]' />
                    <h1 className="text-xl font-semibold">
                        Article Configuration
                    </h1>
                </div>
                    <p className="mt-6 text-sm forn-medium">Article Topic</p>
                    <input onChange={(e)=> setInput(e.target.value)} value={input} className="w-full p-2 px-3 mt-2 outline-none text-sm
                    rounded-md border border-gray-300" type="text" placeholder="The future of artificial intelligence.." required/>

                    <p className="mt-6 mb-3 text-sm forn-medium">Article Length</p>
                    <div>
                        {articleLength.map((item,index)=> (
                            <span onClick={()=> setSelectedLength(item)} className={`text-xs px-2 py-1 m-1 border rounded-full cursor-pointer ${selectedLength.text === item.text ? 'bg-blue-50 text-blue-700' :'text-gray-500 border-gray-300'} `} key={index}>{item.text}</span>
                        ))}
                    </div>
                    <br/>
                    <button className="w-full flex justify-center items-center gap-2
                    bg-gradient-to-r from-[#226BFF] to-[#65ADFF] text-white px-4 py-2 mt-6
                    text-sm rounded-lg cursor-pointer"><Edit className="w-5"/>
                    Generate article</button>

            </form>

            {/*left col */}
            <div></div>

        </div>
    )
}

export default WriteArticles;