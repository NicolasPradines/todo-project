import { defineStore } from 'pinia'

export const useCoursesList = defineStore('coursesList', {
  state: () => ({
    courses: [],
    id: 0,
  }),
  actions: {
    starter(items) {
      this.courses.push(items)
    },
    addCourse(item) {
      this.courses.push({ item: item, id: this.id++, completed: false })
    },
    deleteCourse(itemId) {
      this.courses = this.courses.filter((object) => {
        return object.id !== itemId
      })
    },
    coursesCompleted(idToFind) {
      const course = this.courses.find((obj) => obj.id === idToFind)
      if (course) {
        course.completed = !course.completed
      }
    },
  },
})
