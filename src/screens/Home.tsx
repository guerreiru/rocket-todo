import React from 'react';
import { Alert, Image, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import logo from '../../assets/logo.png';
import clipboard from '../../assets/clipboard.png';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { TextStatus } from '../components/TextStatus';
import Spacer from '../components/Spacer';
import { TasksList } from '../components/TasksList';
import { ITask } from '../models/Task';

export const Home: React.FC = () => {
  const [taskTitle, setTaskTitle] = React.useState('');
  const [tasks, setTasks] = React.useState<ITask[]>([] as ITask[]);

  const [doneTasks, setDoneTasks] = React.useState<ITask[]>([]);

  React.useEffect(() => {
    const doneTasks = tasks.filter((task) => task.status === 'done');
    setDoneTasks(doneTasks);
  }, [tasks]);

  const handleAddTask = () => {
    const task = {
      id: new Date().getTime(),
      title: taskTitle,
      status: 'pending',
    };

    if (taskTitle.trim().length > 0) {
      setTasks([...tasks, task]);
      setTaskTitle('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Spacer marginTop={24} marginBottom={40}>
          <Image source={logo} />
        </Spacer>

        <View style={styles.form}>
          <Input value={taskTitle} onChangeText={setTaskTitle} />
          <Button onPress={() => handleAddTask()} />
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.tasksStatus}>
          <TextStatus label='Criadas' value={tasks.length} />
          <TextStatus label='Concluídas' value={doneTasks.length} />
        </View>

        <TasksList tasks={tasks} setTasks={setTasks} />
      </View>
    </View>
  );
};
