<!-- CSS -->
<style lang="stylus" src="./Post.styl"></style>

<!-- HTML -->
<template>
    <!--<div v-if="post" :style="{ backgroundImage: 'url(' + post.thumbnail.image_url + ')' }" class="app-conteneur">-->
    <div v-if="post" class="app-conteneur">
    <div  class="app-header">
            <div class="app-header_head-name">
            <div class="app-header_title">{{post.name}}</div>
            <div class="app-header_tagline">{{post.tagline}}</div>
            <p class="app-header_date">Date: {{post.day}}</p>
                <ul class="app-header_tag">
                    <li v-for="topics in post.topics" :key="topics.id" class="tag_li">
                        <router-link :to="{name:'topic_component', params:{topicId:topics.id}}" > #{{ topics.name }}
                        </router-link>
                   </li>
                </ul>
            </div>
            </div>

            <img :src="post.media.image_url" >

            <div class="content">

                <ul>
                    <li v-for="media in post.media" :key="media.id" class="img_li"><img :src="media.image_url"></li>
                </ul>
                <ul class="makers">

                    <p class="content_by">By</p>
                    <li v-for="makers in post.makers" :key="makers.id" class="makers_li">
                        <router-link :to="{name:'maker_component', params:{makerId:makers.id}}" >{{ makers.name }}
                        </router-link>
                    </li>
                </ul>
                <div>Nombre de commentaires : {{ post.comments_count }}</div>
                <button @click="show_comments=true">Voir les commentaires</button>
                <ul v-if="show_comments" class="">
                    <li v-for="comments in post.comments" :key="comments.id" class="content_comments">
                        {{ comments.body }} <p class="content_comments_name">Auteur: {{ comments.user.name }}</p>
                    </li>
                </ul>
            </div>

        <!-- <img class="img-title" :src="post.thumbnail.image_url">-->
            <!--<span>{{ post.}}</span>-->
            <footer>

            <div class="related">
                <h3>Related posts :</h3>
                <ul class="">

                    <li v-for="related_posts in post.related_posts" :key="related_posts.id" :style="{ backgroundImage: 'url(' + related_posts.thumbnail.image_url + ')' }">
                        <router-link :to="{name:'post_component', params:{postId:related_posts.id}}" >
                            <div class="related_box">
                            <p class="related_name">{{ related_posts.name }}</p>
                            <p class="related_notation">↗{{ related_posts.votes_count }}</p>
                            </div>
                        </router-link>

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
                post: null,
                show_comments: false
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
            },

            visibilite(thingId)
            {
                let targetElement;
                targetElement = document.getElementById(thingId) ;
                if (targetElement.style.display == "none")
                {
                    targetElement.style.display = "block" ;
                } else {
                    targetElement.style.display = "none" ;
                }
            }

        }

    }


</script>