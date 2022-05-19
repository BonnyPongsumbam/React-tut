// import React from "react";

// class Hello extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: "Bonny Pongsumbam", date: new Date() };
//      this.handleClick = this.handleClick.bind(this);
//     console.log("I am inside constructor");
//   }

//   handleClick() {
//     this.setState({
//       date: new Date(),
//     });
//     console.log("Click happened");
//   }
//   tick(){
//       this.setState({
//           date:new Date(),
//       });
//   }
//   handleParam(){
//       this.setState({
//           date: new Date(),
//       })
//   }
//   static getDerivedStateFromProps() {
//     console.log("getDerivedStateFromProps");
//     return {};
//   }

//   componentDidMount() {
//     console.log("componentDidMount");
//   }

//   render() {
//     console.log("Render");
//     return (
//       <div style={{textAlign:"center"}}>
//         <h2>My Name is {this.state.name}.</h2>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//         <button onClick={()=>{this.tick();}}>Update Time with Arrow Function</button> <br/>
//         <button onClick={this.handleClick}>Update Time with bind</button> <br/>
//         <button onClick={this.handleClick.bind(this,new Date())}>Update Time with Param</button>
//       </div>
//     );
//   }
// }

// export default Hello;

// import React, { useState } from 'react'

// const Clock = () => {

//  const [clock , setClock] =useState({date: new Date()});

//  const handleClick=()=> {
//        setClock({
//         date: new Date(),
//       });
//        console.log("Click happened");
//     }

//   return (
//     <div>
//       <h2>It is {clock.date.toLocaleTimeString()}.</h2>
//       <button onClick={handleClick}>Update Time</button>
//     </div>
//   )
// }

// export default Clock

// import React, { useEffect, useState } from "react";

// const Clock = () => {
//   const [date, setDate] = useState(new Date());

//   const tick = () => {
//     setDate(new Date());
//   };

//   useEffect(() => {
//     const timerID = setInterval(() => tick(), 1000);
//     return () => {
//       clearInterval(timerID);
//     };
//   });

//   return (
//     <div style={{textAlign:"center"}}>
//       <h2> It is {date.toLocaleTimeString()}.</h2>
//       <button onClick={tick}>Update Time</button>
//     </div>
//   );
// };

// export default Clock;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export const Weather = () => {
  const [temp, setTemp] = useState(0);
  useEffect(() => {
    setTemp(temp);
    console.log("useEffect");
  }, []);
  return (
    <div>
      <h2> It is {temp}.</h2>
    </div>
  );
};

export const Clock = () => {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h2> It is {date.toLocaleTimeString()}.</h2>
      <Container>
        <Row>
          <Col sm>
            <Button variant="primary">Button</Button>
          </Col>
          <Col sm>
            <Button variant="success">Button</Button>
          </Col>
          <Col sm>
            <Button variant="secondary">Button</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export const TemperatureInCelcius = () => {
  let [users, setUsers] = useState([]);

  useEffect(() => {


    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/ip.json',
      params: {q: 'auto:ip'},
      headers: {
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        'X-RapidAPI-Key': '91a8e198ebmsh0264a7959cfcfd1p1a08c2jsn14f58b165711'
      }
    };
    
    axios.request(options).then(function (response) {
      setUsers(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);

  return (
    <>
      <code>
        {users&&(users.map(({ip,contry_name})=> {
          return(
            <div>
              <h2>{ip}</h2>
            </div>
          )
        }))}
        </code>
      
    </>
  );
};



