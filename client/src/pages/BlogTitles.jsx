import React, { useState } from "react";
import { Sparkles, Edit, Hash } from "lucide-react";
import toast from 'react-hot-toast'
import Markdown from "react-markdown";
import { useAuth } from "@clerk/react";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;


function BlogTitles() {

    const categories = ['General', 'Technology', 'Business', 'Health', 'Lifestyle', 'Education', 'Travel', 'Food']

    const [selectedCat, setSelectedCat] = useState(categories[0])
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState('')

    const { getToken } = useAuth();


    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const prompt = `Generate a 5 catchy blog title for the keyword ${input} in the category ${selectedCat}`

            const { data } = await axios.post('/api/ai/generate-blog-title', { prompt },
                { headers: { Authorization: `Bearer ${await getToken()}` } }
            )
            console.log(data.content) 
            if (data.success) {
                setContent(data.content)
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
        setLoading(false);
    }
    return (
        <div className="h-full overflow-y-scroll p-6 items-start flex flex-row gap-4
       text-slate-700">

            <form onSubmit={onSubmitHandler} className="w-full max-w-lg p-4 bg-white rounded-lg border
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
                            <span onClick={() => setSelectedCat(item)} className={`text-xs px-2 py-1 m-1 border rounded-full cursor-pointer justify-between ${selectedCat === item ? 'bg-purple-50 text-purple-700' : 'text-gray-500 border-gray-300'} `} key={index}>{item}</span>
                        ))
                    }
                </div>
                <br />
                <button disabled={loading} className="w-full flex justify-center items-center gap-2
                bg-gradient-to-r from-[#a95395] to-[#864688] text-white px-4 py-2 mt-6
                text-sm rounded-lg cursor-pointer">
                    {loading ? <span className="w-4 h-4 my-1 rounded-full border-2 
                            border-t-transparent animate-spin"></span> : <Hash className="w-5" />}
                    Generate title</button>

            </form>

            <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border
            border-gray-200 min-h-96 max-h-[600px]">
                <div className="flex items-center gap-3">
                    <Hash className="w-5 h-5 text-[#864688]" />
                    <h1 className="text-xl font-semibold">Generated Titles</h1>
                </div>

                {!content ? (<div className="flex-1 flex justify-center items-center">
                    <div className="text-sm flex flex-col items-center gap-5
                    text-gray-400">
                        <Hash className="w-9 h-9" />
                        <p>Enter a topic click "Generate titles" to get started</p>
                    </div>
                </div>) : (
                    <div className="mt-3 h-full overflow-y-scroll text-sm text-slate-600">
                        <div className="reset-tw">
                            <Markdown>{content}</Markdown>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default BlogTitles;