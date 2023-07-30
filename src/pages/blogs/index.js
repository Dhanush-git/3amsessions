import Link from "next/link"

export default function blogs() {
    return(
        <div>
            All Blogs
            <Link href={"/blogs/9ccafa03-0220-4681-ba6f-445f8f2a599f"} > go to post</Link>
        </div>
    )
}