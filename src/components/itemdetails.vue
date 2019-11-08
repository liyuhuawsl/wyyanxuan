<template>
  <div class="container">
    <header>
      <router-link to="/home" class="iconfont icon-shouye"></router-link>
      <img src="../assets/网易严选img/首页/logo.png" alt />
      <router-link to="/search" class="iconfont icon-magnifier"></router-link>
      <router-link to="/shoppingcart" class="iconfont icon-gouwuche2"></router-link>
    </header>
    <div class="bigimg"></div>
    <div class="Box">
        <img src="https://yanxuan.nosdn.127.net/4b0ab79102ac806f3d3a81505afd3159.png" alt="">
        <div class="text">
        <span>新人特价包邮</span>
        <span>新人专享</span>
        <span>正在抢购中</span>
        </div>
    </div>
    <div class="savemoney">
        领劵后再省15元，到手价--元
    </div>
    <p class="price">￥---</p>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.container {
    .bigimg {
        width: 100%;
        height: 7.5rem;
        background: url('https://yanxuan-item.nosdn.127.net/ed593b02440146dceec1e53d9c8521d5.png?imageView&quality=75&thumbnail=750x0') no-repeat center center;
        background-size: cover;
        
    }
  header {
    height: 1rem;
    width: 100%;
    background: #fafafa;
    line-height: 1rem;
    .icon-shouye {
      margin: 0 2rem 0 0.3rem;
    }
    .icon-magnifier {
      margin-right: 0.3rem;
    }
    .iconfont {
      font-size: 0.55rem;
      color: #333;
    }
    img {
      width: 1.5rem;
      height: 0.5rem;
      margin-right: 1.2rem;
    }
  }
  .Box {
      width: 100%;
      height: 1rem;
      box-sizing: border-box;
      img {
          float: left;
          width: 15%;
          height: 100%;
      }
      
      .text {
          width: 85%;
          background: #dd1a21;
          display: inline-block;
          height: 100%;
          line-height: 1rem;
          font-size: .25rem;
          font-weight: 600;
          span {
              color: #fff;
              padding: 0 .2rem;
          }
          span:nth-of-type(3) {
              padding-left: 1.2rem;
              font-size: .22rem;
              font-weight: normal;
          }
      }
  }
  .savemoney {
      width: 100%;
      height: 0.8rem;
      font-size: .25rem;
      line-height: .8rem;
      text-align: center;
      color: #f48f18;
      background: #fff0dd;
  }
  .price {
      font-size: .5rem;
      margin-left: .2rem;
      color: #dd1a21;
  }
}
</style>