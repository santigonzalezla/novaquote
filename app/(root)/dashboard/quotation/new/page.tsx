'use client';

import InitialForm from "@/app/components/quotation/quotationform/InitialForm";
import QuestionStep from "@/app/components/quotation/quotationform/QuestionStep";
import React, {useState} from "react";
import {useFormContext} from "@/context/FormContext";

const NewQuotation: React.FC = () =>
{
    const { surveyConfig } = useFormContext();
    const { answers } = useFormContext();
    const [ currentStep, setCurrentStep ] = useState(0);

    const goToNextStep = () => setCurrentStep((prev) => prev + 1);
    const goToPrevStep = () => setCurrentStep((prev) => prev - 1);

    if (currentStep === 0) return <InitialForm onNext={goToNextStep} />;

    if (currentStep <= surveyConfig.questionCount)
    {
        return <QuestionStep stepIndex={currentStep - 1} onNext={goToNextStep} onPrev={goToPrevStep} />;
    }

    console.log('Formulario completado');
    console.log(answers);
    console.log(surveyConfig);

    return <div>Formulario completado</div>;
}

export default NewQuotation;