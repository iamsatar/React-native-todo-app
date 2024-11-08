import React, {useContext} from 'react';

import {TodoContext} from '../../contexts/TodoProvider';
import {Checked, Container, Radio, Todo} from './styles';

export function TodoBlock(): React.ReactNode {
  const {todos, saveTodos} = useContext(TodoContext);
  const handleToggleTodo = (id: number) => {
    // Alert.alert(id + '');
    const tempTodo = todos;
    let currentTodo = tempTodo[id];
    tempTodo[id] = {...currentTodo, completed: !currentTodo.completed};
    saveTodos([...tempTodo]);
  };

  return (
    <>
      {!!todos.length &&
        todos.map(({id, text, completed}, index) => {
          return (
            <Container onPress={() => handleToggleTodo(index)} key={text + id}>
              {completed && (
                <>
                  <Radio>
                    <Checked> &#x2713;</Checked>
                  </Radio>
                  <Todo
                    style={{
                      textDecorationLine: 'line-through',
                      textDecorationStyle: 'solid',
                    }}>
                    {text}
                  </Todo>
                </>
              )}
              {!completed && (
                <>
                  <Radio style={{backgroundColor: 'transparent'}} />
                  <Todo>{text}</Todo>
                </>
              )}
            </Container>
          );
        })}
    </>
  );
}
