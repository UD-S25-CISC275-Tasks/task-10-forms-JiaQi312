import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday = "☃️" | "❤️" | "🍗" | "🧧" | "🎃";
export function CycleHoliday(): React.JSX.Element {
    const [currHoliday, setHoliday] = useState<Holiday>("☃️");
    const holidayAlphabet: Holiday[] = ["☃️", "🎃", "🧧", "🍗", "❤️"];
    const holidayTimeline: Holiday[] = ["🧧", "❤️", "🎃", "🍗", "☃️"];

    function changeAlphabetically(): void {
        let currInd: number = holidayAlphabet.findIndex(
            (holiday: Holiday): boolean => holiday === currHoliday,
        );
        const newHoliday: Holiday = holidayAlphabet[(currInd + 1) % 5];
        setHoliday(newHoliday);
    }

    function changeByDate(): void {
        let currInd: number = holidayTimeline.findIndex(
            (holiday: Holiday): boolean => holiday === currHoliday,
        );
        const newHoliday: Holiday = holidayTimeline[(currInd + 1) % 5];
        setHoliday(newHoliday);
    }

    return (
        <div>
            <span>Current Holiday: {currHoliday}</span>
            <Button onClick={changeAlphabetically}>Change by Alphabet</Button>
            <Button onClick={changeByDate}>Change by Year</Button>
        </div>
    );
}
