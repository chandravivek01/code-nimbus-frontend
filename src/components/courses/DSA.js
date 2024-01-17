import React, { useEffect, useState } from 'react'
import { getDsaTopics } from '../../services/CourseService';
import { Table } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

const DSA = () => {

    const [ dsaTopic, setDsaTopic ] = useState([]);

    useEffect( () => {

        const fetchDsaTopics = async () => {

            const data = await getDsaTopics();
            setDsaTopic(data);
        }
        fetchDsaTopics();
    }, []);

    const constructUrl = (topic) => {

        const modifiedTopic = topic.toLowerCase();
        let url = `/questions/${modifiedTopic}`;
        return url;
    }

    const renderedRows = dsaTopic.map( (rowData) => {

        return (
            <tr key={rowData.id}>
                <td>{rowData.id}</td>
                <td><NavLink to={constructUrl(rowData.topic)}>{rowData.topic}</NavLink></td>
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