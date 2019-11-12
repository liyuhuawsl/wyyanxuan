<template>
  <div class="cateRight">
    <div class="banner">
      <img
        src="https://yanxuan.nosdn.127.net/fcb646136cabf0b597d41e459de631df.jpg?imageView&thumbnail=0x196"
        alt
      />
    </div>
    <div class="cateRight-list clearfix">
      <ul>
        <li class="cateItem" v-for="(item,index) in filterData[0].children" :key="index">
          <a href="javascript:;">
            <img :src="item.pic_url" />
            <p v-text="item.describe"></p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filteData: null
    };
  },
  created() {
    if (!this.$route.query.id) {
      this.$route.query.id = 1;
      
    }
  },
  computed: {
    filterData() {
      return this.ListData.filter(item=> {
        return item.id === parseInt(this.$route.query.id);
      });
    }
  },
  props: ["ListData"]
};
</script>
<style lang="less" scoped>
.cateRight {
  float: left;
  width: 80%;
  padding: 0.4rem 0.4rem 0.28rem;
  box-sizing: border-box;
  .banner {
    width: 100%;
    margin-bottom: 0.42rem;
    img {
      width: 100%;
    }
  }
  .cateItem {
    float: left;
    width: 28%;
    margin-left: 0.25rem;
    text-align: center;
    min-height: 2.2rem;

    a {
      color: #333;
      img {
        width: 100%;
      }
    }
  }
}
</style>