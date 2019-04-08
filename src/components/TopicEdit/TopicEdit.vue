<template>
    <div class="container form-group mb-4 mt-4" id="topics-panel">
        <input v-model="topic.title" placeholder="Title" class="form-control mb-1"/>
        <textarea v-model="topic.comments[0].content" placeholder="Content" class="form-control mb-1"/>
        <button @click="createTopic()" class="btn btn-light">Create</button>
    </div>
</template>

<script src="./TopicEdit.ts"></script>
<style src="./TopicEdit.css"></style>
