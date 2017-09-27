<template>
  <div id="app">
    <diagram-panel></diagram-panel>
  </div>
</template>

<script>
import DiagramPanel from './components/DiagramPanel';
import miniToastr from 'mini-toastr';

export default {
  name: 'app',
  components: {
    DiagramPanel
  },
  mounted () {
    miniToastr.init();
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
