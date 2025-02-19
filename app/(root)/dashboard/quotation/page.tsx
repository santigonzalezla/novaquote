import styles from './page.module.css';
import {CreateQuote} from "@/app/components/svg";
import QuotationState from "@/app/components/quotation/quotationstate/QuotationState";
import Link from "next/link";

const quotations = [
    {
        name: 'Quotation 1',
        state: 'Completado',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
    },
    {
        name: 'Quotation 2',
        state: 'Completado',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
    },
    {
        name: 'Quotation 3',
        state: 'Completado',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
    },
    {
        name: 'Quotation 4',
        state: 'Completado',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
    },
    {
        name: 'Quotation 5',
        state: 'Completado',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
    },
]

const Quotation = () =>
{
    return (
        <div className={styles.quotation}>
            <div className={styles.quotationtop}>
                <QuotationState />
                <Link href={'/dashboard/quotation/new'}>
                    <button className={styles.newquote}>
                        <span><CreateQuote/></span>
                        <span>Nueva Cotización</span>
                    </button>
                </Link>
            </div>
            <div className={styles.quotationcontainer}>
                {quotations.map((quotation, index) => (
                    <div className={styles.item} key={index}>
                        <div className={styles.itemtop}>
                            <h2>{quotation.name}</h2>
                            <span>{quotation.state}</span>
                        </div>
                        <div className={styles.itembottom}>
                            <p>{quotation.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Quotation;