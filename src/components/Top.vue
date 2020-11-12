<template>
    <div>
        <div class="content">
  
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <span class="margin-top-14">
                    デモ
                    </span>

                    <a id="menu" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="openMenu">
                        <img src="../assets/menu.png">
                    </a>
                </div>
                <div id="navbarBasicExample" class="navbar-menu">
                    <ul> 
                        <li>
                            <a href="#">
                                <div class="icon-login"></div>
                                <p class="color-default">サインイン</p>
                            </a>
                        </li>
                        
                        <li>
                            <a href="#">
                                <div class="icon-setting"></div>
                                <p class="color-default">設定</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
    
            <div class="wrapper">
                <div class="logo">
                    <img src="../assets/loginLogo.png">
                    <span>デモ</span>
                    <div style="float:right;">
                        <a href="#" class="headLogin">
                            <div class="icon-login"></div>
                            <p class="color-default">サインイン</p>
                        </a>

                    </div>
                </div>
                    
                <div class="two-column">
                    <div class="noticeDiv">
                       <img src="../assets/icon-notice.svg" class="notice-icon">
                       <div>お知らせ</div>
                       <a href="#">
                           <img src="../assets/icon-notice-more.svg">
                           もっと見る
                       </a>
                    </div>

                    <div class="orderDiv margin-right-1">
                        <a href="#">
                            <div class="orderTitle">
                                <span>健康 </span>
                            </div>
                            <div>
                                <img src="../assets/icon-order.png">
                                <div style="font-size:.9rem;" class="order-img-text">集団けんしん予約</div>
                            </div>
                        </a>
                    </div>

                    <div class="questionDiv margin-left-1">
                        <a href="#">
                            <div class="questionTitle">
                            </div>
                            <div>
                                <img src="../assets/icon-question.png">
                                <div style="font-size:.9rem;">健診希望調査</div>
                            </div>
                        </a>
                    </div>
                </div>
                
            </div>
        </div>

    
        <footer class="footer">
            <div>
                <small>デモ</small>
            </div>
        </footer>


    </div>

</template>
<script>
import "@/assets/css/bulma.min.css";
export default {
  name: 'Top',
  data () {
    return {
    }
  },
	//创建前设置
	beforeCreate () {
		document.querySelector('body').setAttribute('style', 'margin:0;')
		document.querySelector('html').setAttribute('style', 'background:#e3f3d1;height:100%;')
	},
	//销毁前清除
	beforeDestroy () {
		document.querySelector('body').removeAttribute('style')
	},
	methods: {
		openMenu() {
			const isActive = document.getElementById('navbarBasicExample')
			if(isActive.classList.contains('is-active') === true){
				isActive.setAttribute('class','navbar-menu')
			}else {
				isActive.setAttribute('class','is-active')
			}
		}
	}
}
</script>

<style scoped>
html,body{height:100%;}
ul{
	list-style:none;
	padding: 0;
	margin: 0;
}
a{
	text-decoration: none;
	display: block;
	color:#268ffb;
	cursor: pointer;
}
.content{
	position:relative;
	height:100%;
	margin-bottom:60px!important;	
	min-height: 750px;
}
.wrapper{
	position:relative;
	margin:0 auto;
	max-width:1020px;
	min-width:320px;
	height:100%;
	padding:0 10px;
}
.logo{
	padding:15px 0 5px;
	border-radius:5px;
	text-align:left;
	overflow:hidden;
}
.logo img{
	display:inline-block;
	width:80px;
	border-radius:5px;
	vertical-align:middle;
}
.logo span{
	display:inline-block;
	vertical-align:middle;
	margin:0;
	margin-left:10px;
	color:#a65f13;
	font-size:1.5rem;
	line-height:1.2rem;
	font-weight:bold;
}
.two-column{
	position: relative;
	width:825px;
    height: 167px;
	background:none;
    margin: 10px auto 60px;
}
.noticeDiv{
    position:absolute;
    left:0;
    top:0;
    width:485px;
    height:157px;
    margin:5px;
    border-radius:5px;
    background:#fff;
    padding:10px;
    color:#268ffb;
    font-size:1rem;
}
.notice-icon{
    width:20px;
    height:25px;
    margin-right:5px;
    margin-top:3px;
    vertical-align:midddle;
}
.noticeDiv div{
     font-weight:bold;
     display:inline-block;
}
.noticeDiv a{
    float:right;
    font-size:12px;
    margin-top:10px;
}
.noticeDiv a:hover{
    text-decoration: underline;
}
.orderDiv{
    position:absolute;
    left:495px;
    top:0;
    width:155px;
    height:157px;
    margin:5px;
    background:#fff;
    text-align:center;
    color:#ff69b4;
    border-radius:5px;
}
.orderDiv a{
    padding:15px 0 40px;
    height:100%;
    width:100%;
    color:#ff69b4;
}
.orderDiv img{
    width:70px;
    height:70px;
}
.orderTitle{
   background:#ff69b4;
   height:5px;
   margin-bottom:10px; 
}
.orderTitle span{
    position:absolute;
    top:5px;
    left:8px;
    z-index:1;
    padding:5px;
    font-size:.8rem;
    background:#fff;
    font-weight:bold;
}
.questionDiv{
    position:absolute;
    left:660px;
    top:0;
    width:155px;
    height:157px;
    margin:5px;
    background:#fff;
    text-align:center;
    color:#ff69b4;
    border-radius:5px;                    
}
.questionDiv img{
    width:70px;
    height:70px;
}
.questionDiv a{
    padding:15px 0 40px;
    height:100%;
    width:100%;
    color:#ff69b4;
}
.questionTitle{
    background:#ff69b4;
    height:5px;
    margin-bottom:10px;
}
.questionDiv a:hover,.orderDiv a:hover .order-img-text{
    color:rgba(0,0,0,0.3);
}
.questionDiv a:hover img,.orderDiv a:hover img{
    opacity: 0.7;
}
.color-default{
	color:#a65f13;
    font-size: 10px;
}
.headLogin{
	width: 80px;
    height: 57px;
    padding: 10px 10px 5px;
    text-align: center;
    margin-bottom: 5px;
    border-radius: 5px;
    background: #fff;
}
.icon-login{
    width:20px;
	height:20px;
	line-height:20px;
	margin-top:0;
	margin-bottom:7px;
	background-size: 100% 100%;
	margin-left:auto;
	margin-right:auto;
	background-image:url(../assets/icon-signout.svg);
}
.headLogin:hover .icon-login{
	background-image:url(../assets/icon-signout-hover.svg);
}
.headLogin:hover{
   background:#b2b2b2;
}
.headLogin:hover .color-default{
	color:#fff;
}


.footer{
	position: absolute;
	bottom:0;
	width:100%;
	margin:0 auto;
	padding:10px 0;
	color:#b0b0b0;
	background:#fff;
	text-align:center;
	overflow: hidden;
}
.footer small{
	color:#777;
	font-family:arial, sans-serif;
	font-size:80%;
}
.navbar{
	display:none;
}
@media (max-width: 767px) {
	.content{
		margin-bottom:0px!important;
	}
	.wrapper{
		padding:10px;
	}
    .logo{
        display: none;
    }
	.two-column{
		background:none;
		width: 100%;
		position: relative;
        height: auto;
        margin-top: 52px;
        overflow: hidden;
	}
	.noticeDiv{
		width: 100%;
		height: auto;
        margin: 0;
        padding: 10px;
        position: relative;
	}
	.orderDiv,.questionDiv{
		width: 48.5%;
		height: 140px;
		float: left;
        position: relative;
        left: 0;
        margin: 0;
        top: 10px;
	}
    .margin-right-1{
        margin-right: 1.5%;
    }
    .margin-left-1{
        margin-left: 1.5%;
    }
	.navbar{
		display:block;
		position:fixed;
		width:100%;
		z-index: 9999;
	}
	.navbar-brand{
		background: #fff;
		height: 32px;
	}
	.navbar-brand span{
		vertical-align:middle;
		margin-left:10px;
		color:#a65f13;
		font-size:18px;
		font-weight:bold;
		margin-top: 14px;	
	}
	.navbar-brand a{
		position:absolute;
		right: 0;
		padding: 16px 0;
	}
	.margin-top-14{
		margin-top:14px;
	}
	.two-column .col1{
		display:none;
	}
	.navbar-burger span{
		width:20px;
		height:3px;
	}
	#navbarBasicExample{
		width:100%;
		background:#f3ebd1;
		overflow:hidden;
	}
	#navbarBasicExample ul{
		margin:0 5px;
		background:#a65f13;
		overflow:hidden;
		padding:5px;
		text-align:center;
	}
	#navbarBasicExample li{
		display:block;
		width:48%;
		margin:1% 1%;
		height:auto;
		background:#fff;
		float:left;
	}
	#navbarBasicExample li a{
		position:relative;
		float:none;
		display:block !important;
		width:auto;
		height:auto;
		padding:10px 10px 5px;
		text-align:center;
		background:none;
		font-size:12px;
	}
	#navbarBasicExample li div{
		width:40px;
		height:40px;
		line-height:40px;
		margin-top:0;
		margin-bottom:6px;
		background-size: 40px 40px;
		margin-left:auto;
		margin-right:auto;
	}
	.color-default{
		color:#a65f13;
	}
	 
	.icon-top{
		background:url(../assets/icon-top.svg) no-repeat;
	}
	#navbarBasicExample li:hover{
		background:#b2b2b2;
	}
	#navbarBasicExample li:hover p{
		color:#fff;
	}
	#navbarBasicExample li:hover .icon-top{
		background:url(../assets/icon-top-hover.svg) no-repeat;
		background-size: 40px 40px;
	}
	#navbarBasicExample p{
		font-size:12px;
		margin-left:-10px;
		margin-right:-10px;
		line-height:1.2;
	}
	.color-notice{
		color:#268ffb;
	}
	.color-order{
		color:#ff69b4;
	}
	.icon-notice{
		background:url(../assets/icon-notice.svg) no-repeat;
	}
	#navbarBasicExample li:hover .icon-notice{
		background:url(../assets/icon-notice-hover.svg) no-repeat;
		background-size: 40px 40px;
	}
	.icon-order{
		background:url(../assets/icon-order.png) no-repeat;
	}
	.icon-question{
		background:url(../assets/icon-question.png) no-repeat;
	}
	#navbarBasicExample li:hover .icon-question{
		background:url(../assets/icon-question.png) no-repeat;
		background-size: 40px 40px;
	}
	.icon-login{
		background:url(../assets/icon-signout.svg) no-repeat;
	}
	#navbarBasicExample li:hover .icon-login{
		background:url(../assets/icon-signout-hover.svg) no-repeat;
		background-size: 40px 40px;
	}
	.icon-setting{
		background:url(../assets/icon-setting.svg) no-repeat;
	}
	#navbarBasicExample li:hover .icon-setting{
		background:url(../assets/icon-setting-hover.svg) no-repeat;
		background-size: 40px 40px;
	}
	.navbar-menu{
		display: none;
	}
	.loginLabel{
		padding-left: 10px;
		border-right:none;
	}
}
.errorShow {
	padding-left: 10px;
	color: #e41320;
	border-left: 10px solid #ffc8c8;
	display: inline-block;
	font-size: 16px;
	margin-top: 0!important;
	margin-bottom: 0!important;
}
</style>
