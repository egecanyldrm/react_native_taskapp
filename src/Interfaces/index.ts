export interface ICourseGoal {
    text: string,
    id: string
}
export interface IListOfTask {
    courseGoal: Array<ICourseGoal>,
    handleDeleteGoal(id: string): any
}
export interface ITaskItem {
    text: string,
    id: string
}
