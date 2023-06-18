import Vue from 'vue'
import Vuex from 'vuex'
import tasks from "@/components/Tasks.vue";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks:JSON.parse(localStorage.getItem("tasks")||"[]"),
  },
  getters: {
    tasks:state => state.tasks,
    taskId:state => id=>state.tasks.find(task=>task.id===id)
  },
  mutations: {
    createTask(state,task){
      state.tasks.push(task)
      localStorage.setItem("tasks",JSON.stringify(state.tasks))
    },
    delTask(state,task){
      state.tasks=state.tasks.filter((t)=>t!==task)
      localStorage.setItem("tasks",JSON.stringify(state.tasks))
    },
    taskCorrection(state,task){
      const tasks=state.tasks.concat()
      const indexT=tasks.findIndex(t=>t.id===task.id)
      tasks[indexT]={...task}
      state.tasks=tasks
      localStorage.setItem("tasks",JSON.stringify(state.tasks))
    }

  },
  actions: {
    createTask({commit},task){
      commit("createTask",task)
    },
    delTask({commit},task){
      commit("delTask",task)
    },
    taskCorrection({commit},task){
      commit("taskCorrection",task)
    }
  },
  modules: {
  }
})
