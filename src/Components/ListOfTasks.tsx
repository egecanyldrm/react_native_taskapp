import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import GoalItem from './GoalItem'
import { IListOfTask } from '../Interfaces'

const ListOfTasks = ({ courseGoal, handleDeleteGoal }: IListOfTask) => {
    return (
        <View style={styles.goalsContainer}>
            <FlatList
                data={courseGoal}
                alwaysBounceVertical={false}
                renderItem={(itemData) => {
                    return <GoalItem
                        handleDeleteGoal={handleDeleteGoal}
                        id={itemData.item.id}
                        text={itemData.item.text} />
                }}
                keyExtractor={(item, index) => { return item.id }}
            />
        </View>
    )
}

export default ListOfTasks

const styles = StyleSheet.create({
    goalsContainer: {
        flex: 5,
        paddingTop: 10,
        borderTopWidth: 2,
        borderTopColor: '#eee',
        marginTop: 10,
    },
})