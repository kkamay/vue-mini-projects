<template>
  <h1>Calculate Your Reaction Time!</h1>
  <Setup @reactionTimeArrived="setReactionTime($event)"/>
  <Result :reactionTime="reactionTime" />
</template>

<script>
import Setup from '@/components/Setup.vue';
import Result from '@/components/Result.vue';

export default {
  name: 'App',
  components: {
    Setup,
    Result
  },
  data() {
    return {
      reactionTime: undefined
    }
  },
  methods: {
    setReactionTime(e) {
      this.reactionTime = e;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
