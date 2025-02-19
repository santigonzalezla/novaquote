import styles from "./css/singlechoiceform.module.css";
import {Add, Close, UploadImage} from "@/app/components/svg";
import React, {useState} from "react";
import {Answer} from "@/context/FormContext";

interface ChoiceFormProps {
    updateAnswer: (step: string, answer: Answer) => void;
    questionKey: string;
}

const ChoiceForm = ({ updateAnswer, questionKey }: ChoiceFormProps) =>
{
    const [options, setOptions] = useState([{ text: "", value: "" }]);
    const [choiceAnswer, setChoiceAnswer] = useState({ question: '', description: '', price: 0, options: options });

    const handleInputText = (input: string) =>
    {
        setChoiceAnswer((prev) => ({ ...prev, question: input }));
        updateAnswer(questionKey, { type: 'text', value: choiceAnswer });
    };

    const handleInputDescription = (description: string) =>
    {
        setChoiceAnswer((prev) => ({ ...prev, description: description }));
        updateAnswer(questionKey, { type: 'text', value: choiceAnswer });
    };

    const handleInputPrice = (price: number) =>
    {
        setChoiceAnswer((prev) => ({ ...prev, price: price }));
        updateAnswer(questionKey, { type: 'text', value: choiceAnswer });
        console.log(choiceAnswer);
    };

    const handleOptionChange = (index: number, field: string, value: string) =>
    {
        const updatedOptions = [...options];
        updatedOptions[index] = { ...updatedOptions[index], [field]: value };
        setOptions(updatedOptions);
        setChoiceAnswer((prev) => ({ ...prev, options: updatedOptions }));
        console.log(updatedOptions);
    };

    const addOption = () =>
    {
        if (options.length < 4)
        {
            setOptions([...options, { text: "", value: "" }]);
        }
    };

    const removeOption = (index: number) =>
    {
        const updatedOptions = options.filter((_, i) => i !== index);
        setOptions(updatedOptions);
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
                            value={choiceAnswer.question}
                            onChange={(e) => handleInputText(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formcontainerinput}>
                        <label htmlFor="price" className={styles.label}>Precio: (Opcional)</label>
                        <input
                            type="number"
                            name="price"
                            value={choiceAnswer.price || ''}
                            onChange={(e) => handleInputPrice(Number(e.target.value))}
                            required
                        />
                    </div>
                </div>
                <div className={styles.formcontainerinput}>
                    <label htmlFor="description" className={styles.label}>Descripción de la pregunta: (Opcional)</label>
                    <textarea
                        name="description"
                        value={choiceAnswer.description}
                        onChange={(e) => handleInputDescription(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className={styles.formAnswer}>
                {options.map((option, index) => (
                    <div className={styles.optionWrapper} key={index}>
                        <div className={styles.optionContainer}>
                            <div className={styles.answerOption}>
                                <button>
                                    <UploadImage/>
                                </button>
                            </div>
                            <div className={styles.optionText}>
                                <input
                                    type="text"
                                    placeholder="Añade aquí tu opción..."
                                    value={option.text}
                                    onChange={(e) => handleOptionChange(index, "text", e.target.value)}
                                />
                            </div>
                            <div className={styles.optionValue}>
                                <input
                                    type="number"
                                    placeholder="¿Cuál es el valor?"
                                    value={option.value}
                                    onChange={(e) => handleOptionChange(index, "value", e.target.value)}
                                />
                            </div>
                        </div>
                        {options.length > 1 && (
                            <button onClick={() => removeOption(index)} className={styles.closeButton}>
                                <Close key={option}/>
                            </button>
                        )}
                    </div>
                ))}

                {options.length < 4 && (
                    <button onClick={addOption} className={`${styles.optionContainer} ${styles.addButtonCont}`}>
                        <div className={`${styles.answerOption} ${styles.addButton}`}>
                            <span className={styles.addcont}>
                                <Add/>
                            </span>
                        </div>
                        <div className={styles.optionText}>
                            <span className={styles.addOptionText}>Agregar opción</span>
                        </div>
                    </button>
                )}
            </div>
        </div>
    );
}

export default ChoiceForm;