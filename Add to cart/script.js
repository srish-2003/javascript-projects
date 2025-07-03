let itemsArray=[]
                
            const nothingDiv=document.getElementById('cart-single-item-container')
            if(itemsArray.length!=0){
                nothingDiv.remove();
            }

            function addItems(item,price){

                const itemName={
                    item:item,
                    price:price
                }
                console.log(itemName);
                
                itemsArray.push(itemName)
                console.log(itemsArray);
                displayItems()
            }

            function displayItems(){
                const displayContainer=document.getElementById('cart-subcontainer')
                displayContainer.innerHTML=' '

                itemsArray.forEach((data,index) => {
                    const newItem=document.createElement('div')
                    newItem.classList.add('single-item-container');

                    const newSpan=document.createElement('span')
                    newSpan.innerText=data.item
                    newItem.appendChild(newSpan)
                    displayContainer.appendChild(newItem)
                     })
            }

            function clearCart(){
                itemsArray.splice(0,itemsArray.length)
                console.log(itemsArray);
                displayItems()
                if(itemsArray.length==0){
                    const nothingSpan=document.createElement('span')
                    nothingSpan.id="cart-single-item-container"
                    nothingSpan.innerText='Nothing in your cart';
                    nothingSpan.style.fontSize="1.5rem";
                    const displayContainer=document.getElementById('cart-subcontainer')
                    displayContainer.append(nothingSpan)

                    //this works toooooooo................
                    // const displayContainer=document.getElementById('cart-subcontainer')
                    // displayContainer.innerHTML='<span style="font-size: 1.5rem;" id="cart-single-item-container">Nothing in your cart</span>'//erroe dera: bhar ki taraf use single quotes instead 
                }
            }
        