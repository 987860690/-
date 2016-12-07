function check(inputNode,regex,divId)
{
    var b=false;
    var divNode=document.getElementById(divId);
    if(regex.test(inputNode.value)){
        divNode.style.display="none";
        b=true;
    }
    else{
        divNode.style.display="block";
    }
    return b;
}
function checkIdentity(identityNode){     /*验证身份证号*/
     var regex=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
   return  check(identityNode,regex,"identitydiv");
}
function checkUser(userNode){       /*验证姓名*/
    var regex= /^[\u4e00-\u9fa5 ]{2,20}$/;        /*中文姓名*/
     return  check(userNode,regex,"userdiv");
}
function checkForm(formNode){
    with(formNode){
        if(checkIdentity(identity)&&checkUser(user))
            event.returnValue=true;
        else
             event.returnValue=false;
        
    }
}





