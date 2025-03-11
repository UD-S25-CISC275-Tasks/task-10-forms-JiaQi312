import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);

    //function to update the choice state
    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            {/* Dropdown, created by mapping through options array */}
            <Form.Group>
                <Form.Label>What is your Answer?</Form.Label>
                <Form.Select value={choice} onChange={updateChoice}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {/* Conditional to show check or x */}
            {expectedAnswer === choice && <span>✔️</span>}
            {expectedAnswer !== choice && <span>❌</span>}
        </div>
    );
}
