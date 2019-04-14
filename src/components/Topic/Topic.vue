<template>
    <div class="container mb-4 mt-4" id="topic">
        <h1>{{ title }}</h1>
        <div class="mt-1 mb-3">
<!--            <button type="button" class="btn btn-dark">-->
<!--                <router-link to="/topic-edit">Edit topic</router-link>-->
<!--            </button>-->
        </div>
        <ul class="list-group">
            <li v-for="comment in comments" class="list-group-item list-group-item-dark mb-1" aria-disabled="true">
                {{ comment.content }}
            </li>
            <input class="list-group-item list-group-item-dark mb-1" placeholder="Add comment"/>
        </ul>
    </div>
</template>

<script lang="ts" src="./Topic.ts"></script>
<style src="./Topic.css"></style>
