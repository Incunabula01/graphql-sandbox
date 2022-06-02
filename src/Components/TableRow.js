import React from 'react';

import {
    Row,
    Col,
    Stack
} from 'react-bootstrap';

const TableRow = ({data, addItem}) => {
    const {mission_name, rocket, links, id,launch_date_local} = data;
    const {rocket_name, second_stage, rocket_type} = rocket;
    const {video_link, article_link} = links;
    const formattedDate = new Date(launch_date_local).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
    return (
        <tr>
           <td>
                <Row>
                    <Col className="col-8">
                        <a href={article_link} target="_blank" rel="noreferrer" title="Article Link" className="mr-2">{mission_name}</a>
                    </Col>
                    <Col className='col-4'>
                            <a href={video_link} target="_blank" rel="noreferrer" title="Youtube Link" >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="30px" width="30px">
                                <path fill="#f00" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                            </svg>
                        </a>
                    </Col>
                </Row>
           </td>
           <td>
               {formattedDate}
           </td>
           <td>
                {rocket_name}/{rocket_type}
           </td>
           <td>
                <Stack direction="horizontal" gap="2">
                    {second_stage.payloads.map((el) => {
                        return <div className="bg-info text-white p-1" key={id}>{el.payload_type}</div>
                    })}
                </Stack>
           </td>
        </tr>
    )
}

export default TableRow;