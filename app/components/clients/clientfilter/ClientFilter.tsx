'use client';

import styles from './clientfilter.module.css';
import {ArrowSingleDown, Filter, Reset} from "@/app/components/svg";
import FilterInput from "@/app/components/quotation/filter/FilterInput";

const ClientFilter = () =>
{
    return (
        <div className={styles.filter}>
            <div className={styles.filtericon}>
                <Filter/>
            </div>
            <div className={styles.filterby}>
                <span>Filtar por</span>
            </div>
            <div className={styles.filtercontent}>
                <FilterInput options={years} text={'Fecha'}/>
                <ArrowSingleDown/>
            </div>
            <div className={styles.filtercontent}>
                <FilterInput options={top100Films} text={'Tipo'}/>
                <ArrowSingleDown/>
            </div>
            <div className={styles.filtercontent}>
                <FilterInput options={status} text={'Estado'}/>
                <ArrowSingleDown/>
            </div>
            <div className={styles.filterreset}>
                <Reset/>
                Limpiar Filtro
            </div>
        </div>
    );
}

export default ClientFilter;

const top100Films = [
    {label: 'The Shawshank Redemption', year: 1994},
    {label: 'The Godfather', year: 1972},
    {label: 'The Godfather: Part II', year: 1974},
    {label: 'The Dark Knight', year: 2008},
    {label: '12 Angry Men', year: 1957},
    {label: "Schindler's List", year: 1993},
    {label: 'Pulp Fiction', year: 1994},
    {label: 'The Lord of the Rings: The Return of the King', year: 2003,},
    {label: 'The Good, the Bad and the Ugly', year: 1966},
    {label: 'Fight Club', year: 1999},
];

const years = [
    {label: '2024', year: 2024},
    {label: '2023', year: 2023},
    {label: '2022', year: 2022},
    {label: '2021', year: 2021},
    {label: '2020', year: 2020},
    {label: '2019', year: 2019},
    {label: '2018', year: 2018},
];

const status = [
    {label: 'Activo'},
    {label: 'Inactivo'},
    {label: 'Suspendido'},
];