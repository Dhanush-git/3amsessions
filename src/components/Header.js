import { ArrowUpRight } from "react-feather";

const { default: Link } = require("next/link");

export default function Header() {
    return(
        <header className="flex items-center justify-between px-4 py-4 rounded-full">
            <div className='flex gap-1'><Link href={"/"}>3amsessions_</Link></div>
            <nav>
                <Link className="flex items-center gap-1 text-sm" href={"/blogs"}>blog <ArrowUpRight size={15}/></Link>
            </nav>
        </header>
    )
}