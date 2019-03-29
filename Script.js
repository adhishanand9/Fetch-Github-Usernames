var btn=document.getElementById('but');
var input = document.getElementById("inp");
var tbody = document.getElementById("parent");
var value;
btn.addEventListener("click",function(){
  value = input.value;
  if(!value)
	{
	   alert("No Value Entered.");
		 return;
	}
  getUser(value);
});
var user=[];
function getUser(val){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users?since="+val);
  xhr.onload = function(){
    //console.log(xhr.responseText);
    var array=xhr.responseText;
    user=JSON.parse(array);
    console.log(user[0]);
	
	if(user.id==undefined){
		alert("Wrong Value Entered.");
		 return;		
	}
  generateRows();
  };
  xhr.send();
}
var i=0;
function  generateRows()
{
      console.log(i);
      var row=document.createElement('tr');
      row.setAttribute('id',i);
      var col1=document.createElement('td');
      var img=document.createElement("IMG");
      img.src=user[i].avatar_url;
      img.width=90;
      img.height=100;
      col1.appendChild(img);
      row.appendChild(col1);

      var col1=document.createElement('td');
      col1.innerHTML=user[i].id;
      row.appendChild(col1);

      var col1=document.createElement('td');
      col1.innerHTML=user[i].login;
      row.appendChild(col1);

      var col1=document.createElement('td');
      col1.innerHTML=user[i].html_url;
      row.appendChild(col1);
      tbody.appendChild(row);
      i++;
}
