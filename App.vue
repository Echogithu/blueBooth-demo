<script>


export default {
  onLaunch: function () {
    console.log("App Launch");
  },
  onShow: function () {
    //检查登录状态
    // console.log("选择图片返回");
  },
  onHide: function () {
    console.log("App Hide");
  }
};
</script>

<style>
/*每个页面公共css */
page {
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  padding: 0 2rpx;
  box-sizing: border-box;
  background: rgba(243, 244, 245, 1);
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
}
/* 
 清除buttom 的默认样式,
 */
button{padding: 0;margin: 0;}
button::after{ border: none; }
/* 
 添加点击缩放效果
 */
/* .btn-scale:active{transform: scale(0.98, 0.98);} */
.btn-scale{
  transform: scale(0.98, 0.98);
}

.common-btn {
  width:200rpx;
  height: 72rpx;
  background:rgba(34,174,203,1);
  border-radius: 36rpx;
  font-size: 32rpx;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:bold;
  color:rgba(255,255,255,1);
  line-height:72rpx;
  text-align: center;
}
.flexR-c{
	display: flex;
	align-items: center;	
}
.flexR-c-c{
	display: flex;
	justify-content: center;
	align-items: center;	
}
.flexR-c-fs{
	display: flex;
	justify-content: flex-start;
	align-items: center;	
}
.flexR-c-sa{
	display: flex;
	justify-content: space-around;
	align-items: center;	
}
.flexR-c-sb{
	display: flex;
	justify-content: space-between;
	align-items: center;	
}
.flexL-c{
	display: flex;
	align-items: center;
	flex-direction: column;
}
.flexL-c-c{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.flexL-c-sa{
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
}
.flexL-c-sb{
	display: flex;
	justify-content:  space-between;
	align-items: center;
	flex-direction: column;
}
</style>
