async function button(){
    try{
        const a=document.getElementById("text").value;
        console.log(a);
        const res=await fetch("https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=%7Bd82dce617113dc86ab2408e76df76adb%7D");
        const products= await res.json();
        str=``
        products.products.map((product)=>{
            str+=`<div class="card">
            <a href="product.html?id=${product.id}"><img src="${product.thumbnail}" alt=""></a>
                    <h4>${product.title.substring(0,15)}</h4>
                    <span><b><h2>$ ${product.price}<b><h2></span>

            </div>`
        })
        document.getElementById("cards").innerHTML=str;
    }
    catch(error)
    {
        console.log(error);
    }   
}

    
    