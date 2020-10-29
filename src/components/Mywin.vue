<template>
    <div>
        <!--窗体部分-->
        <div id="ElementWind" v-show="isOpenWind " class="dragclass"  @mousedown="drag">
            <div id="imgHead">
              <a href="#"  @click="isOpenWind = false">x</a>
            </div>
            <div id="imgBody">
              <div id="imgContent"></div>
              <div id="imgBtn"></div>
            </div>
        </div>
        <!--关闭后-->
        <div v-show="!isOpenWind">
            <a @click="isOpenWind = true"
                style="display: block; position: fixed; box-sizing: border-box; font-size: 13px; color: rgb(255, 255, 255); text-align: center; cursor: pointer; text-decoration: none; z-index: 1000000000; border-width: 1px 1px 0px; border-top-style: solid; border-right-style: solid; border-left-style: solid; border-top-color: rgba(0, 0, 0, 0.1); border-right-color: rgba(0, 0, 0, 0.1); border-left-color: rgba(0, 0, 0, 0.1); border-image: initial; border-bottom-style: initial; border-bottom-color: initial; background-color: rgb(48, 122, 232); height: 40px; right: 0px; bottom: 0px; margin: 3px 30px;"><span
                    style="display:block;float:left;width:24px;height:24px;margin:7px 7px 0;">
                    <img
                        src="http://static-ud.udesk.cn/img/msg2@68x66.png" style="width:100%;height:100%;"></span><span
                    style="display:block;float:left;width:1px;height:100%;background-color:rgba(0, 0, 0, .08);vertical-align:middle;background-color:#000\9;filter:alpha(opacity=10)\9;"></span><span
                    id="udesk_btn_text"
                    style="display:block;float:left;height:40px;margin:0 10px;line-height:40px;overflow-y:hidden; font-size: 13px; color: #fff;">客服离线，请留言</span><span
                    id="udesk_btn_circle"
                    style="display:none;position:absolute;top:-13px;right:-13px;width:26px;height:26px;
                                text-align:center;line-height:26px;font-size:14px;color:#fff;border-radius:15px;background-color: #ff3b30;">
                </span>
            </a>
        </div>
    </div>
   
  </template>
  <script>
  export default {
      name:"Mywin",
     data(){
        return {
          isOpenWind :true  //点击X关闭窗口
        }
     },
     methods:{
       //鼠标按下拖拽
       drag(e){
          // console.log(e)
          var oDiv = e.path[1];
          var disX = e.clientX - oDiv.offsetLeft;
          var disY = e.clientY - oDiv.offsetTop;
          document.onmousemove = function(e){
              e.preventDefault();
              var l = e.clientX - disX;
              var t = e.clientY - disY;
              oDiv.style.left = l + "px"
              oDiv.style.top = t + "px"
          } 
          document.onmouseup = function(){
              document.onmousemove = null;
              document.onmouseup = null;
          }
       }
     }
  }
  </script>
   
  <style scoped>
  #ElementWind {
    text-align: right;
    width: 500px;
    height: 377px;
    position: absolute;
    left: 15px;
    bottom: 0;
    border: 1px solid #57a3f3;
    background: #fff;
    right: 0px;
    z-index: 99999;
  }
   
  a {
    padding-right: 5px;
    text-decoration: none;
    color: #fff;
  }
   
  a:hover {
    color: #fff;
  }
   
  #imgHead {
    width: calc(100% + 1px);
    text-align: right;
    padding: 4px 0;
    /* border: 1px solid #003399; */
    background: #57a3f3;
    font-size: 11px;
    color: #3366ff;
    cursor: move;
    /* margin-top: -21px; */
  }
   
  #imgHead a:link,
  #imgHead a:visited {
    font-size: 14px;
    font-weight: bold;
    padding: 0 3px;
  }
   
  #imgBody {
    width: 100%;
    height: calc(100% - 23px);
    /* margin-top: -21px; */
    text-align: center;
  }
   
  #imgContent {
    height: 324px;
    padding: 2px;
    /* margin-top: -21px; */
    /* overflow-y: scroll; */
    /* word-break: break-all */
  }
   
  #imgBtn {
    width: 100%;
    height: 22px;
    background-color: #ccc;
    /* margin-top: -21px;   */
  }
   
  </style>