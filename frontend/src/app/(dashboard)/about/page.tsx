import { FaPhoneAlt } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";

export default function About(){
    return(
        <div className="flex items-center my-6 justify-center text-center text-black text-[32px]">
            <div className="card w-[1024px] bg-[#F1E1D0] py-6 px-4 flex flex-col items-center justify-center">
                <p className="mb-6" style={{fontFamily:'IBM Plex Serif', fontWeight:'400',fontStyle:'italic'}}>На нашем сайте вы найдете широкий выбор рецептов от простых и быстрых блюд для повседневной жизни до изысканных деликатесов для особых случаев. Мы также предоставляем рекомендации по выбору кулинарных инструментов, объясняем сложные техники и делимся секретами успешного приготовления разнообразных блюд.</p>
                <p className="mb-6" style={{fontFamily:'IBM Plex Serif', fontWeight:'400',fontStyle:'italic'}}>Наша цель - вдохновить вас на кулинарные эксперименты и сделать процесс приготовления еды увлекательным и удовлетворительным. Мы надеемся, что наши рецепты и советы помогут вам создать вкусные и незабываемые блюда, которыми можно наслаждаться в кругу семьи и друзей.</p>
                <div className="flex mb-2 gap-2">
                    <FaPhoneAlt size={50} fill={"black"}></FaPhoneAlt>
                    <p>0-000-000-00-00</p>
                </div>
                <div className="flex gap-2">
                    <SiMaildotru size={50} fill={"black"}></SiMaildotru>
                    <p>0-000-000-00-00</p>
                </div>
            </div>
        </div>
    )
}