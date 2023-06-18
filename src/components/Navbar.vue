<template>
  <nav class="indigo darken-1">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo center active ">Главная</router-link>
      <ul class="left hide-on-med-and-down">
        <router-link
            tag="li"
            to="/list"
        ><a href="#"> Список ваших задач</a> </router-link>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav{
  padding: 0 20px;
}
</style>