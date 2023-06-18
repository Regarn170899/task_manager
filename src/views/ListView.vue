<template>
  <div >
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
          <button type="submit" class=" btn btn-small indigo darken-1 ">Создать</button>
        </div>
      </form>
    </div>
    <div>
      <h2>Списов ваших задачь</h2>
      <hr>
      <div >
        <Tasks/>
      </div>
    </div>
  </div>

</template>

<script>
import Tasks from "@/components/Tasks.vue";

export default {
  components:{
    Tasks
  },
  data:()=>({
    description:'',
    title:'',
    date:null

  }),
  mounted() {
   this.date= M.Datepicker.init(this.$refs.datepicker, {
      format:"dd.mm.yyyy",
      defaultDate:new Date(),
      setDefaultDate:true
    });
  },
  methods:{
    submitForm(){
      const task={
        title:this.title,
        description: this.description,
        id: Date.now(),
        date:this.date.date
      }
      console.log(task)
      this.$store.dispatch("createTask",task)
    }
  },


}
</script>

<style lang="scss" scoped>

</style>