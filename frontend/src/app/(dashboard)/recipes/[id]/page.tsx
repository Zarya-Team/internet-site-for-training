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
            <span className='text-[30px] text-black' style={{fontFamily:'IBM Plex Serif', fontWeight:'400', fontStyle:'italic'}}>
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
            <span className='text-[30px] text-black' style={{fontFamily:'IBM Plex Serif', fontWeight:'400', fontStyle:'italic'}}>
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
      <div className='container flex flex-col items-center mx-auto justify-center mt-[56px] mb-[56px] '>
        <div className='w-[1024px] bg-[#F1E1D0] items-center justify-center text-center p-4 text-black'>
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
      <div className='card w-[1024px] '>
      <Image src={myImage.default} alt='Блюдо' width={1024} height={701} className='rounded-t-[3rem]'></Image>
        <div className='bg-[#F1E1D0] rounded-b-[3rem]'>
           <div className='flex justify-between items-center mx-[60px] mt-12'>
              <span className='text-[35px] text-black' style={{fontFamily:'IBM Plex Serif', fontWeight:'700'}}>{data?.title}</span>
              <button className='btn btn-ghost' onClick={() => {setLiked(!liked)}}>
                {liked ? <AiFillHeart size={40} fill={'black'} stroke={'black'} /> : <AiOutlineHeart size={40}  stroke={'black'}></AiOutlineHeart>}
              </button>
           </div>
           <div className='mx-[30px] mt-12'>
              <span className='text-[30px] text-black' style={{fontFamily:'IBM Plex Serif', fontWeight:'400',fontStyle:'italic'}}>Ингредиенты</span>
              <ul className='list-disc mx-[50px] text-black'>
                {Ingredients}
              </ul>
           </div>
           <div className='mx-[30px] mt-12 mb-14'>
              <span className='text-[30px] text-black before:border-b border-black after:border-b border-black' style={{fontFamily:'IBM Plex Serif', fontWeight:'400',fontStyle:'italic'}}>Способ приготовления</span>
              <ul className='list-decimal text-[30px] mx-[62px]  text-black' style={{fontFamily:'IBM Plex Serif', fontWeight:'400',fontStyle:'italic'}}>
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
