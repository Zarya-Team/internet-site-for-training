

export default function Footer(){
    return(
        <footer className="footer p-10 bg-[#F1E1D0] text-[#563B37]">
            <nav>
                <header className="footer-title text-[#897665]">Рецепты</header> 
                    <a className="link link-hover">Рецепты салатов</a>
                    <a className="link link-hover">Вторые блюда</a>
                    <a className="link link-hover">Выпечка</a>
                    <a className="link link-hover">Десерты и сладости</a>
                    <a className="link link-hover">Заготовки, соленья, варенья</a>
                    <a className="link link-hover">Разное</a>
            </nav> 
            <nav>
                <header className="footer-title text-[#897665]"></header> 
                <a className="link link-hover">Первые блюда</a>
                <a className="link link-hover">Национальные блюда</a>
                <a className="link link-hover">Торты и пирожные</a>
                <a className="link link-hover">Напитки</a>
                <a className="link link-hover">Соусы</a>
            </nav>
            <nav>
                <header className="footer-title">Разделы сайта</header> 
                    <a className="link link-hover">Подборки рецептов</a>
                    <a className="link link-hover">Блоги кулинаров</a>
                    <a className="link link-hover">Фотоотчёты</a>
                    <a className="link link-hover">Справочник</a>
                    <a className="link link-hover">Топ кулинаров</a>
                </nav> 
            <nav>
                <header className="footer-title">Личный кабинет</header> 
                    <a className="link link-hover">Вход</a>
                    <a className="link link-hover">Регистрация</a>
                    <a className="link link-hover">Забыли пароль?</a>
                </nav>
      </footer>
    )
}