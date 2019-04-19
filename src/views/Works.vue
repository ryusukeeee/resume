<template>
  <section class='rsm-wrap-mg rsm-wrap rsm-wrap--work'>
    <h2 class="rsm-h center">Works</h2>
    <div class="work__list relative flex flex-wrap space-between">
      <div class="work__card" v-for="Work in Works">
        <div class="work-card__img">
          <img src="../assets/logo.png" />
        </div>
        <div class="work-card__info">
          <h3 class="work-card__title">{{ Work.title }}</h3>
          <div class="work-card__description">{{ Work.description }}</div>
          <div>
            <span class="work-card__skill" v-for="skill in Work.skills">{{ skill }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Works',
    data () {
      return {
        Works: [
          {
            title: 'resume',
            description: '自分のresumeを纏めたものです。',
            skills: ['vue.js'],
          },
          {
            title: 'original-token',
            description: 'スマートコントラクトを使用したオリジナルトークンを作ってみたものです。',
            skills: ['truffle','openzeppelin-solidity','ganache','vue.js']
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .rsm-wrap--work {
    margin-bottom: 3.5em;
  }
  .work__card {
    position: relative;
    display: block;
    width: 47%;
    background: #edf2f7;
    margin-bottom: 3em;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 20px 30px -15px rgba(0,0,0,0.08);
    text-decoration: none;
    transition: 0.2s ease-in-out;
    opacity: 1;
    animation: cardSlideIn 0.4s ease-in-out;
  }
  .work__card:hover {
    box-shadow: 0 25px 45px -15px rgba(0, 0, 0, 0.15)
  }
  .work-card__info {
    padding: 1.4em;
  }
  .work-card__description {
    margin: 10px 0;
  }
  .work-card__skill {
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
  @media (max-width: 660px) {
    .work__card {
      width: 100%;
    }
  }
</style>