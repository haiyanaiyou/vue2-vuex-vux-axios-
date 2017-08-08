<template>
  <div class="class">
    <div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError}">1</div>
  </div>
</template>

<script>
export default {
  name: 'class',
  data () {
    return {
      isActive: true,
      hasError: true
    }
  }
}
</script>

<style scoped>
  .static {
    width: 300px;
    border: 2px solid bisque;
  }
  .active {
    background: teal;
  }
</style>