<template>
  <div>
    <div class="w-header1">
      <div class="w-header11" v-for="item in linkData" :key="item.id">
        <a :class="{active:active===item.id}" v-html="item.title" @click="active=item.id"></a>
      </div>
    </div>
    <div class="w-main">
      <div class="mian_banner">
        <a href="javascript:;">
          <img src="../../assets/网易严选img/识物/banner1.jpg" alt />
        </a>
      </div>
      <content1></content1>
      <content1></content1>
      <content1></content1>
      <content1></content1>
      <content1></content1>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import content1 from "./content1";
let linkData = [
  {
    id: 1,
    title: "推荐"
  },
  {
    id: 2,
    title: "认识严选"
  },
  {
    id: 3,
    title: "好物大赏"
  },
  {
    id: 4,
    title: "好货内购价"
  },
  {
    id: 5,
    title: "选购指南"
  },
  {
    id: 6,
    title: "特色系列"
  },
  {
    id: 7,
    title: "晒单"
  },
  {
    id: 8,
    title: "回购榜"
  },
  {
    id: 9,
    title: "甄选家进工厂"
  },
  {
    id: 10,
    title: "严选HOME"
  },
  {
    id: 11,
    title: "达人"
  }
];
export default {
  data() {
    return {
      linkData,
      active: 1
    };
  },
  components: {
    content1
  }
};
</script>
<style lang="less" scoped>
.w-header1 {
  font-size: 0;
  width: 100%;
  background: #fafafa;
  z-index: 999;
  position: fixed;
  top: 1rem;
  left: 0;
  height: 0.73rem;
  padding-bottom: 0.2rem;
  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: auto;
  border-bottom: 0.02rem solid #aaa;
  box-sizing: border-box;
  .w-header11 {
    display: inline-block;
    a {
      display: inline-block;
      height: 0.72rem;
      line-height: 0.72rem;
      box-sizing: border-box;
      font-size: 0.28rem;
      color: #7f7f7f;
      padding: 0 0.08rem;
      margin: 0 0.2rem;
      // vertical-align: middle;
    }
    a.active {
      color: #b4282d;
      border-bottom: 0.04rem solid #b4282d;
    }
  }
}
.w-header1::-webkit-scrollbar {
  display: none;
}
.w-main {
  width: 100%;
  margin-top: 0.5rem;
  position: absolute;
  background-color: #fafafa;
  .mian_banner {
    background: #fff;
    margin: 0.2rem 0;
    box-sizing: border-box;
    padding: 0.36rem 0.3rem;
    a {
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.08rem;
      }
    }
  }
}
</style>