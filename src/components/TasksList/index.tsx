import React from 'react';
import { Button, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ITask } from '../../models/Task';
import { Checkbox } from '../Checkbox';
import { styles } from './styles';
import theme from '../../style/theme';

interface Props {
  tasks: Array<ITask>;
  setTasks: (tasks: Array<ITask>) => void;
}

export const TasksList = ({ tasks, setTasks }: Props) => {
  const handleDoneTask = (id: number) => {
    const task = tasks.find((task) => task.id === id);

    if (task) {
      if (task.status === 'done') {
        task.status = 'pending';
      } else {
        task.status = 'done';
      }
    }

    setTasks([...tasks]);
  };

  const handleDeleteTask = (id: number) => {
    const task = tasks.find((task) => task.id === id);

    if (task) {
      tasks.splice(tasks.indexOf(task), 1);
    }

    setTasks([...tasks]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(task) => task.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Checkbox
              checked={item.status === 'pending' ? false : true}
              onChange={() => handleDoneTask(item.id)}
            />
            <View style={{ width: '75%' }}>
              <Text
                style={[
                  styles.cardText,
                  {
                    textDecorationLine:
                      item.status === 'pending' ? 'none' : 'line-through',
                    color:
                      item.status === 'pending' ? '#fff' : theme.colors.gray400,
                  },
                ]}
              >
                {item.title}
              </Text>
            </View>
            <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
              <MaterialCommunityIcons
                name='trash-can-outline'
                size={24}
                color={theme.colors.gray300}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};
