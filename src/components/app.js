
import React from 'react'
import Table from './table';

export default () => {
    return (
    <div className="container">
        <h1>Student Grade Table</h1>
        <Table data = {students}/>
    </div>
    )
};

const students = [
    {
        name: 'Henry',
        course: 'Math',
        grade: 30
    },
    {
        name: 'Alice',
        course: 'History',
        grade: 100
    },
    {
        name: 'Steven',
        course: 'Art',
        grade: 78
    }
];