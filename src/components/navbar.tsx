import * as React from "react";
import { Link, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState, store } from "../store";
import { UserState } from "../store/user/dto";
import { resetUser } from "../store/user";

export interface NavBarProps {}

interface LinkProps {
    name: string;
    label: string;
    path: string;
    imgUrl: string;
}

const links: LinkProps[] = [
    { name: "locations", label: "Locations", path: "/locations", imgUrl: "/share/location.svg" },
    { name: "solutions", label: "Solutions", path: "/solutions", imgUrl: "/share/solutions.svg" },
    { name: "gallery", label: "Gallery", path: "/gallery", imgUrl: "/share/gallery.svg" },
    { name: "aboutUs", label: "About us", path: "/aboutus", imgUrl: "/share/aboutus.svg" },
];

const NavBar: React.FunctionComponent<NavBarProps> = () => {
    const [burger, setBurger] = React.useState<Boolean>(false);

    const userState = useSelector<RootState, UserState>((item) => item.user);

    const newLocation = useLocation();

    const location = React.useMemo<string>(() => {
        return newLocation.pathname;
    }, [newLocation.pathname]);

    const handleClick = React.useCallback(() => {
        setBurger(!burger);
    }, [setBurger, burger]);

    const handleLogout = React.useCallback(() => {
        store.dispatch(resetUser());
    }, []);

    return (
        <React.Fragment>
            <div className="relative z-20 flex items-center justify-between w-full h-20 px-4 mb-0 shadow sm:mb-16 bg-amber-400 sm:px-8">
                <Link to="/">
                    <div className="w-32 h-auto">
                        <img src="/share/logo.svg" alt="hello" />
                    </div>
                </Link>
                <div className="hidden h-full sm:block">
                    <ul className="flex h-full">
                        {links.map((item, index) => (
                            <li className={`h-full ${index === links.length - 1 ? "" : "mr-6"}`} key={item.name}>
                                <Link to={item.path}>
                                    <div className="flex flex-col justify-end h-full ">
                                        <p className="z-10 text-base font-semibold text-blue-800 ">{item.label}</p>
                                        <span className={`block w-full h-1 mt-6 ${location === item.path ? "bg-purple-900" : "bg-amber-400"}`}></span>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {!userState.isLogin ? (
                    <div className="hidden sm:flex">
                        <Link to="/user/register">
                            <div className="px-4 py-2 mr-2 text-base font-bold text-white cursor-pointer">Register</div>
                        </Link>
                        <Link to="/user/login">
                            <div className="px-4 py-2 text-base font-bold text-white border border-white rounded cursor-pointer">Login</div>
                        </Link>
                    </div>
                ) : (
                    <div className="hidden sm:flex">
                        <div className="px-4 py-2 mr-2 text-base font-semibold text-white cursor-pointer">{`Hello ${userState.fullName}`}</div>

                        <div
                            className="px-4 py-2 text-base font-semibold text-white border border-white rounded cursor-pointer"
                            onClick={() => handleLogout()}
                        >
                            Logout
                        </div>
                    </div>
                )}
                <div className="sm:hidden">
                    <div
                        className="cursor-pointer"
                        onClick={() => {
                            handleClick();
                        }}
                    >
                        {!burger ? <img src="/share/burger.svg" alt="" /> : <img src="/share/close.svg" alt="" />}
                    </div>
                </div>
            </div>
            {burger ? (
                <div className="absolute top-0 right-0 z-10 flex flex-col justify-between min-h-screen bg-gradient-to-t from-amber-400 via-amber-300 to-amber-300 w-80">
                    <ul className="p-8 pt-28">
                        {links.map((item) => (
                            <li
                                className="mb-4"
                                key={item.path}
                                onClick={() => {
                                    setBurger(!burger);
                                }}
                            >
                                <Link to={item.path}>
                                    <div className="flex justify-start w-full p-2">
                                        <img src={item.imgUrl} alt="" />
                                        <p className="ml-4 text-xl font-bold text-blue-800">{item.label}</p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {!userState.isLogin ? (
                        <ul className="p-8">
                            <li
                                className="mb-4"
                                onClick={() => {
                                    setBurger(!burger);
                                }}
                            >
                                <Link to="/user/register">
                                    <div className="flex justify-start w-full p-2">
                                        <img src="/share/register.svg" alt="" />
                                        <p className="ml-4 text-xl font-bold text-white">Register</p>
                                    </div>
                                </Link>
                            </li>

                            <li
                                className="mb-4"
                                onClick={() => {
                                    setBurger(!burger);
                                }}
                            >
                                <Link to="/user/login">
                                    <div className="flex justify-start w-full p-2">
                                        <img src="/share/login.svg" alt="" />
                                        <p className="ml-4 text-xl font-bold text-white">Login</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    ) : (
                        <ul className="p-8">
                            <li
                                className="mb-4"
                                onClick={() => {
                                    setBurger(!burger);
                                }}
                            >
                                <div className="flex justify-start w-full p-2">
                                    <p className="ml-4 text-xl font-bold text-white">{`Hello ${userState.fullName}`}</p>
                                </div>
                            </li>

                            <li
                                className="mb-4"
                                onClick={() => {
                                    setBurger(!burger);
                                    handleLogout();
                                }}
                            >
                                <div className="flex justify-start w-full p-2">
                                    <p className="ml-4 text-xl font-semibold text-white">Logout</p>
                                </div>
                            </li>
                        </ul>
                    )}
                </div>
            ) : null}
        </React.Fragment>
    );
};

export default NavBar;
