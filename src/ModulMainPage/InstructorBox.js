import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './InstructorBox.css';

export class InsructorBox extends Component{
render (){
    return (
      <Container>
            <Row>
                <Col xs={6} md={4}>
                    <img className='instructorImg' src={this.props.item.img}/>
                </Col>
                <Col xs={12} md={8}>
                    <p>{this.props.item.name}</p>
                    <p>{this.props.item.title}</p>
                    <p>{this.props.item.institution}</p>

                </Col>
            </Row>
        </Container>
    );
  }
}