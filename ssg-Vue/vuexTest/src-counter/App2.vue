<template>
  <div id="app">
    <p>click {{$store.state.count}} times, count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    evenOrOdd() {
      return this.$store.getters.evenOrOdd
    },
  },
  methods: {
    increment() {
      this.$store.dispatch('increment')
    },
    decrement() {
      this.$store.dispatch('decrement')
    },
    incrementIfOdd() {
      this.$store.dispatch('incrementIfOdd')
    },
    incrementAsync() {
      this.$store.dispatch('incrementAsync')
    },
  },
};
</script>

<style>
</style>
