<template>
  <nav class="filter-nav">
      <button @click="updateFilter('a')" :class="{ active: filterType === 'a' }">View All</button>
      <button @click="updateFilter('c')" :class="{ active: filterType === 'c' }">Only Completed</button>
      <button @click="updateFilter('o')" :class="{ active: filterType === 'o' }">Only Ongoing</button>
  </nav>
</template>

<script>
export default {
    props: ['filterType'],
    methods: {
        updateFilter(filterType) {
            this.$emit('filterChange', filterType);
        }
    }
}
</script>

<style>
.filter-nav button {
    background: none;
    border: none;
    color: #bbb;
    outline: none;
    font-size: 12px;
    text-transform: uppercase;
    margin-right: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
}

.active {
    color: #555 !important;
}
</style>