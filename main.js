menu_list_array = ["Neapolitan Pizza","Chicago Pizza","New York-Style Pizza","Sicilian Pizza","Greek Pizza","California Pizza","Detroit Pizza","St. Louis Pizza"]

function getMenu()
{
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort()
for(var i=0;i<menu_list_array>  i++;){
    htmldata=htmldata +'<li>' + menu_list_array[i] + '</li>'
}
htmldata=htmldata+'<ol>'
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item()
{
    var htmldata;
    var item=document.getElementById("add_item").value
    menu_list_array.push(item)
    menu_list_array.sort();
    htmldata="<section class='cards'>" 
    for(var i=0;i<menu_list_array.lengt;i++){}

    htmldata=htmldata+"<div class='cards'>" 
}
htmldata=htmldata+"</section>"
document.getElementById("display_menu").innerHTML = htmldata;