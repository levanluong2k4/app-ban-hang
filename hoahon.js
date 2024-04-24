var tonghoadon=0;
var drink1=20000;
var drink2=25000;
var drink3=15000;
var drink4=25000;
var drink5=40000;
var drink6=40000;
var drink7=40000;
var drink8=40000;
var drink9=40000;
function movetrangchu() {
  window.location.href = "http://127.0.0.1:5500/Trangchu.html#";
}
function movethucdon() {
  window.location.href = "http://127.0.0.1:5500/thucdon.html";
}


var productlist =document.querySelectorAll("input");
productlist.forEach(function(input) {
    input.value = "0";
});
//tong tien khi nhâp vao so luong
var plus1 = document.getElementById("cong1");
var input1 = document.getElementById("input1");
var tru1 = document.getElementById("tru1");
var t1=0;  
input1.onchange=function(){
    
    tonghoadon += drink1 * input1.value-drink1*t1;
    t1=input1.value;
    document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
    
}

var productlist = document.querySelectorAll("input");

productlist.forEach(function(input) {
    input.addEventListener("input", function() {
        if (input.value < 0) {
            input.value = 0; // Đặt giá trị là 0 nếu người dùng nhập số âm
        }
    });
});




plus1.onclick = function() {
    input1.value++;
    tonghoadon += drink1 ;
    document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');

};
tru1.onclick=function() {
        if (input1.value >=1){
            input1.value --;
            tonghoadon -= drink1 ;
            document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
        }
        else
        input1.value =0;
}
var plus2 = document.getElementById("cong2");
var input2 = document.getElementById("input2");
var tru2 = document.getElementById("tru2");

var t2=0;  
input2.onchange=function(){
    
    tonghoadon += drink2 * input2.value-drink2*t2;
    t2=input2.value
    document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
    
}
plus2.onclick = function() {
    input2.value++;
    tonghoadon += drink2 ;
};
tru2.onclick=function() {
        if (input2.value >=1){
            input2.value --;
            tonghoadon -= drink2 ;
        }
        else
        input2.value =0;
}
var plus3 = document.getElementById("cong3");
var input3 = document.getElementById("input3");
var tru3 = document.getElementById("tru3");
var t3=0;  
input3.onchange=function(){
    
    tonghoadon += drink3 * input3.value-drink3*t3;
    t3=input3.value
    document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
    
}

plus3.onclick = function() {
    input3.value++;
};
tru3.onclick=function() {
        if (input3.value >=1){
            input3.value --;
        }
        else
        input3.value =0;
}
var plus4 = document.getElementById("cong4");
var input4 = document.getElementById("input4");
var tru4 = document.getElementById("tru4");
var t4=0;  
input4.onchange=function(){
    
    tonghoadon += drink4 * input4.value-drink4*t4;
    t4=input4.value
    document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
    
}

plus4.onclick = function() {
    input4.value++;
};
tru4.onclick=function() {
        if (input4.value >=1){
            input4.value --;
        }
        else
        input4.value =0;
}
var plus5 = document.getElementById("cong5");
var input5= document.getElementById("input5");
var tru5 = document.getElementById("tru5");
var t5=0;  
input5.onchange=function(){
    
    tonghoadon += drink5 * input5.value-drink5*t5;
    t5=input5.value
    document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
    
}

plus5.onclick = function() {
    input5.value++;
};
tru5.onclick=function() {
        if (input5.value >=1){
            input5.value --;
        }
        else
        input5.value =0;
}
var plus6 = document.getElementById("cong6");
var input6 = document.getElementById("input6");
var tru6 = document.getElementById("tru6");
var t6=0;  
input6.onchange=function(){
    
    tonghoadon += drink6 * input6.value-drink6*t6;
    t6=input6.value
    document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
    
}

plus6.onclick = function() {
    input6.value++;
    tonghoadon+=drink6;
};
tru6.onclick=function() {
        if (input6.value >=1){
            input6.value --;
            tonghoadon-=drink6;
        }
        else
        input6.value =0;
}
var plus7 = document.getElementById("cong7");
var input7 = document.getElementById("input7");
var tru7= document.getElementById("tru7");
var t7=0;  
input7.onchange=function(){
    
    tonghoadon += drink7 * input7.value-drink7*t7;
    t7=input7.value
    document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
    
}

plus7.onclick = function() {
    input7.value++;
};
tru7.onclick=function() {
        if (input7.value >=1){
            input7.value --;
        }
        else
        input7.value =0;
}

var plus8 = document.getElementById("cong8");
var input8 = document.getElementById("input8");
var tru8= document.getElementById("tru8");
var t8=0;  
input8.onchange=function(){
    
    tonghoadon += drink8 * input8.value-drink8*t8;
    t8=input8.value
    document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
    
}

plus8.onclick = function() {
    input8.value++;
};
tru8.onclick=function() {
        if (input8.value >=1){
            input8.value --;
        }
        else
        input8.value =0;
}
var plus9 = document.getElementById("cong9");
var input9 = document.getElementById("input9");
var tru9 = document.getElementById("tru9");
var t9=0;  
input9.onchange=function(){
    
    tonghoadon += drink9 * input9.value-drink9*t9;
    t9=input9.value
    document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
    
}

plus9.onclick = function() {
    input9.value++;
};
tru9.onclick=function() {
        if (input9.value >=1){
            input9.value --;
        }
        else
        input9.value =0;
}
//so luong don hang
var soluong=input1.value+input2.value+input3.value+input4.value+input5.value+input6.value+input7.value+input8.value+input9.value;
// cho giá tiền của từng thức uống








