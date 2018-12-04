<template>
  <header class="container-flex">
    <template>
      <img
        :src="require('../assets/img/santa-hat-icon-32px.png')"
        alt="Santa Hat"
        class="logo logo-sm"
      >
      <h1 class="header header-sm">BGS3</h1>
    </template>
    <template>
      <img
        :src="require('../assets/img/santa-hat-icon-48px.png')"
        alt="Santa Hat"
        class="logo logo-md"
      >
      <h1 class="header header-md">BG Secret Santa Search</h1>
    </template>
    <template>
      <img
        :src="require('../assets/img/santa-hat-icon-48px.png')"
        alt="Santa Hat"
        class="logo logo-lg"
      >
      <h1 class="header header-lg">Board Game Secret Santa Search</h1>
    </template>
  </header>
</template>

<style scoped>
.container-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

header {
  border-bottom: 1px solid rgba(128, 128, 128, 0.4);
}

.logo,
.header {
  margin: 0 0.125em 0 0.125em;
}

.header-sm,
.logo-sm {
  display: inline-block;
}
.header-md,
.header-lg,
.logo-md,
.logo-lg {
  display: none;
}

.logo-sm {
  height: 32px;
  width: 32px;
}
@media (min-width: 40em) {
  .header-sm,
  .header-lg,
  .logo-sm,
  .logo-lg {
    display: none;
  }
  .header-md,
  .logo-md {
    display: inline-block;
  }
  .logo-md {
    height: 48px;
    width: 48px;
  }
}
@media (min-width: 50em) {
  .header-sm,
  .header-md,
  .logo-sm,
  .logo-md {
    display: none;
  }
  .header-lg,
  .logo-lg {
    display: inline-block;
  }
  .logo-lg {
    height: 48px;
    width: 48px;
  }
}
</style>
