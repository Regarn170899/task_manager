<template>
  <div class="row">
    <form  @submit.prevent="submitForm">
      <div class="col s4 offset-s4">
        <div class="input-field">
          <input id="title" v-model="title" type="text" class="validate" required>
          <label for="title">Имя задачи</label>
        </div>
        <div class="input-field">
          <textarea id="textarea1" v-model="description" class="materialize-textarea" required></textarea>
          <label for="textarea1">Описание задачи</label>
        </div>
        <input type="text" placeholder="" class="datepicker" ref="datepicker">
        <button type="submit" class=" btn btn-small indigo darken-1 ">Отредактировать</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  computed:{
    task(){
      return this.$store.getters.taskId(+this.$route.params.id)
    }
  },
  data:()=>({
    description:'',
    title:'',
    date:null

  }),
  mounted() {
    this.title=this.task.title
    this.description=this.task.description
    this.date= M.Datepicker.init(this.$refs.datepicker, {
      format:"dd.mm.yyyy",
      defaultDate:new Date(this.task.date),
      setDefaultDate:true,
    });
    setTimeout(()=>{
      M.updateTextFields()
    },0)
  },
  methods:{
    submitForm(){
      const task={
        title:this.title,
        description: this.description,
        id: this.task.id,
        date:this.date.date
      }
      this.$store.dispatch("taskCorrection",task)
      this.$router.push("/list")
      console.log(task)
    }
  },



}
</script>

<style lang="scss" scoped>

</style>
