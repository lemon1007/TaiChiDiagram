let html = document.querySelector('#html');
let style = document.querySelector('#style')
let string = `/*接下来我来为大家演示，*/
/*如何画出一个太极。*/
/*首先，我先准备了一个div*/
/* 先打个底稿*/
#div1 {
    border: 2px solid black;
    width: 200px;
    height: 200px;
}

/*然后，加点radius和shadow，*/
/*把它变成一个有阴影的圆 */
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}

/*现在我们把这个圆分成两半*/
/*左白右黑
/*太极的大体轮廓就出来啦*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/*然后我们再给太极填上内部结构*/
/*一个太极就画好啦*/
#div1::before{
    content:'';
    background-color: black;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-left: 50px;
    display: block;
     background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    content:'';
    background-color: white;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-left: 50px;
    display: block;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%)
}

`

let n = 0;
let string2 = "";

let step = () => {
    setTimeout(() => {
        if (string[n] === '\n') {
            // 如果是回车，就不照搬，添加<br>换行
            string2 += "<br>"
        } else if (string[n] === ' ') {
            string2 += "&nbsp;"
        } else {
            // 如果不是回车，则照搬
            string2 += string[n]
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 9999)
        html.scrollTo(0, 9999)
        if (n < string.length - 1) {
            n += 1;
            step();
        }
    }, 1000)
}

step();
