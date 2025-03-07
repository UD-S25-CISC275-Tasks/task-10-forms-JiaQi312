import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [currType, setType] = useState<QuestionType>("short_answer_question");

    function swapType(): void {
        //swapping type of question
        if (currType === "short_answer_question") {
            setType("multiple_choice_question");
        } else {
            setType("short_answer_question");
        }
    }

    return (
        <div>
            <Button onClick={swapType}>Change Type</Button>
            {currType === "multiple_choice_question" ?
                <div>Multiple Choice</div>
            :   <div></div>}
            {currType === "short_answer_question" ?
                <div>Short Answer</div>
            :   <div></div>}
        </div>
    );
}
