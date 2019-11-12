<template>
  <div class="cate-Container">
    <div class="cateLeft">
      <ul class="cateLeft-list">
        <li
          v-for="item in result"
          :key="item.id"
          :class="{active:num===item.id}"
          @click="num=item.id"
        >
          <router-link
            :to="{path:'/classify/list', 
            query:{id:item.id}}"
            :class="{active:num===item.id}"
            @click="num=item.id"
          >{{item.title}}</router-link>
        </li>
      </ul>
    </div>
    <HandleRList :ListData="result" v-if="result"></HandleRList>
    <!-- <div class="cateRight">
      <div class="banner">
        <img
          src="https://yanxuan.nosdn.127.net/fcb646136cabf0b597d41e459de631df.jpg?imageView&thumbnail=0x196"
          alt
        />
      </div>
       <div class="cateRight-list clearfix">
        <ul>
          <li  v-for="({children:[item],id}) in result" class="cateItem" :key="id">
            <a href="javascript:;">
              <img :src="item.pic_url"/>
              <p>{{item.describe}}</p> 
            </a>
          </li>
        </ul>
      </div> 
    </div>-->
  </div>
</template>
<script>
import * as types from "../../store/store-types";
import HandleRList from "./HandleRList";
export default {
  data() {
    return {
      num: 1
    };
  },

  components: {
    HandleRList
  },
  computed: {
     result() {
      let classifyData = this.$store.state.classify.classifyData;
      return classifyData;
    }
  },

  created() {
    if (this.$store.state.classify.classifyData === null) {
      this.$store.dispatch("classify/" + types.QUERY_CLASSIFY_LIST);
    }
  }
};
</script>
<style lang="less" scoped>
.cate-Container {
  width: 100%;
  margin-top: 1rem;
  .cateLeft {
    float: left;
    width: 20%;
    padding: 0.53rem 0;
    li {
      box-sizing: border-box;
      width: 1.62rem;
      height: 0.67rem;
      line-height: 0.67rem;
      margin-bottom: 0.4rem;
      text-align: center;
      font-size: 0.26rem;
      a {
        color: #333;
      }
      a.active {
        color: #dd1a21;
      }
    }
    li:nth-last-child(1) {
      margin-bottom: 1.2rem;
    }
    li.active {
      border-left: 0.05rem solid #dd1a21;
    }
  }
}
</style>