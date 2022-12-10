import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CustomButton from './src/Components/CustomButton';
import GoalInputModal from './src/Components/GoalInputModal';
import ListOfTasks from './src/Components/ListOfTasks';
import { ITaskItem } from './src/Interfaces';

export default function App() {

  const [goalText, setGoalText] = useState<string>('');
  const [courseGoal, setCourseGoal] = useState<ITaskItem[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

  const handleInputText = (text: string): void => {
    setGoalText(text);
  }

  const handleAddGoal = (): void => {
    setCourseGoal([...courseGoal, { text: goalText, id: Math.random().toString() }]);
    setGoalText('');
    handleCancelModal();
  }

  const handleDeleteGoal = (id: string): any => {
    setCourseGoal((currentCourseGoal) => {
      return currentCourseGoal.filter(goal => goal.id !== id)
    })
  }

  function handleShowModal() {
    setModalIsVisible(true);
  }
  function handleCancelModal() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style='dark' />
      <View style={styles.appContainer}>
        <Text style={styles.title}> Your Tasks </Text>
        <ListOfTasks
          courseGoal={courseGoal}
          handleDeleteGoal={handleDeleteGoal}
        />
        <View style={styles.buttonContainer}>
          <CustomButton
            onPress={handleShowModal}
            title='Add Task'
          />
        </View>
        <GoalInputModal
          handleAddGoal={handleAddGoal}
          handleInputText={handleInputText}
          goalText={goalText}
          visible={modalIsVisible}
          onCancel={handleCancelModal}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 50,

  },
  title: {
    fontSize: 34,
    paddingLeft: 3,
    paddingTop: 12,
  },

  buttonContainer: {
    position: 'absolute',
    bottom: '12%',
    right: 25
  },
  button: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  }

});
