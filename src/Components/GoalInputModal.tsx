import React from "react"
import { View, TextInput, Button, StyleSheet, Modal} from "react-native"

interface IGoalInput {
    handleAddGoal(): void,
    handleInputText(text: string): void,
    goalText: string,
    visible: boolean,
    onCancel(): void
}

// const GoalInput: FunctionComponent<IGoalInput> = (props): JSX.Element => {
const GoalInputModal = (props: IGoalInput): JSX.Element => {
    const { handleAddGoal, onCancel, handleInputText, goalText, visible } = props;

    return (
        <Modal visible={visible} animationType='slide' >
            <View style={styles.inputContainer}>
                <View style={styles.textInput}>
                    <TextInput
                        placeholder='Add task!'
                        multiline={true}
                        maxLength={50}
                        autoFocus
                        value={goalText}
                        onChangeText={handleInputText} />
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Task' onPress={handleAddGoal} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInputModal

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        // backgroundColor:'#E8EAED',
        borderWidth: 1,
        borderTopColor: '#000',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: 'white',
        width: '100%',
        padding: 8,
        color: '#120483',
        borderRadius: 8
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
})