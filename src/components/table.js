import React from 'react'

export default () => {
    return (
        <table className = "table">
            <thead className = "thead-inverse">
                <tr>
                    <th>Name</th>     
                    <th>Course</th>
                    <th>Grade</th>                        
                </tr>    
            </thead>
            <tbody>
                <tr>
                    <td>James</td>
                    <td>Math</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td>Ryan</td>
                    <td>English</td>
                    <td>80</td>
                </tr>
                <tr>
                    <td>Park</td>
                    <td>Art</td>
                    <td>60</td>
                </tr>
            </tbody>
        </table>
    );
}