import React from 'react';
import {
  Container,
  Content,
  List,
  Text,
  ListItem,
  Right,
  Left,
} from 'native-base';
import {listarProdutos} from '../service/produtos';

export default class ListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {produtos: []};
  }

  static navigationOptions = () => ({
    title: 'Lista',
  });

  componentDidMount() {
    if (!this.state.produtos || this.state.produtos.length === 0) {
      listarProdutos().then(produtos => {
        this.setState({produtos});
      });
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <List>
            {this.state.produtos &&
              this.state.produtos.map(item => (
                <ListItem key={item.id}>
                  <Left>
                    <Text>{item.nome}</Text>
                  </Left>
                  <Right>
                    <Text>{item.preco}</Text>
                  </Right>
                </ListItem>
              ))}
          </List>
        </Content>
      </Container>
    );
  }
}
