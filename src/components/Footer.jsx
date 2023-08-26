import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import classes from "./Footer.module.scss";
import Button from "@material-ui/core/Button";

import { Link, useNavigate } from "react-router-dom";
import Logo from '../assets/logo.png';
const Footer = () => {
    const navigate = useNavigate();
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

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    // const logoutClickHandler = () => {
    //     menuToggleHandler();
    //     navigate("/logout");
    //     // navigate.push("/logout");
    // };

    return (
        <>
            <footer className={classes.footer}>

                <Grid container>
                    <Grid item xs={6} sm={6} md={6} lg={6} style={{
                        color: '#4b4b4b'
                    }}>@ICICI Bank Design System 2023</Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2}>
                        <Button variant="text">

                            <p className={classes.footer__title} onClick={() => {
                                window.open("https://www.icicibank.com/personal-banking/insta-banking/internet-banking", "_blank");
                            }}>ICICI Bank</p>
                        </Button>

                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2}>

                        <Button variant="text">

                            <p className={classes.footer__title} onClick={() => {
                                window.open(window.location.origin, "_self");
                            }}>Accord</p></Button>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2}>

                        <Button variant="text">

                            <p className={classes.footer__title} onClick={() => {
                                window.open("https://www.icicibank.com/personal-banking/insta-banking/internet-banking", "_blank");
                            }}>Join Us</p>



                        </Button>
                    </Grid>
                </Grid>
            </footer>

        </>



    );
};

export default Footer;