/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import Todo from './src';
import TodoProvider from './src/contexts/TodoProvider';

function App(): React.JSX.Element {
  return (
    <TodoProvider>
      <Todo />
    </TodoProvider>
  );
}

export default App;
