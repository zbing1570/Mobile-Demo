/**
 * Created by Administrator on 2016/8/26.
 */

var top=document.getElementById('top');
var topCon=document.getElementById('top_content');
var topRight=topCon.getElementsByTagName('ul')[1];
var topRightList=topRight.getElementsByTagName('li');
var topIco3=topRight.getElementsByTagName('li')[2];
var topRightFlo=document.getElementById('top_right_float');


topIco3.onmouseover=function (){
    topRightFlo.style.display='block';
}
topIco3.onmouseout=function (){
    topRightFlo.style.display='none';
}

var con_main=document.getElementById('content_main');
var oUl=con_main.getElementsByTagName('ul')[0];
var aLi=oUl.getElementsByTagName('li');
var listDivs=oUl.getElementsByClassName('list_1');
var arrTip=oUl.getElementsByTagName('span');
var aH3=oUl.getElementsByTagName('h3');
for(var i=0;i<aLi.length;i++){
    (function (index){
        aLi[index].onmouseenter=function (){
            aLi[index].style.opacity='1';
            aLi[index].style.borderLeft='4px solid #f60';
            arrTip[index].style.background='url(img/icons.png) no-repeat -28px -77px';
            aH3[index].style.color='#f60';
            listDivs[index].style.display='block';
            animate(listDivs[index],{opacity:1},500)
        }
        aLi[index].onmouseleave=function (){
            aLi[index].style.opacity='0.9';
            aLi[index].style.borderLeft='4px solid white';
            arrTip[index].style.backgroundPosition='0px -71px';
            aH3[index].style.color='black';
            listDivs[index].style.display='none';
            animate(listDivs[index],{opacity:0},50)
        }
    })(i);
}


var servReco=document.getElementById('serv_reco');
var servUl=servReco.getElementsByTagName('ul')[0];
var servLis=servUl.getElementsByTagName('li');

for(var i=0;i<servLis.length;i++){
    (function (index){
        var tmpLi=servLis[index];
        var servA=tmpLi.getElementsByTagName('a')[0];
        servA.onmouseover=function (){
            servLis[index].style.padding='0 25px 0 25px';
        }
        servA.onmouseout=function (){
            servLis[index].style.padding='0 30px 0 30px';
        }
    })(i);
}

var hostList=servReco.getElementsByClassName('host_list')[0];
var hlUl=hostList.getElementsByTagName('ul')[0];
var hlDivs=hlUl.getElementsByTagName('div');
var hlLis=hlUl.getElementsByTagName('li');
var hlH4s=hlUl.getElementsByTagName('h4');
for(var i=0;i<hlLis.length;i++){
    (function (index){
        var hlH4=hlLis[index].getElementsByTagName('h4')[0];
        hlLis[index].onmouseover=function (){
            for(var j=0;j<hlDivs.length;j++){
                hlDivs[j].style.display='none';
                hlH4s[j].style.fontWeight='normal';
            }
            hlH4.style.fontWeight='bold';
            hlDivs[index].style.display='block';
        }
    })(i);
}