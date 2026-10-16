import { useState } from "react";
import React from "react";
import { Edit, Image, Sparkles } from 'lucide-react';

function GenerateImages(){
        const imageStyle = ['Realistic', 'Ghibli Style']
    
        const [selectedStyle, setSelectedStyle] = useState(imageStyle[0]);
        const [input, setInput] = useState('');
    
        const onSubmitHandler = async (e) => {
            e.preventDefault();
        }
    return(
        <div className="h-full overflow-y-scroll p-6 items-start flex flex-row gap-4
       text-slate-700">

            {/*Right col */}
            <form onSubmit={onSubmitHandler} className="w-full max-w-lg p-4 bg-white rounded-lg border
        border-gray-200">
                <div className="flex items-center gap-3">
                    <Sparkles className='w-6 text-[#488243]' />
                    <h1 className="text-xl font-semibold">
                        AI Image Generator
                    </h1>
                </div>
                <p className="mt-6 text-sm forn-medium">Describe Your Image</p>
                <textarea rows={4} onChange={(e) => setInput(e.target.value)} value={input} className="w-full p-2 px-3 mt-2 outline-none text-sm
                    rounded-md border border-gray-300" type="text" placeholder="Describe what you want to see in the image.." required />

                <p className="mt-6 mb-3 text-sm forn-medium">Style</p>
                <div>
                    {imageStyle.map((item) => (
                        <span onClick={() => setSelectedStyle(item)} className={`text-xs px-2 py-1 m-1 border rounded-full cursor-pointer ${selectedStyle === item ? 'bg-green-50 text-green-700' : 'text-gray-500 border-gray-300'} `} key={item}>{item}</span>
                    ))}
                </div>
                <br />
                <button className="w-full flex justify-center items-center gap-2
                    bg-gradient-to-r from-[#73c66c] to-[#378447] text-white px-4 py-2 mt-6
                    text-sm rounded-lg cursor-pointer"><Edit className="w-5" />
                    Generate article</button>

            </form>

             {/*left col */}
            <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border
            border-gray-200 min-h-96 max-h-[600px]">
                <div className="flex items-center gap-3">
                    <Image className="w-5 h-5 text-[#488243]"/>
                    <h1 className="text-xl font-semibold">Generated Image</h1>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <div className="text-sm flex flex-col items-center gap-5
                    text-gray-400">
                        <Image className="w-9 h-9"/>
                        <p>Describe an image and click "Generate Image" to get started</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GenerateImages;