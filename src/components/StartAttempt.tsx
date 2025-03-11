import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setAttempts(attempts - 1);
        setInProgress(!inProgress);
    }

    function stopQuiz(): void {
        setInProgress(!inProgress);
    }
    function mulligan(): void {
        setAttempts(attempts + 1);
    }
    return (
        <div>
            Number of Attempts: {attempts}
            {
                <Button
                    onClick={startQuiz}
                    disabled={inProgress || attempts <= 0}
                >
                    Start Quiz
                </Button>
            }
            {
                <Button onClick={stopQuiz} disabled={!inProgress}>
                    Stop Quiz
                </Button>
            }
            {
                <Button onClick={mulligan} disabled={inProgress}>
                    Mulligan
                </Button>
            }
        </div>
    );
}
