<template>
  <div>
    <div  v-if="tasks.length">
      <div class="row" v-for="(task,idx) of tasks"
           :key="task.id">
        <div class="col s6 offset-s3">
          <div class="card indigo darken-1">
            <div class="white-text">
              <span class="card-title">{{ task.title }}</span>
              <p>{{new Date(task.date).toLocaleDateString()}}</p>
              <div class="card-action">{{task.description}}</div>
            </div>
            <div class="card-action">
              <router-link tag="button" class="btn-small" :to="'/task/'+task.id">Отредактировать</router-link>
              <button class="btn-small red accent-4" @click="delTask(task)">Удалить</button>
            </div>
          </div>
        </div>
      </div>

    </div>
    <h3 v-else>Нет задач</h3>
  </div>
</template>

<script>
export default {
  computed:{
    tasks(){
      return this.$store.getters.tasks
    }
  },
  methods:{
    delTask(task){
      this.$store.dispatch("delTask",task)
    }
  }

}
</script>

<style lang="scss" scoped>
.description{
  max-width: 200px;

}

</style>