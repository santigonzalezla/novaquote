'use client';

import React, {createContext, ReactNode, useContext, useState} from "react";

export type AnswerType = 'text' | 'document' | 'yesNo' | 'multipleChoice';

export interface Answer {
    type: AnswerType;
    value: Record<string, any>; // Permite un objeto JSON dinámico
}

interface FormContextType {
    answers: Record<string, any>,
    surveyConfig : { name: string; description: string, questionCount: number };
    setSurveyConfig: (config: { name: string; description: string; questionCount: number}) => void;
    updateAnswer: (step: string, answer: Answer) => void;
}

interface FormProviderProps {
    children: ReactNode;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

const FormProvider: React.FC<FormProviderProps> = ({ children }) =>
{
    const [answers, setAnswers] = useState<Record<string, Answer>>({});
    const [surveyConfig, setSurveyConfig] = useState({
        name: '',
        description: '',
        questionCount: 0,
    });

    const updateAnswer = (step: string, answer: Answer) =>
    {
        setAnswers((prev) => ({ ...prev, [step]: answer }));
    }

    return (
        <FormContext.Provider value={{ answers, surveyConfig, setSurveyConfig, updateAnswer }}>
            {children}
        </FormContext.Provider>
    );
}

const useFormContext = (): FormContextType =>
{
    const context = useContext(FormContext);

    if (!context) throw new Error('useFormContext must be used within a FormProvider');

    return context;
}

export { FormProvider, useFormContext };