import { FaPhoneAlt } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";

export default function About(){
    return(
        <div className="flex items-center my-6 mx-5 max-sm:mx-7 justify-center text-center text-black text-[32px]">
            <div className="card w-[1024px] bg-[#F1E1D0] py-12 px-12 flex flex-col items-center justify-center">
                <p className="mb-6 sm:max-md:text-[24px] max-sm:text-[18px]" style={{fontFamily:'IBM Plex Serif', fontWeight:'400',fontStyle:'italic'}}>На нашем сайте вы найдете широкий выбор рецептов от простых и быстрых блюд для повседневной жизни до изысканных деликатесов для особых случаев. Мы также предоставляем рекомендации по выбору кулинарных инструментов, объясняем сложные техники и делимся секретами успешного приготовления разнообразных блюд.</p>
                <p className="mb-6 sm:max-md:text-[24px] max-sm:text-[18px]" style={{fontFamily:'IBM Plex Serif', fontWeight:'400',fontStyle:'italic'}}>Наша цель - вдохновить вас на кулинарные эксперименты и сделать процесс приготовления еды увлекательным и удовлетворительным. Мы надеемся, что наши рецепты и советы помогут вам создать вкусные и незабываемые блюда, которыми можно наслаждаться в кругу семьи и друзей.</p>
                <div className="flex sm:max-md:items-center mb-2 gap-2 max-sm:gap-[0.25rem] max-sm:items-center">
                    <FaPhoneAlt  fill={"black"} className="lg:h-[50px] lg:w-[50px] sm:max-md:h-[25px] sm:max-md:w-[25px] max-sm:h-[20px] max-sm:w-[20px]"></FaPhoneAlt>
                    <p className="sm:max-md:text-[24px] max-sm:text-[18px]">7-123-456-78-90</p>
                </div>
                <div className="flex sm:max-md:items-center gap-2 max-sm:gap-[0.25rem] max-sm:items-center">
                    <SiMaildotru fill={"black"} className="lg:h-[50px] lg:w-[50px] sm:max-md:h-[25px] sm:max-md:w-[25px] max-sm:h-[20px] max-sm:w-[20px]"></SiMaildotru>
                    <p className="sm:max-md:text-[24px] max-sm:text-[18px]">example@example.com</p>
                </div>
            </div>
        </div>
    )
}