<template>
    <div class="video-player" :title="title">
        <iframe width="560" height="315" :src="url" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</template>

<script>
    export default {
        name: 'YouTube',
        props: {
            title: { type: String, required: true },
            url: { type: String, default: 'https://www.youtube.com/embed/TesDIVA28rM' }
        }
    }
</script>

<style>
    .video-player{
        width: 100%;
        padding: 2rem 0;
    }
    .video{
        width: 100%;
        height: auto;
    }
</style>