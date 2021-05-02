<template>
    <h3 v-if="reactionTime">Your reaction time is: {{ reactionTime }} ms.</h3>
</template>

<script>
export default {
    props: ['reactionTime']
}
</script>