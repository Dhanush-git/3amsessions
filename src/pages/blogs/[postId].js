import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import ReactMarkdown from 'react-markdown'

export default function blog() {

    const [post, setPost] = useState(undefined)
    const router = useRouter()
    const id = router.query.postId

    async function getCurrentBlog() {
       let cPost = await fetch(`/api/notion/posts/${id}`).then((res)=> res.json()).then((data)=> data.data)
       setPost(cPost)
    }

    useEffect(()=>{
        if(id){
            getCurrentBlog()
        }
    },[id])

    return(
        <div>
            {
                post ? 
                    <ReactMarkdown>{ post }</ReactMarkdown>
                :
                'loading'
            }
        </div>
    )
}