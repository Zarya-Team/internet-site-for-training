import Image from 'next/image'
import Link from 'next/link'
import {FaRegCircleUser} from 'react-icons/fa6'
import { AiFillHeart } from 'react-icons/ai'
import { useMemo } from 'react'

export default function Home() {


  
  return (
    <>
    <div className='container flex flex-col items-center mx-auto justify-center mt-[56px] mb-[56px] text-center'>
        <div className='text-[46px] text-white' style={{fontFamily:'IBM Plex Serif', fontWeight:'400', fontStyle: 'italic'}}>Страна</div>
        <div className='h-[2px] bg-white w-[1024px] mb-4'></div>
        <div className=" w-[1024px] carousel gap-4">
          <div className='carousel-item w-full gap-4 items-center justify-center' id='1'>
            <a className='w-[450px] h-[350px] bg-[#F1E1D0] shrink-0' href='/japan'>
              <Image src='/Country.png' width={450} height={300} alt='Страна' className='h-[300px]'></Image>
              <p className='text-[24px]' style={{fontFamily:'IBM Plex Serif', fontWeight:'400'}}>Японская кухня</p>
            </a>
            <a className='w-[450px] h-[350px] bg-[#F1E1D0] shrink-0' href='/italy'>
              <Image src='/Country.png' width={450} height={300} alt='Страна' className='h-[300px]'></Image>
              <p className='text-[24px]' style={{fontFamily:'IBM Plex Serif', fontWeight:'400'}}>Итальянская кухня</p>
            </a>
          </div>
          <div className='carousel-item w-full gap-4 items-center justify-center' id='2'>
            <a className='w-[450px] h-[350px] bg-[#F1E1D0]  shrink-0' href='/france'>
              <Image src='/Country.png' width={450} height={300} alt='Страна' className='h-[300px]'></Image>
              <p className='text-[24px]' style={{fontFamily:'IBM Plex Serif', fontWeight:'400'}}>Французская кухня</p>
            </a>
            <a className='w-[450px] h-[350px] bg-[#F1E1D0]  shrink-0' href='/russia'>
              <Image src='/Country.png' width={450} height={300} alt='Страна' className='h-[300px]'></Image>
              <p className='text-[24px]' style={{fontFamily:'IBM Plex Serif', fontWeight:'400'}}>Русская кухня</p>
            </a>
          </div>
          
          
        </div>
        <div className='flex justify-center w-full gap-2 mt-2'>
              <a href='#1' className='btn btn-xs rounded-none bg-[#F1E1D0]'>1</a>
              <a href='#2'className='btn btn-xs rounded-none bg-[#F1E1D0]'>2</a>
        </div>
        <div className='text-[46px] text-white' style={{fontFamily:'IBM Plex Serif', fontWeight:'400', fontStyle: 'italic'}}>Популярное</div>
        <div className='h-[2px] bg-white w-[1024px] mb-4'></div>
        <div className=" w-[1024px] carousel gap-4">
            <div className='carousel-item w-full gap-4 items-center justify-center' id='popular1'>
              <a className='w-[450px] h-[350px] bg-[#F1E1D0]  shrink-0' href='/recipes/1'>
                <Image src='/Ramen.png' width={450} height={300} alt='Страна' className='h-[300px]'></Image>
                <p className='text-[24px]' style={{fontFamily:'IBM Plex Serif', fontWeight:'400'}}>Рамен</p>
              </a>
            </div>
        </div>
      </div>
    </>
  )
}
