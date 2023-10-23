import { Outlet } from "react-router-dom";
import TopBar from "../../components/top-bar/TopBar.jsx";

import styles from "./Layout.module.scss";

const Layout = (props) => {
    return (
        <>
            <header>
                <TopBar isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn} />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;