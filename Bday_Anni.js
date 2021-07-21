const items=[
    {
        "id":1,
        "itemname":"Red Welwate Cake",
        "cost":700.
    },
    {
        "id":2,
        "itemname":"Tasty Cakes",
        "cost":650.
    },
    {
        "id":3,
        "itemname":"2nd tier Anniversary cake",
        "cost":900.
    },
    {
        "id":4,
        "itemname":"Vanilla Cake",
        "cost":450.
    },
    {
        "id":5,
        "itemname":"Couple cake",
        "cost":500.
    },
    {
        "id":6,
        "itemname":"3 tier Cake",
        "cost":1000.
    },
    {
        "id":7,
        "itemname":"Smile cake",
        "cost":900.
    },
    {
        "id":8,
        "itemname":"Crown Cake",
        "cost":850.
    },
    {
        "id":9,
        "itemname":"Cartoon Printed Cake",
        "cost":950.
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