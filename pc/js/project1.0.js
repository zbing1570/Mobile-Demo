/**
 * Created by Administrator on 2016/9/2.
 */

function Project() {
    this.topRight = document.getElementById('top_right');
    this.topRightFlo = this.topRight.getElementsByTagName('div')[0];
    this.leftList = document.getElementById('left_list_ul');
    this.leftLi = this.leftList.getElementsByTagName('li');
    this.leftDivs = utils.getByClass(this.leftList, 'list_1')
    this.servReco = document.getElementById('serv_reco');
    this.servUl = this.servReco.getElementsByTagName('ul')[0];
    this.servLis = this.servUl.getElementsByTagName('li');
    this.hostList = this.servReco.getElementsByClassName('host_list')[0];
    this.hlUl = this.hostList.getElementsByTagName('ul')[0];
    this.hlDivs = this.hlUl.getElementsByTagName('div');
    this.hlLis = this.hlUl.getElementsByTagName('li');
    this.hlH4s = this.hlUl.getElementsByTagName('h4');
    this.totop = document.getElementById('totop');
    this.init()
}
Project.prototype = {
    constructor: Project,
    init: function () {
        //调用
        this.topMove();
        this.tabMove();
        this.servMove();
        this.hostListMove();
        this.topmove();
    },
    topMove: function topMove() {
        var _this = this;
        this.topRight.onmouseover = function () {
            utils.css(_this.topRightFlo, 'display', 'block');
        }
        this.topRight.onmouseout = function () {
            utils.css(_this.topRightFlo, 'display', 'none');
        }
    },
    tabMove: function tabMove() {
        var _this = this;
        for (var i = 0; i < this.leftLi.length; i++) {
            (function (index) {
                _this.leftLi[index].onmouseenter = function () {
                    utils.css(_this.leftLi[index], 'borderLeft', '4px solid #f60');
                    utils.css(_this.leftDivs[index], 'display', 'block');
                    animate(_this.leftDivs[index], {opacity: 1}, 300);
                };
                _this.leftLi[index].onmouseleave = function () {
                    utils.css(_this.leftLi[index], 'borderLeft', '4px solid #fff');
                    utils.css(_this.leftDivs[index], 'display', 'none');
                    animate(_this.leftDivs[index], {opacity: 0}, 0);
                }
            })(i);
        }
    },
    servMove: function servMove() {
        var _this = this;
        for (var i = 0; i < this.servLis.length; i++) {
            (function (index) {
                var tmpLi = _this.servLis[index];
                var servA = tmpLi.getElementsByTagName('a')[0];
                servA.onmouseover = function () {
                    _this.servLis[index].style.padding = '0 25px 0 25px';
                }
                servA.onmouseout = function () {
                    _this.servLis[index].style.padding = '0 30px 0 30px';
                }
            })(i);
        }
    },
    hostListMove: function hostListMove() {
        var _this = this;
        for (var i = 0; i < this.hlLis.length; i++) {
            (function (index) {
                var hlH4 = _this.hlLis[index].getElementsByTagName('h4')[0];
                _this.hlLis[index].onmouseover = function () {
                    for (var j = 0; j < _this.hlDivs.length; j++) {
                        _this.hlDivs[j].style.display = 'none';
                        _this.hlH4s[j].style.fontWeight = 'normal';
                    }
                    hlH4.style.fontWeight = 'bold';
                    _this.hlDivs[index].style.display = 'block';
                }
            })(i);
        }
    },
    topmove: function topmove(){
        var timer = null;
        var bok = false;
        var _this = this;
        window.onscroll = function (){
            if(bok){
                clearInterval(_this.timer);
            }
            bok = true;
            if(utils.win('scrollTop')>utils.win('clientHeight')){
                utils.css(_this.totop,'display','block');
            }else{
                utils.css(_this.totop,'display','none');
            }
        }
        this.totop.onclick = function (){
            var target = utils.win('scrollTop');
            var duration = 1000;
            var interval = 30;
            var step = target/duration*interval;
            _this.timer = setInterval(function (){
                var curTop = utils.win('scrollTop');
                curTop -= step;
                console.log(curTop)
                if(curTop === 0){
                    clearInterval(_this.timer);
                }
                utils.win('scrollTop',curTop);
            },interval)
        }
    }


}
var proMove=new Project;