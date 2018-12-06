<template>
  <header class="container-flex">
      <img
        :src="require('../assets/img/santa-hat-icon-48px.png')"
        alt="Santa Hat"
        class="logo"
      >
      <h1 class="header">BGS3</h1>
  </header>
</template>

<style scoped>
.container-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo,
.header {
  margin: 0 0.125em 0 0.125em;
}

.header {
  display: none;
}
.logo {
  display: inline-block;
  height: 32px;
  width: 32px;
}

@media (min-width: 43.75em) {
  .header {
    display: inline-block;
    font-size: 2em;
  }
}
</style>
