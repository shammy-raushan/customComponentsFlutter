import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "./Header.module.scss";
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png';
const Header = ({ variant, ...props }) => {
    const [open, setOpen] = useState(false);

    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // useEffect(() => {
    //     if (size.width > 768 && open) {
    //         setOpen(false);
    //     }
    // }, [size.width, open]);
    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setOpen(false);
        }
    }, [size.width, setOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    return (
        <>
            <header className={classes.header}>
                <div className={classes.header__content}>
                    {/* <PersistentDrawerLeft /> */}
                    <Link to="/" className={classes.header__content__logo}>
                        <img src={Logo} alt="324" style={
                            {
                                height: 30,
                                width: 70,
                            }

                        } />

                    </Link>

                    <nav
                        className={`${classes.header__content__nav} ${menuOpen && size.width < 768 ? classes.isMenu : ""
                            }`}
                    >
                        <ul>
                            <li>
                                <Link to="/foundations" onClick={menuToggleHandler}>
                                    Foundations
                                </Link>
                            </li>
                            <li>
                                <Link to="/components" onClick={menuToggleHandler}>

                                    Components
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={menuToggleHandler}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/for-designers" onClick={menuToggleHandler}>
                                    For Designers
                                </Link>
                            </li>
                            <li>
                                <Link to="/for-developers" onClick={menuToggleHandler}>
                                    For Developers
                                </Link>
                            </li>
                        </ul>
                        {/* <button onClick={logoutClickHandler} className={classes.logout_btn} >LOGOUT</button> */}
                    </nav>
                    <div className={classes.header__content__toggle}>
                        {!menuOpen ? (
                            <BiMenuAltRight onClick={menuToggleHandler} />
                        ) : (
                            <AiOutlineClose onClick={menuToggleHandler} />
                        )}
                    </div>
                </div>
            </header>
            
        </>
    );
};

export default Header;