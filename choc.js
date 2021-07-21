const items=[
    {
        "id":1,
        "itemname":"Chocolate",
        "cost":850.
    },
    {
        "id":2,
        "itemname":"Choclate",
        "cost":200.
    },
    {
        "id":3,
        "itemname":"tasty Choclate",
        "cost":350.
    },
    {
        "id":4,
        "itemname":"Sweet Choclate",
        "cost":900.
    },
    {
        "id":5,
        "itemname":"Choclate",
        "cost":500.
    },
    {
        "id":6,
        "itemname":"Choclate",
        "cost":600.
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