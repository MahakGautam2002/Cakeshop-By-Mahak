const items=[
    {
        "id":1,
        "itemname":"Chocolate Favour BirthdayCake",
        "cost":850.
    },
    {
        "id":2,
        "itemname":"Doll BirthdayCake",
        "cost":1200.
    },
    {
        "id":3,
        "itemname":"Home-Made Chocolate Cake",
        "cost":350.
    },
    {
        "id":4,
        "itemname":"Aquarium cake",
        "cost":900.
    },
    {
        "id":5,
        "itemname":"JanmaAstamai Special Cake",
        "cost":1500.
    },
    {
        "id":6,
        "itemname":"Doll lable Cake",
        "cost":600.
    },
    {
        "id":7,
        "itemname":"Princess crown Cake",
        "cost":900.
    },
    {
        "id":8,
        "itemname":"BirthdayCake",
        "cost":800.
    },
    {
        "id":9,
        "itemname":"BirthdayCake",
        "cost":850.
    },
    {
        "id":10,
        "itemname":"BirthdayCake",
        "cost":750.
    },
    {
        "id":11,
        "itemname":"1ST BirthdayCake",
        "cost":750.
    },
    {
        "id":12,
        "itemname":"Home-Made Simple cake",
        "cost":250.
    },
    {
        "id":13,
        "itemname":"Cake Combo",
        "cost":2000.
    },
    {
        "id":14,
        "itemname":"Anniversary Cake",
        "cost":850.
    },
    {
        "id":15,
        "itemname":"2tier Anniversary Cake",
        "cost":1300
    },
    {
        "id":16,
        "itemname":"Anniversary Cake",
        "cost":900.
    },
    {
        "id":17,
        "itemname":"Choco Paistery",
        "cost":150.
    },
    {
        "id":18,
        "itemname":"Chocolate cup",
        "cost":450.
    },
    {
        "id":19,
        "itemname":"Chocolate Cake",
        "cost":850.
    },
];
var TotalAmount=0;
var ItemCount=0;
function AddToCart(id)
{
    var itemid=id;
    var item=items.find(item => item.id === itemid);
    console.log(item);
    var itemcost= item.cost;
    var itemname= item.itemname;
    var quantity=1;
    ItemCount+=1;
    TotalAmount+= quantity*itemcost;

    var cart= document.getElementById("carttable");
    cart.innerHTML+=
    `<tr>
        <td>${ItemCount}</td>
        <td>${itemname}</td>
        <td>${quantity}</td>
        <td>${itemcost}</td>
        <td>${quantity*itemcost}</td>
    </tr> `
   
    var cartTotal= document.getElementById("cartTotal");
    cartTotal.innerHTML=
    `<tr> 
        <td></td>
        <td></td>
        <td></td>
        <td><b>TOTAL</b></td>
        <td>${TotalAmount}</td>
    </tr>`

}