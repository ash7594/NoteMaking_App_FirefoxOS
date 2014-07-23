var j,id,id1,aa,id3,key,len;

window.onload=function()
	{
	for(var i=0;i<localStorage.length;i++)
		if(localStorage.key(i).slice(0,9)=="storeview")
			{
			j=localStorage.key(i).slice(10);
			view(j);
			break;
			}
		else if(localStorage.key(i).slice(0,6)=="editit")
			{
			j=localStorage.key(i).slice(7);
			edit(j);
			break;
			}		
	}

function del(e)
{
id=e.target.id;
localStorage.removeItem(id);
location.reload();
}

function view(id1)
{
 var n2 = document.getElementById('n2');
 var head = document.getElementById('head');
 
value = localStorage.getItem(id1);
           head.innerHTML=value.slice(0,25);
	      n2.innerHTML=value.slice(26);	 
}

function edit(id3)
{
/*document.getElementById('note1').style.display="none";
document.getElementById('note3').style.display="block";
document.getElementById('note2').style.display="none";*/
aa=id3;
document.getElementById('title').innerHTML=localStorage.getItem(id3).slice(26);
}


function cli()
{
var kk;
var count=-1;
var numb=parseInt(aa.slice(1))+1;
var date=new Date();
	if(typeof(Storage)!=="undefined" && noteform.title.value!="")
	  {
	  noteform.title.value=(date.toString()).slice(0,25)+"_"+noteform.title.value;
	  localStorage.removeItem("editit_"+j);
	  
	for(var m=0;m<localStorage.length;m++)
		{
		if(parseInt(localStorage.key(m).slice(1))>count)
		count=parseInt(localStorage.key(m).slice(1));
		}
	  
	  for(var k=numb;k<=count;k++)
for(var m=0;m<localStorage.length;m++)
	{
	if(localStorage.key(m)=="a"+numb)
		{
		kk=localStorage.getItem("a"+numb);
		localStorage.removeItem("a"+numb);
		numb--;
		localStorage.setItem("a"+numb,kk);
		numb+=2;
		break;
		}	
	}
	  localStorage.setItem("a"+count,noteform.title.value);
		window.location.assign("notelist.html");
	  } 
	//alert('Note Changed  ^_^');
}

function removex()
	{
	localStorage.removeItem("editit_"+j);
	window.location.assign("notelist.html");
	}

function Reset()
{
	noteform.title.value="";
}

function goback()
	{
	localStorage.removeItem("storeview_"+j);
	window.location.assign("notelist.html");
	}

function show(){

	var count=-1;
	for(var j=0;j<localStorage.length;j++)
		{
		if(parseInt(localStorage.key(j).slice(1))>count)
		count=parseInt(localStorage.key(j).slice(1));
		}

    for (i = count; i >=0; i--)
		{
	      key = localStorage.key("a"+i);
	      value = localStorage.getItem(key);
		  len=value;
		  if(value.length>100)
		  value=len.slice(0,100)+"<span style='font-size:15px; color:orange;'>........more</span>";
		  
	      ni.innerHTML+="</br><span  style='color:white; display: inline-block;word-break: break-all;font-size:20px; word-wrap:break-all;' id='"+key+"'onclick='view(this.id)'>"+value+"</span></br>"+"<p style='color:white; font-size:15px;'>@ "+key+"</br>"+"<button class='danger' id='"+key+"'style='border-radius:10px;width:70px; height:30px;float:right;' onclick='del(this.id)'>Delete</button>"+
		  "<button class='danger' id='"+key+"'style='border-radius:10px;width:70px; height:30px;float:right;' onclick='edit(this.id)'>Edit</button>"+"<hr style='border:1px dotted;'>";
	       
	  	}

	}
	
