import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<string>("3");
    const [attemptsRequested, setAttemptsRequested] = useState<string>("0");

    function useAttempt(): void {
        setAttemptsLeft(String(parseInt(attemptsLeft) - 1));
    }
    function gainAttempt(): void {
        const attmpL: number = parseInt(attemptsLeft);
        const attmpR: number = parseInt(attemptsRequested) || 0;
        setAttemptsLeft(String(attmpL + attmpR));
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group>
                <Form.Label># Attempts Requested</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setAttemptsRequested(event.target.value);
                    }}
                />
            </Form.Group>
            <span> attempts left: {attemptsLeft} </span>
            <Button onClick={useAttempt} disabled={parseInt(attemptsLeft) <= 0}>
                Use
            </Button>
            <Button onClick={gainAttempt}>Gain</Button>
        </div>
    );
}
