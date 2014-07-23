
window.onload=start;

function start()
	{
	setTimeout(function(){startwith()},100);
	}

var framebegin=0;
var num_nodes=localStorage.length;
var nodes=new Array(num_nodes);
var repeat;
var hei=0;
var plus=document.getElementById("plus");
var div0=document.getElementById("div0");
//var colors=['red','lightblue','green','yellow','orange','#cc9900'];
var colors=['#008B8B','#B8860B','#BDB76B','#8B008B','#FF8C00','red','green','#20B2AA','#FFA500','#9ACD32','#339966','#FF9900','#6666FF','#9900FF','#669900','#00CC99','#CC6699'];
var ncol=colors.length;
var col=-1,pcol=-1;
var key,value;

for(var j=0;j<localStorage.length;j++)
		{
		if(localStorage.key(j).slice(0,1)!='a')
			{
			localStorage.removeItem(localStorage.key(j));
			}
		}

var count=-1;
	for(var j=0;j<localStorage.length;j++)
		{
		if(parseInt(localStorage.key(j).slice(1))>count)
		count=parseInt(localStorage.key(j).slice(1));
		}

function storeview(e)
	{
	if(typeof(Storage)!=="undefined")
	  {
	localStorage.setItem("storeview_"+e.target.id,"");
	window.location.assign("viewnote.html");
	  }
	}

function editit(e)
	{
	if(typeof(Storage)!=="undefined")
	  {
	localStorage.setItem("editit_"+e.target.id,"");
	window.location.assign("edit.html");
	  }
	}
	
function del(e)
{
var x=confirm("Confirm Deletion?");
if(x==true)
{
var id=e.target.id;
localStorage.removeItem(id);
id=parseInt(id.slice(1))+1;
var kk;

for(var k=id;k<=count;k++)
for(var j=0;j<localStorage.length;j++)
	{
	if(localStorage.key(j)=="a"+id)
		{
		kk=localStorage.getItem("a"+id);
		localStorage.removeItem("a"+id);
		id--;
		localStorage.setItem("a"+id,kk);
		id+=2;
		break;
		}	
	}

location.reload();
}
}
	
function reset(e)
	{
	nodes[e].style.MozAnimationName='';
	nodes[e].style.webkitAnimationName='';
	clearTimeout(repeat);
	}	

function change(e)
	{
	nodes[e].style.MozAnimationName = 'colorchange';
    nodes[e].style.MozAnimationDuration = '2s';
	nodes[e].style.webkitAnimationName = 'colorchange';
    nodes[e].style.webkitAnimationDuration = '2s';
	repeat=setTimeout(function(){reset(e)},2000);
	}	

function resizeit()
	{
	location.reload();
	}
	
function startwith() 	
{	
document.getElementById("plus").style.width=window.innerHeight/5;
	document.getElementById("plus").style.height=window.innerHeight/5;
	document.getElementById("div0").style.width = window.innerWidth/2-6;
	document.getElementById("div0").style.height = window.innerHeight/3-6;
	div0.style.display="block";
for(var i=0;i<num_nodes;i++)
	{
	var oway=count-i;
	nodes[i] = document.createElement("div");
	nodes[i].style.width = window.innerWidth/2-6;
	nodes[i].style.height = window.innerHeight/3-6;
	nodes[i].id="a"+oway;
	
	if(i%2==0)
		{
		nodes[i].style.position='absolute';
		nodes[i].style.left=window.innerWidth/2;
		nodes[i].style.top=hei;
		hei+=window.innerHeight/3;
		}
		while(col==pcol)
			col=Math.floor(Math.random()*ncol);
		
		nodes[i].style.background=colors[col];//"rgba("+Math.floor(Math.random()*207+50)+","+Math.floor(Math.random()*207+50)+","+Math.floor(Math.random()*207+50)+",1)";
		nodes[i].style.border="3px solid black";
		pcol=col;
		//nodes[i].addEventListener("click",storeview);
	document.body.appendChild(nodes[i]);
	
	value = localStorage.getItem("a"+oway);
	
	var divt=document.createElement("div");
	divt.id="a"+oway;
	divt.style.fontFamily="verdana";
	divt.style.fontSize="10px";
	divt.style.borderBottom="thin dotted #000000";
	divt.addEventListener("click",storeview);
	
	var divv=document.createElement("div");
	divv.id="a"+oway;
	divv.style.fontFamily="adobe";
	divv.style.fontSize="20px";
	divv.style.paddingLeft="10px";
	divv.style.paddingRight="10px";
	divv.style.wordBreak="break-all";
	divv.addEventListener("click",storeview);
	
	divt.innerHTML=value.slice(0,25);
	if(value.slice(26).length>17)
		divv.innerHTML=value.slice(26,43)+"...";
	else	
		divv.innerHTML=value.slice(26);
	
	document.getElementById("a"+oway).appendChild(divt);
	
	var img = document.createElement("IMG");
		img.id="a"+oway;
		img.style.width=(window.innerWidth/2)/5;
		img.style.height=(window.innerHeight/3)/5;
		img.style.position="relative";
		img.style.left=7;
		img.style.top=(window.innerHeight/3)/1.6;
		img.src = "bin.png";
		img.addEventListener("click",del);
		document.getElementById("a"+oway).appendChild(img);
	
	var img2 = document.createElement("IMG");
		img2.id="a"+oway;
		img2.style.width=(window.innerWidth/2)/5;
		img2.style.height=(window.innerHeight/3)/5;
		img2.style.position="relative";
		img2.style.left=(window.innerWidth/2)/2;
		img2.style.top=(window.innerHeight/3)/1.6;
		img2.src = "edit.png";
		img2.addEventListener("click",editit);
		document.getElementById("a"+oway).appendChild(img2);
		
	document.getElementById("a"+oway).appendChild(divv);	
	}
	
if(framebegin==0)	
	frame();	
}
	
function frame()
	{
	framebegin=1;
	for(var i=0;i<num_nodes;i++)
		{
		var ran=Math.random();
		if(ran>0.8)
			{
			change(i);
			}
		}
	setTimeout(function(){frame()},2000);		
	}
//window.addEventListener("onresize",function(){location.reload();});	
window.onresize=resizeit;