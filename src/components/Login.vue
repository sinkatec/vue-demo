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
							<div class="icon-top"></div>
							<p class="color-default">TOP</p>
						</a>
					</li>
					
					<li>
						<a href="#">
							<div class="icon-notice"></div>
							<p class="color-notice">新着お知らせ</p>
						</a>
					</li>
					
					<li>
						<a href="#">
							<div class="icon-order"></div>
							<p class="color-order">集団けんしん予約</p>
						</a>
					</li>
					
					<li>
						<a href="#">
							<div class="icon-question"></div>
							<p class="color-order">健診希望調査</p>
						</a>
					</li>
					
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
			</div>
				
			<ul class="two-column">
				<li class="col1"> 
					<nav class="nav">
						<ul id="navbarBasicExample">
							<li>
								<a href="#">
									<div class="icon-top"></div>
									<p class="color-default">TOP</p>
								</a>
							</li>
							
							<li>
								<a href="#">
									<div class="icon-notice"></div>
									<p class="color-notice">新着お知らせ</p>
								</a>
							</li>
							
							<li>
								<a href="#">
									<div class="icon-order"></div>
									<p class="color-order">集団けんしん予約</p>
								</a>
							</li>
							
							<li>
								<a href="#">
									<div class="icon-question"></div>
									<p class="color-order">健診希望調査</p>
								</a>
							</li>
							
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
					</nav>
				</li>
				
				<li class="col2">
					<div class="heading">
						<div class="breadcrumbs">
							<ol class="inline">
								<li>
									<a href="#">TOP</a>
								</li>
								<li class="divider">></li>
								<li class="margin-top-0">サインイン</li>
							</ol>
						</div>
						
						<div class="titleBox">
							<img src="../assets/icon-setting.svg">
							<span class="titleText">サインイン</span>
						</div>
					</div>
				
				
					<div class="detail">
						ユーザIDとパスワードを入力することでサインインができます。
						<div class="box-error">
							<P v-show="errorShow" class="errorShow">{{ errorMsg }}</P>

							<div style="display:inline-block;float:right;">
								<span class="color-red">*</span>:必須
							</div>
						</div>
					
						<div>
							<table class="loginTable">
								<tbody>
									<tr>
										<td class="loginLabel">
											ユーザID
											<span class="indispensable">*</span>
										</td>
										<td>
											<input class="loginInput" type="text" maxlength="80" v-model="userID" ref="userID">
										</td>
									</tr>
									
									<tr>
										<td class="loginLabel">
											パスワード
											<span class="indispensable">*</span>
										</td>
										<td>
											<input class="loginInput" type="text" maxlength="20" v-model="passwd" ref="passwd">
										</td>
									</tr>
								</tbody>
							</table>
							<p class="loginTips">
								<a href="#">ユーザIDを忘れた方はこちら</a>
							</p>
							<p class="loginTips">
								<a href="#">パスワードを忘れた方はこちら</a>
							</p>
						</div>
						
						<div class="buttonBox">
							<p>アカウントを作成しますか？（任意）</p>
							<p>
								<a href="#" class="loginButton">アカウント作成画面へ</a>
							</p>
							<p>
								<a href="#" class="loginButton" @click="commit(userID, passwd)">サインイン</a>
							</p>
						</div>
						
					</div>
				</li>
			</ul>
			
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
import axios from 'axios';
export default {
  name: 'Login',
  data () {
    return {
    	userID: '',
		passwd: '',
		errorShow: false,
      	errorMsg: ''
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
		},
		commit(userID, passwd) {
			if (userID === '' || passwd === '') {
				this.errorShow = true
				this.errorMsg = "必須項目が入力されていません。"
				this.$refs.userID.style.borderColor = 'red'
				this.$refs.passwd.style.borderColor = 'red'
			} else {
				axios({
					url: '/DemoApi',
					method: 'post',
					headers: {
						Accept: 'application/x-www-form-urlencoded'
					},
					params: {
						loginId: userID,
						password: passwd
					},
					responseType: 'json'
				}).then(response => {
					console.log(response)
					if (response.status === 200) {
						if (response.data.errcode === '0') {
							this.errorShow = false
							this.$refs.userID.style.borderColor = '#999'
							this.$refs.passwd.style.borderColor = '#999'
							this.$router.replace('/top')
						} else {
							this.errorShow = true
							this.errorMsg = "ログインIDまたはパスワードに誤りがあります。"
							this.$refs.userID.style.borderColor = 'red'
							this.$refs.passwd.style.borderColor = 'red'
						}
					} else {
						this.errorShow = true
						this.errorMsg = 'APIリクエスト接続異常。'
						this.$refs.userID.style.borderColor = '#999'
						this.$refs.passwd.style.borderColor = '#999'
					}
				})
      		}
    	}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
	display:flex;
	width:100%;
	background:none;
}
.content ul,.content ul ul{
	list-style:none;
	margin:0;
}
.two-column .col1{
	width:90px;
	padding-left:0;
	padding-right:0;
}
.nav{
	width:100%;
	margin:0 auto;
	padding:0;
	text-align:center;
	margin-top:10px;
}
.nav li{
	display:block;
	width:100%;
	height:auto;
	margin-bottom:5px;
	border-radius:5px 0 0 5px;
	background:#fff;
}
.nav li a{
	position:relative;
	float:none;
	display:block !important;
	width:auto;
	height:auto;
	padding:10px 10px 5px;
	text-align:center;
	background:none;
	overflow: hidden;
}
.nav li div{
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
.nav li:hover{
	background:#b2b2b2;
}
.nav li:hover p{
	color:#fff;
}
.nav li:hover .icon-top{
	background:url(../assets/icon-top-hover.svg) no-repeat;
	background-size: 40px 40px;
}
.nav p{
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
.nav li:hover .icon-notice{
	background:url(../assets/icon-notice-hover.svg) no-repeat;
	background-size: 40px 40px;
}
.icon-order{
	background:url(../assets/icon-order.png) no-repeat;
}
.icon-question{
	background:url(../assets/icon-question.png) no-repeat;
}
.nav li:hover .icon-question{
	background:url(../assets/icon-question.png) no-repeat;
	background-size: 40px 40px;
}
.icon-login{
	background:url(../assets/icon-signout.svg) no-repeat;
}
.nav li:hover .icon-login{
	background:url(../assets/icon-signout-hover.svg) no-repeat;
	background-size: 40px 40px;
}
.icon-setting{
	background:url(../assets/icon-setting.svg) no-repeat;
}
.nav li:hover .icon-setting{
	background:url(../assets/icon-setting-hover.svg) no-repeat;
	background-size: 40px 40px;
} 

.two-column .col2{
	width:auto;
	background:#e1e1e1;
	border-radius:7px;
	padding:10px;
	flex:1;
}
.heading{
	margin:0px;
	border-radius:5px;
	background:#fff;
	font-size:1rem;
	padding:10px 20px;
}
.inline{
	display:inline-block;
}
.content ol{
	list-style:none;
	margin:0;
	padding:0;
}
.heading li:nth-of-type(1){
	padding-right:10px;
}
.inline li, .inline li a{
	display: block;
	float:left;
}
.breadcrumbs li{
	width:auto;
	height:auto;
	padding:0;
	color:#999;
}
.breadcrumbs a{
	color:#666;
	text-decoration:none;
}
.breadcrumbs li:hover a{
	text-decoration:underline;
}
.breadcrumbs li.divider{
	padding-left:5px;
	padding-right:5px;
	color:#888;
	margin-top:0px;
}
.margin-top-0{
	margin-top:0 !important;
}
.titleBox{
	margin-top:10px;
}
.titleBox img{
	width:40px;
	height:40px;
	margin-right:7px;
	vertical-align:middle;
    display:inline-block;
}
.titleText{
	font-size:1.3rem;
	display:inline-block;
	font-weight:bold;
	vertical-align:middle;
}
.detail{
	margin-top:10px;
	padding:20px;
	border-radius:5px;
	background:#fff;
}
.box-error{
	font-size:12px;
	margin-top:30px;
	margin-bottom:20px;
	overflow: hidden;
}
.color-red{
	color:#e41320;
	font-size:20px;
}
.loginTable{
	width:100%;
	border:solid 1px #ccc;
}
.loginTable tr{
	height: 60px;
}
.loginLabel{
	width:22%;
	background:#f5f5f5;
	border-right:solid 1px #ccc;
	padding-left: 10px;
	padding-top: 15px;
}
.indispensable{
	margin-left:5px;
	color:#e41320;
	font-size:20px;
}
.loginInput{
	display:inline-block;
	padding:5px 6px;
	font-size:14px;
	line-height:18px;
	color:#555;
	border:solid 1px #ccc;
	background:#fff;
	width:100%;
	margin-top: 6px;
}
.loginTips{	
	font-size:80%;
	text-align:right;
	color:#268ffb!important;
}
.detail p{
	margin-bottom:10px;
	margin-top:10px;
}
.loginTips a:hover{
	color:#268ffb;
	text-decoration:underline;
}
.buttonBox{
	margin-top:20px;
	padding:20px 0;
	text-align:center;
	background:#f0f0f0;
}
.loginButton{
	margin:0 20px 20px;
	color:#fff;
	background:#268ffb;
	height:40px;
	display:block;
	line-height:40px;
	font-weight:bold;
}
.loginButton:hover{
	color:#fff;
	background:#276aab;
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
	.two-column .col2{
		background:none;
		padding:0;
		margin-top:50px;
	}
	.loginTable td{
		width:100%!important;
		display:block;
	}
	.loginInput{
		margin:10px 0;
	}
	.detail{
		padding:10px!important;
	}
	.heading{
		padding:10px!important;
	}
	.logo{
		display:none;
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
	.footer{
		position: relative;
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
