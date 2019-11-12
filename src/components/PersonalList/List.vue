<template>
<div class="container">
    <header>
    <router-link to="/home" class="iconfont icon-shouye"></router-link>
    <img src="../../assets/网易严选img/首页/logo.png" alt />
    <router-link to="/search" class="iconfont icon-magnifier"></router-link>
    <router-link to="/shoppingcart" class="iconfont icon-gouwuche2"></router-link>
    </header>
    <div class="logo">
    <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt />
    </div>
    <div class="ipt">
    <p class="nonempty" v-show="isShow">账号或密码不能为空~</p>
    <p>
        <input type="text" placeholder="请输入手机号" v-model="phone" />
        <i class="iconfont icon-x" @click="empty(phone)"></i>
    </p>
    <p>
        <input type="password" placeholder="请输入密码" v-model="password" />
        <i class="iconfont icon-x" @click="empty(password)"></i>
    </p>
    </div>
    <div class="Aboutpassword">
    <a href="https://aq.reg.163.com/ydaq/welcome?module=offlinePasswordFind" target="_blank">忘记密码?</a>
    </div>
    <div class="submit" @click="handleLogin(phone, password)">登录</div>
</div>
</template>
<script>
import {login} from '../../api/login.js';
export default {
data() {
    return {
    phone: "",
    password: "",
    isShow: false
    };
},
methods: {
    handleLogin(phone, password) {
        if(this.check()) {
            this.isShow = true;
            return;
        }
        this.isShow = false;
        login(phone, password).then(result => {
            if (parseInt(result.code) === 0) {
                this.$message({
                type: 'success',
                message: '已成功登录~'
                });
                this.$router.push({name: 'handle', params: {log: 'xixi'}});
                return;
            }
            return Promise.reject();
        })
    },
    // 表单校验
    check() {
        let flag = this.phone === '' || this.password === '';
        return flag;
    },
    empty(type) {
        this.phone == type ? this.phone = '' : this.password = '';
    }
}
};
</script>
<style lang="less" scoped>
header {
height: 1rem;
width: 100%;
background: #fafafa;
line-height: 1rem;
.icon-shouye {
    margin: 0 2.4rem 0 0.3rem;
}
.icon-magnifier {
    margin-right: 0.3rem;
}
.iconfont {
    font-size: 0.55rem;
    color: #333;
}
img {
    text-align: center;
    width: 1.5rem;
    height: 0.5rem;
    margin-right: 1rem;
}
}
.logo {
width: 100%;
text-align: center;
img {
    margin-top: 0.5rem;
    width: 2.7rem;
    height: 0.9rem;
}
}
.ipt {
margin-top: 1.5rem;
p {
    input {
    margin-bottom: 0.2rem;
    font-size: 0.3rem;
    margin-left: 0.4rem;
    width: 90%;
    padding-bottom: 0.2rem;
    height: 0.6rem;
    border: none;
    text-indent: 0.3rem;
    border-bottom: 0.01rem solid #eee;
    }
    i {
    margin-left: -0.5rem;
    color: #ddd;
    box-sizing: border-box;
    }
}
}
.Aboutpassword {
width: 90%;
margin-left: 0.75rem;
margin-top: 0.1rem;
a {
    color: #7f7f7f;
    font-size: 0.3rem;
}
}
.submit {
width: 90%;
margin: .3rem auto;
height: 1rem;
background: #dd1a21;
color: #fff;
line-height: 1rem;
text-align: center;
font-size: 0.3rem;
border-radius: 0.1rem;
}
.nonempty {
    margin:0 0 .3rem .7rem;
    font-size: .3rem;
    color: #dd1a21;
}
</style>