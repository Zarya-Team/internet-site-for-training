import Link from "next/link"
import { FaRegCircleUser } from "react-icons/fa6"
import { useVerifiedToken } from '../../utils/hooks'

export default function Header(){
    const {user} = useVerifiedToken()
    return(
    <div className='navbar bg-[#F1E1D0] p-0 flex flex-col'>
        <div className='flex justify-between w-full border-b border-black'>
        <Link href='/' className='text-black text-[40px] ml-[68px]' style={{fontFamily:'IBM Plex Serif', fontWeight:'400'}}>Кухни народов мира</Link>
        <div className='flex mr-[44px] justify-around'>
          <div className="form-control flex items-center w-[359px] justify-center ">
            <input type="text" placeholder="Search" className="input input-bordered rounded-full !w-[359px] md:w-auto bg-white" />
          </div>
          <Link href="/login" className='text-black items-center justify-center h-[90px] flex text-[55px] ml-[68px]' style={{fontFamily:'IBM Plex Serif', fontWeight:'400'}}>
            <span className='text-black text-[30px] mr-[45px]' style={{fontFamily:'IBM Plex Serif', fontWeight:'400'}}>{user?.email ?? 'Вход'}</span>
            <FaRegCircleUser size={50}></FaRegCircleUser>
          </Link>
        </div>
      </div>
      <div className='flex justify-between h-[70px] w-full'>
        <Link href='#' className='text-black text-[30px] h-[45px] text-center w-[33%] border-r border-black' style={{fontFamily:'IBM Plex Serif', fontWeight:'400'}}>Избранное</Link>
        <Link href='#' className='text-black text-[30px] h-[45px] text-center w-[33%] border-r border-black' style={{fontFamily:'IBM Plex Serif', fontWeight:'400'}}>Добавить рецепт</Link>
        <Link href='/about' className='text-black text-[30px] h-[45px] text-center w-[33%] border-r border-black' style={{fontFamily:'IBM Plex Serif', fontWeight:'400'}}>О нас</Link>
      </div> 
    </div>
    )
    
}