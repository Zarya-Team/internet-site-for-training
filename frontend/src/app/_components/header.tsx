import Link from "next/link"
import { FaRegCircleUser } from "react-icons/fa6"
import { useVerifiedUser } from '../../utils/hooks'

export default function Header(){
    const {curUser,loading: userLoading} = useVerifiedUser()
    return(
    <>
    <div className='navbar lg:flex hidden bg-[#F1E1D0] p-0 flex-col'>
        <div className='flex justify-between w-full h-[50px] border-b border-black'>
        <Link href='/' className='text-black text-[28px] ml-[68px]' style={{fontFamily:'IBM Plex Serif', fontWeight:'400'}}>Кухни народов мира</Link>
        <div className='flex mr-[44px] justify-around'>
          <Link href="/login" className='text-black items-center justify-center h-[90px] flex text-[55px] ml-[68px]' style={{fontFamily:'IBM Plex Serif', fontWeight:'400'}}>
            <span className='text-black text-[18px] mr-[45px]' style={{fontFamily:'IBM Plex Serif', fontWeight:'400'}}>{curUser?.email ?? 'Вход'}</span>
            <FaRegCircleUser size={28}></FaRegCircleUser>
          </Link>
        </div>
      </div>
      <div className='flex justify-between h-[50px] w-full'>
          <Link href='/favourites' className='text-black flex justify-center items-center text-[24px] h-[45px] text-center w-[33%] border-r border-black' style={{fontFamily:'IBM Plex Serif', fontWeight:'400'}}>Избранное</Link>
          <Link href='/search' className='text-black flex justify-center items-center text-[24px] h-[45px] text-center w-[33%] border-r border-black' style={{fontFamily:'IBM Plex Serif', fontWeight:'400'}}>Поиск</Link>
          <Link href='/about' className='text-black flex justify-center items-center text-[24px] h-[45px] text-center w-[33%]' style={{fontFamily:'IBM Plex Serif', fontWeight:'400'}}>О нас</Link>
        </div> 
      </div>
    <div className='navbar lg:hidden bg-[#F1E1D0] p-0 flex'>
      <div className='flex mx-5 w-full'>
        <div className="navbar-start">
          <Link href='/' className='text-black text-[28px]' style={{fontFamily:'IBM Plex Serif', fontWeight:'400'}}>КНМ</Link>
        </div>
        <div className="navbar-end flex">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#F1E1D0] w-52">
              <li><Link href='/favourites' className='text-black flex text-[14px]' style={{fontFamily:'IBM Plex Serif', fontWeight:'400'}}>Избранное</Link></li>
              <li><Link href='/search' className='text-black flex  text-[14px]' style={{fontFamily:'IBM Plex Serif', fontWeight:'400'}}>Поиск</Link></li>
              <li><Link href="/login" className='text-black  flex text-[14px]' style={{fontFamily:'IBM Plex Serif', fontWeight:'400'}}>{curUser?.email ?? 'Вход'}</Link></li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
    </>
    )
    
}