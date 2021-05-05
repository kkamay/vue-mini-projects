<template>
  <div class="home">
    <FilterNav @filterChange="setFilterType($event)" :filterType="filterType" />
    <div v-if="tasks.length">
      <div v-for="task in filteredTasks" :key="task.id">
        <Task :task="task" @deleteTask="getTasks()" />
      </div>
    </div>
  </div>
</template>

<script>
  import Task from '@/components/Task.vue';
  import FilterNav from '@/views/FilterNav.vue';

  export default {
    name: 'Home',
    components: {
      Task,
      FilterNav 
    },
    data() {
      return {
        tasks: [],
        filterType: 'a'
      }
    },
    computed: {
      filteredTasks() {
        if (this.filterType === 'a') {
          return this.tasks;
        } else if (this.filterType === 'c') {
          return this.tasks.filter(task => task.complete);
        } else {
          return this.tasks.filter(task => !task.complete);
        }
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
      },
      setFilterType(filterType) {
        this.filterType = filterType;
      }
    }
  }
</script>
