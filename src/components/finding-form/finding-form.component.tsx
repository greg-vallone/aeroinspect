"use client"
import { useState } from "react";
import type { FindingSeverity } from "../../types/findings";

interface FindingFormProps {
    onAddFinding: (
        title: string,
        description: string,
        severity: FindingSeverity
    ) => void;
}

const FindingForm = ({ onAddFinding }:FindingFormProps) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [severity, setSeverity] = useState<FindingSeverity>("Low");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!title.trim() || !description.trim()) {
            return;
        }

        onAddFinding(title, description, severity);

        setTitle("");
        setDescription("");
        setSeverity("Low");
    }

    return (
        <form className="finding-form" onSubmit={handleSubmit}>
            <div className="form-field">
                <label htmlFor="finding-title">
                    Finding Title
                </label>

                <input id="finding-title" type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
            </div>

            <div className="form-field">
                <label htmlFor="finding-description">
                Description
                </label>

                <textarea
                id="finding-description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                />
            </div>

            <div className="form-field">
                <label htmlFor="finding-severity">
                Severity
                </label>

                <select
                    id="finding-severity"
                    value={severity}
                    onChange={(event) =>
                        setSeverity(
                        event.target.value as FindingSeverity
                        )
                    }
                >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Critical">Critical</option>
                </select>
            </div>

            <button type="submit">
                    Add Finding
            </button>
        </form>
    );

}

export default FindingForm;