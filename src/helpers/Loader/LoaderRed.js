import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';

function Spinner() {
    return (
        <Loader
            className={styles.LoaderRed}
            type="Circles"
            color="red"
            height={28}
            width={28}
        />
    )
};

export default Spinner;