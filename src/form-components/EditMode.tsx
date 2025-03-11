import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [studentName, setStudentName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    //function to change isEdit
    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setIsEdit(event.target.checked);
    }

    //function to change isStudent
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    //function to change username
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setStudentName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            {isEdit && (
                //edit mode interface
                <div>
                    {/* form to change username */}
                    <Form.Group controlId="studentName">
                        <Form.Label>Student Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={studentName}
                            onChange={updateName}
                        />
                    </Form.Group>
                    {/* checkbox for isStudent */}
                    <Form.Check
                        type="checkbox"
                        id="is-student"
                        label="are you student?"
                        checked={isStudent}
                        onChange={updateStudent}
                    />
                </div>
            )}
            {/* switch for edit mode */}
            <Form.Check
                type="switch"
                id="is-edit-mode"
                label="edit?"
                checked={isEdit}
                onChange={updateEdit}
            />
            {!isEdit && (
                <div>
                    {isStudent ?
                        <span>{studentName} is a student</span>
                    :   <span>{studentName} is not a student</span>}
                </div>
            )}
        </div>
    );
}
