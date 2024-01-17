function captcha(id,src)
{
    this.oCaptcha = document.getElementById(id);
    this.src = src;
    this.init();
}
captcha.prototype.init = function (){
    var This = this;
    this.oCaptcha.onclick = function (){
        This.change(this)
    };
}
captcha.prototype.change = function (obj){
    this.oCaptcha.src = this.src+"?time="+new Date().getTime();
}
