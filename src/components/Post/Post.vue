<!-- CSS -->
<style lang="stylus" src="./Post.styl"></style>

<!-- HTML -->
<template>
    <!--<div v-if="post" :style="{ backgroundImage: 'url(' + post.thumbnail.image_url + ')' }" class="app-conteneur">-->
    <div v-if="post" class="app-conteneur">
    <div  class="app-conteneur">
            <div class="head_name">
            <div class="title">{{post.name}}</div>
            <div class="tagline">{{post.tagline}}</div>
            <div class="space"></div>
            <p class="date">Date: {{post.day}}</p>
                <div class="space"></div>
                <ul class="tag">

                    <li v-for="topics in post.topics" :key="topics.id" class="tag_li">#{{ topics.name }}</li>
                </ul>
            </div>
            <!--</div>-->

            <img :src="post.media.image_url" >

            <div class="content">

                <ul>
                    <li v-for="media in post.media" :key="media.id" class="img_li"><img :src="media.image_url"></li>
                </ul>
                <ul class="makers">
                    <p class="by">By</p>
                    <li v-for="makers in post.makers" :key="makers.id" class="makers_li">{{ makers.name }}</li>
                </ul>
                <div>Nombre de commentaires : {{ post.comments_count }}</div>
                <button>Voir les commentaires</button>
            </div>
            <!-- <img class="img-title" :src="post.thumbnail.image_url">-->
            <!--<span>{{ post.}}</span>-->
            <footer class="footer">

            <div class="related">
                <h3>Related posts :</h3>
                <ul class="">
                    <li v-for="related_posts in post.related_posts" :key="related_posts.id" :style="{ backgroundImage: 'url(' + related_posts.thumbnail.image_url + ')' }">

                        <div class="related_box">
                        <p class="related_name">{{ related_posts.name }}</p>

                        <p class="related_notation">↗{{ related_posts.votes_count }}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </footer></div></div>

</template>

<!-- JS -->
<script>

    import axios from 'axios'
    import _ from 'lodash'

    export default {



        data() {
            return {
                post: null
            }
        },

        created() {
            this.getPost(this.$route.params.postId)
        },
        methods: {

            getPost(postId) {
                // Utilisez axios pour récupérer les posts de l'API ProductHunt
                // Variable à modifier : this.posts
                axios.get('/posts/' + postId)
                    .then((response) => {
                        console.log(response.data.post)

                        this.post = response.data.post

                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            }

        }

    }
</script>