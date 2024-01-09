'use client'
import Image from 'next/image'
import Link from 'next/link'
import {FaRegCircleUser} from 'react-icons/fa6'
import { AiFillHeart } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useRecipeGetRecipeGet } from '@/queries/openApIComponents'
import myImage from  "../../../../../public/Ramen.png";

export default function Recipe() {
  const [liked,setLiked] = useState(false)
  
  const vars = usePathname()

  const {data,error,isLoading} = useRecipeGetRecipeGet({queryParams:{recipe_id:Number(vars.split("/").pop())}})

  const Ingredients = useMemo(() =>{
      const IngrArr: React.JSX.Element[] = [];
      console.log(data)
      data?.ingredients.map((ingr) => {
        IngrArr.push(
          <li>
            <span className=' text-black' style={{fontFamily:'IBM Plex Serif', fontWeight:'400', fontStyle:'italic'}}>
              {ingr.name} : {ingr.weight}
            </span>
          </li>
        )
      })
      return IngrArr
  },[data])

  const Recipes = useMemo(() => {
    const RecipeArr: React.JSX.Element[] = [];
      data?.desc.split('. ').map((ingr) => {
        RecipeArr.push(
          <li>
            <span className=' text-black' style={{fontFamily:'IBM Plex Serif', fontWeight:'400', fontStyle:'italic'}}>
              {ingr}
            </span>
          </li>
        )
      })
      return RecipeArr
  },[data])

if(!isLoading && error){
  return (
    <>
      <>
      <div className='container flex flex-col items-center mx-auto justify-center mt-[56px] mb-[56px] h-[100vh]'>
        <div className='w-[70%] bg-[#F1E1D0] items-center justify-center text-center p-4 text-black'>
          В данный момент не существует блюда под данным ID
        </div>
          
      </div>
      </>
    </>
  )
}

if(isLoading){
  return(
    <>
    </>
  )
}
 if(!isLoading && data?.title){
  return(
    <>
    
    <div className='container flex flex-col items-center mx-auto justify-center mt-[56px] mb-[56px] '>
      <div className='card xl:w-[1024px] md:w-[700px] w-[400px]'>
      <Image src='/Ramen.png' alt='Блюдо' width={1024} height={701} className='rounded-t-[3rem]'></Image>
        <div className='bg-[#F1E1D0] rounded-b-[3rem]'>
           <div className='flex justify-between items-center xl:mx-[60px] xl:mt-12 md:mx-[50px] mt-4 mx-[28px] '>
              <span className='xl:text-[35px] md:text-[28px] text-black' style={{fontFamily:'IBM Plex Serif', fontWeight:'700'}}>{data?.title}</span>
              <button className='btn btn-ghost' onClick={() => {setLiked(!liked)}}>
                {liked ? <AiFillHeart fill={'black'} stroke={'black'}  className="h-[24px] xl:h-[40px] md:h-7 md:w-7 xl:w-[40px]"/> : <AiOutlineHeart stroke={'black'} className="h-[24px] xl:h-[40px] md:h-7 md:w-7 xl:w-[40px]"></AiOutlineHeart>}
              </button>
           </div>
           <div className='mx-[30px] xl:mx-[60px] xl:mt-12 md:mx-[50px] mt-4'>
              <span className='xl:text-[30px] md:text-[20px] text-black' style={{fontFamily:'IBM Plex Serif', fontWeight:'400',fontStyle:'italic'}}>Ингредиенты</span>
              <ul className='list-disc xl:mx-[50px] text-[14px] md:text-[18px] md:mx-9 xl:text-[30px] w-[90%] mx-[22px] text-black'>
                {Ingredients}
              </ul>
           </div>
           <div className='mx-[30px] xl:mx-[60px] md:mx-[50px] md:text-[20px] xl:my-12 my-8'>
              <span className='xl:text-[30px] md:text-[20px] text-black before:border-b border-black after:border-b' style={{fontFamily:'IBM Plex Serif', fontWeight:'400',fontStyle:'italic'}}>Способ приготовления</span>
              <ul className='list-decimal xl:text-[30px] xl:mx-[62px] w-[90%] md:mx-9 mx-[22px]  text-black' style={{fontFamily:'IBM Plex Serif', fontWeight:'400',fontStyle:'italic'}}>
                {Recipes}
              </ul>
           </div>
        </div>
      </div>
        
    </div>
    </>
  )
 }
}
