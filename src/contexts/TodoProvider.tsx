import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useState} from 'react';

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

type TodoContextType = {
  todos: Todo[];
  saveTodos: (todos: Todo[]) => void;
};

type Props = {
  children: React.ReactNode;
};

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  saveTodos: () => {},
});

const TodoProvider = ({children}: Props): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem('todos');

        if (storedTodos !== null) {
          setTodos(JSON.parse(storedTodos));
        }
      } catch (error) {
        console.error('Error reading todos from AsyncStorage:', error);
      }
    };

    getData();
  }, []);

  const saveTodos = (newTodos: Todo[]) => {
    setTodos(newTodos);

    try {
      AsyncStorage.setItem('todos', JSON.stringify(newTodos));
    } catch (error) {
      console.error('Error saving todos to AsyncStorage:', error);
    }
  };

  return (
    <TodoContext.Provider value={{todos, saveTodos}}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
