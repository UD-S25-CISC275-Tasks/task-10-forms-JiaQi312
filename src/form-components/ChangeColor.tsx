import React, { useState } from "react";
import { Form } from "react-bootstrap";

//my list of colors
const COLORS: string[] = [
    "red",
    "blue",
    "yellow",
    "green",
    "purple",
    "orange",
    "cyan",
    "magenta",
];

//color interface to pass in state
interface colorClass {
    color: string;
    setColor: (color: string) => void;
}

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]);

    //function to update the current color
    function updateColor(event: React.ChangeEvent<HTMLInputElement>): void {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {/* map method to create button for each color, which runs updateColor on click */}
            {COLORS.map((currColor: string) => (
                <Form.Check
                    type="radio"
                    name="colorSelect"
                    onChange={updateColor}
                    id={currColor}
                    key={currColor}
                    value={color}
                    checked={color === currColor}
                />
            ))}
            {/* text to display the final color */}
            {
                <span>
                    You have chosen{" "}
                    <span data-testid="colored-box" background-color={color}>
                        {color}
                    </span>
                </span>
            }
        </div>
    );
}
