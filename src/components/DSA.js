import React from 'react'
import { Table } from 'react-bootstrap'

const DSA = ({ dsaTopic }) => {

    const renderedRows = dsaTopic.map( (rowData) => {

        return (
            <tr >
                <td>{rowData.id}</td>
                <td>{rowData.topic}</td>
            </tr>
        )
    });

    return (
        <div>
            DSA
            <Table bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Topics</th>
                    </tr>
                </thead>
                <tbody>
                    { renderedRows }
                </tbody>
            </Table>
        </div>
    )
}

export default DSA