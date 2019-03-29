var btn=document.getElementById('but');
var input = document.getElementById("inp");
var tbody = document.getElementById("parent");
var val1;
btn.addEventListener("click",function(){
  val1 = input.value;
  if(!val1)
	{
	   alert("No Value Entered.");
		 return;
	}
  getUser(val1);
});
var user;
function getUser(val){
  console.log(val);
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users/"+val,true);
  xhr.onload = function(){
    var array=xhr.responseText;
    console.log(array);
    user=JSON.parse(array);
	if(user.id==undefined){
		alert("Wrong ID Entered.");
		 return;		
	}
    generateRows();
  };
  xhr.send();
}
function  generateRows()
{
      var row=document.createElement('tr');
      var col1=document.createElement('td');
      var img=document.createElement("IMG");
      img.src=user.avatar_url;
      img.width=90;
      img.height=100;
      col1.appendChild(img);
      row.appendChild(col1);

      var col1=document.createElement('td');
      col1.innerHTML=user.id;
      row.appendChild(col1);

      var col1=document.createElement('td');
      col1.innerHTML=user.login;
      row.appendChild(col1);

      var col1=document.createElement('td');
      col1.innerHTML=user.html_url;
      row.appendChild(col1);
      tbody.appendChild(row);

}
