import React from 'react'
import Layout from '../components/Layout';

export default function flex() {
  return (
    <Layout>
        <h1> Flex..</h1>

        <div class="flex flex-row justify-center items-center bg-purple-600 h-20 text-white">
                    flex flex-row justify-center items-center bg-purple-600 h-20
        </div>

        <div className='m-2'>
            <div className="flex flex-row">
                <div className="bg-red-500 w-1/2 h-20 text-center">bg-red-500 w-1/2 h-20 text-center</div>
                <div className="bg-blue-300 w-1/2 h-20 text-center">bg-blue-300 w-1/2 h-20 text-center</div>
            </div>    
        </div>

        <div className='m-2'>
            <div className="flex flex-row">
                <div className="bg-red-500 w-1/3 h-40 text-center">bg-red-500 w-1/3 h-40 text-center</div>
                <div className="bg-blue-300 w-1/2 h-20 text-center">bg-blue-300 w-1/2 h-20 text-center</div>
                <div className="bg-purple-300 w-1/3 h-20 text-center">bg-purple-300 w-1/3 h-20 text-center</div>
            </div>    
        </div>

        <div className='m-2'>
        <div class="h-56 grid grid-cols-3 gap-4 content-start ...">
            <div className='bg-red-400 '>01</div>
            <div>02</div>
            <div>03</div>
            <div>04</div>
            <div>05</div>
        </div>
        </div>
    </Layout>
  );
}
