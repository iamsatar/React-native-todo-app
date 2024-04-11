/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useContext, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
} from 'react-native';

import {TodoBlock} from '@components/TodoBlock';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {TodoContext} from './contexts/TodoProvider';

function Todo(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [value, setValue] = useState<string>('');
  const [error, showError] = useState<Boolean>(false);
  const {todos, saveTodos} = useContext(TodoContext);
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };
  const date = new Date().toLocaleDateString('en-US', options);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : '#f6f7ff',
    flex: 1,
  };

  const handleSubmit = (): void => {
    value.trim()
      ? saveTodos([{id: todos.length, text: value, completed: false}, ...todos])
      : showError(true);
    setValue('');
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Text style={styles.title}>{date}</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Add new task..."
            value={value}
            onChangeText={e => {
              setValue(e);
              showError(false);
            }}
            style={styles.inputBox}
          />
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Add Task</Text>
          </Pressable>
        </View>
        {error && (
          <Text style={styles.error}>Error: Input field is empty...</Text>
        )}
        <TodoBlock />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    alignContent: 'center',
  },
  button: {
    backgroundColor: '#ee4b2b',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    borderRadius: 5,
    height: 40,
  },
  buttonText: {color: '#fff'},
  inputBox: {
    width: 200,
    borderRadius: 8,
    paddingLeft: 8,
    marginLeft: 20,
    fontSize: 20,
  },
  title: {
    fontSize: 24,
    marginLeft: 20,
    marginTop: 32,
  },

  error: {
    color: 'red',
  },
});

export default Todo;
