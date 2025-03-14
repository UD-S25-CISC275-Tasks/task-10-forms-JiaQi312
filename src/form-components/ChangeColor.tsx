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

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]);

    //function to update the current color
    function updateColor(event: React.ChangeEvent<HTMLInputElement>): void {
        setColor(event.target.value);
    }

    //styling for box
    const boxStyle = {
        backgroundColor: color,
    };

    return (
        <div>
            <h3>Change Color</h3>
            {/* map method to create button for each color, which runs updateColor on click */}
            <div>
                {COLORS.map((currColor: string) => (
                    <Form.Check
                        //makes each radio button on one line
                        inline
                        type="radio"
                        name="colorSelect"
                        onChange={updateColor}
                        id={"choose " + currColor}
                        //label dictates the text written beside each radio button
                        label=<span style={{ backgroundColor: currColor }}>
                            {currColor}
                        </span>
                        key={currColor}
                        value={currColor}
                        checked={color === currColor}
                    />
                ))}
            </div>
            {/* text to display the final color */}
            {
                <span>
                    {/* {} is for extra space */}
                    You have chosen {}
                    <span data-testid="colored-box" style={boxStyle}>
                        {color}
                    </span>
                </span>
            }
        </div>
    );
}
