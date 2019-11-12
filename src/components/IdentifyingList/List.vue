<template>
<<<<<<< HEAD
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
=======
     <div>
        <div class='w-header1'>
            <a href="javascript:;" class='active'>推荐</a>
            <a href="javascript:;">认识严选</a>
            <a href="javascript:;">好物大赏</a>
            <a href="javascript:;">好货内购价</a>
            <a href="javascript:;">选购指南</a>
            <a href="javascript:;">特色系列</a>
            <a href="javascript:;">晒单</a>
            <a href="javascript:;">回购榜</a>
            <a href="javascript:;">甄选家进工厂</a>
            <a href="javascript:;">严选HOME</a>
            <a href="javascript:;">达人</a>
        </div>
        <div class="w-main">
            <div class="mian_banner">
                <a href="javascript:;"><img src="../../assets/网易严选img/识物/banner1.jpg" alt=""></a>
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
import content1 from './content1';

export default {
  data() {
    return {
    
>>>>>>> 286cc6535f19f063f85f4e149e60dba3760b790a
    };
  },
  components: {
    content1
  }
};
</script>
<style lang="less" scoped>
<<<<<<< HEAD
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
=======
.w-header1{
        font-size: 0;
        width: 100%;  
        background: #fafafa;
        z-index: 999;
        position: fixed;
        top: 1rem;
        left: 0;
        height: .73rem;
        padding-bottom: .2rem;
        white-space: nowrap;
        overflow-y: hidden;
        overflow-x: auto;
        border-bottom: .02rem solid #aaa;
        box-sizing: border-box;
       a{
        display: inline-block;
        height: .72rem;
        line-height: .72rem;
        box-sizing: border-box;
        font-size: .28rem;
        color: #7F7F7F;
        padding: 0 .08rem;
        margin: 0 .2rem;
        vertical-align: middle;
       }
       a.active{
        color: #B4282D;
        border-bottom: .04rem solid #B4282D;
       }
        }
        .w-header1::-webkit-scrollbar{
            display: none; 
        }
        .w-main{
            width: 100%;
            margin-top: .5rem;
            position: absolute;
            background-color: #fafafa;
            .mian_banner{
                background: #fff;
                margin: .2rem 0;
                box-sizing: border-box;
                padding: .36rem .3rem;
                a{
                    img{
                        width: 100%;
                        height: 100%;
                        border-radius: .08rem;
                    }
                }
            }
            // .main_content{
            //     width: 100%;
            //     padding: .18rem .3rem;
            //     box-sizing: border-box;
            //     background: #fff;
            //     a{
            //         width: 100%;
            //         display: inline-block;
            //         .m-name{
            //             height: .56rem;
            //             line-height: .56rem;
            //             white-space: nowrap;
            //             overflow: hidden;
            //             text-overflow: ellipsis;
            //             margin-bottom: .24rem;
            //             img{
            //                 width: .56rem;
            //                 height: .56rem;
            //                 overflow: hidden;
            //                 border-radius: 50%;
            //                 box-sizing: border-box;
            //                 border: .01rem solid #d9d9d9;
            //                 margin: 0  .12rem;
            //                 display: inline-block;
            //             }
            //             span{
            //                 // display: block;
            //                 color: #333; 
            //                 font-size: .28rem; 
            //                 vertical-align: top;  
            //             }
            //         }
            //         .title{
            //             font-size: .36rem;
            //             color: #333;
            //             line-height: .52rem;
            //             margin-bottom: .16rem;
            //             // margin: -.08rem 0 .16rem 0;
            //             overflow: hidden;
            //             text-overflow: ellipsis;
            //             -webkit-line-clamp: 3;
            //             -webkit-box-orient: vertical;
            //             font-family: PingFangSC-Regular;
            //         }
            //         .m-pic{
            //             img{
            //                 width: 100%;
            //                 height: 100%;
            //             }
            //         }
            //     }
            //     .m-rcount{
            //         font-size: .22rem;
            //         color: #999;
            //         height: .32rem;
            //         line-height: .32rem;
            //         margin: .18rem;
            //         .icon{
            //             width: .28rem;
            //             height: .32rem;
            //             vertical-align: middle;
            //             margin-right: .08rem;
            //         }
            //     }
            // }
        }  

>>>>>>> 286cc6535f19f063f85f4e149e60dba3760b790a
</style>