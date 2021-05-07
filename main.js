menu_list_array= ["Chicken Tandoori Pizza","Veg Supreme Pizza","Paneer Tikka Pizza","Deluxe Veggle Pizza","Veg Extravegghenza Pizza"];
function get_menu(){
    var html_data;
    html_data="<ol class='menulist' >"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        html_data=html_data+'<li>' + menu_list_array[i] + '</li>'
    }
    html_data=html_data+"</ol>"
    document.getElementById("display_menu").innerHTML=html_data;
}
function add_item(){
    var html_data;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    html_data="<section class='cards'>"
    for(var i=0;i<menu_list_array.length;i++){
        html_data=html_data+"<div class='cards'>" + '<img src="images/pizzaImg.png"/>' + menu_list_array[i]+"</div>"
    }
    html_data=html_data+"</section>"
    document.getElementById("display_added_menu").innerHTML = html_data;
}