const { default: Link } = require("next/link");

export default function Header() {
    return(
        <div className="flex justify-between px-4 py-5">
            <div className='flex gap-1'><Link href={"/"}>_3amsessions</Link></div>
            <nav>
                <Link href={"/blogs"}>blog</Link>
            </nav>
        </div>
    )
}