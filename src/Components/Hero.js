import React from 'react'
import WomanImg from "../img/woman_hero.png"
import { Link } from 'react-router-dom'
export default function Hero() {
    return (
        <section className=' h-[500px] bg-hero bg-no-repeat bg-cover bg-center py-24 '>
            <div className="container mx-auto flex justify-around h-full">

                <div className='flex flex-col justify-center '>
                    <div className='font-semibold flex items-center uppercase'>
                        <div className='w-10 h-[2px] bg-red-400 mr-3'></div>new
                    </div>
                    <h1 className='text-[70px] leading-[1.1] font-light'> AUTUMN SALE STYLISH <br />
                        <span className='font-semibold'>WOMENS</span>
                    </h1>
                    <Link to={'/'} className='self-start font-semibold uppercase border-b-2 border-primary'>Discover More</Link>
                </div>

                <div className='hidden lg:block '>
                    <img className='h-[400px]' src={WomanImg} alt="" />
                </div>

            </div>
        </section>
    )
}
