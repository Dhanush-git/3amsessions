import { Roboto_Mono } from 'next/font/google'
import Header from "./Header";

const roboto_mono = Roboto_Mono({subsets: ['latin']})

export default function Layout({ children }) {
    return (
      <main className={`${roboto_mono.className}`}>
        <Header/>
        <div className='px-4'>
            { children }
        </div>
      </main>
    )
  }