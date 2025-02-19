'use client';

import styles from './quotationstate.module.css';
import { useState } from 'react';

const QuotationState = () =>
{
    const [isActive, setIsActive] = useState(true);

    const toggleActive = (newState: boolean) =>
    {
        if (isActive !== newState)
        {
            setIsActive(newState);
        }
    };

    return (
        <div className={styles.quotationstate}>
            <span onClick={() => toggleActive(true)} className={`${isActive ? styles.active : ''}`}>
                Activos
            </span>
            <span onClick={() => toggleActive(false)} className={`${!isActive ? styles.active : ''}`}>
                Inactivos
            </span>
        </div>
    );
};

export default QuotationState;
