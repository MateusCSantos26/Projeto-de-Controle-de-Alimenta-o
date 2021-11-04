import React, { Component } from 'react';
import './sobre.css';
import { Col, Row, Button, Form, Card, ListGroup } from 'react-bootstrap';

class Sobre extends Component {
    state = {
        listaAlimentos: [],
        alimento: "",
        caloria: "",
    }

    adicionar = () => {
        let baseAlimentos = {
            nome: "",
            caloria: ""
        }

        baseAlimentos.nome = this.state.alimento.trim();
        baseAlimentos.caloria = this.state.caloria.trim();


        //trim
        this.state.listaAlimentos.push(JSON.parse(JSON.stringify(baseAlimentos)));

        document.getElementById("alimento").value = "";
        document.getElementById("caloria").value = "";

        let state = this.state;

        state.alimento = state.caloria = "";
        this.setState(state);
        console.log(this.state.listaAlimentos);
    }

    novoAlimento = (event) => {
        let state = this.state;

        state.alimento = event.target.value;
        this.setState(state);
    }

    novaCaloria = (event) => {
        let state = this.state;

        state.caloria = event.target.value;
        this.setState(state);
    }

    excluirAlimento = (index) => {
        let state = this.state;

        state.listaAlimentos.splice(index, 1);
        this.setState(state);
    }

    render () {
        return (
            <div>
                <Col md={12}>
                    <Row>
                        <Col style={{textAlign: 'center'}}>
                            <br />

                            <h2>Olá, bem-vindo ao nosso sistema de controle de alimentação.</h2>
                            <h3>Digite o alimento e as calorias, respectivamente:</h3>
                            <br/>
                        </Col>
                    </Row>
                    <Row>
                        <Col m={1}>
                        </Col> 
                        <Col md={3}>
                                <Form.Control id="alimento" type="text" placeholder="Alimento" value={this.state.alimento} onChange={this.novoAlimento}/>
                                <Form.Control id="caloria" type="text" placeholder="Calorias" value={this.state.caloria} onChange={this.novaCaloria}/>                      
                                <button className="Adicionar" variant="secondary" style={{marginRight: '50px'}} onClick={this.adicionar}>Adicionar</button>

                        </Col>
                        <Col m={4}>
                        </Col> 
                    <Col md={3}>
                        <div id="lista">
                            {this.state.listaAlimentos.map((list, index) => 
                                <Card key={index}>
                                    <ListGroup horizontal variant="flush">
                                        <ListGroup.Item>
                                            {list.nome}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            {list.caloria}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <button className="Excluir" onClick={() => this.excluirAlimento(index)}>
                                                Excluir
                                            </button>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            )}
                        </div>
                    </Col>
                    <Col m={1}>
                        </Col> 
                    </Row>
                </Col>
            </div>
        )
    }
}

export default Sobre;