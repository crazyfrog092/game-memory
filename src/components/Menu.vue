<template>
  <!-- открывается по нажатию на ESC -->
  <div class="menu">
    <div class="menu__wrap">
      <div class="menu__box">
        <div class="menu__item">
          Restart
        </div>
        <div class="menu__item">
          Settings
        </div>
        <div
          class="menu__item"
          @click="exit()"
        >
          Exit
        </div>
        <div class="menu__item">
          Continue
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  methods: {
    exit() {
      this.$router.push({ name: 'Main' });
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(#080808, 0.7);
  &__wrap {
    padding: 10px;
    max-width: 400px;
    width: 100%;
  }
  &__box {
    width: 100%;
    background-color: #080808;
    padding: 15px;
    display: grid;
    gap: 50px;
  }
  &__item {
    font-size: 25px;
    font-weight: bold;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: darkred;
    cursor: pointer;
  }
}
</style>
