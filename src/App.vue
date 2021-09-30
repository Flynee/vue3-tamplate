<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div>
    <router-view/>
</template>

<style lang="scss">
@import url('~@/assets/scss/global.scss');

#app {
    color: #2c3e50;
    font-family: SourceHanSansCN, DINPro, sans-serif;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#nav {
    padding: 30px;

    a {
        color: #2c3e50;
        font-weight: bold;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
