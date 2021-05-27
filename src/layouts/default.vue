<template>
  <!-- слой с меню -->
  <div class="background">
    <Menu v-if="menu" />
    <slot />
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue';

export default {
  name: 'Background',
  components: {
    Menu,
  },
  data() {
    return {
      menu: false,
    };
  },
  created() {
    window.addEventListener('keyup', (e) => this.onKeyUp(e));
  },
  beforeDestroy() {
    window.removeEventListener('keyup', (e) => this.onKeyUp(e));
  },
  methods: {
    onKeyUp(e) {
      if (e.key === 'Escape') this.toggleMenu();
    },
    toggleMenu() {
      this.menu = !this.menu;
    },
  },
};
</script>
