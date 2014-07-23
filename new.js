

function cli()
{
var count=-1;
for(var i=0;i<localStorage.length;i++)
	{
	if(parseInt(localStorage.key(i).slice(1))>count)
	count=parseInt(localStorage.key(i).slice(1));
	}
count++;
var date=new Date();
var datetime="a"+count;

	if(typeof(Storage)!=="undefined" && noteform.title.value!="")
	  {
	  noteform.title.value=(date.toString()).slice(0,25)+"_"+noteform.title.value;
	localStorage.setItem(datetime,noteform.title.value);
	//alert('Note Saved  ^_^ ');
	window.location.assign("notelist.html");
	  }
}


function Reset(){

	noteform.title.value="";
	
}