<template>
  <main>
    <!-- 版头 -->
    <header>
      <span>购物车</span>
      <a href="javascript:;">领券</a>
    </header>

    <!-- 30天无忧退货 -->
    <div>
      <ul>
        <li class="item">
          <i class="u-icon u-icon-servicePolicy"></i>
          <span>30天无忧退货</span>
        </li>
        <li class="item">
          <i class="u-icon u-icon-servicePolicy"></i>
          <span>48小时快速退款</span>
        </li>
        <li class="item">
          <i class="u-icon u-icon-servicePolicy"></i>
          <span>满88元免邮费</span>
        </li>
      </ul>
    </div>
    <div class="img"></div>
    <div class="txt">去添加点什么吧</div>
    <router-link to="/personal" class="button">登录</router-link>
    <section>
      <div class="Box">
        <button class="iconfont icon-duihao"></button>
        <img
          src="https://yanxuan-item.nosdn.127.net/78b588dfc438efd844c01bb8fae55589.png?imageView&thumbnail=160x0&quality=75"
          alt
        />
        <div class="content">
          <p>日式和风声波式电动牙刷</p>
          <span class="price">￥110</span>
          <span class="num">
            <span class="eee">-</span>
            <span>1</span>
            <span class="eee">+</span>
          </span>
        </div>
      </div>
      <div class="Box">
        <button class="iconfont icon-duihao"></button>
        <img
          src="https://yanxuan-item.nosdn.127.net/78b588dfc438efd844c01bb8fae55589.png?imageView&thumbnail=160x0&quality=75"
          alt
        />
        <div class="content">
          <p>日式和风声波式电动牙刷</p>
          <span class="price">￥110</span>
          <span class="num">
            <span class="eee">-</span>
            <span>1</span>
            <span class="eee">+</span>
          </span>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="left">
        <button class="iconfont icon-duihao"></button>
        <span>已选&nbsp;(0)</span>
      </div>
      <div class="right">
        <span>合计：￥0</span>
        <button class="btn">下单</button>
      </div>
    </footer>
  </main>
</template>
<script>
export default {
    data() {
        return {
            flag: false
        }
    }
};
</script>
<style lang="less" scoped>
main {
  section {
      margin-bottom: 3rem;
    .Box {
        margin: .2rem 0;
        border: .05rem solid #eee;
      .content {
        float: right;
        width: auto;
        font-size: 0.3rem;
        color: #333;
        margin-top: .15rem;
        margin-right: .3rem;
        height: 100%;
        & > span {
          display: inline-block;
          padding-top: 0.8rem;
        }
        .num {
          padding-left: 1rem;
          span {
              font-size: .3rem;
            border: 0.01rem solid #777;
            display: inline-block;
            width: 0.5rem;
            height: 0.5rem;
            line-height: 0.5rem;
            text-align: center;
          }
          span.eee {
            color: #333;
          }
        }
      }
      width: 100%;
      height: 2rem;
      .icon-duihao {
        line-height: 1.5rem;
        display: inline-block;
        width: 0.45rem;
        height: 0.45rem;
        border-radius: 50%;
        color: #fff;
        border: 0.05rem solid #eee;
        background: #fff;
        margin: 0 0.3rem;
      }
      & > img {
        z-index: 33;
        margin-top: 0.2rem;
        width: 1.6rem;
        height: 1.6rem;
        background: url("https://yanxuan-item.nosdn.127.net/78b588dfc438efd844c01bb8fae55589.png?imageView&thumbnail=160x0&quality=75")
          no-repeat center center #eee;
        background-size: 80% 80%;
      }
    }
  }

  width: 100%;
  margin: 0 auto;
  .footer {
    z-index: 8888;
    width: 100%;
    height: 1rem;
    background: #fff;
    position: fixed;
    bottom: 1.25rem;
    border-top: 0.01rem solid #eee;
    border-bottom: 0.01rem solid #eee;
    line-height: 1rem;
    & > .left {
      float: left;
      .icon-duihao {
        line-height: 1rem;
        display: inline-block;
        width: 0.45rem;
        height: 0.45rem;
        border-radius: 50%;
        line-height: 0.45rem;
        color: #fff;
        border: 0.05rem solid #eee;
        background: #fff;
        margin: 0 0.3rem;
      }
      span {
        color: #7f7f7f;
      }
    }
    .right {
      float: right;
      .btn {
        width: 1.8rem;
        height: 1rem;
        background: #ccc;
        border: none;
        color: #fff;
      }
      span {
        color: #dd1a21;
        padding-right: 0.2rem;
        font-size: 0.25rem;
      }
    }
  }
}

header {
  height: 1rem;
  line-height: 1rem;
  box-sizing: border-box;
  background: #fff;
}

main > header > span {
  position: relative;
  padding-left: 0.3rem;
  text-align: center;
  background-color: #fff;
  font-size: 0.35rem;
  color: #333;
}

main > header a {
  position: absolute;
  right: 0.6rem;
  height: 1.17333rem;
  font-size: 0.3rem;
  color: #dd1a21;
}

main > div ul {
  text-align: center;
  height: 0.8rem;
  line-height: 0.8rem;
  background: #eee;
  flex-flow: row nowrap;
  align-items: center;
}

div ul li {
  float: left;
  width: 33%;
  font-size: 0.25rem;
  color: #666;
}

.img {
  position: absolute;
  top: 5.5rem;
  left: 2.5rem;
  background: url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png)
    no-repeat center;
  background-size: cover;
  width: 2.48rem;
  height: 2.48rem;
}

.txt {
  position: absolute;
  top: 8rem;
  left: 2.7rem;
  font-size: 0.3rem;
  color: #999999;
}

.button {
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 7rem;
  height: 0.92rem;
  width: 5rem;
  font-size: 0.3rem;
  background: #dd1a21;
  text-align: center;
  line-height: 0.92rem;
  color: #ffffff;
}
</style>