import { FunctionComponent } from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"

interface IPropsGoalItem {
    text: string,
    id: string,
    handleDeleteGoal(id: string): any
}


const GoalItem: FunctionComponent<IPropsGoalItem> = (props): JSX.Element => {
    const { text, handleDeleteGoal, id } = props;
    return (
        <View key={id} style={styles.goalItem} >
            <Pressable onPress={handleDeleteGoal.bind(this, id)}
                android_ripple={{ color: '#210644' }}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.text}>{text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: '#ccc',
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
    },
    text: {
        fontSize: 20
    },
    pressedItem: {
        opacity: 0.1
    }
})