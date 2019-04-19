<template>
  <section class="rsm-wrap-mg rsm-wrap rsm-wrap--skill">
    <h2 class="rsm-h">Skills</h2>
    <div class="skill__list relative flex flex-wrap space-between">
      <div class="skill__card center shadow-tr" v-for="Language in Languages">
        <div class="donut">
          <div class="donut__info flex bold">
            <div class="donut__label bold">
              {{ Language.term }}
            </div>
            <img :src=Language.icon />
          </div>
        </div>
        <div class="skill__name bold flex flex-center">
          {{ Language.name }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Skills',

    data () {
      return {
        Languages: [
          {
            name: 'php',
            icon: require('../assets/php.svg'),
            term: '5年',
          },
          {
            name: 'javascript',
            icon: require('../assets/javascript.svg'),
            term: '4年',
          },
          {
            name: 'jquery',
            icon: require('../assets/jquery.svg'),
            term: '4年',
          },
          {
            name: 'cakephp',
            icon: require('../assets/cakephp.svg'),
            term: '1年半',
          },
          {
            name: 'laravel',
            icon: require('../assets/laravel.svg'),
            term: '3ヶ月',
          },
          {
            name: 'vue',
            icon: require('../assets/vue.svg'),
            term: '3ヶ月',
          },
          {
            name: 'mysql',
            icon: require('../assets/mysql.svg'),
            term: '5年',
          },
          {
            name: 'postgresql',
            icon: require('../assets/postgresql.svg'),
            term: '6ヶ月',
          },
          {
            name: 'redis',
            icon: require('../assets/redis.svg'),
            term: '1年',
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .skill__card {
    width: 22%;
    margin: 0 0 2em;
    background: #edf2f7;
    border-radius: 13px;
    padding-top: 1.2em;
    position: relative
  }
  .donut {
    margin: 0 auto;
    position: relative
  }
  .donut > svg {
    transform: rotate(270deg) translatex(50%);
    transform-origin: 75% 75% 0
  }
  .donut .donut__circle--front {
    stroke-width: 16px;
    stroke-dasharray: 503.6548245744px;
    stroke-dashoffset: 503.6548245744px
  }
  .donut,
  .donut svg,
  .donut__info {
    width: 100px;
    height: 100px
  }
  .donut__info {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center
  }
  .donut__info img {
    width: 100px;
    height: 100px
  }
  .skill__card:not(.skill__card--add) .donut__info i {
    font-size: 28px;
    font-weight: bold;
    color: #c4ecff
  }
  .skill__name {
    margin: 1.2em 0 0;
    padding: 0.8em 0.6em 0.7em;
    border-top: solid 1px #fff;
    line-height: 1.6
  }
  .skill__name img {
    width: 30px;
    height: 30px;
    border-radius: 4px;
    display: block;
    margin-right: 8px
  }
  @media (max-width: 850px) {
    .skill__card,
    .skill__list::after {
      width: 30%
    }
  }
  @media (max-width: 600px) {
    .skill__card,
    .skill__list::after {
      width: 47%
    }

  }
  @media (max-width: 500px) {
    .skill__card {
      margin: 0 0 1.7em;
      border-radius: 7px;
      font-size: 0.9em
    }

  }
  .donut__label {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.6);
    line-height: 1.4;
    padding: 5px 10px;
    white-space: nowrap;
    font-size: 11px;
    color: #fff;
    z-index: 5;
    border-radius: 3px;
    transition: 0.2s ease-in-out;
    transition-delay: 0.5s;
    cursor: default
  }
  .skill__card:hover .donut__label {
    opacity: 1
  }
</style>