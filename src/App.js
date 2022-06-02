import React, {useState, useEffect} from 'react';
import './App.css';
import DataTable from './Components/DataTable';
import {
  useQuery,
  gql
} from '@apollo/client';

import {
  Navbar,
  Container,
  Row,
  Alert,
  Spinner
} from 'react-bootstrap';

const ITEM_QUERY = gql`
  {
    launchesPast(limit: 15) {
      id
      mission_name
      launch_date_local
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        second_stage {
          payloads {
            payload_type
          }
        }
        rocket_type
      }
    }
  }
`;

const TABLE_COLS = ['Mission Name','Mission Date','Rocket Name','Payload'];

const App = () => {
  const [listData, setListData] = useState([]);
  // const [listItem, setListItem] = useState({});
  const { loading, error, data } = useQuery(ITEM_QUERY);
   console.log('Data==>', data);

   useEffect(() => {
     if(data){
      setListData(data.launchesPast);
     }
  }, [data, listData]);

  if(loading){
    return (
      <Container>
        <Spinner animation="grow"/>
      </Container>
    )
  }
  if(error){
    return (
      <Container>
        <Alert variant="danger">
         <p>Error!</p>
          <code>{error.message}</code>
        </Alert>
      </Container>
    )
  }
  
  
  // const handleAddListItems = (items) => {
  //   setListItem(items);
  // }
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>SpaceX Launches</Navbar.Brand>
      </Container>
    </Navbar>
    <Container>
      <Row className="list-container">
        <DataTable listItems={listData} tableCols={TABLE_COLS}/>
      </Row>
    </Container>
    </>
  );
}

export default App;
