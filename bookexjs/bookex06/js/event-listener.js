//利用事件監聽器

function checkUsername() {                             //宣告函式
    let elMsg = document.getElementById('feedback');   //取得id屬性為feedback的元件
    if(this.value.length < 5){                         //如果使用者名稱太短
        elMsg.textContent = '使用者名稱不得少於5個字元'; //設定訊息文字
    }else{                                            //否則
        elMsg.textContent = '';                       //清除訊息文字
    }
}

let elUsername = document.getElementById('username'); //取得id屬性為username的元件
//當元件失去焦點時，呼叫checkUsername()
elUsername.addEventListener('blur', checkUsername, false);