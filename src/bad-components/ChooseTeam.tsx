import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton",
];

export function ChooseTeam(): React.JSX.Element {
    // const [allOptions, setAllOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);

    function chooseMember(newMember: string): void {
        if (!team.includes(newMember)) {
            setTeam([...team, newMember]);
        }
    }

    function clearTeam(): void {
        setTeam([]);
    }

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {PEOPLE.map((option: string) => (
                        // Creates a button for each name
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button
                                onClick={() => {
                                    chooseMember(option);
                                }}
                                size="sm"
                            >
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {/* assign key to each name */}
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    {/* Clear Button */}
                    <Button onClick={clearTeam}>Clear Team</Button>
                </Col>
            </Row>
        </div>
    );
}
