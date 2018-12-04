<template>
  <header>
    <template>
      <img
        :src="require('../assets/img/santa-hat-icon-32px.png')"
        alt="Santa Hat"
        class="logo header-sm"
      >
      <h1 class="header-sm">BGS3</h1>
    </template>
    <template>
      <img
        :src="require('../assets/img/santa-hat-icon-48px.png')"
        alt="Santa Hat"
        class="logo header-lg"
      >
      <h1 class="header-lg">Board Game Secret Santa Search</h1>
    </template>
  </header>
</template>

<style scoped>
@media (max-width: 576px) {
  .header-sm {
    display: show;
  }
  .header-lg {
    display: none;
  }
}
@media (min-width: 577px) {
  .header-sm {
    display: none;
  }
  .header-lg {
    display: show;
  }
}
</style>
