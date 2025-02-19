import styles from './css/yesnoform.module.css';
import React, {useState} from "react";
import {UploadImage} from "@/app/components/svg";
import {Answer} from "@/context/FormContext";

interface YesNoFormProps {
    updateAnswer: (step: string, answer: Answer) => void;
    questionKey: string;
}

const YesNoForm = ({updateAnswer, questionKey}: YesNoFormProps) =>
{
    const [yesnoAnswer, setYesNoAnswer] = useState({ question: '', description: '', price: 0 });

    const handleInputText = (input: string) =>
    {
        setYesNoAnswer((prev) => ({ ...prev, question: input }));
        updateAnswer(questionKey, { type: 'text', value: yesnoAnswer });
    };

    const handleInputDescription = (description: string) =>
    {
        setYesNoAnswer((prev) => ({ ...prev, description: description }));
        updateAnswer(questionKey, { type: 'text', value: yesnoAnswer });
    };

    const handleInputPrice = (price: number) =>
    {
        setYesNoAnswer((prev) => ({ ...prev, price: price }));
        updateAnswer(questionKey, { type: 'text', value: yesnoAnswer });
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
                            value={yesnoAnswer.question}
                            onChange={(e) => handleInputText(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formcontainerinput}>
                        <label htmlFor="price" className={styles.label}>Precio: (Opcional)</label>
                        <input
                            type="number"
                            name="price"
                            value={yesnoAnswer.price}
                            onChange={(e) => handleInputPrice(Number(e.target.value))}
                            required
                        />
                    </div>
                </div>
                <div className={styles.formcontainerinput}>
                    <label htmlFor="description" className={styles.label}>Descripción de la pregunta: (Opcional)</label>
                    <textarea
                        name="description"
                        value={yesnoAnswer.description}
                        onChange={(e) => handleInputDescription(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className={styles.formAnswer}>
                <div className={styles.answerOption}>
                    <button>
                        <UploadImage/>
                    </button>
                    <span>
                        Yes
                    </span>
                </div>
                <div className={styles.answerOption}>
                    <button>
                        <UploadImage/>
                    </button>
                    <span>
                        No
                    </span>
                </div>
            </div>
        </div>
    );
}

export default YesNoForm;