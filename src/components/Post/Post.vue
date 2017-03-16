<!-- CSS -->
<style lang="stylus" src="./Post.styl"></style>

<!-- HTML -->
<template>
    <div v-if="post">
        <span>Post :</span>
        <span>{{ post.name}}</span>
        <img :src="post.thumbnail.image_url">
        <!--<span>{{ post.}}</span>-->
        <span>Nombre de commentaires : {{ post.comments_count}}</span>
    </div>
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