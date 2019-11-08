<template>
  <div>
    <div class="main_content">
      <a href="javascript:;">
        <div class="m-name">
          <img
            src="https://yanxuan.nosdn.127.net/df63520ec927ac17a5c1f6bf1702408a.jpg?imageView&quality=65&thumbnail=56y56"
            alt
          />
          <span>选妹</span>
        </div>
        <div class="title">双11、黑五有哪些不能错过的好东西？一定要看的购物季必买清单！</div>
        <div class="m-pic">
          <img
            src="https://yanxuan.nosdn.127.net/602ce4ac685a02279b6671753c342ba5.jpg?imageView&quality=65&thumbnail=690y376"
            alt
          />
        </div>
        <div class="m-rcount">
          <i class="ioc"></i>
          <span>43.5k人看过</span>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.main_content {
  width: 100%;
  padding: 0.18rem 0.3rem;
  box-sizing: border-box;
  background: #fff;
  a {
    width: 100%;
    display: inline-block;
    .m-name {
      height: 0.56rem;
      line-height: 0.56rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 0.24rem;
      img {
        width: 0.56rem;
        height: 0.56rem;
        overflow: hidden;
        border-radius: 50%;
        box-sizing: border-box;
        border: 0.01rem solid #d9d9d9;
        margin: 0 0.12rem;
        display: inline-block;
      }
      span {
        // display: block;
        color: #333;
        font-size: 0.28rem;
        vertical-align: top;
      }
    }
    .title {
      font-size: 0.36rem;
      color: #333;
      line-height: 0.52rem;
      margin-bottom: 0.16rem;
      // margin: -.08rem 0 .16rem 0;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      font-family: PingFangSC-Regular;
    }
    .m-pic {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .m-rcount {
    font-size: 0.22rem;
    color: #999;
    height: 0.32rem;
    line-height: 0.32rem;
    margin: 0.18rem;
    .icon {
      width: 0.28rem;
      height: 0.32rem;
      vertical-align: middle;
      margin-right: 0.08rem;
    }
  }
}
</style>