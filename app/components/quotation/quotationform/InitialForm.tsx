'use client';

import React, {useState} from "react";
import {useFormContext} from "@/context/FormContext";
import styles from "./initialform.module.css";
import Link from "next/link";

interface InitialStepProps {
    onNext: () => void;
}

const InitialForm: React.FC<InitialStepProps> = ({ onNext }) =>
{
    const { setSurveyConfig } = useFormContext();
    const [ name, setName ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ questionCount, setQuestionCount ] = useState(0);

    const handleSubmit = () =>
    {
        setSurveyConfig({ name: name, description: description, questionCount: questionCount });
        onNext();
    }

    return (
        <div className={styles.newquotation}>
            <h2>Crear Cotización</h2>
            <div className={styles.newquotationform}>
                <div className={styles.formcontainer}>
                    <div className={styles.formcontainerinput}>
                        <label htmlFor="name" className={styles.label}>Escribe el titulo de tu cotización:</label>
                        <input
                            type="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formcontainerinput}>
                        <label htmlFor="description" className={styles.label}>Escribe la descripción de tu
                            cotización:</label>
                        <textarea
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formcontainerinput}>
                        <label htmlFor="questions" className={styles.label}>¿Cuántas preguntas tiene tu
                            cotizaición?:</label>
                        <input
                            type="number"
                            name="questions"
                            value={questionCount}
                            onChange={(e) => setQuestionCount(Number(e.target.value))}
                            required
                        />
                    </div>
                </div>
                <div className={styles.formbuttons}>
                    <Link href={'/dashboard/quotation'}>
                        <button className={styles.cancelbutton}>Volver</button>
                    </Link>
                    <button className={styles.createbutton} onClick={handleSubmit}>Crear Cotización</button>
                </div>
            </div>
        </div>
    );
}

export default InitialForm;