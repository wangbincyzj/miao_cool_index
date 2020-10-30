<template>
    <div>
        <!--窗体部分-->
        <div id="ElementWind" v-show="isOpenWind " class="dragclass"  @mousedown="drag">
            <div id="imgHead">
              <span style="float: left;">在线咨询</span>
              <a href="#"  @click="isOpenWind = false">x</a>
            </div>
            <div id="imgBody" >
              <div id="imgContent">
                <div class="btalk"><span>A：你好</span></div>
                <div class="atalk"><span>B：好你妹</span></div>

              </div>
              <div id="imgBtn" style="padding:10px;">
                <input style="height: 38px;
                width:300px;
                float:left;
                border: 1px solid #57a3f3;
                "/><button style="float: left;height: 40px;width:50px;margin-left:20px;border: 1px solid #57a3f3;color: #57a3f3;background-color: white;">发送</button>
              </div>
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
    width: 400px;
    height: 400px;
    position: absolute;
    bottom: 3px;
    border: 1px solid #57a3f3;
    background: #fff;
    right: 10px;
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
    height: 80%;
    padding: 2px;
    border-bottom: 1px solid #57a3f3;
    /* margin-top: -21px; */
    /* overflow-y: scroll; */
    /* word-break: break-all */
  }

  .talk_con {
        width: 600px;
        height: 500px;
        border: 1px solid #666;
        margin: 50px auto 0;
        background: #f9f9f9;
    }

    .talk_show {
        width: 580px;
        height: 420px;
        border: 1px solid #666;
        background: #fff;
        margin: 10px auto 0;
        overflow: auto;
    }

    .talk_input {
        width: 580px;
        margin: 10px auto 0;
    }

    .whotalk {
        width: 80px;
        height: 30px;
        float: left;
        outline: none;
    }

    .talk_word {
        width: 420px;
        height: 26px;
        padding: 0px;
        float: left;
        margin-left: 10px;
        outline: none;
        text-indent: 10px;
    }

    .talk_sub {
        width: 56px;
        height: 30px;
        float: left;
        margin-left: 10px;
    }

    .atalk {
        margin: 10px;
        float: left;
    }

    .atalk span {
        display: inline-block;
        background: #0181cc;
        border-radius: 10px;
        color: #fff;
        padding: 5px 10px;
    }

    .btalk {
        margin: 10px;
        text-align: right;
    }

    .btalk span {
        display: inline-block;
        background: #ef8201;
        border-radius: 10px;
        color: #fff;
        padding: 5px 10px;
    }
   
  </style>