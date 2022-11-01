import React, { useState } from "react";
import { Form, Button, Row, Container, Col, Table } from "react-bootstrap";
import { routh_table } from "../functions/functions";
import { func } from "../interfaces/func";

function in2num(input: string): func {
    const nospace: string = input.replace(" ", '')
    const coarr: number[] = nospace.split(",").map((x: string): number => {
        return parseInt(x);
    })
    return {coefs: [...coarr]};
}

export function RouthTable(): JSX.Element {
    const [inpt, setinpt] = useState<string>("");
    const [cheq, setcheq] = useState<func>({coefs: []});
    const [table, setable] = useState<number[][]>([]);
    function updateinpt(event: React.ChangeEvent<HTMLInputElement>): void {
        setinpt(event.target.value);
        setcheq(in2num(event.target.value));
    }
    return (
        <div>
            <div>
                <Form.Group>
                    <Form.Label></Form.Label>
                    <Form.Control
                        value={inpt}
                        onChange={updateinpt}
                        type="string"
                    />
                </Form.Group>
                <Button
                    onClick={() => setable(routh_table(cheq))}
                >
                    Calculate Routh Table
                </Button>
            </div>
            {/*<Container>
                {table.map((row: number[]) => {
                    return <Row>{row.map((col: number) => {
                        return <Col>
                            {col}
                        </Col>
                    })}
                    </Row>
                })}
            </Container>*/}
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    {table.map(() => {
                        return <td></td>
                    })}
                    </tr>
                </thead>
                <tbody>
                {table.map((row: number[]) => {
                    return <tr>{row.map((col: number) => {
                        return <td>
                            {col}
                        </td>
                    })}
                    </tr>
                })}
                </tbody>
                </Table>
        </div>
    );
}