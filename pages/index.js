import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <>
        <Layout>
                <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div class="md:flex">
                      <div class="md:shrink-0">
                        <img class="h-48 w-full object-cover md:h-full md:w-48" 
                            src="computer.png" alt="Modern building architecture"/>
                      </div>
                      <div class="p-8">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Marlon Falcón Hernández</div>
                          <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Sample tailwincss</a>
                        <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                      </div>
                    </div>
            </div>
                <div class="flex flex-row justify-center items-center bg-purple-600 h-20 text-white">
                    <Link href="https://www.svgrepo.com/">svgrepo icon</Link>
                </div>

                <div class="flex flex-row justify-center items-center bg-red-600 h-20 text-white">
                    <Link href="https://undraw.co/illustrations">undraw svg</Link>
                </div>

                

        </Layout>
    </>
  )
}
