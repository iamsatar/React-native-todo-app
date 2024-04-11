import React from 'react';

import {Checked, Container, Radio, Todo} from './styles';
import {Alert} from 'react-native';

export function TodoBlock(): React.ReactNode {
  return (
    <>
      <Container onPress={() => Alert.alert('Pressed')}>
        <Radio>
          <Checked> &#x2713;</Checked>
        </Radio>
        <Todo>Text</Todo>
      </Container>
      <Container>
        <Radio>
          <Checked> &#x2713;</Checked>
        </Radio>
        <Todo>Text</Todo>
      </Container>
      <Container>
        <Radio>
          <Checked> &#x2713;</Checked>
        </Radio>
        <Todo>Text</Todo>
      </Container>
      <Container>
        <Radio>
          <Checked> &#x2713;</Checked>
        </Radio>
        <Todo>Text</Todo>
      </Container>
      <Container>
        <Radio>
          <Checked> &#x2713;</Checked>
        </Radio>
        <Todo>Text</Todo>
      </Container>
    </>
  );
}
