'use client';

import styles from "./questionstep.module.css";
import React, {useState} from "react";
import {AnswerType, useFormContext} from "@/context/FormContext";
import {ArrowDown, ArrowUp, Copy, MultipleChoice, Number, OneOption, Question, Text, Trash, Upload, YesNo} from "@/app/components/svg";
import TextForm from "@/app/components/quotation/forms/TextForm";
import YesNoForm from "@/app/components/quotation/forms/YesNoForm";
import NumberForm from "@/app/components/quotation/forms/NumberForm";
import CustomSelect from "@/app/components/quotation/forms/customselect/CustomSelect";
import UploadForm from "@/app/components/quotation/forms/UploadForm";
import ChoiceForm from "@/app/components/quotation/forms/ChoiceForm";

type QuestionType = 'text' | 'number' | 'yes_no' | 'single_choice' | 'multiple_choice' | 'upload';

interface QuestionStepProps {
    stepIndex: number;
    onNext: () => void;
    onPrev: () => void;
}

const QuestionStep: React.FC<QuestionStepProps> = ({ stepIndex, onNext, onPrev }) =>
{
    const { answers, updateAnswer } = useFormContext();
    const [ questionType, setQuestionType] = useState<QuestionType>('text');

    const handleInputChange = (value: any) =>
    {
        const questionKey = `question${stepIndex}`;
        updateAnswer(questionKey, value);
    }

    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    {
        setQuestionType(e.target.value as QuestionType);
        const defaultValue = getDefaultAnswerValue(e.target.value as QuestionType);
        updateAnswer(`question${stepIndex}`, { type: '' as AnswerType, value: {} });
    };

    const questionTypes = [
        { value: "text", label: "Texto", icon: <Text /> },
        { value: "number", label: "Número", icon: <Number /> },
        { value: "yes_no", label: "Sí/No", icon: <YesNo /> },
        { value: "single_choice", label: "Selección Única", icon: <OneOption /> },
        { value: "multiple_choice", label: "Selección Múltiple", icon: <MultipleChoice /> },
        { value: "upload", label: "Subir archivo", icon: <Upload /> },
    ];

    const getDefaultAnswerValue = (type: QuestionType) =>
    {
        switch (type) {
            case 'text':
                return '';
            case 'number':
                return '';
            case 'yes_no':
                return 'yes';
            case 'single_choice':
                return '';
            case 'multiple_choice':
                return [];
            case 'upload':
                return null;
            default:
                return '';
        }
    };

    const clickPrev = () =>
    {
        if (stepIndex > 0)
        {
            onPrev();
        }
    }

    const renderInput = () =>
    {
        const questionKey = `question${stepIndex}`;
        const currentAnswer = answers[questionKey] ?? getDefaultAnswerValue(questionType);

        switch (questionType) {
            case 'text':
                return (
                    <>
                        <TextForm updateAnswer={updateAnswer} questionKey={questionKey}/>
                    </>
                );

            case 'number':
                return (
                    <>
                        <NumberForm updateAnswer={updateAnswer} questionKey={questionKey} />
                    </>
                );

            case 'yes_no':
                return (
                    <>
                        <YesNoForm updateAnswer={updateAnswer} questionKey={questionKey} />
                    </>
                );

            case 'single_choice':
                return (
                    <>
                        <ChoiceForm updateAnswer={updateAnswer} questionKey={questionKey} />
                    </>
                );

            case 'multiple_choice':
                return (
                    <>
                        <ChoiceForm updateAnswer={updateAnswer} questionKey={questionKey} />
                    </>
                );

            case 'upload':
                return (
                    <>
                        <UploadForm updateAnswer={updateAnswer} questionKey={questionKey} />
                        {/*
                    <input
                        type="file"
                        onChange={(e) => {
                            const file = e.target.files ? e.target.files[0] : null;
                            handleInputChange(file);
                        }}
                    />
                    */}
                    </>
                );

            default:
                return null;
        }
    };

    return (
        <div className={styles.questionstep}>
            <h2>Quotation Creation</h2>
            <div className={styles.questioncontainer}>
                <div className={styles.containertop}>
                    <div className={styles.containertopleft}>
                        <Question/>
                        <h3>Pregunta {stepIndex + 1}</h3>
                        <CustomSelect
                            options={questionTypes}
                            selectedValue={questionType}
                            onChange={(value) => setQuestionType(value as QuestionType)}
                        />
                    </div>
                    <div className={styles.containertopright}>
                        <div className={styles.toprightcontainer}>
                            <button
                                onClick={clickPrev}
                                className={`${stepIndex < 1 ? styles.prevstepactive:""}`}>
                                <ArrowUp />
                            </button>
                            <button onClick={onNext}>
                                <ArrowDown/>
                            </button>
                        </div>
                        <div className={styles.toprightcontainer}>
                            <Copy/>
                            <Trash/>
                        </div>
                    </div>
                </div>
                <div className={styles.containerbottom}>
                    {renderInput()}
                </div>
            </div>
        </div>
    )
}

export default QuestionStep;