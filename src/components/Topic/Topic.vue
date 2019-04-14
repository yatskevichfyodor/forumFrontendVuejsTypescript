<template>
    <div class="container mb-4 mt-4" id="topic">
        <div class="mb-3 d-flex">
            <h1>{{ title }}</h1>
<!--            <div class="ml-auto">-->
<!--                <button class="btn btn-dark mt-3">-->
<!--                    <router-link to="/topic-edit">Edit topic</router-link>-->
<!--                </button>-->
<!--            </div>-->
        </div>
        <ul class="list-group">
            <li v-for="comment in comments" class="list-group-item list-group-item-dark mb-1" aria-disabled="true">
                {{ comment.content }}
            </li>
            <input v-model="inputCommentContent" class="mt-3 list-group-item list-group-ite  m-dark mb-1" placeholder="Add comment"/>
            <button @click="addComment()" class="btn btn-dark" style="width:150px">Add comment</button>
        </ul>
    </div>
</template>

<script lang="ts" src="./Topic.ts"></script>
<style src="./Topic.css"></style>
