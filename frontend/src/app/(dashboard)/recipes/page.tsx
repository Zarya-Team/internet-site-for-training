import Image from 'next/image'
import Link from 'next/link'
import {FaRegCircleUser} from 'react-icons/fa6'
import { AiFillHeart } from 'react-icons/ai'
import { useMemo } from 'react'
import { useRecipeGetRecipeGet } from '@/queries/openApIComponents'
import { useRouter } from 'next/router'

export default function Recipe() {

  const router = useRouter()
  const id = Number(router.query.id)   

  const recipe = useRecipeGetRecipeGet({queryParams:{recipe_id:1}})

  const Ingredients = useMemo(() =>{
      const IngrArr: React.JSX.Element[] = [];
      recipe.data?.ingredients.map((ingr) => {
        IngrArr.push(
          <li>
            <span className='text-[30px] text-black' style={{fontFamily:'IBM Plex Serif', fontWeight:'400', fontStyle:'italic'}}>
              {ingr.name} : {ingr.weight}
            </span>
          </li>
        )
      })
      return IngrArr
  },[recipe.data?.ingredients])

  const Recipes = useMemo(() => {
    const RecipeArr: React.JSX.Element[] = [];
      recipe.data?.desc.split('.').map((ingr) => {
        RecipeArr.push(
          <li>
            <span className='text-[30px] text-black' style={{fontFamily:'IBM Plex Serif', fontWeight:'400', fontStyle:'italic'}}>
              {ingr}
            </span>
          </li>
        )
      })
      return RecipeArr
  },[recipe.data?.desc])

  return (
    <>
    <div className='navbar bg-[#F1E1D0] p-0 flex flex-col'>
      <div className='flex justify-between w-full border-b border-black'>
        <Link href='#' className='text-black text-[40px] ml-[68px]' style={{fontFamily:'IBM Plex Serif', fontWeight:'400'}}>Кухни народов мира</Link>
        <div className='flex mr-[44px] justify-around'>
          <div className="form-control flex items-center w-[359px] justify-center ">
            <input type="text" placeholder="Search" className="input input-bordered rounded-full !w-[359px] md:w-auto bg-white" />
          </div>
          <Link href='#' className='text-black items-center justify-center h-[90px] flex text-[55px] ml-[68px]' style={{fontFamily:'IBM Plex Serif', fontWeight:'400'}}>
            <span className='text-black text-[30px] mr-[45px]' style={{fontFamily:'IBM Plex Serif', fontWeight:'400'}}>Вход</span>
            <FaRegCircleUser size={50}></FaRegCircleUser>
          </Link>
        </div>
      </div>
      <div className='flex justify-between h-[70px] w-full'>
        <Link href='#' className='text-black text-[30px] h-[45px] text-center w-[33%] border-r border-black' style={{fontFamily:'IBM Plex Serif', fontWeight:'400'}}>Избранное</Link>
        <Link href='#' className='text-black text-[30px] h-[45px] text-center w-[33%] border-r border-black' style={{fontFamily:'IBM Plex Serif', fontWeight:'400'}}>Добавить рецепт</Link>
        <Link href='#' className='text-black text-[30px] h-[45px] text-center w-[33%] border-r border-black' style={{fontFamily:'IBM Plex Serif', fontWeight:'400'}}>О нас</Link>
      </div> 
    </div>
    <div className='container flex flex-col items-center mx-auto justify-center mt-[56px] mb-[56px] '>
      <div className='card w-[1024px] '>
      <Image src='/Ramen.png' alt='Блюдо' width={1024} height={701} className='rounded-t-[3rem]'></Image>
        <div className='bg-[#F1E1D0] rounded-b-[3rem]'>
           <div className='flex justify-between items-center mx-[60px] mt-12'>
              <span className='text-[35px] text-black' style={{fontFamily:'IBM Plex Serif', fontWeight:'700'}}>{recipe.data?.title}</span>
              <AiFillHeart size={40} fill={'black'} stroke={'black'} />
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

export async function getStaticPaths(){

}