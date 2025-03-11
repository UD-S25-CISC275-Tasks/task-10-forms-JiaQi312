import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDice, setLeftDice] = useState<number>(0);
    const [rightDice, setRightDice] = useState<number>(1);

    function rollLeftDice(): void {
        setLeftDice(d6());
    }

    function rollRightDice(): void {
        setRightDice(d6());
    }

    return (
        <div>
            <span data-testid="left-die">Left Dice: {leftDice}</span>
            <span data-testid="right-die">Right Dice: {rightDice}</span>
            <Button onClick={rollLeftDice}>Roll Left</Button>
            <Button onClick={rollRightDice}>Roll Right</Button>
            {leftDice === rightDice && leftDice !== 1 && <span>Win</span>}
            {leftDice === rightDice && leftDice === 1 && <span>Lose</span>}
        </div>
    );
}
