import React, { useState } from "react";
import { Edit, Eraser, Scissors, Sparkles } from 'lucide-react';

function RemoveObject() {
    const [input, setInput] = useState('');
    const [object, setObject] = useState('');

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    }
    return (
        <div className="h-full overflow-y-scroll p-6 items-start flex flex-row gap-4
       text-slate-700">

            {/*Right col */}
            <form onSubmit={onSubmitHandler} className="w-full max-w-lg p-4 bg-white rounded-lg border
        border-gray-200">
                <div className="flex items-center gap-3">
                    <Sparkles className='w-6 text-[#d6336a]' />
                    <h1 className="text-xl font-semibold">
                        Object Removal
                    </h1>
                </div>
                <p className="mt-6 text-sm forn-medium">Upload Image</p>
                <input onChange={(e) => setInput(e.target.files[0])} className="w-full p-2 px-3 mt-2 outline-none text-sm
                    rounded-md border border-gray-300" type="file" accept="image/*" required />

                <p className="mb-3 mt-1 text-sm forn-medium">Supports JPG, PNG, and other image formats</p>

                <p className="mt-6 text-sm forn-medium">Describe object to remove</p>
                <textarea rows={4} onChange={(e) => setObject(e.target.value)} value={object} className="w-full p-2 px-3 mt-2 outline-none text-sm
                    rounded-md border border-gray-300" type="text" placeholder="e.g: car in background, free from the image." required />
                <p className="mt-1 text-sm forn-medium">Be specific about what you want to remove</p>
                <br />
                <button className="w-full flex justify-center items-center gap-2
                    bg-gradient-to-r from-[#dd6666] to-[#d44e53] text-white px-4 py-2 
                    text-sm rounded-lg cursor-pointer"><Scissors className="w-5" />
                    Remove Object</button>

            </form>

            {/*left col */}
            <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border
            border-gray-200 min-h-96 max-h-[600px]">
                <div className="flex items-center gap-3">
                    <Scissors className="w-5 h-5 text-[#d6336a]" />
                    <h1 className="text-xl font-semibold">Processed Image</h1>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <div className="text-sm flex flex-col items-center gap-5
                    text-gray-400">
                        <Eraser className="w-9 h-9" />
                        <p>Upload an image and describe what to remove</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RemoveObject;