
let lentthofjason=localStorage.getItem("length");
var clickedid=0;

var a =10;
var page =0;
let n =0;
let i=0;

var div1 = document.createElement('div');
document.body.appendChild(div1)
  for(i=0;i<a; i++)
  {  
    var ro = document.createElement('tr');
    ro.setAttribute('id', 'ro'+i);
    div1.appendChild(ro)
  
    var co = document.createElement('td');
    co.setAttribute('id', 'td1'+i);
    ro.appendChild(co)
    var co = document.createElement('td');
    co.setAttribute('id', 'td2'+i);
    ro.appendChild(co)
    var co = document.createElement('td');
    co.setAttribute('id', 'td3'+i);
    ro.appendChild(co)
  }
  var br = document.createElement('br');
  div1.appendChild(br)
  const First = document.createElement('button');
  div1.appendChild(First).innerText="First"
  First.setAttribute('onClick', 'fun2(this.id)');
  First.setAttribute('class', 'First');
  First.setAttribute('id', 'Firstid');

  const Previous = document.createElement('button');
  div1.appendChild(Previous).innerText=" Previous"
  Previous.setAttribute('onClick', 'fun2(this.id)');
  Previous.setAttribute('class', ' Previous');
  Previous.setAttribute('id', ' Previousid');

  for(i=0;i<10;i++)
    { 
      var but = document.createElement('button');
      but.setAttribute('class', "i"+i);
      but.setAttribute('id', i+0);
      
      but.setAttribute('onClick', 'fun1(this.id)');
      div1.appendChild(but).innerText=i+1
      console.log(document.getElementById("i"));
    }

  const Next = document.createElement('button');
  div1.appendChild(Next).innerText=" Next"
  Next.setAttribute('onClick', 'fun2(this.id)');
  Next.setAttribute('class', ' Next');
  Next.setAttribute('id', ' Nextid');

  const Last = document.createElement('button');
  div1.appendChild(Last).innerText=" Last "
  Last.setAttribute('onClick', 'fun2(this.id)');
  Last.setAttribute('class', ' Last');
  Last.setAttribute('id', ' Lastid');

var request=new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json',true); 
request.send();

var para=request.onload=function(){
var para = JSON.parse(this.response);
console.log(para)
 lengt=para.length
localStorage.setItem("length",lengt)

for(i=0;i<a; i++)
{
  document.getElementById('td1'+i).innerText=para[i].id;
 document.getElementById('td2'+i).innerText=para[i].name;
  document.getElementById('td3'+i).innerText=para[i].email;
}
var br = document.createElement('br');
document.body.appendChild(br)
document.body.appendChild(First).innerText="First"
document.body.appendChild(Previous).innerText=" Previous"
document.body.appendChild(Next).innerText=" Next"
document.body.appendChild(Last).innerText=" Last "

Next.addEventListener("click",()=>{
page==para.length-a? (page=0) : (page+=a);
for(i=page;i< page+a; i++)
{   
let n=i-page
document.getElementById("td1"+n).innerText=para[i].id;
document.getElementById('td2'+n).innerText= para[i].name
document.getElementById('td3'+n).innerText= para[i].email; }


})

Previous.addEventListener("click",()=>{
page==0? (page=para.length-a) : (page-=a);
for(i=page;i< page+a; i++)
  {   
    let n=i-page
    console.log("td1"+n)
    console.log(document.getElementById("td1"+n))
    document.getElementById("td1"+n).innerText=para[i].id;
    document.getElementById('td2'+n).innerText= para[i].name
    document.getElementById('td3'+n).innerText= para[i].email;
  }
})

First.addEventListener("click",()=>{
page=0;
  for(i=page;i< page+a; i++)
  {   
  let n=i-page
  document.getElementById("td1"+n).innerText=para[i].id;
  document.getElementById('td2'+n).innerText= para[i].name
  document.getElementById('td3'+n).innerText= para[i].email;
  }
})

Last.addEventListener("click",()=>{
  page=para.length-a;
  for(i=page;i< page+10; i++)
  {   
    let n=i-page
    document.getElementById("td1"+n).innerText=para[i].id;
    document.getElementById('td2'+n).innerText= para[i].name
    document.getElementById('td3'+n).innerText= para[i].email;
  }
})
}

function fun2(clicked_id){
  First.style.background="";
  Next.style.background="";
  Last.style.background="";
  Previous.style.background="";
  document.getElementById(1).style.backgroundColor ='';
  document.getElementById(2).style.backgroundColor ='';
  document.getElementById(3).style.backgroundColor ='';
  document.getElementById(4).style.backgroundColor ='';
  document.getElementById(5).style.backgroundColor ='';
  document.getElementById(6).style.backgroundColor ='';
  document.getElementById(7).style.backgroundColor ='';
  document.getElementById(8).style.backgroundColor ='';
  document.getElementById(9).style.backgroundColor ='';
  document.getElementById(0).style.backgroundColor ='';
  console.log(clicked_id);
  document.getElementById(clicked_id).style.backgroundColor ='blue';
  //console.log(page/a);
 console.log(page);
 

 (clicked_id==" Previousid")
  if (clicked_id==" Nextid")
 {  
  if(page==90)
  {
    document.getElementById(0).style.backgroundColor ='blue';
  }
   document.getElementById((page+a)/a).style.backgroundColor ='blue';
 console.log(clicked_id)
 console.log(document.getElementById((page)/a));


}

 if (clicked_id==" Previousid")
  { if(page==0)
    {
      document.getElementById(9).style.backgroundColor ='blue';
    }
    document.getElementById((page)/a-1).style.backgroundColor ='blue';
  console.log(clicked_id);}
     if (clicked_id== "Firstid")
{document.getElementById(0).style.backgroundColor ='blue';
 console.log(clicked_id);}
 console.log(clicked_id)
 if (clicked_id==" Lastid")
 {document.getElementById(9).style.backgroundColor ='blue';
  console.log(clicked_id);}
}
function fun1(clicked_id){
  var request=new XMLHttpRequest();
  request.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json',true); 
  request.send();
  var para=request.onload=function(){
  var para = JSON.parse(this.response);
console.log(para)
page=(+clicked_id)*a;
for(i=page;i< page+a; i++)
{   
  clickedid=clickedid+1;
  First.style.background="";
  Next.style.background="";
  Last.style.background="";
  Previous.style.background="";

  document.getElementById(1).style.backgroundColor ='';
  document.getElementById(2).style.backgroundColor ='';
  document.getElementById(3).style.backgroundColor ='';
  document.getElementById(4).style.backgroundColor ='';
  document.getElementById(5).style.backgroundColor ='';
  document.getElementById(6).style.backgroundColor ='';
  document.getElementById(7).style.backgroundColor ='';
  document.getElementById(8).style.backgroundColor ='';
  document.getElementById(9).style.backgroundColor ='';
  document.getElementById(0).style.backgroundColor ='';
 document.getElementById(clicked_id).style.backgroundColor ='blue';
 
  let n=i-page
  document.getElementById("td1"+n).innerText=para[i].id;
   document.getElementById('td2'+n).innerText= para[i].name
  document.getElementById('td3'+n).innerText= para[i].email;
}}}
