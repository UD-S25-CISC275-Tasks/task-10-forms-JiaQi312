import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    //state
    const [answer, setAnswer] = useState<string>("");

    //control
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="checkAnswer">
                <Form.Label>Check Answer</Form.Label>
                <Form.Control
                    type="text"
                    value={answer}
                    onChange={updateAnswer}
                />
            </Form.Group>
            {/* display one or the other */}
            {answer === expectedAnswer && <span>✔️</span>}
            {answer !== expectedAnswer && <span>❌</span>}
        </div>
    );
}
