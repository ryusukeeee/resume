<template>
  <div class="about">
    <table>
      <tbody>
      <tr>
        <th>Name.</th>
        <td>Ryusukeeee</td>
      </tr>
      <tr>
        <th>Age.</th>
        <td>31</td>
      </tr>
      <tr>
        <th>GitHub.</th>
        <td><a href='https://github.com/Ryusukeeee' target="_blank">@ryusukeeee</a></td>
      </tr>
      <tr>
        <th>Qiita.</th>
        <td><a href="https://qiita.com/ryusukeeee" target="_blank">@ryusukeeee</a></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
  .about {
    border-radius: 50px;
    margin: 20px auto;
  }
  .about table {
    padding: 50px 0px;
    font-size: 18px;
    display: inline-block;
    text-align: left;
  }
  .about table th {
    padding-right: 20px;
    font-weight: normal;
    vertical-align: middle;
  }
  .about table td {
    font-size: 20px;
    padding : 5px 0px;
  }
  .about table td a {
    margin: 0px;
    height: 25px;
    font-size: 18px;
    color: #6495ed;
    line-height: 25px;
    text-decoration: none;
  }
</style>
