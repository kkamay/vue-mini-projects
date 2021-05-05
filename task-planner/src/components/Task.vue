<template>
    <div class="project" :class="{'completed': task.complete}">
        <div class="actions">
            <h3 @click="showHideDetails()">{{ task.title }}</h3>
            <div class="icons">
                <router-link :to="{ name: 'EditTask', params: { id: task.id }}">
                    <span class="material-icons">edit</span>
                </router-link>
                <span class="material-icons" @click="deleteTask()">delete</span>
                <span class="material-icons" v-if="!task.complete" @click="complete(true)">done</span>
                <span class="material-icons" v-if="task.complete" @click="complete(false)">close</span>
            </div>
        </div>
        <div class="details" v-if="showDetails">
            <p>{{ task.details }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['task'],
    data() {
        return {
            showDetails: false,
            uri: 'http://localhost:3000/tasks/' + this.task.id
        }
    },
    methods: {
        showHideDetails() {
            this.showDetails = !this.showDetails;
        },
        deleteTask() {
            fetch(this.uri, {
                method: 'DELETE'
            }).then(() => {
                this.$emit('deleteTask', this.task.id);
            });
        },
        complete(isCompleted) {
            fetch(this.uri, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ complete: isCompleted })
            }).then(() => {
                this.task.complete = isCompleted;
            });
        }
    }
}
</script>

<style scoped>
    .project {
        margin: 20px auto;
        background: white;
        padding: 10px 20px;
        border-radius: 4px;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
        border-left: 4px solid red;
        cursor: pointer;
    }

    .completed {
        border-left: 4px solid green !important;
    }

    .actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .material-icons {
        font-size: 24px;
        margin-left: 10px;
        color: #bbb;
        cursor: pointer;
    }

    .material-icons:hover {
        color: #777;
    }
</style>