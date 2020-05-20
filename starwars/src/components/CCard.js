//This is the child of App.js

import React from "react";
import {Card, CardImg, CardTitle, Col, CardBody, CardSubtitle} from "reactstrap";


const CCard = (props) => {
    return (
    
        <Col xs="6">
            <Card style={{margin:"", opacity:"0.8", background:"Orange", color:"Black"}}>
                <CardImg src={props.image} alt="" />
                 
                 <CardBody>
                    <CardTitle tag="h4">{props.name}</CardTitle>
                    <CardTitle tag="h5">Location:{props.location.name}</CardTitle> 
                    <CardTitle tag="h5">Status: {props.status}</CardTitle>
                    <CardTitle tag="h5">Species: {props.species}</CardTitle>
                    <CardSubtitle tag="h5">Gender: {props.gender}</CardSubtitle>
                </CardBody> 
            </Card>
        </Col>
        
    );
};

export default CCard;
