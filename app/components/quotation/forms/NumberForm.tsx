import styles from './css/typeform.module.css';
import React, {useState} from "react";
import {Answer} from "@/context/FormContext";

interface NumberFormProps {
    updateAnswer: (step: string, answer: Answer) => void;
    questionKey: string;
}

const NumberForm = ({updateAnswer, questionKey}: NumberFormProps) =>
{
    const [numberAnswer, setNumberAnswer] = useState({ question: '', description: '' });

    const handleInputText = (input: string) =>
    {
        setNumberAnswer((prev) => ({ ...prev, question: input }));
        updateAnswer(questionKey, { type: 'text', value: numberAnswer });
    };

    const handleInputDescription = (description: string) =>
    {
        setNumberAnswer((prev) => ({ ...prev, description: description }));
        updateAnswer(questionKey, { type: 'text', value: numberAnswer });
    };

    return (
        <div className={styles.formcontainer}>
            <div className={styles.formtop}>
                <div className={styles.formlinetop}>
                    <div className={styles.formcontainerinput}>
                        <label htmlFor="name" className={styles.label}>Pregunta:</label>
                        <input
                            type="name"
                            name="name"
                            value={numberAnswer.question}
                            onChange={(e) => handleInputText(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className={styles.formcontainerinput}>
                    <label htmlFor="description" className={styles.label}>Descripción de la pregunta: (Opcional)</label>
                    <textarea
                        name="description"
                        value={numberAnswer.description}
                        onChange={(e) => handleInputDescription(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className={styles.formAnswer}>
                <input
                    type="number"
                    name="description"
                    placeholder={"¡Aqui va la respuesta en número tu cliente!"}
                    disabled={true}
                />
            </div>
        </div>
    );
}

export default NumberForm;