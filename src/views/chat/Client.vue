<template>
    <div class="talk_con">
        <div class="talk_show" id="words">
            <div  :class="[(i.role=='me')?'btalk':'atalk']" v-for="i in chatRecordList"><span>{{i.userNameChn}}：{{i.msg}}</span></div>
            <!-- <div class="btalk"><span>B说：还没呢，你呢？</span></div> -->
        </div>
        <div class="talk_input">
            <!-- <select class="whotalk" id="who" v-model="sel1">
                <option value="0">A说：</option>
                <option value="1">B说：</option>
            </select> -->
            <input type="text" class="talk_word" v-model="msgObj.msg" >
            <!-- 绑定单击监听,把value传到vue的list1中 -->
            <input type="button" value="发送" class="talk_sub"   @click="sendMsg">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Client",
        data() {
            return {
                chatRecordList: [
                    // { person: 'A', say: '吃饭了吗？' },
                    // { person: 'B', say: '还没呢，你呢？' },
                ],
                msgObj:{
                        me:'visitor',
                        you:"admin",
                        msg:'',
                        userNameChn:"访客",
                    },
                userName:'visitor',
                userNamcChn:"访客",
                w:''
            }
        },
        methods: {
            connectWebsocket() {
					//$("#content").html('');
					if ('WebSocket' in window) {
						this.ws = new WebSocket("ws://192.168.11.30:8086/socketServer/"+this.userName);
					}
					else if ('MozWebSocket' in window) {
						this.ws = new MozWebSocket("ws://192.168.11.30:8086/socketServer/" +this.userName);
					}
					else {
						alert("该浏览器不支持websocket");
					}
					var _this = this;
					this.ws.onmessage = function (evt) {
						console.log(evt.data);
						var data = eval('('+evt.data+')');
						var me = data.me;
                        var you = data.you;
                        var userNameChn = data.userNameChn;
						// 如果是发送到指定的人才显示
						if(_this.userName === you){
							var msg = data.msg;
							_this.chatRecordList.push({msg:msg,role:"you",userNameChn:userNameChn});
						}
					};

					this.ws.onclose = function (evt) {
                        console.log('断开连接');
					};

					this.ws.onopen = function (evt) {
						console.log('连接成功');
						
					};
				},
				// 发送
				sendMsg(){
					console.log();
                    this.ws.send(JSON.stringify(this.msgObj));
					this.chatRecordList.push({msg:this.msgObj.msg,role:"me",userNameChn:"访客"});
				}
        },
        created() {
            this.connectWebsocket();
        },
        destroyed() {
            this.ws.onclose();
        },
    }
</script>

<style scoped>
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