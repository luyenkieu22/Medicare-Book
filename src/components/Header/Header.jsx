import logo from "../../assets/images/logo.png";
import userImg from "../../assets/images/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from 'react-icons/bi'
import { useEffect, useRef } from "react";

const navlinks = [
    { path: "/home", display: "Trang chủ" },
    { path: "/doctors", display: "Bác sỹ" },
    { path: "/services", display: "Dịch vụ" },
    { path: "/contact", display: "Liên Lạc" },
];

const Header = () => {

    const headerRef = useRef(null)
    const menuRef = useRef(null)

    const handleStickyHeader = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header')
            } else {
                headerRef.current.classList.remove('sticky__header')
            }
        })
    }

    useEffect(() => {
        handleStickyHeader()

        return () => window.removeEventListener('scroll', handleStickyHeader)
    })

    const toggleMenu = () => menuRef.current.classList.toggle('.show__menu')

    return (
        <header ref={headerRef}>
            <div className="container flex items-center">
                <div className="container">
                    <div className="flex items-center justify-between">
                        {/* ====== logo ====== */}
                        <div>
                            <img src={logo} alt="" />
                        </div>

                        {/* ====== menu ====== */}
                        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                            <ul className="menu flex items-center gap-[2.7rem]">
                                {navlinks.map((item, index) => (
                                    <li key={index}>
                                        <NavLink
                                            to={item.path}
                                            className={(navClass) =>
                                                navClass.isActive
                                                    ? "text-primaryColor text-[16px] leading-7 font-[600]"
                                                    : "text-textColor text-[16px] leading-7 font-[500]"
                                            }
                                        >
                                            {item.display}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* ====== nav right ===== */}
                        <div className="flex items-center gap-4">
                            <div className="hidden" onClick={toggleMenu}>
                                <Link to={"/"}>
                                    <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                                        <img src={userImg} className="w-full rounded-full" alt="" />
                                    </figure>
                                </Link>
                            </div>
                            <Link to={"/login"}>
                                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                                    Đăng nhập
                                </button>
                            </Link>
                            <span className="md:hidden">
                                <BiMenu className="w-6 h-6 cursor-pointer" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
