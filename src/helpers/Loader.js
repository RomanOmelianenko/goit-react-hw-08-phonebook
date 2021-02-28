import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';

function Spinner() {
    return (
        <Loader
            className={styles.Loader}
            type="Circles"
            color="#3f51b5"
            height={60}
            width={60}
        />
    )
};

export default Spinner;