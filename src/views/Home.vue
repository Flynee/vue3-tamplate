<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'Home',
    components: {
        HelloWorld,
    },
    setup() {
        const a = {
            k: 1,
        };
        const b = 2;
        a.k ??= b;
        const str = `
            hellow
        `;
        console.log(str);
        console.log(a.k, a.name ?? 1, a?.value || 3);
    },
};
</script>
