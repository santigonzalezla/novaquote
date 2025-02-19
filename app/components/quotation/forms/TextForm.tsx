import styles from './css/typeform.module.css';
import React, {useState} from "react";
import {Answer} from "@/context/FormContext";

interface TextFormProps {
    updateAnswer: (step: string, answer: Answer) => void;
    questionKey: string;
}

const TextForm = ({updateAnswer, questionKey}: TextFormProps) =>
{
    const [textAnswer, setTextAnswer] = useState({ question: '', description: '' });

    const handleInputText = (input: string) =>
    {
        setTextAnswer((prev) => ({ ...prev, question: input }));
        updateAnswer(questionKey, { type: 'text', value: textAnswer });
    };

    const handleInputDescription = (description: string) =>
    {
        setTextAnswer((prev) => ({ ...prev, description: description }));
        updateAnswer(questionKey, { type: 'text', value: textAnswer });
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
                            value={textAnswer.question}
                            onChange={(e) => handleInputText(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className={styles.formcontainerinput}>
                    <label htmlFor="description" className={styles.label}>Descripción de la pregunta: (Opcional)</label>
                    <textarea
                        name="description"
                        value={textAnswer.description}
                        onChange={(e) => handleInputDescription(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className={styles.formAnswer}>
                <input
                    type="text"
                    name="description"
                    placeholder={"¡Aqui va la respuesta de tu cliente!"}
                    disabled={true}
                />
            </div>
        </div>
    );
}

export default TextForm;