import React from 'react';
import { NavLink } from 'react-router-dom';
import imagePath from '../img/404.jpg';

const styles = {
    container: { textAlign: 'center' },
    // status: { fontSize: 50, marginBottom: 16, color: "red" },
    image: { marginLeft: 'auto', marginRight: 'auto', marginBottom: 20, marginTop: 20 },
    text: { fontSize: 16, fontFamily: "Roboto, sans-serif" }
};

const NotFound = () => (
    <div style={styles.container}>
        {/* <h1 style={styles.status}>404</h1> */}
        <img src={imagePath} alt="cat" width="600" style={styles.image} />
        <p style={styles.text}>Упс, кажется Вы потерялись. Вот <NavLink to="/">ссылка на главную страницу</NavLink>.</p>
    </div>
);

export default NotFound;