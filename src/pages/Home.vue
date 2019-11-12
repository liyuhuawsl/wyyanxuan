<template>
    <div>
        <router-view></router-view>
        <pageFooter></pageFooter>
    </div>
</template>

<script>
import pageFooter from '../components/pageFooter';
export default {
    components: {
        pageFooter
    }
}
</script>

<style lang="less" scoped>
.container {
    p {
        font-size: .3rem;
        width: 3rem;
    }
}
</style>