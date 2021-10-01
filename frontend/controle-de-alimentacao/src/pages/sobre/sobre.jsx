import React, { Component } from 'react';
import './sobre.css';
import { Col, Row, Button, Form } from 'react-bootstrap';

const Sobre = () => {

    return (
        <div className="page-component">
            <Row>
                <Col md={7} style={{textAlign: 'center'}}>
                    <br />

                    <h1>Olá, bem-vindo ao nosso sistema de controle de alimentação.</h1>

                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Form.Control type="text" placeholder="Alimento" />
                </Col>
                <Col md={2}>
                    <Form.Control type="text" placeholder="Calorias" />
                </Col>
                <Col md={2}>
                    <Button variant="secondary" style={{marginRight: '5px'}}>Adicionar</Button>
                </Col>
            </Row>
        </div>
    );
}

export default Sobre;