<template>
    <div class="container mb-4 mt-4" id="topics-panel">
        <div class="mt-1 mb-3">
            <button type="button" class="btn btn-dark">
                <router-link to="/topic-edit">Add topic</router-link>
            </button>
        </div>
        <ul class="list-group">
            <div class="mb-1">
                <router-link v-for="topic in topics" v-bind:to="{name: 'topic', params: { topicId: topic.id}}">
                    <li class="list-group-item list-group-item-dark" aria-disabled="true">{{ topic.title }}</li>
                </router-link>
            </div>
        </ul>
    </div>
</template>

<script src="./TopicsPanel.ts"></script>
<style src="./TopicsPanel.css"></style>
