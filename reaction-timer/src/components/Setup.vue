<template>
    <button class="play-button" :class="{'disabled': gameStarted}" @click="startGame()" :disabled="gameStarted">Play!</button>
    <div class="hit-me-wrapper">
        <div v-for="item in divList" :key="item" class="hit-me" @click="clickedDiv(item)" :class="{'hit-me-active': correctDiv === item}">
            {{ hitMe }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            gameStarted: false,
            hitMe: 'HIT THE CORRECT ME!',
            correctDiv: -1,
            divList: [0,1,2],
            startTime: undefined,
            endTime: undefined
        }
    },
    methods: {
        startGame() {
            this.gameStarted = true;

            setTimeout(() => {
                this.correctDiv = Math.floor(Math.random() * 3);

                this.startTime = performance.now();
            }, 3000);
        },
        clickedDiv(divNo) {
            if (this.gameStarted && this.correctDiv !== -1) {
                if (divNo === this.correctDiv && !this.endTime) {
                    this.endTime = performance.now();

                    this.$emit('reactionTimeArrived', this.endTime - this.startTime);
                }
            }
        }
    }
}
</script>

<style scoped>
.play-button {
    width: 200px;
    height: 50px;
    background-color: cornflowerblue;
    color: white;
    font-size: 20px;
    margin-top: 50px;
    margin-bottom: 50px;
    border-radius: 10px;
}

.play-button:hover {
    cursor: pointer;
}

.disabled {
    background-color: rgb(40, 107, 231);
}

.hit-me {
    width: 350px;
    height: 350px;
    background-color: rgb(250, 83, 83);
    font-size: 25px;
    margin-left: 50px;
    margin-right: 50px;
    color: white;
    border-radius: 10px;
    display:flex;
    justify-content:center;
    align-items:center;
}

.hit-me:hover {
    cursor: pointer;
    border: 2px solid;
}

.hit-me-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.hit-me-active {
    background-color: rgb(83, 209, 83) !important;
}
</style>