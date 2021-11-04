import React, { Component } from 'react';
import './sobre.css';
import { Col, Row, Button, Form, Card } from 'react-bootstrap';

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

                            <h1>Olá, bem-vindo ao nosso sistema de controle de alimentação.</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Col md={4}>
                                <Form.Control id="alimento" type="text" placeholder="Alimento" value={this.state.alimento} onChange={this.novoAlimento}/>
                            </Col>
                            <Col md={2}>
                                <Form.Control id="caloria" type="text" placeholder="Calorias" value={this.state.caloria} onChange={this.novaCaloria}/>
                            </Col>
                            <Col md={2}>
                                <Button className="Adicionar" variant="secondary" style={{marginRight: '5px'}} onClick={this.adicionar}>Adicionar</Button>
                            </Col>
                        </Col>
                    </Row>
                    <Col md={4}>
                        <div id="lista">
                            {this.state.listaAlimentos.map((list, index) => 
                                <Card key={index}>
                                    <Card.Header>
                                        {list.nome}
                                    </Card.Header>
                                    <Card.Body>
                                        {list.caloria}
                                    </Card.Body>
                                    <Card.Footer>
                                        <Button onClick={() => this.excluirAlimento(index)}>
                                            Excluir
                                        </Button>
                                    </Card.Footer>
                                </Card>
                            )}
                        </div>
                    </Col>
                </Col>
            </div>
        )
    }
}

export default Sobre;