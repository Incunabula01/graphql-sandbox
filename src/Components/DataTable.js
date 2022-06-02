import React, {Fragment} from 'react';

import TableCol from './TableRow';
import {
    Table
} from 'react-bootstrap';

const DataTable = ({listItems, addListItems, tableCols}) => {
    return (
        <>
            <Table striped bordered>
                <thead>
                    <tr>
                        {tableCols.map((el, i) => {
                            return <td key={`${el}-0${i}`}><strong>{el}</strong></td>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {listItems.map(el => {
                        return (
                            <Fragment key={el.id}>
                                <TableCol data={el} addItem={(item) =>  addListItems(item)}/>
                            </Fragment>
                        )
                    })}
                </tbody>
            </Table>
            
        </>
    )
}

export default DataTable;