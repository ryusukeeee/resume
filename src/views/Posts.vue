<template>
  <section class='rsm-wrap-mg rsm-wrap rsm-wrap--post'>
    <h2 class="rsm-h center">Posts</h2>
    <div class="post__list relative flex flex-wrap space-between">
      <div class="post__card" v-for="post in posts_qiita">
        <div class="post-card__link">
          <a :href="post.url">{{post.title}}</a>
        </div>
        <div class="post-card__info">
          <div class="post-card__icon">
            <span class="post-card__like"><font-awesome-icon icon="thumbs-up" /></span>
            <span class="">{{post.likes_count}}</span>
          </div>
          <div>
            <span class="post-card__tag" v-for="tag in post.tags" :key="tag.name">{{tag.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Posts',
    data () {
      return {
        posts_qiita: []
      }
    },
    async created () {
      try {
        let res = await axios.get('https://qiita.com/api/v2/users/ryusukeeee/items')
        this.posts_qiita = res.data
      } catch (e) {
        console.error(e)
      }
    }
  }
</script>

<style scoped>
  .rsm-wrap--post {
    margin-bottom: 3.5em;
  }
  .post__card {
    position: relative;
    display: block;
    width: 47%;
    background: #edf2f7;
    border-radius: 4px 4px 6px 6px;
    padding: 1.5em 2em;
    margin-bottom: 0;
  }
  .post__card:hover {
    box-shadow: 0 25px 45px -15px rgba(0, 0, 0, 0.15)
  }
  .post-card__icon {
    width: 68px;
    height: 34px;
    margin: 0 auto 5px;
    text-align: center;
  }
  .post-card__like {
    display: inline-block;
    margin: 5px;
    width: 28px;
    text-align: center;
    font-size: 17px;
    color: #55c500;
  }
  .post-card__tag {
    display: inline-block;
    font-size: 0.85em;
    line-height: 1;
    white-space: nowrap;
    padding: 4px 8px;
    margin-left: 1px;
    border-radius: 10px;
    background: #dce4ec;
    font-weight: normal;
  }
  @media (max-width: 850px) {
    .rsm-wrap--post {
      margin-bottom: 2.5em
    }
  }
  @media (max-width: 660px) {
    .post__card {
      width: 100%;
    }
  }
</style>