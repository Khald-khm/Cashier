$("document").ready(function(){

    var breakfast = new Array("Egg", "Cheese", "Olive");

    var lunch = new Array("sandwich", "Kebab");

    var dinner = new Array("Steak", "Fries");

    var drink = new Array("Hot", "Cold");

    var salad = new Array("Classic", "Caesar", "Coleslaw");


    var cold = new Array("Orange", "Strawberry");

    var hot = new Array("Coffee", "Cappuccino", "Nescafe")

    var sandwich = new Array("shawerma", "Burger");


    var allThings = [
        {name : "Egg", category : "Breakfast", price : "12", description : "Breakfast meal contains egg and some potato"},
        {name : "Cheese", category : "Breakfast", price : "10", description : "Breakfast meal contains egg and some potato"},
        {name : "Olive", category : "Breakfast", price : "5", description : "Breakfast meal contains egg and some potato"},
        {name : "Kebab", category : "Lunch", price : "30", description : "Breakfast meal contains egg and some potato"},
        {name : "Steak", category : "Dinner", price : "25", description : "Breakfast meal contains egg and some potato"},
        {name : "Fries", category : "Dinner", price : "14", description : "Breakfast meal contains egg and some potato"},
        {name : "Classic", category : "Salad", price : "6", description : "Breakfast meal contains egg and some potato"},
        {name : "Caesar", category : "Salad", price : "9", description : "Breakfast meal contains egg and some potato"},
        {name : "Coleslaw", category : "Salad", price : "4", description : "Breakfast meal contains egg and some potato"},
        {name : "Strawberry", category : "Drinks", price : "11", description : "Breakfast meal contains egg and some potato"},
        {name : "Orange", category : "Drinks", price : "10", description : "Breakfast meal contains egg and some potato"},
        {name : "Coffee", category : "Drinks", price : "8", description : "Breakfast meal contains egg and some potato"},
        {name : "Cappuccino", category : "Drinks", price : "13", description : "Breakfast meal contains egg and some potato"},
        {name : "Nescafe", category : "Drinks", price : "11", description : "Breakfast meal contains egg and some potato"},
        {name : "shawerma", category : "Lunch", price : "15", description : "Breakfast meal contains egg and some potato"},
        {name : "Burger", category : "Lunch", price : "20", description : "Breakfast meal contains egg and some potato"},
    
    ];


    var ordered = [];


    var allMeals = new Array();
    allMeals = allMeals.concat(breakfast, dinner, salad, cold, hot, sandwich);


    var disabled = new Array("nothing");

    var status = "";

    

    var orderNum = new Array();
    var num = 1;






    function firstCategory(meal, items){
        

        // $(".secondPage").fadeIn("fast", function(){
            $(".firstPage").addClass("d-none");
            // $(".firstPage").removeClass("d-block");
            $(".secondPage").addClass("d-block");
            secondPage(items , meal + "Meal");
            $("." + meal + "Meal").addClass("active");

            pageHead(meal);
            
            
        // });
        
    }


    function secondPage(content, addingClass){

        $(".firstCat").empty();

        for(var prop in content)
        {
            $(".firstCat").append('<div class="subCategory tab-pane card mb-2  ' + addingClass + '  "  style="width: 12rem;"><div class="card-body text-center ' + content[prop] + '">' + content[prop] + '</div></div>');
            
        }
    }


    


    



    function thirdPage(para){
        
        var currentThirdPage = para;

        $(document).on("click", "." + para, function(){
            
            $(".subCategory").removeClass("active");
            
            $(".thirdPage").addClass("d-flex justify-content-center flex-column");


            $(".thirdPage").empty();

            for(exist in disabled){
                if(disabled[exist] == para){
                    status = "disabled";
                    break
                }

                else{
                    status = "";
                }
            }

            for(var l in allThings)
            {
                if(allThings[l].name == para){
                    var paraName = allThings[l].name; 
                    var paraPrice = allThings[l].price;
                    var paraDescription = allThings[l].description;
                }
            }

            $(".thirdPage").append('<div class="categoryHeadingTwo h2 py-2 text-white d-none justify-content-between"><div class="head"></div><div class="iconSection d-flex justify-content-between"><div class="homeBtn mx-2 backBtn d-flex justify-content-center align-items-center"><svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75024 19.2502H17.2502C18.3548 19.2502 19.2502 18.3548 19.2502 17.2502V9.75025L12.0002 4.75024L4.75024 9.75025V17.2502C4.75024 18.3548 5.64568 19.2502 6.75024 19.2502Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.74963 15.7493C9.74963 14.6447 10.6451 13.7493 11.7496 13.7493H12.2496C13.3542 13.7493 14.2496 14.6447 14.2496 15.7493V19.2493H9.74963V15.7493Z"/></svg></div><div class="thirdBackBtn backBtn d-flex justify-content-center align-items-center"><svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.75 8.75L14.25 12L10.75 15.25"/></svg></div></div></div><div class="card ' + para + " " + para + 'Card d-none" style=" background-color: inherit; border: none; color: white;"><div class = "barNumber d-flex justify-content-center flex-column"><ul class = "d-flex justify-content-center flex-row"> <li class="countNumber counting0" style="margin: 2px; border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 0 </li><li class="countNumber counting1" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 1 </li><li class="countNumber counting2" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 2 </li> <li class="countNumber counting3" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 3 </li><li class="countNumber counting4" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 4 </li> <li class="countNumber counting5" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 5 </li><li class="countNumber counting6" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 6 </li><li class="countNumber counting7" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 7 </li><li class="countNumber counting8" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 8 </li><li class="countNumber counting9" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 9 </li></ul> <div class="d-flex justify-content-center"><div class="countingLabel " style ="width: 35px; font-size: 1.2rem;"></div></div></div><div class="card-img d-flex justify-content-center"><img src="../../plugins/' + para + '.jpg" alt="" class="card-img-top" style="width: 14vw;"></div><div class="card-body"><div class="d-flex justify-content-between align-items-center pb-3"><h5 class="card-title pt-1" style="font-size: 1.5rem;">Ingredients</h5> <div class="h3">' + paraPrice + '</div> </div> <div class="card-text" style="font-size: 1rem;">' + paraDescription + '</div><div class="d-flex justify-content-center align-items-center pt-5"><button class="btn btn-primary w-50 buy'+ para +'" ' + status + '>Add</button> </div></div></div>');


            $("hr.onHead").addClass("d-none");
            
            
            $("."+para+"Card").removeClass("d-none");
            
            pageHead(paraName); 
        
            $(".secondPage").fadeOut("fast", function(){

                $(".firstPage").removeClass("d-block");

                $(".categoryHeading").removeClass("d-flex");
                $(".secondPage").removeClass("d-block");
                $(".categoryHeadingTwo").removeClass("d-none");
                $(".categoryHeadingTwo").addClass("d-flex");
    
                $(".secondPage").css("display", "none");
            });
    
            $(".thirdPage").fadeIn("fast", function(){
                
            });
            
    
        })

    }


    $(document).on("click", ".counting0", function(){
        // console.log("2");
        // $(".countingLabel").empty();
        $(".countingLabel").append("0");
        thirdPage(currentThirdPage);
    })

    $(document).on("click", ".counting1", function(){
        // console.log("2");
        // $(".countingLabel").empty();
        $(".countingLabel").append("1");
        thirdPage(currentThirdPage);
    })

    $(document).on("click", ".counting2", function(){
        // console.log("2");
        // $(".countingLabel").empty();
        $(".countingLabel").append("2");
        thirdPage(currentThirdPage);
    })


    $(document).on("click", ".counting3", function(){
        // console.log("2");
        // $(".countingLabel").empty();
        $(".countingLabel").append("3");
        thirdPage(currentThirdPage);
    })

    $(document).on("click", ".counting4", function(){
        // console.log("2");
        // $(".countingLabel").empty();
        $(".countingLabel").append("4");
        thirdPage(currentThirdPage);
    })


    $(document).on("click", ".counting5", function(){
        // console.log("2");
        // $(".countingLabel").empty();
        $(".countingLabel").append("5");
        thirdPage(currentThirdPage);
    })


    $(document).on("click", ".counting6", function(){
        // console.log("2");
        // $(".countingLabel").empty();
        $(".countingLabel").append("6");
        thirdPage(currentThirdPage);
    })


    $(document).on("click", ".counting7", function(){
        // console.log("2");
        // $(".countingLabel").empty();
        $(".countingLabel").append("7");
        thirdPage(currentThirdPage);
    })

    $(document).on("click", ".counting8", function(){
        // console.log("2");
        // $(".countingLabel").empty();
        $(".countingLabel").append("8");
        thirdPage(currentThirdPage);
    })

    $(document).on("click", ".counting9", function(){
        // console.log("2");
        // $(".countingLabel").empty();
        $(".countingLabel").append("9");
        thirdPage(currentThirdPage);
    })




    function pageHead(head){
        $(".head").empty();
        $(".head").append(head);
    }

    var i;
    var j;

    

    function buy(item){
        $(document).on("click", ".buy"+item, function(){

            for(var k in allThings)
            {
                if(allThings[k].name == item){
                    var itemName = allThings[k].name; 
                    var itemPrice = allThings[k].price;
                    var itemCategory = allThings[k].category;
                    var itemCount = 1 ;
                    var itemTotal = allThings[k].price;
                    

                    var exist = false;

                    for(var r in ordered)
                    {
                        if(item == ordered[r].name)
                        {
                            var discountClass = ".discount" + r;

                            if($(".countingLabel").is(":empty")){

                                ordered[r].count = parseInt(ordered[r].count) + 1;
                                // itemCount = 1;
                                // console.log("it is empty");
                            }
                            else{
                                itemCount = parseInt($(".countingLabel").text());

                                
                                ordered[r].count = itemCount;
        
                                // var itemTotal = itemPrice * itemCount;
                            }

                            // ordered[r].count = parseInt(ordered[r].count) + itemCount;
                            ordered[r].total = itemPrice * ordered[r].count;

                            // var hello = parseInt(ordered[r].count) ;

                            // hello = hello + itemCount;

                            // console.log("itemCount = " + itemCount );
                            // console.log("ordered count " + ordered[r].count);


                            if($(discountClass).val().includes('%'))
                            {
                                ordered[r].discount = $(discountClass).val();
                                
                                var discountValue = $(discountClass).val().split("");
                                discountValue.pop();


                                discountValue = discountValue.toLocaleString(discountValue);

                                discountValue = discountValue.replace(",","");
                                
                                // console.log("discountValue " + discountValue);
                                
                                ordered[r].afterDiscount = ordered[r].total - ( ordered[r].total * discountValue / 100)  - ordered[r].free * ordered[r].price;
                            }
                            else{
                                ordered[r].discount = $(discountClass).val();

                                var trying = parseInt($(discountClass).val()) + 1;
                                console.log("after Discount " + parseInt(trying));

                                ordered[r].afterDiscount = parseInt(ordered[r].total) - parseInt($(discountClass).val()) - parseInt(ordered[r].free) * parseInt(ordered[r].price);
                            }

                            
                            // ordered[r].afterDiscount = parseInt(ordered[r].total) - (parseInt(ordered[r].total) * discountValue / 100)  - parseInt(ordered[r].free) * parseInt(ordered[r].price);

                            

                            exist = true;
                            
                        }
                        else{
                            exist = false;
                        }
                    }
                    
                    if(exist == false){
                        if($(".countingLabel").is(":empty")){
                            itemCount = "1";
                            // console.log("it is empty");
                        }
                        else{
                            itemCount = $(".countingLabel").text();
    
                            var itemTotal = itemPrice * itemCount;
                        }

                        ordered.push({name : itemName, category : itemCategory, price : itemPrice, count : itemCount, free : "0", discount: "0", total : itemTotal, afterDiscount : itemTotal});
                    }
                }
            }
            
            $(".orderList").empty();
            $(".orderList").append('<tr class="text-dark py-2 tableHead" style="background-color:#8a8e92"><th class="py-2 pl-3"><div class="mealOrder" >Name</div></th><th class=""><div class="mealCategory" style="font-size: .9rem; text-align: center;">Category</div></th><th><div class="price" style="font-size: .9rem; text-align: center;">Price</div></th><th><div class="count" style="font-size: .9rem; text-align: center;">Count</div></th><th><div class="priceBeforeDiscount" style="font-size: .95rem; text-align: center;">Total</div></th><th><div class="free" style="font-size: .9rem; text-align: center;">Free</div></th><th><div class="discount" style="font-size: .9rem; text-align: center;">Discount</div></th><th class=""><div class="priceDiscount" style=" text-align: center;">After Discount</div></th><th> </th></tr>')

            for(var c = 0; c < ordered.length; c++)
            {
                $(".orderList").append('<tr class="text-white line' + c + '"><td class="py-3 pl-3"><div class="mealOrder mealNumber' + c + '" style="font-size: .9rem;">' + ordered[c].name + '</div></td><td><div class="mealCategory " style="font-size: .9rem; text-align: center;">' + ordered[c].category + '</div></td><td><div class="price' + c + '" style="font-size: .9rem; text-align: center;">' + ordered[c].price + '</div></td><td><div class="count d-flex justify-content-center" style="font-size: .9rem;"><input class="count' + c + '" type="text" value ="' + ordered[c].count + '" min ="1" style="width: 45px; border: none;"></div></td><td><div class="total' + c + '" style="font-size: .95rem; text-align: center;">' + ordered[c].total +'</div></td><td><div class="free d-flex justify-content-center" style="font-size: .9rem;"><input class="free' + c + '" type="text" value ="' + ordered[c].free + '" min ="1" style="width: 45px; border: none;"></div></td><td><div class="discount d-flex justify-content-center" style="font-size: .9rem; text-align: center;"><input class="discount' + c + '" type="text" value ="' + ordered[c].discount + '" min ="0" max="100"  style="width: 45px;  border: none;"></div></td><td><div class="discountPrice' + c + '" style=" text-align: center;">' + ordered[c].afterDiscount + '</div></td><td class=" px-3 "><div class="delete delete' + c + ' d-flex justify-content-center" style=" border-radius: 50%;  padding: 2px;"><svg width="8" height="12" fill="none" viewBox="0 0 24 24"><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M17.25 6.75L6.75 17.25"/><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M6.75 6.75L17.25 17.25"/></svg></div></td></tr>');
            }
            

            orderNum.push(item);
            
            
                
            // changing total price when changing count
            for(i = 0; i < orderNum.length; i++)
            {
                var countClass = ".count" + i;
                var priceClass = ".price" + i;
                var totalClass = ".total" + i;
                var nameClass = ".mealNumber" + i;


                var discountClass = ".discount" + i;
                var totalDiscountClass = ".discountPrice" + i;

                $(document).on("change", countClass, function(){

                    // var count = $(countClass).val();
                    // var price = parseInt($(priceClass).text());



                    // var res = count*price;
            
                    // $(totalClass).empty();
                    // $(totalClass).append(res.toString());


                    for(var i = 0; i < ordered.length; i++)
                    {
                        if(ordered[i].name == $(nameClass).text()){
                            
                            ordered[i].count = $(countClass).val();

                            ordered[i].total = ordered[i].price * ordered[i].count;
                            


                            if($(discountClass).val().includes('%'))
                            {
                                ordered[i].discount = $(discountClass).val();
                                
                                var discountValue = $(discountClass).val().split("");
                                discountValue.pop();


                                discountValue = discountValue.toLocaleString(discountValue);

                                discountValue = discountValue.replace(",","");
                                
                                // console.log("discountValue " + discountValue);
                                
                                ordered[i].afterDiscount = parseInt(ordered[i].total) - (parseInt(ordered[i].total) * discountValue / 100)  - parseInt(ordered[i].free) * parseInt(ordered[i].price);
                            }
                            else{
                                ordered[i].discount = parseInt($(discountClass).val());

                                ordered[i].afterDiscount = parseInt(ordered[i].total) - parseInt($(discountClass).val()) - parseInt(ordered[i].free) * parseInt(ordered[i].price);
                            }
                            

                            // ordered[i].afterDiscount = ordered[i].total - (ordered[i].total * ordered[i].discount / 100);

                            // console.log(ordered[i].afterDiscount);


                            $(".orderList").empty();
                            $(".orderList").append('<tr class="text-dark py-2 tableHead" style="background-color:#8a8e92"><th class="py-2 pl-3"><div class="mealOrder" >Name</div></th><th class=""><div class="mealCategory" style="font-size: .9rem; text-align: center;">Category</div></th><th><div class="price" style="font-size: .9rem; text-align: center;">Price</div></th><th><div class="count" style="font-size: .9rem; text-align: center;">Count</div></th><th><div class="priceBeforeDiscount" style="font-size: .95rem; text-align: center;">Total</div></th><th><div class="free" style="font-size: .9rem; text-align: center;">Free</div></th><th><div class="discount" style="font-size: .9rem; text-align: center;">Discount</div></th><th class=""><div class="priceDiscount" style=" text-align: center;">After Discount</div></th><th> </th></tr>')

                            for(var c = 0; c < ordered.length; c++)
                            {
                                // console.log(c + " = after Discount " + ordered[c].afterDiscount);
                                $(".orderList").append('<tr class="text-white line' + c + '"><td class="py-3 pl-3"><div class="mealOrder mealNumber' + c + '" style="font-size: .9rem;">' + ordered[c].name + '</div></td><td><div class="mealCategory " style="font-size: .9rem; text-align: center;">' + ordered[c].category + '</div></td><td><div class="price' + c + '" style="font-size: .9rem; text-align: center;">' + ordered[c].price + '</div></td><td><div class="count d-flex justify-content-center" style="font-size: .9rem;"><input class="count' + c + '" type="text" value ="' + ordered[c].count + '" min ="1" style="width: 45px; border: none;"></div></td><td><div class="total' + c + '" style="font-size: .95rem; text-align: center;">' + ordered[c].total +'</div></td><td><div class="free d-flex justify-content-center" style="font-size: .9rem;"><input class="free' + c + '" type="text" value ="' + ordered[c].free + '" min ="1" style="width: 45px; border: none;"></div></td><td><div class="discount d-flex justify-content-center" style="font-size: .9rem; text-align: center;"><input class="discount' + c + '" type="text" value ="' + ordered[c].discount + '" min ="0" max="100"  style="width: 45px;  border: none;"> </div></td><td><div class="discountPrice' + c + '" style=" text-align: center;">' + ordered[c].afterDiscount + '</div></td><td class=" px-3 "><div class="delete delete' + c + ' d-flex justify-content-center" style=" border-radius: 50%;  padding: 2px;"><svg width="8" height="12" fill="none" viewBox="0 0 24 24"><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M17.25 6.75L6.75 17.25"/><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M6.75 6.75L17.25 17.25"/></svg></div></td></tr>');
                            }

                            // console.log(ordered);


                            
                        }
                    }


                    /////////////////////////////



                    // var discountClass = ".discount" + i;
                    // var totalClass = ".total" + i;
                    // var totalDiscountClass = ".discountPrice" + i;

                    var discount = $(discountClass).val();
                    var total = parseInt($(totalClass).text());

                    var res;
                    if(discount == 0)
                    {
                        res = total;
                    }
                    else{
                        res = total - (discount * total / 100);
                    }
            
                    $(totalDiscountClass).empty();
                    $(totalDiscountClass).append(res.toString());

                    /////////////////////////

                    var totalResult = 0;
                
                    for(var t = 0; t < ordered.length; t++){
                        var field = ".discountPrice" + t;
                        
                        var value = parseInt($(field).text());



                        // if(isNaN(value))
                        // {
                        //     value = "0";
                        // }

                        // else{
                            // value = totalResult;
                            // var value = parseInt($(field).text());
                        // }
                        

                        totalResult += parseInt(value);

                        // totalResult += parseInt($(field).text());
                        

                        $(".totalBill").empty();
                        $(".totalBill").append("Total = " + totalResult + " $");
                    }
                    
                })

            }


            for(i = 0; i < orderNum.length; i++)
            {
                var nameClass = ".mealNumber" + i;
                var deleteLine = ".delete" + i;
                

                $(document).on("click", deleteLine, function(){
                
                    for(var s = 0; s < ordered.length; s++)
                    {
                        if(ordered[s].name == $(nameClass).text()){
                    
                            for(var w = 0; w < disabled.length; w++)
                            {
                                if(disabled[w] == ordered[s].name)
                                {
                                    console.log("splice one item");
                                    disabled.splice(w, 1);
                                }
                            }
                            
                            console.log(ordered[s].name);
                            console.log(ordered[s]);
                            ordered.splice(s, 1);
                            console.log(ordered);

                            

                            $(".orderList").empty();
                            $(".orderList").append('<tr class="text-dark py-2 tableHead" style="background-color:#8a8e92"><th class="py-2 pl-3"><div class="mealOrder" >Name</div></th><th class=""><div class="mealCategory" style="font-size: .9rem; text-align: center;">Category</div></th><th><div class="price" style="font-size: .9rem; text-align: center;">Price</div></th><th><div class="count" style="font-size: .9rem; text-align: center;">Count</div></th><th><div class="priceBeforeDiscount" style="font-size: .95rem; text-align: center;">Total</div></th><th><div class="free" style="font-size: .9rem; text-align: center;">Free</div></th><th><div class="discount" style="font-size: .9rem; text-align: center;">Discount</div></th><th class=""><div class="priceDiscount" style=" text-align: center;">After Discount</div></th><th> </th></tr>')

                            for(var c = 0; c < ordered.length; c++)
                            {
                                $(".orderList").append('<tr class="text-white line' + c + '"><td class="py-3 pl-3"><div class="mealOrder mealNumber' + c + '" style="font-size: .9rem;">' + ordered[c].name + '</div></td><td><div class="mealCategory " style="font-size: .9rem; text-align: center;">' + ordered[c].category + '</div></td><td><div class="price' + c + '" style="font-size: .9rem; text-align: center;">' + ordered[c].price + '</div></td><td><div class="count d-flex justify-content-center" style="font-size: .9rem;"><input class="count' + c + '" type="text" value ="' + ordered[c].count + '" min ="1" style="width: 45px; border: none;"></div></td><td><div class="total' + c + '" style="font-size: .95rem; text-align: center;">' + ordered[c].total +'</div></td><td><div class="free d-flex justify-content-center" style="font-size: .9rem;"><input class="free' + c + '" type="text" value ="' + ordered[c].free + '" min ="1" style="width: 45px; border: none;"></div></td><td><div class="discount d-flex justify-content-center" style="font-size: .9rem; text-align: center;"><input class="discount' + c + '" type="text" value ="' + ordered[c].discount + '" min ="0" max="100"  style="width: 45px;  border: none;"> </div></td><td><div class="discountPrice' + c + '" style=" text-align: center;">' + ordered[c].afterDiscount + '</div></td><td class=" px-3 "><div class="delete delete' + c + ' d-flex justify-content-center" style=" border-radius: 50%;  padding: 2px;"><svg width="8" height="12" fill="none" viewBox="0 0 24 24"><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M17.25 6.75L6.75 17.25"/><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M6.75 6.75L17.25 17.25"/></svg></div></td></tr>');
                            }
                        
                                                    
                            
                            // console.log(ordered);

                        }
                    }
                

                    var totalResult = 0;
                
                    for(var t = 0; t < ordered.length; t++){
                        var field = ".discountPrice" + t;
                        
                        var value = parseInt($(field).text());



                        // if(isNaN(value))
                        // {
                        //     value = "0";
                        // }

                        // else{
                            // value = totalResult;
                            // var value = parseInt($(field).text());
                        // }
                        

                        totalResult += parseInt(value);

                        // totalResult += parseInt($(field).text());
                        

                        $(".totalBill").empty();
                        $(".totalBill").append("Total = " + totalResult + " $");
                    }

                    if(ordered.length == 0)
                    {
                        $(".totalBill").empty();
                        $(".totalBill").append("Total = 0 $");
                    }

                
                })


            }





            for(i = 0; i < orderNum.length; i++)
            {
                var discountClass = ".discount" + i;
                var totalClass = ".total" + i;
                var totalDiscountClass = ".discountPrice" + i;


                $(document).on("change", discountClass, function(){


                    for(var i = 0; i < ordered.length; i++)
                    {
                        if(ordered[i].name == $(nameClass).text()){

                            // ordered[i].discount = $(discountClass).val();

                            ordered[i].total = ordered[i].price * ordered[i].count;

                            if($(discountClass).val().includes('%'))
                            {
                                ordered[i].discount = $(discountClass).val();

                                var discountValue = $(discountClass).val().split("");
                                discountValue.pop();

                                discountValue = discountValue.toLocaleString(discountValue);
                                
                                discountValue = discountValue.replace(",","");


                                ordered[i].afterDiscount = parseInt(ordered[i].total) - (parseInt(ordered[i].total) * discountValue / 100) - parseInt(ordered[i].free) * parseInt(ordered[i].price);
                            }
                            else{

                                ordered[i].discount = parseInt($(discountClass).val());

                                ordered[i].afterDiscount = parseInt(ordered[i].total) - parseInt($(discountClass).val()) - parseInt(ordered[i].free) * parseInt(ordered[i].price);
                            }
                            
                            

                            // ordered[i].afterDiscount = ordered[i].total - (ordered[i].total * ordered[i].discount / 100);


                            $(".orderList").empty();
                            $(".orderList").append('<tr class="text-dark py-2 tableHead" style="background-color:#8a8e92"><th class="py-2 pl-3"><div class="mealOrder" >Name</div></th><th class=""><div class="mealCategory" style="font-size: .9rem; text-align: center;">Category</div></th><th><div class="price" style="font-size: .9rem; text-align: center;">Price</div></th><th><div class="count" style="font-size: .9rem; text-align: center;">Count</div></th><th><div class="priceBeforeDiscount" style="font-size: .95rem; text-align: center;">Total</div></th><th><div class="free" style="font-size: .9rem; text-align: center;">Free</div></th><th><div class="discount" style="font-size: .9rem; text-align: center;">Discount</div></th><th class=""><div class="priceDiscount" style=" text-align: center;">After Discount</div></th><th> </th></tr>')

                            for(var c = 0; c < ordered.length; c++)
                            {
                                $(".orderList").append('<tr class="text-white line' + c + '"><td class="py-3 pl-3"><div class="mealOrder mealNumber' + c + '" style="font-size: .9rem;">' + ordered[c].name + '</div></td><td><div class="mealCategory " style="font-size: .9rem; text-align: center;">' + ordered[c].category + '</div></td><td><div class="price' + c + '" style="font-size: .9rem; text-align: center;">' + ordered[c].price + '</div></td><td><div class="count d-flex justify-content-center" style="font-size: .9rem;"><input class="count' + c + '" type="text" value ="' + ordered[c].count + '" min ="1" style="width: 45px; border: none;"></div></td><td><div class="total' + c + '" style="font-size: .95rem; text-align: center;">' + ordered[c].total +'</div></td><td><div class="free d-flex justify-content-center" style="font-size: .9rem;"><input class="free' + c + '" type="text" value ="' + ordered[c].free + '" min ="1" style="width: 45px; border: none;"></div></td><td><div class="discount d-flex justify-content-center" style="font-size: .9rem; text-align: center;"><input class="discount' + c + '" type="text" value ="' + ordered[c].discount + '" min ="0" max="100"  style="width: 45px;  border: none;"> </div></td><td><div class="discountPrice' + c + '" style=" text-align: center;">' + ordered[c].afterDiscount + '</div></td><td class=" px-3 "><div class="delete delete' + c + ' d-flex justify-content-center" style=" border-radius: 50%;  padding: 2px;"><svg width="8" height="12" fill="none" viewBox="0 0 24 24"><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M17.25 6.75L6.75 17.25"/><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M6.75 6.75L17.25 17.25"/></svg></div></td></tr>');
                            }

                            // console.log(ordered);



                        }
                    }




                    var totalResult = 0;
                
                    for(var t = 0; t < ordered.length; t++){
                        var field = ".discountPrice" + t;
                        
                        var value = parseInt($(field).text());



                        // if(isNaN(value))
                        // {
                        //     value = "0";
                        // }

                        // else{
                            // value = totalResult;
                            // var value = parseInt($(field).text());
                        // }
                        

                        totalResult += parseInt(value);

                        // totalResult += parseInt($(field).text());
                        

                        $(".totalBill").empty();
                        $(".totalBill").append("Total = " + totalResult + " $");
                    }



                    // var discount = $(discountClass).val();
                    // var total = parseInt($(totalClass).text());

                    // var res;
                    // if(discount == 0)
                    // {
                    //     res = total;
                    // }
                    // else{
                    //     res = total - (discount * total / 100);
                    // }
            
                    // $(totalDiscountClass).empty();
                    // $(totalDiscountClass).append(res.toString());

                    // var totalResult = 0;
                
                    // for(var t = 1; t <= orderNum.length; t++){
                    //     var field = ".discountPrice" + t;
                        
                    //     var value = parseInt($(field).text());



                    //     if(isNaN(value))
                    //     {
                    //         value = "0";
                    //     }

                    //     else{
                    //         // value = totalResult;
                    //         var value = parseInt($(field).text());
                    //     }


                    //     totalResult += parseInt(value);

                    //     // totalResult += parseInt($(field).text());

                    //     $(".totalBill").empty();
                    //     $(".totalBill").append("Total = " + totalResult + " $");
                    // }
                    
                })

            }



            for(i = 0; i < orderNum.length; i++)
            {
                var freeClass = ".free" + i;
                var totalClass = ".total" + i;
                var totalDiscountClass = ".discountPrice" + i;


                $(document).on("change", freeClass, function(){


                    for(var i = 0; i < ordered.length; i++)
                    {
                        if(ordered[i].name == $(nameClass).text()){

                            ordered[i].free = $(freeClass).val();

                            ordered[i].total = ordered[i].price * ordered[i].count;

                            // ordered[i].discount = $(discountClass).val();

                            if($(discountClass).val().includes('%'))
                            {
                                ordered[i].discount = $(discountClass).val();

                                var discountValue = $(discountClass).val().split("");
                                discountValue.pop();

                                discountValue = discountValue.toLocaleString(discountValue);
                                
                                discountValue = discountValue.replace(",","");

                                

                                ordered[i].afterDiscount = parseInt(ordered[i].total) - (parseInt(ordered[i].total) * discountValue / 100) - parseInt(ordered[i].free) * parseInt(ordered[i].price);
                            }
                            else{

                                ordered[i].discount = $(discountClass).val();

                                ordered[i].afterDiscount = parseInt(ordered[i].total) - parseInt($(discountClass).val()) - parseInt(ordered[i].free) * parseInt(ordered[i].price);
                            }
                            
                            

                            // ordered[i].afterDiscount = ordered[i].total - (ordered[i].total * ordered[i].discount / 100);


                            $(".orderList").empty();
                            $(".orderList").append('<tr class="text-dark py-2 tableHead" style="background-color:#8a8e92"><th class="py-2 pl-3"><div class="mealOrder" >Name</div></th><th class=""><div class="mealCategory" style="font-size: .9rem; text-align: center;">Category</div></th><th><div class="price" style="font-size: .9rem; text-align: center;">Price</div></th><th><div class="count" style="font-size: .9rem; text-align: center;">Count</div></th><th><div class="priceBeforeDiscount" style="font-size: .95rem; text-align: center;">Total</div></th><th><div class="free" style="font-size: .9rem; text-align: center;">Free</div></th><th><div class="discount" style="font-size: .9rem; text-align: center;">Discount</div></th><th class=""><div class="priceDiscount" style=" text-align: center;">After Discount</div></th><th> </th></tr>')

                            for(var c = 0; c < ordered.length; c++)
                            {
                                $(".orderList").append('<tr class="text-white line' + c + '"><td class="py-3 pl-3"><div class="mealOrder mealNumber' + c + '" style="font-size: .9rem;">' + ordered[c].name + '</div></td><td><div class="mealCategory " style="font-size: .9rem; text-align: center;">' + ordered[c].category + '</div></td><td><div class="price' + c + '" style="font-size: .9rem; text-align: center;">' + ordered[c].price + '</div></td><td><div class="count d-flex justify-content-center" style="font-size: .9rem;"><input class="count' + c + '" type="text" value ="' + ordered[c].count + '" min ="1" style="width: 45px; border: none;"></div></td><td><div class="total' + c + '" style="font-size: .95rem; text-align: center;">' + ordered[c].total +'</div></td><td><div class="free d-flex justify-content-center" style="font-size: .9rem;"><input class="free' + c + '" type="text" value ="' + ordered[c].free + '" min ="1" style="width: 45px; border: none;"></div></td><td><div class="discount d-flex justify-content-center" style="font-size: .9rem; text-align: center;"><input class="discount' + c + '" type="text" value ="' + ordered[c].discount + '" min ="0" max="100"  style="width: 45px;  border: none;"> </div></td><td><div class="discountPrice' + c + '" style=" text-align: center;">' + ordered[c].afterDiscount + '</div></td><td class=" px-3 "><div class="delete delete' + c + ' d-flex justify-content-center" style=" border-radius: 50%;  padding: 2px;"><svg width="8" height="12" fill="none" viewBox="0 0 24 24"><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M17.25 6.75L6.75 17.25"/><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M6.75 6.75L17.25 17.25"/></svg></div></td></tr>');
                            }

                            // console.log(ordered);



                        }
                    }




                    var totalResult = 0;
                
                    for(var t = 0; t < ordered.length; t++){
                        var field = ".discountPrice" + t;
                        
                        var value = parseInt($(field).text());



                        // if(isNaN(value))
                        // {
                        //     value = "0";
                        // }

                        // else{
                            // value = totalResult;
                            // var value = parseInt($(field).text());
                        // }
                        

                        totalResult += parseInt(value);

                        // totalResult += parseInt($(field).text());
                        

                        $(".totalBill").empty();
                        $(".totalBill").append("Total = " + totalResult + " $");
                    }



                    // var discount = $(discountClass).val();
                    // var total = parseInt($(totalClass).text());

                    // var res;
                    // if(discount == 0)
                    // {
                    //     res = total;
                    // }
                    // else{
                    //     res = total - (discount * total / 100);
                    // }
            
                    // $(totalDiscountClass).empty();
                    // $(totalDiscountClass).append(res.toString());

                    // var totalResult = 0;
                
                    // for(var t = 1; t <= orderNum.length; t++){
                    //     var field = ".discountPrice" + t;
                        
                    //     var value = parseInt($(field).text());



                    //     if(isNaN(value))
                    //     {
                    //         value = "0";
                    //     }

                    //     else{
                    //         // value = totalResult;
                    //         var value = parseInt($(field).text());
                    //     }


                    //     totalResult += parseInt(value);

                    //     // totalResult += parseInt($(field).text());

                    //     $(".totalBill").empty();
                    //     $(".totalBill").append("Total = " + totalResult + " $");
                    // }
                    
                })

            }
            
            // don't forget to enable button when click by searching in the array and remove
            // the wanted element from the array


            
            for(j = 1; j <= orderNum.length; j++){

                
                var totalResult = 0;
                
                for(var t = 1; t <= orderNum.length; t++){
                    var field = ".discountPrice" + t;

                    var value = parseInt($(field).text());



                    if(isNaN(value))
                    {
                        value = "0";
                        
                    }

                    else{
                        // value = totalResult;
                        var value = parseInt($(field).text());
                    }


                    totalResult += parseInt(value);

                    
                    // totalResult += parseInt($(field).text());

                    $(".totalBill").empty();
                    $(".totalBill").append("Total = " + totalResult + " $");
                }
            }

            var totalResult = 0;
                
            for(var t = 0; t < ordered.length; t++){
                var field = ".discountPrice" + t;
                
                var value = parseInt($(field).text());



                // if(isNaN(value))
                // {
                //     value = "0";
                // }

                // else{
                    // value = totalResult;
                    // var value = parseInt($(field).text());
                // }
                

                totalResult += parseInt(value);

                // totalResult += parseInt($(field).text());
                

                $(".totalBill").empty();
                $(".totalBill").append("Total = " + totalResult + " $");
            }

            num += 1;
            
            // disabled.push(item);
            

            $("#scrolling").getNiceScroll().resize();
        })

    }


    



    // for(var y = 0; y < 10; y++)
    // {
        // var counting = ".counting" + y;
        $(document).on("click", ".counting1", function(){
            console.log("1");
            $(".countingLabel").empty();
            $(".countingLabel").append("1");

        })
    // }






    
    // Prevent changes in input number
    // Just by arrows
    $(document).on("keydown", "input[type='number']", function(e){
        e.preventDefault();
    })

    

    $(function() {  
        $("#scrolling").niceScroll({cursorborder: "none", scrollspeed: 30});
    });






    // choosing category from first page



    var title;
    


    $(".breakfast").click(function(){
        
        firstCategory("breakfast", breakfast);

        title = "breakfast";
        
        
    })


    $(".lunch").click(function(){
        
        firstCategory("lunch", lunch);
        
        title = "lunch";
        
        
    })



    $(".dinner").click(function(){
        
        firstCategory("dinner", dinner);
        
        title = "dinner";
    })


    $(".drinks").click(function(){
        
        firstCategory("drinks", drink);

        title = "drinks";

    })


    $(".salads").click(function(){
        
        firstCategory("salad", salad);

        title = "salads";
        
    })








    // breakfast category
    // on click on one of breakfast category

    for(var prop in allMeals){
        thirdPage(allMeals[prop]);
        buy(allMeals[prop]);
        
    }

    
    thirdPage("Kebab");
    buy("Kebab");



    
    


    // lunch Category
    // on click on one of lunch category

    $(document).on("click",".sandwich", function(){
        // $(".firstPage").fadeOut("fast", function(){

        //     $(".firstPage").addClass("d-none");
        // });

        // $(".secondPage").fadeIn("fast", function(){

            secondPage(sandwich, "sandwichMeal");
            $(".secondPage").addClass("d-block");
            $(".subCategory").removeClass("active");
            $(".sandwichMeal").addClass("active");

            $(".secondBackBtn").addClass("sandwichBackBtn");
            $(".secondBackBtn").removeClass("secondBackBtn");


            pageHead("Sandwich"); 
            
        // });  
    })



    
    


    $(document).on("click",".Hot", function(){

        secondPage(hot, "HotDrink");
        $(".secondPage").addClass("d-block");
        $(".subCategory").removeClass("active");
        $(".HotDrink").addClass("active");

        $(".secondBackBtn").addClass("hotBackBtn");
        $(".secondBackBtn").removeClass("secondBackBtn");


        
        pageHead("Hot"); 
         
    })


    $(document).on("click",".Cold", function(){

        secondPage(cold, "coldDrink");
        $(".secondPage").addClass("d-block");
        $(".subCategory").removeClass("active");
        $(".coldDrink").addClass("active");

        $(".secondBackBtn").addClass("coldBackBtn");
        $(".secondBackBtn").removeClass("secondBackBtn");


        pageHead("Cold"); 
         
    })









    $(document).on("click",".hotBackBtn", function(){
        firstCategory("drinks", drink);
        
        
        $(".hotBackBtn").addClass("secondBackBtn");
        
        $(".hotBackBtn").removeClass("hotBackBtn");
    })

    
    $(document).on("click",".coldBackBtn", function(){
        firstCategory("drinks", drink);
        
        $(".coldBackBtn").addClass("secondBackBtn");
        
        $(".coldBackBtn").removeClass("coldBackBtn");
    })


    $(document).on("click",".sandwichBackBtn", function(){
        firstCategory("lunch", lunch);
        
        $(".sandwichBackBtn").addClass("secondBackBtn");
        
        $(".sandwichBackBtn").removeClass("sandwichBackBtn");

        
    })
    

    $(document).on("click", ".homeBtn", function(){
        $(".thirdPage").removeClass("d-block");
        $(".firstPage").removeClass("d-none");
        $(".secondPage").removeClass("d-block");
        $(".secondPage").removeClass("d-flex");
        $(".thirdPage").removeClass("d-flex");


        $(".sandwichBackBtn").addClass("secondBackBtn");
        $(".sandwichBackBtn").removeClass("sandwichBackBtn");

        $(".hotBackBtn").addClass("secondBackBtn");
        $(".hotBackBtn").removeClass("hotBackBtn");

        $(".coldBackBtn").addClass("secondBackBtn");
        $(".coldBackBtn").removeClass("coldBackBtn");

        // $(".HotDrink").removeClass("active");
        // $(".coldDrink").removeClass("active");
        // $(".sandwichMeal").removeClass("active");

        // $(".subCategory").removeClass("active");
        $(".categoryHeading").addClass("d-flex");
        $("hr").removeClass("d-none");

        pageHead("Category")

    })


    $(document).on("click", ".secondBackBtn", function(){

        $(".secondPage").fadeOut("fast", function(){
            $(".thirdPage").fadeOut("fast");

            $(".secondPage").removeClass("d-block");
            $(".secondPage").removeClass("d-flex");
        });
        
        


        $(".firstPage").fadeIn("fast", function(){
        $(".firstPage").removeClass("d-none");
        // $(".thirdPage").removeClass("d-flex");
        $(".subCategory").removeClass("active");
        $(".backBtn").addClass("d-none");
        $("hr").removeClass("d-none");
        // $(".categoryHeading").removeClass("d-flex");

        pageHead("Category")

        })
        
        
    })



    $(document).on("click", ".thirdBackBtn",function(){
        // $(".thirdPage").fadeOut("fast", function(){
            // $(".secondPage").fadeOut("fast");
            // alert("hello");

            $(".thirdPage").removeClass("d-block");
            $(".firstPage").addClass("d-none");
        // });

        // $(".secondPage").fadeIn("fast", function(){
            // $(".categoryHeading").removeClass("d-flex");
            // $(".firstPage").removeClass("d-none");
            $(".thirdPage").removeClass("d-flex");
            $(".secondPage").removeClass("d-none");
            $(".secondPage").addClass("d-block");
            // $(".categoryHeading").removeClass("d-none");
            $(".categoryHeading").addClass("d-flex");
            $(".subCategory").addClass("active");

            // $(".subCategory").removeClass("active");
            // $(".backBtn").addClass("d-none");
            $("hr").removeClass("d-none");
            

            pageHead(title)


        // })
    })


})




















    // hide every sub links and meals
    // $(".nav-pills").hide();
    // $(".meal").hide();

    // $(".none").css("display", "none");





    // // show sub links on click
    // $("#sand").click(function(){
    //     $(".drinkList").hide();
    //     $(".sandList").toggle("normal");
    // })

    // $("#drink").click(function(){
    //     $(".sandList").hide();
    //     $(".drinkList").toggle("normal");
    // })




    // show related meals to the clicked link
    // $("#westSand").click(function(){
    //     $(".meal").hide();
    //     $(".westernSand").show("normal");
    // })

    // $("#eastSand").click(function(){
    //     $(".meal").hide();
    //     $(".easternSand").show("normal");
    // })

    // $("#coldDrink").click(function(){
    //     $(".meal").hide();
    //     $(".coldDrink").show("normal");
    // })

    // $("#hotDrink").click(function(){
    //     $(".meal").hide();
    //     $(".hotDrink").show("normal");
    // })





    // add active class to the clicked link
    // $(".nav-link").click(function(){
    //     $("a").removeClass("active");
    //     $(this).addClass("active");

    // })





    
    // function thirdPage(name){
    //     $(".thirdPage").empty();

    //     $(".thirdPage").append('<div class="card ' + name + " " + name + 'Card d-none" style=" background-color: inherit; border: none; color: white;"><div class="card-img d-flex justify-content-center"><img src="../../plugins/' + name + '.jpg" alt="" class="card-img-top" style="width: 14vw;"></div><div class="card-body"><h5 class="card-title">Ingredients</h5><div class="card-text" style="font-size: 12px;">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, suscipit nobis molestias porro, optio totam maiores ipsam quibusdam quidem magni</div><div class="h4 py-4">50$</div><button class="btn btn-primary buyShawerma">Buy</button></div></div>')
    // }





    // add item to the bill
    // $(".steak").click(function(){
    //     $(".orderList").append(
    //     "<li class='d-flex justify-content-between p-2' style='background-color: lightgray; border-radius: 7px;'><div class='mealOrder'>Steak</div><div class='count'>1</div></li>");
    // })

    // $(".scallob").click(function(){
    //     $(".orderList").append(
    //     "<li class='d-flex justify-content-between p-2' style='background-color: lightgray; border-radius: 7px;'><div class='mealOrder'>Scallob</div><div class='count'>1</div></li>");
    // })
    
    // $(".burger").click(function(){
    //     $(".orderList").append(
    //     "<li class='d-flex justify-content-between p-2' style='background-color: lightgray; border-radius: 7px;'><div class='mealOrder'>Burger</div><div class='count'>1</div></li>");
    // })

    // $(".barpeque").click(function(){
    //     $(".orderList").append(
    //     "<li class='d-flex justify-content-between p-2' style='background-color: lightgray; border-radius: 7px;'><div class='mealOrder'>Barpeque</div><div class='count'>1</div></li>");
    // })

    // $(".kebab").click(function(){
    //     $(".orderList").append(
    //     "<li class='d-flex justify-content-between p-2' style='background-color: lightgray; border-radius: 7px;'><div class='mealOrder'>Kebab</div><div class='count'>1</div></li>");
    // })

    // $(".coffee").click(function(){
    //     $(".orderList").append(
    //     "<li class='d-flex justify-content-between p-2' style='background-color: lightgray; border-radius: 7px;'><div class='mealOrder'>Coffee</div><div class='count'>1</div></li>");
    // })

    // $(".tea").click(function(){
    //     $(".orderList").append(
    //     "<li class='d-flex justify-content-between p-2' style='background-color: lightgray; border-radius: 7px;'><div class='mealOrder'>Tea</div><div class='count'>1</div></li>");
    // })

    // $(".strawberry").click(function(){
    //     $(".orderList").append(
    //     "<li class='d-flex justify-content-between p-2' style='background-color: lightgray; border-radius: 7px;'><div class='mealOrder'>Strawberry</div><div class='count'>1</div></li>");
    // })

    // $(".orange").click(function(){
    //     $(".orderList").append(
    //     "<li class='d-flex justify-content-between p-2' style='background-color: lightgray; border-radius: 7px;'><div class='mealOrder'>ornage</div><div class='count'>1</div></li>");
    // })













    // $('a.new').click(function(){
    //     // $(".meals").empty();
    //     $(".meals").append('<div class="newWidget" style="width: 100%; height: 100%; background-color: blue;">hello</div>');
        
    //     $(".none").css("display", "flex");
    //     // $(this).append('<div class="newWidget" style="width: 100%; height: 100vh; background-color: blue;">hello</div>');
    // })



    // trying to make function and array for every click to add them from itself without repeating html code 
    // it fails because you can't specify the id or class for every item

    // var breakfast = new Array("Egg", "Cheese", "Olive", "Homs");

    // function secondPage(head, content){
    //     $(".categoryHeading").append(head);

    //     for(var prop in content)
    //     {
    //         $(".firstCat").append('<div class="subCategory tab-pane card mb-2" style="width: 12rem;"><div class="card-body text-center">' + content[prop] + '</div></div>');
            
    //     }
    // }
    // example you should use when click on any button
    // secondPage("Breakfast", breakfast);



    
    // $(document).on("click", ".shawerma", function(){
    //     thirdPage("shawerma");
    //     $(".secondPage").fadeOut("fast", function(){

    //         $(".secondPage").css("display", "none");
    //     });

    //     $(".thirdPage").fadeIn("fast", function(){
    //         $(".thirdPage").addClass("d-flex justify-content-between");
    //         $("hr").addClass("d-none");
    //         $(".sandwichMeal").removeClass("active");
    //         $(".shawermaCard").removeClass("d-none");

    //         pageHead("Shawerma"); 
            
    //     });  
    // })





    // $(document).on("click", ".Kebab", function(){
            
    //         $(".launchMeal").removeClass("active");
            
    //         $(".thirdPage").addClass("d-flex justify-content-between");
    //         thirdPage("Kebab");
    //         $("hr").addClass("d-none");
            
            
    //         $(".KebabCard").removeClass("d-none");
            
    //         pageHead("Kebab"); 
        
    //     $(".secondPage").fadeOut("fast", function(){

    //         $(".secondPage").css("display", "none");
    //     });

    //     $(".thirdPage").fadeIn("fast", function(){
            
    //     });

    // })