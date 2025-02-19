import styles from "./css/uploadform.module.css";
import { DragEvent, useState } from "react";
import {Close, UploadFile} from "@/app/components/svg";
import {Answer} from "@/context/FormContext";
import {Delete} from "lucide-react";

interface UploadFormProps {
    updateAnswer: (step: string, answer: Answer) => void;
    questionKey: string;
}


const UploadForm = ({updateAnswer, questionKey}: UploadFormProps) =>
{
    const [isDragging, setIsDragging] = useState(false);
    const [uploadAnswer, setUploadAnswer] = useState<{ question: string; description: string; price: number; file: File | null }>({
        question: '',
        description: '',
        price: 0,
        file: null,
    });

    const handleInputText = (input: string) =>
    {
        setUploadAnswer((prev) => ({ ...prev, question: input }));
        updateAnswer(questionKey, { type: 'text', value: uploadAnswer });
    };

    const handleInputDescription = (description: string) =>
    {
        setUploadAnswer((prev) => ({ ...prev, description: description }));
        updateAnswer(questionKey, { type: 'text', value: uploadAnswer });
    };

    const handleFileChange = (file: File | null) =>
    {
        setUploadAnswer((prev) => ({ ...prev, file: file }));
        updateAnswer(questionKey, { type: "document", value: uploadAnswer });
    };

    const handleRemoveFile = () =>
    {
        setUploadAnswer((prev) => ({ ...prev, file: null }));
        updateAnswer(questionKey, { type: "document", value: uploadAnswer });
    };

    const handleDragOver = (e: DragEvent) =>
    {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () =>
    {
        setIsDragging(false);
    };

    const handleDrop = (e: DragEvent) =>
    {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) handleFileChange(file);
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
                            value={uploadAnswer.question}
                            onChange={(e) => handleInputText(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className={styles.formcontainerinput}>
                    <label htmlFor="description" className={styles.label}>Descripción de la pregunta: (Opcional)</label>
                    <textarea
                        name="description"
                        value={uploadAnswer.description}
                        onChange={(e) => handleInputDescription(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className={styles.formAnswer}>
                <div
                    className={`${styles.uploadcontainer} ${isDragging ? styles.dragging : ""}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <UploadFile/>
                    <label htmlFor="fileUpload" className={styles.customFileUpload}>
                        <p>
                            <span>{uploadAnswer.file ? uploadAnswer.file.name : "Sube el archivo"}</span>
                            or drag the files here
                            {uploadAnswer.file && (
                                <button onClick={handleRemoveFile} className={styles.removeFileButton}>
                                    <Close />
                                </button>
                            )}
                        </p>
                    </label>
                    <input
                        type="file"
                        onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
                        id="fileUpload"
                        disabled
                        style={{ display: 'none' }}
                        placeholder={"¡Aqui va la respuesta en número tu cliente!"}
                    />
                </div>
            </div>
        </div>
    );
}

export default UploadForm;