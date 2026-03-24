// Item controller,UI controller,storage contorller

const StorageCtrl=(function(){
    return {
        storeItem:function(item){
            let items="";
            // check if any item in ls
            if(localStorage.getItem("Items")===null){
                items=[];
                // push new item
                items.push(item);
                // set in localStorage
                localStorage.setItem("items",JSON.stringify(item));
                console.log("step-1");
            }else{
                // Get the existing data from ls
                items=JSON.parse(localStorage.getItem("items"));
                // push the new item
                items.push(item);
                 // set in localStorage
                localStorage.setItem("items",JSON.stringify(item));
                console.log("step-2");
            }
        },
        getItem:function(){
            let items;
            // check if any items in arrar
            if(localStorage.getItem("items")===null){
                items=[];
            }else{
                items=JSON.parse(localStorage.getItem("items"));
            }
            return items;
        },
        delteItemLs:function(id){
            let items=JSON.parse(localStorage.getItem("items"));
            items.forEach(function(item,index){
                if(id===item.id){
                    item.splice(index,1);
                }
            })
            // Reset items from array
            localStorage.setItem("items",JSON.stringify(items))
        },
        udateItemLs:function(updatedItem){
            let items=JSON.parse(localStorage.getItem("items"));
            items.forEach(function(item,index){
                if(updatedItem.id===item.id){
                    item.splice(index,1,updatedItem);
                }
            })
            localStorage.setItem("items",JSON.stringify(items));
        },
        clearItems:function(){
            localStorage.removeItem("items")
        }
    }
})
();
const ItemCtrl=(function(){
    // Item constructor

    const Item=function(id,name,money){
        this.id=id;
        this.name=name;
        this.money=money;
    }
    // data structure/ state
    const data={
        items:StorageCtrl.getItem(),
        currentItem:null,
        totalMoney:0
    }
    return{
        getItem:function(){
            return data.items;
        },
        addItem:function(name,money){
            let ID;
            if(data.items.length>0){
                ID=data.items[data.items.length-1].id+1;
            }else{
                ID=0;
            }
            money=parseInt(money);
            const newItem=new Item(ID,name,money);
            data.items.push(newItem);
            return newItem;
        },
        gettOTotalMoney:function(){
            let total=0;
            if(data.items.length>0){
                data.items.forEach(item=>{
                    total+=item.money;
                })
            }
            return total;
        },getItemById:function(id){
            let found=null;
            data.items.forEach(item=>{
                if(item.id===id){
                    found=item;
                }
            })
            return found;
        },
        setItemCurrentItem:function(item){
            data.currentItem=item;
        },
        getCurrentItem:function(){
            return data.currentItem;
    },
    delteItem:function(id){
        // Get Ids
        const Ids=data.items.map(function(item){
            return item.id;
        })
        // Get index
        const index=Ids.indexOf(id);
        data.items.splice(index,1);
    },
    updatedItem:function(name,money){
         money=parseInt(money);
         let found=null;
         data.items.forEach(function(item){
            if(item.id === data.currentItem.id){
                item.name=name,
                item.money=money,
                found=item
            }
         })
         return found;
    },
    clearAllItem:function(){
        data.items=[];
    }
    }
})
();
ItemCtrl.gettOTotalMoney();
const UICtrl=(function(){
    return{
        populateItemList:function(items){
            let html="";
            items.forEach(item=>{
                html+=` <li class="collection-item" id="item-${item.id}">
                <strong>${item.name}</strong> : <em>${item.money} rs</em>
                <a href="#" class="secondary-content"><i class="fa-solid fa-pencil edit-item"></i></a>
            </li>`    
        })
        document.querySelector("#item-list").innerHTML=html;
        // console.log(html);
    },
    clearEditState:function(){
        document.querySelector(".add-btn").style.display="inline";
        document.querySelector(".update-btn").style.display="none";
        document.querySelector(".delete-btn").style.display="none";
        document.querySelector(".back-btn").style.display="none";
    },
    showEditState:function(){
         document.querySelector(".add-btn").style.display="none";
        document.querySelector(".update-btn").style.display="inline";
        document.querySelector(".delete-btn").style.display="inline";
        document.querySelector(".back-btn").style.display="inline";
    },
    getItemInput:function(){
        return{
            name:document.querySelector("#item-name").value,
            money:document.querySelector("#item-money").value,
        }
    },
    addListItem:function(newItem){
        const li=document.createElement("li");
        li.className="collection-item";
        li.id=`item-${newItem.id}`;
        li.innerHTML=`<strong>${newItem.name}</strong> : <em>${newItem.money} rs</em>
        <a href="#" class="secondary-content"><i class="fa-solid fa-pencil edit-item"></i></a>`;
        document.querySelector("#item-list").appendChild(li);
    },
    clearInput:function(){
        document.querySelector("#item-name").value="";
        document.querySelector("#item-money").value="";
    },
    showTotalMoney:function(totalMoney){
        document.querySelector(".total-money").textContent=totalMoney;
    },
    addItemToForm:function(){
        document.querySelector("#item-name").value=ItemCtrl.getCurrentItem().name;
        document.querySelector("#item-money").value=ItemCtrl.getCurrentItem().money;
    },
    delteListItem:function(id){
        const itemID=`#item-${id}`;
        const item=document.querySelector(itemID);
        item.remove();
    },
    updateListitem:function(item){
        let listItems=document.querySelectorAll(".collection-item");
        listItems.forEach(function(listItems){
            const itemID=listItems.getAttribute("id");
            if(itemID===`item-${item.id}`){
                document.querySelector(`#${itemID}`).innerHTML=`
                <strong>${item.name}</strong> : <em>${item.money} rs</em>
                <a href="#" class="secondary-content"><i class="fa-solid fa-pencil edit-item"></i></a>`
            }
        })
    },
    clearItems:function(){
        const collections=document.querySelector("#item-list");
        collections.innerHTML="";
    }
    }
})
();
const app=(function(){
    const loadEventLister=function(){
        document.querySelector(".add-btn").addEventListener("click",itemAddSubmit);
        document.querySelector(".delete-btn").addEventListener("click",itemDeleteSubmit);
        document.querySelector(".update-btn").addEventListener("click",itemUpdateSubmit);
        document.querySelector(".clear-btn").addEventListener("click",clearAllSubmit);
        document.querySelector(".back-btn").addEventListener("click",function(){
            UICtrl.clearEditState();
            UICtrl.clearInput();
        });
        document.querySelector("#item-list").addEventListener("click",itemEditClick);
    }
    // Add item submit
    const itemAddSubmit=function(e){
        e.preventDefault();
        // get the form input from UI controller
        const input=UICtrl.getItemInput();
        if(input.name==="" || input.money===""){
            alert("Please fill in all fields");
        }else{
            // console.log(input.name,input.money); 
           // Add item
           const newItem=ItemCtrl.addItem(input.name,input.money);
           // Add item to UI list
           UICtrl.addListItem(newItem);
           // Get total money
           const totalMoney=ItemCtrl.gettOTotalMoney();
            //Add to localStorage
            StorageCtrl.storeItem(newItem);


           // Show total money in UI
           UICtrl.showTotalMoney(totalMoney);
            UICtrl.clearInput();  
        }
    }
    const itemEditClick=function(e){
        if(e.target.classList.contains("edit-item")){
            UICtrl.showEditState();
            // Get the id
            const listId=e.target.parentNode.parentNode.id;
            // Break into an array
            const listIdArr=listId.split("-");
            const id=parseInt(listIdArr[1]);
            // Get item
            const itemToEdit=ItemCtrl.getItemById(id);
            // Set current item
            ItemCtrl.setItemCurrentItem(itemToEdit);
            // Add item to form
             UICtrl.addItemToForm();
        }
    }
    // Item to delte
    const itemDeleteSubmit=function(){
        // get current item
        const currentItem=ItemCtrl.getCurrentItem();
        // Dlelte from data Structure
        ItemCtrl.delteItem(currentItem.id)
        // Delete from Ui
        UICtrl.delteListItem(currentItem.id);
        const totalMoney=ItemCtrl.gettOTotalMoney();
        // Delete from locaStorage
        StorageCtrl.delteItemLs(currentItem.id);
        UICtrl.showTotalMoney(totalMoney);

        UICtrl.clearEditState();

        UICtrl.clearItems();
    }
    const clearAllSubmit=function(){
        // clear All from DS
        ItemCtrl.clearAllItem();
        UICtrl.clearItems();
        StorageCtrl.clearItems();
         const totalMoney=ItemCtrl.gettOTotalMoney();
        UICtrl.showTotalMoney(totalMoney);
    }
    const itemUpdateSubmit=function(){
        // Get the input
        const input=UICtrl.getItemInput();
        // Update item
        const updatedItem=ItemCtrl.updatedItem(input.name,input.money)
        // Update Ui
        UICtrl.updateListitem(updatedItem);
        // update localStorage
        StorageCtrl.udateItemLs(updatedItem);
        UICtrl.delteListItem(currentItem.id);
        const totalMoney=ItemCtrl.gettOTotalMoney();
        UICtrl.showTotalMoney(totalMoney);

        UICtrl.clearEditState();

        UICtrl.clearItems();
    }
    return {
        start:function(){
            console.log("App Started");
            UICtrl.clearEditState()
            const items=ItemCtrl.getItem();
            if(items.length>0){
                    UICtrl.populateItemList(items);
            }
            const totalMoney=ItemCtrl.gettOTotalMoney();
            UICtrl.showTotalMoney(totalMoney);
            loadEventLister();
        }
    }
  
})
();
app.start();