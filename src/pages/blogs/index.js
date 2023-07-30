import Link from "next/link"
import { useEffect, useState } from "react"

export default function blogs() {

    const [posts, setPosts] = useState(undefined)

    async function getBlogs() {
      const blogs = await fetch('/api/notion/posts').then((res)=> res.json()).then((data)=> data)
      setPosts(blogs)
    }

    useEffect(()=>{
        getBlogs()
    },[])

    return(
        <div>
            <div className="mt-6">
                {
                    posts?
                    posts.map((post)=>{
                        return(
                            <div className="mt-4" key={post.id}>
                                <div className="text-sm">
                                    <Link href={ '/blogs/'+post.id }>{ post.properties.Name.title[0].plain_text }</Link>
                                </div>
                                <div className="text-xs mt-1 text-gray-400">{ (new Date(post.properties.Created.created_time)).toDateString() }</div>
                            </div>
                        )
                    })
                    :'loading'
                }
            </div>
        </div>
    )
}