import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import ReactMarkdown from 'react-markdown'

export default function blog() {

    const [post, setPost] = useState(undefined)
    const router = useRouter()
    const id = router.query.postId
    console.log(id)

    async function getCurrentBlog() {
       let cPost = await fetch('/api/notion/posts/9ccafa03-0220-4681-ba6f-445f8f2a599f').then((res)=> res.json()).then((data)=> data.data)
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
                ''
            }
        </div>
    )
}