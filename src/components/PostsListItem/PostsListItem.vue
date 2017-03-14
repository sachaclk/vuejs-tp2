<!-- CSS -->
<style lang="stylus" src="./PostsListItem.styl"></style>

<!-- HTML -->
<template>
	<li class="posts-list-item" >
		<router-link :to="{ name: 'post_component', params: { postId: proppost.id} }">
			<div  class="posts-list-item__a">
				<img :src="proppost.thumbnail.image_url" alt="post image">
			</div>
			<h2 class="posts-list-item__h2">{{proppost.name}}</h2>
		</router-link>
		<p class="posts-list-item__p">{{proppost.votes_count}} upvotes</p>
		<h4 class="posts-list-item__h4">{{proppost.tagline}}</h4>
	</li>
</template>

<!-- JS -->
<script>

  export default {
	props: ['proppost']
  }

</script>
