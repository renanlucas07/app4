import React from 'react';
import { View } from 'react-native';
import ListaItens from './src/components/ListaItens';
import styles from './src/styles';

export default class App extends React.Component {
constructor(props) {
  super(props);
  console.log('construtor');
}

componentWillMount() {
  console.log('antes do render');
}

componentDidMount() {
  console.log('depois do render');
}

  render() {
    const {
      container
    } = styles;
    console.log('render');
    return (
      <View style={container}>
        <ListaItens />
      </View>
    );
  }
}

