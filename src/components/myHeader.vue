<template>
  <nav class="profile-tab">
    <div class="profile-tab__wrap">
      <div class="profile-tab__list flex">
        <router-link to="/" class="profile-tab__link bold" exact-active-class="active">Home</router-link>
        <router-link to="/Skills" class="profile-tab__link bold" exact-active-class="active">Skills</router-link>
        <router-link to="/Experience" class="profile-tab__link bold" exact-active-class="active">Experience</router-link>
        <router-link to="/Works" class="profile-tab__link bold" exact-active-class="active">Works</router-link>
        <router-link to="/Posts" class="profile-tab__link bold" exact-active-class="active">Posts</router-link>
      </div>
    </div>
  </nav>
</template>

<style>
  .profile-tab {
    border-bottom: solid 1px #e8eef5;
    z-index: 99;
    background: #fff
  }
  .profile-tab__list {
    list-style: none;
    max-width: 480px;
    margin: 0 auto;
    padding: 0.5em 0 0
  }
  .profile-tab__link {
    cursor: pointer;
    outline: 0;
    position: relative;
    display: inline-block;
    width: 33%;
    text-align: center;
    text-decoration: none;
    padding-bottom: 10px;
    color: #2c3e50;
    font-size: 14px
  }
  .profile-tab__link:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 80%;
    background: #329eff;
    height: 3px;
    transition: transform 0.2s ease-in-out;
    transform: translate(-50%, 0) scale(0, 1);
    transform-origin: center top
  }
  .profile-tab__link.active {
    color: #329eff;
    pointer-events: none
  }
  .profile-tab__link.active:before {
    transform: translate(-50%, 0) scale(1, 1)
  }
  .profile-tab__link:hover:before {
    transform: translate(-50%, 0) scale(1, 1)
  }
  @media(max-width: 767px) {
    .profile-tab__link {
      font-size: 13px
    }
    .profile-tab__link:before {
      width: 100%;
      transition: none
    }
  }
</style>
