<template>
  <section class="rsm-wrap-mg rsm-wrap rsm-wrap--experience">
    <h2 class="rsm-h center">Experience</h2>
    <div class="exp__list relative flex flex-wrap">
      <span class="exp-line"></span>
      <div class="exp__wrapper" v-for="Experience in Experiences">
        <div class="exp__card">
          <div class="exp__year">
            <span>{{ Experience.exp__begin }}</span>
            <span>{{ Experience.exp__end }}</span>
          </div>
          <div class="exp__place">{{ Experience.exp__place }}</div>
          <div class="exp__description">{{ Experience.exp__description }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Experience',
    data () {
      return {
        Experiences: [
          {
            exp__begin: '2013/2',
            exp__end: ' - 2013/4',
            exp__place: 'エンジニアテックキャンプ',
            exp__description: '未経験者を対象とした3ヶ月間のテックキャンプ。1ヶ月ごとに試験があり、成績が悪いと終了になってしまうが無事3ヶ月間やりきりました。プログラミングの基本知識を勉強したらりLAMP環境で勉強し、MVCのコーディング方法やjavascript,jqueryなどを学びました。'
          },
          {
            exp__begin: '2013/8',
            exp__end: ' - 2013/11',
            exp__place: 'ゲーム会社のサポートエンジニア',
            exp__description: 'ブラウザゲームのサポート開発やCS対応を担当しました。'
          },
          {
            exp__begin: '2013/12',
            exp__end: ' - 2014/7',
            exp__place: 'IT会社のエンジニア',
            exp__description: '中規模ECサイトのリファクタリング担当。PHP4系でコーディングされていたサイトをZendFrameworkに乗せてPHP5系で動作するようにリプレイスしました。チーム開発として初めてGit管理のコーディングを行いました。'
          },
          {
            exp__begin: '2014/8',
            exp__end: ' - 2015/6',
            exp__place: 'ゲーム会社のエンジニア',
            exp__description: 'ブラウザゲームのサーバーサイドエンジニアを担当しました。初めて本番環境へのデプロイを経験。開発サーバーから本番サーバーにrsyncでの行なっていました。リリース時間は1時間しかなくリソースのデプロイに時間が掛かっていたのが印象的でした。'
          },
          {
            exp__begin: '2015/7',
            exp__end: ' - 2015/12',
            exp__place: 'IT会社のエンジニア',
            exp__description: '大手ショッピングモールのポイントサイトを担当しました。サイトのSSL化のテスト、ポイント失効バッチ作成などの作業を行いました。'
          },
          {
            exp__begin: '2016/1',
            exp__end: '2016/6',
            exp__place: '某ゲーム会社のエンジニア',
            exp__description: 'ネイティブゲームのサーバーサイドエンジニアを担当しました。Ruby言語に初挑戦しました。アプリの配信担当として本番環境へのデプロイ作業を行なっていました。管理画面の改修を行なったり新しいゲーム性の開発にチャレンジさせてもらったりしました。'
          },
          {
            exp__begin: '2016/7',
            exp__end: ' - 2017/3',
            exp__place: '某ゲーム会社のエンジニア',
            exp__description: 'ブラウザゲームのサーバーサイドエンジニアを担当しました。AWSを使用したクラウドサーバー環境での業務を行いました。新人エンジニアのメンターとして教育にも関わることができました。'
          },
          {
            exp__begin: '2017/4',
            exp__end: ' - 2018/7',
            exp__place: 'ゲーム会社のエンジニア',
            exp__description: 'ブラウザゲームのサーバーサイドエンジニアを担当しました。'
          },
          {
            exp__begin: '2018/8',
            exp__end: ' -',
            exp__place: '倉庫会社のエンジニア',
            exp__description: '新サービスのサーバーサイドエンジニアを担当しています。'
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .rsm-wrap--experience {
    margin-bottom: 3.5em;
  }
  .exp__list {
    margin: 2.5em 0 4.5em;
    padding: 2.5em 0;
  }
  .exp-line {
    position: absolute;
    left: 50%;
    top: -1em;
    background: #d1e9ff;
    width: 3px;
    height: 100%;
    height: calc(100% + 1em);
  }
  .exp-line:before, .exp-line:after {
    position: absolute;
    content: "";
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #75bdff;
    display: block;
    top: 100%;
    left: -4px;
  }
  .exp-line:before {
    left: -10px;
    top: 0;
    width: 23px;
    height: 23px;
    border: solid 3px #b6dcff;
  }

  .exp__wrapper {
    width: 43%;
    width: calc(50% - 50px)
  }
  .exp__wrapper:nth-child(odd) {
    margin: 3.5em 0 0 auto
  }
  .exp__wrapper:nth-child(even) {
    margin-bottom: 3.5em
  }
  .exp__wrapper:last-child {
    margin-bottom: 0
  }
  .exp__wrapper:nth-child(5n+1) .exp__card {
    border-color: #9da6f7
  }
  .exp__wrapper:nth-child(5n+1) .exp__card .exp__year {
    color: #9da6f7
  }
  .exp__wrapper:nth-child(5n+3) .exp__card {
    border-color: #6cd3f7
  }
  .exp__wrapper:nth-child(5n+3) .exp__card .exp__year {
    color: #6cd3f7
  }
  .exp__wrapper:nth-child(5n+4) .exp__card {
    border-color: #ffbe7e
  }
  .exp__wrapper:nth-child(5n+4) .exp__card .exp__year {
    color: #ffbe7e
  }
  .exp__wrapper:nth-child(5n+5) .exp__card {
    border-color: #ff8484
  }
  .exp__wrapper:nth-child(5n+5) .exp__card .exp__year {
    color: #ff8484
  }
  .exp__wrapper:nth-child(odd) .exp__card:before {
    right: auto;
    left: -50px
  }

  .exp__card {
    background: #edf2f7;
    border-top: solid 5px #75bdff;
    border-radius: 4px 4px 6px 6px;
    padding: 1.5em 2em;
    margin-bottom: 0;
    position: relative;
  }
  .exp__card:before {
    position: absolute;
    top: 30px;
    right: -52px;
    content: "";
    display: block;
    width: 36px;
    height: 3px;
    background: #d1e9ff;
  }
  .exp__year {
    font-weight: 500;
    font-size: 0.87em;
    color: #75bdff;
  }

  @media (max-width: 850px) {
    .rsm-wrap-mg {
      margin-top: 2.5em
    }
    .rsm-wrap--experience {
      margin-bottom: 3.5em
    }
  }

  @media (max-width: 660px) {
    .exp-line {
      left: 9px
    }
    .exp__list {
      margin: 1em 0 3.5em;
      padding: 0.5em 0
    }
    .exp__wrapper {
      width: 80%;
      width: calc(100% - 45px);
      margin: 1.1em 0 1.1em auto !important
    }
    .exp__wrapper .exp__card {
      padding: 1em 1.5em
    }
    .exp__wrapper .exp__card:before {
      width: 25px;
      right: auto;
      left: -34px !important
    }
  }
</style>