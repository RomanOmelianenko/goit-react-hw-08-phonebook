import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';

function Spinner() {
    return (
        <Loader
            className={styles.Loader}
            type="Circles"
            color="#87cefa"
            height={40}
            width={40}
        />
    )
};

export default Spinner;