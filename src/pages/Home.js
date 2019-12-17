import React from 'react';
import {
  Container,
  Content,
  Button,
  Text,
  Form,
  Item,
  Label,
  Input,
  Toast,
  Root,
} from 'native-base';

import api from '../api/produtoApi';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeInput: '',
      precoInput: '',
    };
  }

  static navigationOptions = () => ({
    title: 'Cadastrar',
  });

  render() {
    return (
      <Root>
        <Container>
          <Content padder>
            <Form style={{marginBottom: 30}}>
              <Item floatingLabel>
                <Label>Nome</Label>
                <Input
                  value={this.state.nomeInput}
                  onChangeText={text => this.setState({nomeInput: text})}
                />
              </Item>
              <Item floatingLabel>
                <Label>Preço</Label>
                <Input
                  value={this.state.precoInput}
                  onChangeText={text => this.setState({precoInput: text})}
                />
              </Item>
            </Form>
            <Button block bordered primary onPress={() => this.cadastrar()}>
              <Text>Cadastrar</Text>
            </Button>
            <Button block bordered success style={{marginTop: 20}}>
              <Text>Listar</Text>
            </Button>
          </Content>
        </Container>
      </Root>
    );
  }

  cadastrar = () => {
    api
      .post('/produtos', {
        nome: this.state.nomeInput,
        preco: this.state.precoInput,
        quantidade: 3,
      })
      .then(() => Toast.show({text: 'Cadastrado com sucesso'}))
      .catch(e => Toast.show({text: 'Erro ao cadastrar'}));
  };
}
