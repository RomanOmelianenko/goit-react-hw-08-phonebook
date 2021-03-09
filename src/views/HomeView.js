import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import fade from '../helpers/fade';

// const styles = {
//     homepage: {
//         fontSize: 30,
//         fontFamily: "Roboto, sans-serif",
//     }
// };

const HomeView = () => (
    <div
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
       
        <AnimatePresence>
            <motion.h2
                style={{
                    fontFamily: "Roboto, sans-serif", fontSize: 26,
                    fontWeight: 600, marginTop: 80 , marginBottom: 10
                }}
                initial="initial"
                animate="animate"
                exit="exit"
                transition="transition"
                variants={fade}
            >
                Hello, guest!
            </motion.h2>
        </AnimatePresence>

        <AnimatePresence>
            <motion.p
                style={{
                    fontFamily: "Roboto, sans-serif", fontSize: 26,
                    fontWeight: 600, marginBottom: 200, marginTop: 0
                }}
                initial="initial"
                animate="animate"
                exit="exit"
                transition="transition"
                variants={fade}
            >
                Welcome to the Phonebook app
            </motion.p>
        </AnimatePresence>
        
        <AnimatePresence>
            <motion.span
                style={{ fontFamily: "Roboto, sans-serif", fontSize: 20 }}
                initial="initial"
                animate="animate"
                exit="exit"
                transition="transition"
                variants={fade}
            >
                Please,
                <NavLink to="/register" style={{textDecoration: "none"}}>
                    <span style={{ color: "red", cursor: "pointer", fontWeight: 600 }}> Sign up </span>
                </NavLink>
                    or
                <NavLink to="/login" style={{textDecoration: "none"}}>
                    <span style={{ color: "red", cursor: "pointer", fontWeight: 600 }}> Log in </span> to have access to the
                Phonebook!
                </NavLink>
            </motion.span>
        </AnimatePresence>
        {/* <span style={{fontFamily: "Roboto, sans-serif", fontSize: 20}}>
            Please,
            <NavLink to="/register" style={{textDecoration: "none"}}>
                <span style={{ color: "red", cursor: "pointer", fontWeight: 600 }}> Sign up </span>
            </NavLink>
                or
            <NavLink to="/login" style={{textDecoration: "none"}}>
                <span style={{ color: "red", cursor: "pointer", fontWeight: 600 }}> Log in </span> to have access to the
                Phonebook!
            </NavLink>
        </span> */}
    </div>
);

export default HomeView;