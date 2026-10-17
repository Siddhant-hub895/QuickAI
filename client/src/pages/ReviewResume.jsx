import React, {useState} from "react";
import { Edit, Eraser, File, Sparkles } from 'lucide-react';

function ReviewResume(){
   
    const [input, setInput] = useState('');

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
                    <Sparkles className='w-6 text-[#2ec4ae]' />
                    <h1 className="text-xl font-semibold">
                        Resume Review
                    </h1>
                </div>
                <p className="mt-6 text-sm forn-medium">Upload Resume</p>
                <input onChange={(e) => setInput(e.target.files[0])}  className="w-full p-2 px-3 mt-2 outline-none text-sm
                    rounded-md border border-gray-300" type="file" accept="image/*" required />

                <p className="mb-3 mt-1 text-sm forn-medium">Supports PDF, JPG, PNG formats</p>
                <br />
                <button className="w-full flex justify-center items-center gap-2
                    bg-gradient-to-r from-[#6f9fd6] to-[#1d70b5] text-white px-4 py-2 
                    text-sm rounded-lg cursor-pointer"><File className="w-5" />
                   Review Resume</button>

            </form>

             {/*left col */}
            <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border
            border-gray-200 min-h-96 max-h-[600px]">
                <div className="flex items-center gap-3">
                    <Eraser className="w-5 h-5 text-[#2ec4ae]"/>
                    <h1 className="text-xl font-semibold">Analysis Results</h1>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <div className="text-sm flex flex-col items-center gap-5
                    text-gray-400">
                        <File className="w-9 h-9"/>
                        <p>Upload your resume and click "Review Resume" to get started</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewResume;