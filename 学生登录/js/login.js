//获取当前时间
 window.onload=function(){
    var dateNode=document.getElementById('date');
   var currentDate = new Date();
   var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    attime=currentDate.getFullYear() + "年" + 
      (currentDate.getMonth() + 1) + "月" + 
      currentDate.getDate() + "日" + " " + 
     weekday[currentDate.getDay()]; 
    dateNode.innerHTML=(attime); //可以直接输出时间
  }

//侧边栏展开闭合效果
function alist(){
var spanNode=event.srcElement;    
    var thedivNode=document.getElementById('thediv');
     var mainNode=document.getElementById('main');
    if(thedivNode.className=="close"){
    thedivNode.className="open";   
    spanNode.style.marginLeft='0px';
         mainNode.style.width='88%';
    }
    else{
       thedivNode.className="close";
        spanNode.style.marginLeft='-89%';/*闭合后移到了最左边*/
        mainNode.style.width='99%';
    }
}

//菜单展开闭合效果
function blist(){
    var aNode=event.srcElement;
    var tdNode=aNode.parentNode;
    var listdivNode=tdNode.getElementsByTagName("div")[0];
    if(listdivNode.className=="open"){
    listdivNode.className="close";   
    }
    else{
    listdivNode.className="open";
    }
}




































