import { Link } from "react-router-dom";

const TopBar = (props) => {

    const logOut = () => {
        props.setIsLoggedIn(false);
        localStorage.removeItem("name");
    }

    return (
        <>
            <Link to="/">
                На главную
            </Link>

            {
                props.isLoggedIn
                    ? <><Link to="/browse">Инфо</Link><Link onClick={logOut} to="/">Выйти</Link></>
                    : <Link to="/login">Войти</Link>
            }
        </>
    );
};

export default TopBar;