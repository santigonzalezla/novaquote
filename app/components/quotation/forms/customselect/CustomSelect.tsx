import React, {ReactNode, useState} from "react";
import styles from './customselect.module.css';
import {ArrowDown, ArrowSingleDown} from "@/app/components/svg";

interface Option {
    value: string;
    label: string;
    icon?: ReactNode;
}

interface CustomSelectProps {
    options: Option[];
    selectedValue: string;
    onChange: (value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, selectedValue, onChange }) =>
{
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (value: string) =>
    {
        onChange(value);
        setIsOpen(false);
    };

    const selectedOption = options.find(option => option.value === selectedValue);

    return (
        <div className={styles.selectContainer} onClick={() => setIsOpen(!isOpen)}>
            <div className={styles.selectedOption}>
                {selectedOption?.icon}
                {selectedOption?.label || "Seleccione una opción"}
                <ArrowSingleDown />
            </div>
            {isOpen && (
                <ul className={styles.options}>
                    <div className={styles.optionscontainer}>
                        <span>Question Type</span>
                        {options.map(option => (
                            <li
                                key={option.value}
                                className={styles.option}
                                onClick={() => handleSelect(option.value)}
                            >
                                {option.icon}
                                {option.label}
                            </li>
                        ))}
                    </div>
                </ul>
            )}
        </div>
    );
};

export default CustomSelect;
