<template>
  <div class="home">
    <div v-if="tasks.length">
      <div v-for="task in tasks" :key="task.id">
        <Task :task="task" @deleteTask="getTasks()" />
      </div>
    </div>
  </div>
</template>

<script>
  import Task from '@/components/Task.vue';

  export default {
    name: 'Home',
    components: {
      Task   
    },
    data() {
      return {
        tasks: []
      }
    },
    mounted() {
      this.getTasks();
    },
    methods: {
      getTasks() {
        fetch('http://localhost:3000/tasks')
          .then(res => res.json())
          .then(data => {
            this.tasks = data;
          });
      }
    }
  }
</script>
