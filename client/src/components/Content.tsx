import axios from 'axios';
import { useState } from 'react';
import { BACKEND_URL } from '../config';
import { useNavigate } from 'react-router-dom';

function Content() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate()

    async function handlePost(){
        if(title.length===0 || content.length===0){
            alert("Please fill all the fields")
            return
        }
        const res = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
            title:title,
            content:content
        },{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        }
    )
    navigate(`/blogread/${res.data.id}`)
    }

    return (
        <div>
            <div className='flex flex-col justify-center w-screen p-3'>
                <div className='text-2xl'>Title</div>
                <input type="text" className='border-2 border-slate-200 rounded-2xl outline-none w-3/4 text-2xl p-3' onChange={(e)=>{setTitle(e.target.value)}} />
            </div>
            <div className='flex flex-col justify-center w-screen p-3'>
                <div className='text-2xl'>content</div>
                <textarea className='border-2 w-full hifull border-slate-200 rounded-2xl outline-none h-80 p-3' onChange={(e)=>{setContent(e.target.value)}}></textarea>    
            </div>
            <button className="bg-green-700 px-4 mx-4 text-white rounded-3xl cursor-pointer" onClick={handlePost}>Publish</button>
         </div>
    )
}

export default Content