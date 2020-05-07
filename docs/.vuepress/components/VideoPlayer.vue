<template>
    <div class="video-player" :title="title">
        <video class="video" loop autoplay muted>
            <source :src="mp4Url" type="video/mp4" />
            <source :src="webmUrl" type="video/webm" />
        </video>
    </div>
</template>

<script>
    export default {
        name: 'VideoPlayer',
        props: {
            title: { type: String, required: true },
            mp4Url: { type: String, default: '/media/samplevideo.mp4' },
            webmUrl: { type: String, default: '/media/samplevideo.webm' }
        }
    }
</script>

<style>
    .video-player{
        width: 100%;
    }
    .video{
        width: 100%;
        height: auto;
    }
</style>