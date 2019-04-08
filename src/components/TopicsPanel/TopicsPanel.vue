<template>
    <div class="container mb-4 mt-4" id="topics-panel">
        <div class="mt-1 mb-3">
            <button type="button" class="btn btn-dark">
                <router-link to="/topic-edit">Add topic</router-link>
            </button>
        </div>
        <ul class="list-group" data-bind="foreach: topics">
            <a v-for="topic in topics" :href="'/topic/' + topic" class="mb-1">
                <li class="list-group-item list-group-item-dark" aria-disabled="true">{{ topic.title }}</li>
            </a>
        </ul>
    </div>
</template>

<script src="./TopicsPanel.ts"></script>
<style src="./TopicsPanel.css"></style>
