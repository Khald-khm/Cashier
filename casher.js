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


    var stacking = [];

    

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

        var howCount = 0;
        for(var prop in content)
        {
            for(var w in ordered)
            {
                if(content[prop] == ordered[w].name)
                {
                    howCount = ordered[w].count;
                }
            }
            $(".firstCat").append('<div class="subCategory tab-pane card mb-2  ' + addingClass + '  "  style="width: 12rem;"><div class="card-body text-center ' + content[prop] + '">' + content[prop] + '<br> <span style="margin-top: 7px; background-color: white; ">' + howCount + '</span></div></div>');
            howCount = 0;
        }
    }


    


    



    function thirdPage(para){
        
        

        $(document).on("click", "." + para, function(){
            

            $(".subCategory").removeClass("active");
            
            $(".thirdPage").addClass("d-flex justify-content-center flex-column");



            $(".thirdPage").empty();

            

            for(var l in allThings)
            {
                if(allThings[l].name == para){
                    var paraName = allThings[l].name; 
                    var paraPrice = allThings[l].price;
                    var paraDescription = allThings[l].description;
                }
            }

            var currentCount = 0;
            
            for(var p in ordered)
            {
                if(ordered[p].name == para)
                {
                    currentCount = ordered[p].count;
                }
            }

            $(".thirdPage").append('<div class="categoryHeadingTwo h2 py-2 text-white d-none justify-content-between"><div class="head"></div><div class="iconSection d-flex justify-content-between"><div class="homeBtn mx-2 backBtn d-flex justify-content-center align-items-center"><svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75024 19.2502H17.2502C18.3548 19.2502 19.2502 18.3548 19.2502 17.2502V9.75025L12.0002 4.75024L4.75024 9.75025V17.2502C4.75024 18.3548 5.64568 19.2502 6.75024 19.2502Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.74963 15.7493C9.74963 14.6447 10.6451 13.7493 11.7496 13.7493H12.2496C13.3542 13.7493 14.2496 14.6447 14.2496 15.7493V19.2493H9.74963V15.7493Z"/></svg></div><div class="thirdBackBtn backBtn d-flex justify-content-center align-items-center"><svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.75 8.75L14.25 12L10.75 15.25"/></svg></div></div></div><div class="card mealCard ' + para + " " + para + 'Card d-none" style=" background-color: inherit; border: none; color: white;"><div class="d-flex justify-content-center mb-2"><button class=" plusOneItem btn btn-sm" id="' + para + '">+</button><input class="currentCount" value="' + currentCount + '" type="text" style="width: 30px;"><button class="minsOneItem btn btn-sm" id="' + para + '">-</button></div><div class = "barNumber d-flex justify-content-center flex-column"><ul class = "d-flex justify-content-center flex-row"> <li class="countNumber counting0" style="margin: 2px; border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 0 </li><li class="countNumber counting1" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 1 </li><li class="countNumber counting2" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 2 </li> <li class="countNumber counting3" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 3 </li><li class="countNumber counting4" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 4 </li> <li class="countNumber counting5" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 5 </li><li class="countNumber counting6" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 6 </li><li class="countNumber counting7" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 7 </li><li class="countNumber counting8" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 8 </li><li class="countNumber counting9" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 9 </li></ul> <div class="d-flex justify-content-center"><div class="countingLabel " style ="width: 35px; margin-bottom: 15px; font-size: 1.2rem; background-color: white; color: var(--dark);" readOnly></div><div></div></div></div><div class="card-img d-flex justify-content-center"><img src="../../plugins/' + para + '.jpg" alt="" class="card-img-top" style="width: 14vw;"></div><div class="card-body pb-0"><div class="d-flex justify-content-between align-items-center pb-3"><h5 class="card-title pt-1" style="font-size: 1.5rem;">Ingredients</h5> <div class="h3">' + paraPrice + '</div> </div> <div class="card-text" style="font-size: 1rem;">' + paraDescription + '</div><div class="d-flex justify-content-center align-items-center pt-5"><button class="btn btn-primary w-50 buy'+ para +'" ' + status + '>Add</button> </div></div></div>');

            $(".thirdBackBtn").attr('id', $('.secondBackBtn').attr('id'));
            $(".thirdBackBtn").attr('id', $('.sandwichBackBtn').attr('id'));
            $(".thirdBackBtn").attr('id', $('.hotBackBtn').attr('id'));
            $(".thirdBackBtn").attr('id', $('.coldBackBtn').attr('id'));

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

    
    var addTimes = new Array();

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

                                
                                ordered[r].count = parseInt(ordered[r].count) + itemCount;
        
                                // var itemTotal = itemPrice * itemCount;
                            }

                            var times = ordered[r].stack;
                            times.push(itemCount);

                            ordered[r].stack = times;

                            console.log(times);

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
                            itemCount = 1;
                            // console.log("it is empty");
                        }
                        else{
                            itemCount = parseInt($(".countingLabel").text());
    
                            var itemTotal = itemPrice * itemCount;
                        }


                        var times = [];
                        times.push(itemCount)
                        
                        ordered.push({id : r, name : itemName, category : itemCategory, price : itemPrice, count : itemCount, free : "0", disableFree : " ", discount: "0", disableDiscount : " ", total : itemTotal, afterDiscount : itemTotal, stack : times});

                        var times = [];

                        orderNum.push(item);

                        for(var y = 0; y < ordered.length; y++)
                        {
                            for(var e = y+1; e < ordered.length; e++)
                            {
                                if(ordered[y].name == ordered[e].name)
                                {
                                    ordered.splice(e, 1);
                                }
                            }
                        }

                        
                        
                    }
                }
            }
            
            
            $(".orderList").empty();
            $(".orderList").append('<tr class="text-dark py-2 tableHead" style="background-color:#8a8e92"><th class="py-2 pl-3"><div class="mealOrder" >Name</div></th><th class=""><div class="mealCategory" style="font-size: .9rem; text-align: center;">Category</div></th><th><div class="price" style="font-size: .9rem; text-align: center;">Price</div></th><th><div class="count" style="font-size: .9rem; text-align: center;">Count</div></th><th><div class="priceBeforeDiscount" style="font-size: .95rem; text-align: center;">Total</div></th><th><div class="free" style="font-size: .9rem; text-align: center;">Free</div></th><th><div class="discount" style="font-size: .9rem; text-align: center;">Discount</div></th><th class=""><div class="priceDiscount" style=" text-align: center;">After Discount</div></th><th> </th><th> </th></tr>')

            for(var c = 0; c < ordered.length; c++)
            {
                $(".orderList").append('<tr class="text-white line' + c + '"><td class="py-3 pl-3"><div class="mealOrder mealNumber' + c + '" style="font-size: .9rem;">' + ordered[c].name + '</div></td><td><div class="mealCategory " style="font-size: .9rem; text-align: center;">' + ordered[c].category + '</div></td><td><div class="price' + c + '" style="font-size: .9rem; text-align: center;">' + ordered[c].price + '</div></td><td><div class="count d-flex justify-content-center" style="font-size: .9rem;"><div class="count' + c + '" >' + ordered[c].count + '</div></div></td><td><div class="total' + c + '" style="font-size: .95rem; text-align: center;">' + ordered[c].total +'</div></td><td><div class="free d-flex justify-content-center" style="font-size: .9rem;"><input class="free' + c + '" type="text" value ="' + ordered[c].free + '" min ="1" style="width: 45px; border: none;"'+ ordered[c].disableFree +'></div></td><td><div class="discount d-flex justify-content-center" style="font-size: .9rem; text-align: center;"><input class="discount' + c + '" type="text" value ="' + ordered[c].discount + '" min ="0" max="100"  style="width: 45px;  border: none;"' + ordered[c].disableDiscount + '></div></td><td><div class="discountPrice' + c + '" style=" text-align: center;">' + ordered[c].afterDiscount + '</div></td><td><div class="undo undo' + c + ' d-flex justify-content-center" style=" border-radius: 50%;  padding: 2px;" id="'+ c + '"><svg width="8" height="12" fill="none" viewBox="0 0 24 24"><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M9.25 4.75L4.75 9L9.25 13.25"/><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M5.5 9H15.25C17.4591 9 19.25 10.7909 19.25 13V19.25"/></svg></div></td></tr>');
            }

            
            
                
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
                            $(".orderList").append('<tr class="text-dark py-2 tableHead" style="background-color:#8a8e92"><th class="py-2 pl-3"><div class="mealOrder" >Name</div></th><th class=""><div class="mealCategory" style="font-size: .9rem; text-align: center;">Category</div></th><th><div class="price" style="font-size: .9rem; text-align: center;">Price</div></th><th><div class="count" style="font-size: .9rem; text-align: center;">Count</div></th><th><div class="priceBeforeDiscount" style="font-size: .95rem; text-align: center;">Total</div></th><th><div class="free" style="font-size: .9rem; text-align: center;">Free</div></th><th><div class="discount" style="font-size: .9rem; text-align: center;">Discount</div></th><th class=""><div class="priceDiscount" style=" text-align: center;">After Discount</div></th><th> </th><th> </th></tr>')

                            for(var c = 0; c < ordered.length; c++)
                            {
                                // console.log(c + " = after Discount " + ordered[c].afterDiscount);
                                $(".orderList").append('<tr class="text-white line' + c + '"><td class="py-3 pl-3"><div class="mealOrder mealNumber' + c + '" style="font-size: .9rem;">' + ordered[c].name + '</div></td><td><div class="mealCategory " style="font-size: .9rem; text-align: center;">' + ordered[c].category + '</div></td><td><div class="price' + c + '" style="font-size: .9rem; text-align: center;">' + ordered[c].price + '</div></td><td><div class="count d-flex justify-content-center" style="font-size: .9rem;"><div class="count' + c + '" >' + ordered[c].count + '</div></div></td><td><div class="total' + c + '" style="font-size: .95rem; text-align: center;">' + ordered[c].total +'</div></td><td><div class="free d-flex justify-content-center" style="font-size: .9rem;"><input class="free' + c + '" type="text" value ="' + ordered[c].free + '" min ="1" style="width: 45px; border: none;"'+ ordered[c].disableFree +'></div></td><td><div class="discount d-flex justify-content-center" style="font-size: .9rem; text-align: center;"><input class="discount' + c + '" type="text" value ="' + ordered[c].discount + '" min ="0" max="100"  style="width: 45px;  border: none;"' + ordered[c].disableDiscount + '> </div></td><td><div class="discountPrice' + c + '" style=" text-align: center;">' + ordered[c].afterDiscount + '</div></td><td><div class="undo undo' + c + ' d-flex justify-content-center" style=" border-radius: 50%;  padding: 2px;" id="'+ c + '"><svg width="8" height="12" fill="none" viewBox="0 0 24 24"><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M9.25 4.75L4.75 9L9.25 13.25"/><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M5.5 9H15.25C17.4591 9 19.25 10.7909 19.25 13V19.25"/></svg></div></td></tr>');
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

                        if($("#discountOnTotal").val().includes('%'))
                        {
                            var discountOnTotal = $("#discountOnTotal").val().split("");
                            discountOnTotal.pop();


                            discountOnTotal = discountOnTotal.toLocaleString(discountOnTotal);

                            discountOnTotal = discountOnTotal.replace(",","");

                            totalResult = totalResult - (totalResult * parseInt(discountOnTotal) / 100);
                        }

                        else{
                            totalResult = totalResult - parseInt($("#discountOnTotal").val());
                        }

                        // totalResult += parseInt($(field).text());
                        

                        $(".totalBill").empty();
                        $(".totalBill").append("Total = " + totalResult + " $");
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

                                if($(discountClass).val() == "")
                                {
                                    ordered[i].discount = 0;
                                }

                                if(ordered[i].free == "")
                                {
                                    ordered[i].free = 0;
                                }    

                                ordered[i].afterDiscount = parseInt(ordered[i].total) - parseInt(ordered[i].discount) - parseInt(ordered[i].free) * parseInt(ordered[i].price);
                            }
                            
                            

                            // ordered[i].afterDiscount = ordered[i].total - (ordered[i].total * ordered[i].discount / 100);

                            if(ordered[i].discount > 0)
                            {
                                ordered[i].disableFree = "disabled";
                            }
                            else if(ordered[i].discount == 0)
                            {
                                ordered[i].disableFree = "";
                            }
                            

                            $(".orderList").empty();
                            $(".orderList").append('<tr class="text-dark py-2 tableHead" style="background-color:#8a8e92"><th class="py-2 pl-3"><div class="mealOrder" >Name</div></th><th class=""><div class="mealCategory" style="font-size: .9rem; text-align: center;">Category</div></th><th><div class="price" style="font-size: .9rem; text-align: center;">Price</div></th><th><div class="count" style="font-size: .9rem; text-align: center;">Count</div></th><th><div class="priceBeforeDiscount" style="font-size: .95rem; text-align: center;">Total</div></th><th><div class="free" style="font-size: .9rem; text-align: center;">Free</div></th><th><div class="discount" style="font-size: .9rem; text-align: center;">Discount</div></th><th class=""><div class="priceDiscount" style=" text-align: center;">After Discount</div></th><th> </th><th> </th></tr>')

                            for(var c = 0; c < ordered.length; c++)
                            {
                                $(".orderList").append('<tr class="text-white line' + c + '"><td class="py-3 pl-3"><div class="mealOrder mealNumber' + c + '" style="font-size: .9rem;">' + ordered[c].name + '</div></td><td><div class="mealCategory " style="font-size: .9rem; text-align: center;">' + ordered[c].category + '</div></td><td><div class="price' + c + '" style="font-size: .9rem; text-align: center;">' + ordered[c].price + '</div></td><td><div class="count d-flex justify-content-center" style="font-size: .9rem;"><div class="count' + c + '" >' + ordered[c].count + '</div></div></td><td><div class="total' + c + '" style="font-size: .95rem; text-align: center;">' + ordered[c].total +'</div></td><td><div class="free d-flex justify-content-center" style="font-size: .9rem;"><input class="free' + c + '" type="text" value ="' + ordered[c].free + '" min ="1" style="width: 45px; border: none;"'+ ordered[c].disableFree +'></div></td><td><div class="discount d-flex justify-content-center" style="font-size: .9rem; text-align: center;"><input class="discount' + c + '" type="text" value ="' + ordered[c].discount + '" min ="0" max="100"  style="width: 45px;  border: none;"' + ordered[c].disableDiscount + '> </div></td><td><div class="discountPrice' + c + '" style=" text-align: center;">' + ordered[c].afterDiscount + '</div></td><td><div class="undo undo' + c + ' d-flex justify-content-center" style=" border-radius: 50%;  padding: 2px;" id="'+ c + '"><svg width="8" height="12" fill="none" viewBox="0 0 24 24"><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M9.25 4.75L4.75 9L9.25 13.25"/><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M5.5 9H15.25C17.4591 9 19.25 10.7909 19.25 13V19.25"/></svg></div></td></tr>');
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

                        if($("#discountOnTotal").val().includes('%'))
                        {
                            var discountOnTotal = $("#discountOnTotal").val().split("");
                            discountOnTotal.pop();


                            discountOnTotal = discountOnTotal.toLocaleString(discountOnTotal);

                            discountOnTotal = discountOnTotal.replace(",","");

                            totalResult = totalResult - (totalResult * parseInt(discountOnTotal) / 100);
                        }

                        else{
                            totalResult = totalResult - parseInt($("#discountOnTotal").val());
                        }


                        // totalResult += parseInt($(field).text());
                        

                        $(".totalBill").empty();
                        $(".totalBill").append("Total = " + totalResult + " $");
                    }
                    
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

                            if($(freeClass).val() >= ordered[i].count)
                            {
                                $(".validMessage").empty();
                                $(".validMessage").append("This value is to big");
                                $(".validMessage").addClass("styleMessage");

                            }
                            else{
                                ordered[i].free = $(freeClass).val();

                                $(".validMessage").removeClass("styleMessage");
                                $(".validMessage").empty();
                            }
                            

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

                                if($(discountClass).val() == "")
                                {
                                    ordered[i].discount = 0;

                                }

                                if(ordered[i].free == "")
                                {
                                    ordered[i].free = 0;
                                }    

                                // ordered[i].discount = $(discountClass).val();

                                ordered[i].afterDiscount = parseInt(ordered[i].total) - parseInt(ordered[i].discount) - parseInt(ordered[i].free) * parseInt(ordered[i].price);
                            }
                            

                            if(ordered[i].free > 0)
                            {
                                ordered[i].disableDiscount = "disabled";
                            }
                            else if(ordered[i].free == 0)
                            {
                                ordered[i].disableDiscount = "";
                            }
                            

                            // ordered[i].afterDiscount = ordered[i].total - (ordered[i].total * ordered[i].discount / 100);


                            $(".orderList").empty();
                            $(".orderList").append('<tr class="text-dark py-2 tableHead" style="background-color:#8a8e92"><th class="py-2 pl-3"><div class="mealOrder" >Name</div></th><th class=""><div class="mealCategory" style="font-size: .9rem; text-align: center;">Category</div></th><th><div class="price" style="font-size: .9rem; text-align: center;">Price</div></th><th><div class="count" style="font-size: .9rem; text-align: center;">Count</div></th><th><div class="priceBeforeDiscount" style="font-size: .95rem; text-align: center;">Total</div></th><th><div class="free" style="font-size: .9rem; text-align: center;">Free</div></th><th><div class="discount" style="font-size: .9rem; text-align: center;">Discount</div></th><th class=""><div class="priceDiscount" style=" text-align: center;">After Discount</div></th><th> </th><th> </th></tr>')

                            for(var c = 0; c < ordered.length; c++)
                            {
                                $(".orderList").append('<tr class="text-white line' + c + '"><td class="py-3 pl-3"><div class="mealOrder mealNumber' + c + '" style="font-size: .9rem;">' + ordered[c].name + '</div></td><td><div class="mealCategory " style="font-size: .9rem; text-align: center;">' + ordered[c].category + '</div></td><td><div class="price' + c + '" style="font-size: .9rem; text-align: center;">' + ordered[c].price + '</div></td><td><div class="count d-flex justify-content-center" style="font-size: .9rem;"><div class="count' + c + '" >' + ordered[c].count + '</div></div></td><td><div class="total' + c + '" style="font-size: .95rem; text-align: center;">' + ordered[c].total +'</div></td><td><div class="free d-flex justify-content-center" style="font-size: .9rem;"><input class="free' + c + '" type="text" value ="' + ordered[c].free + '" min ="1" style="width: 45px; border: none;"'+ ordered[c].disableFree +'></div></td><td><div class="discount d-flex justify-content-center" style="font-size: .9rem; text-align: center;"><input class="discount' + c + '" type="text" value ="' + ordered[c].discount + '" min ="0" max="100"  style="width: 45px;  border: none;"' + ordered[c].disableDiscount + '> </div></td><td><div class="discountPrice' + c + '" style=" text-align: center;">' + ordered[c].afterDiscount + '</div></td><td><div class="undo undo' + c + ' d-flex justify-content-center" style=" border-radius: 50%;  padding: 2px;" id="'+ c + '"><svg width="8" height="12" fill="none" viewBox="0 0 24 24"><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M9.25 4.75L4.75 9L9.25 13.25"/><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M5.5 9H15.25C17.4591 9 19.25 10.7909 19.25 13V19.25"/></svg></div></td></tr>');
                            }

                            // console.log(ordered);



                        }
                    }




                    var totalResult = 0;
                
                    for(var t = 0; t < ordered.length; t++){
                        var field = ".discountPrice" + t;
                        
                        var value = parseInt($(field).text());

                        totalResult += parseInt(value);

                        if($("#discountOnTotal").val().includes('%'))
                        {
                            var discountOnTotal = $("#discountOnTotal").val().split("");
                            discountOnTotal.pop();


                            discountOnTotal = discountOnTotal.toLocaleString(discountOnTotal);

                            discountOnTotal = discountOnTotal.replace(",","");

                            totalResult = totalResult - (totalResult * parseInt(discountOnTotal) / 100);
                        }

                        else{
                            totalResult = totalResult - parseInt($("#discountOnTotal").val());
                        }


                        // totalResult += parseInt($(field).text());
                        

                        $(".totalBill").empty();
                        $(".totalBill").append("Total = " + totalResult + " $");
                    }



                    
                })

            }

            
            $(document).on("change", "#discountOnTotal", function(){
                var totalResult = 0;
                
                    for(var t = 0; t < ordered.length; t++){
                        var field = ".discountPrice" + t;
                        
                        var value = parseInt($(field).text());

                        totalResult += parseInt(value);

                        if($("#discountOnTotal").val().includes('%'))
                        {
                            var discountOnTotal = $("#discountOnTotal").val().split("");
                            discountOnTotal.pop();


                            discountOnTotal = discountOnTotal.toLocaleString(discountOnTotal);

                            discountOnTotal = discountOnTotal.replace(",","");

                            totalResult = totalResult - (totalResult * parseInt(discountOnTotal) / 100);
                        }

                        else{
                            totalResult = totalResult - parseInt($("#discountOnTotal").val());
                        }


                        // totalResult += parseInt($(field).text());
                        

                        $(".totalBill").empty();
                        $(".totalBill").append("Total = " + totalResult + " $");
                    }


            })
            

            
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

                        if($("#discountOnTotal").val().includes('%'))
                        {
                            var discountOnTotal = $("#discountOnTotal").val().split("");
                            discountOnTotal.pop();


                            discountOnTotal = discountOnTotal.toLocaleString(discountOnTotal);

                            discountOnTotal = discountOnTotal.replace(",","");

                            totalResult = totalResult - (totalResult * parseInt(discountOnTotal) / 100);
                        }

                        else{
                            totalResult = totalResult - parseInt($("#discountOnTotal").val());
                        }


                    
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

                        if($("#discountOnTotal").val().includes('%'))
                        {
                            var discountOnTotal = $("#discountOnTotal").val().split("");
                            discountOnTotal.pop();


                            discountOnTotal = discountOnTotal.toLocaleString(discountOnTotal);

                            discountOnTotal = discountOnTotal.replace(",","");

                            totalResult = totalResult - (totalResult * parseInt(discountOnTotal) / 100);
                        }

                        else{
                            totalResult = totalResult - parseInt($("#discountOnTotal").val());
                        }


                // totalResult += parseInt($(field).text());
                

                $(".totalBill").empty();
                $(".totalBill").append("Total = " + totalResult + " $");
            }

            num += 1;
            
            // disabled.push(item);

        
        
            

            $("#scrolling").getNiceScroll().resize();
        })

    }


    $(document).on("click", ".plusOneItem", function(){
        var plusOne = $(this).attr("id");

        var exist = false;

        for(var i in ordered)
        {
            var discountClass = ".discount" + i;
            if(ordered[i].name == plusOne)
            {
                ordered[i].stack.push(1);
                ordered[i].count  = parseInt(ordered[i].count) + 1;
                thirdPage(plusOne);
                
                ordered[i].total = ordered[i].price * ordered[i].count;            // ordered[i].discount = $(discountClass).val();

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

                    if($(discountClass).val() == "")
                    {
                        ordered[i].discount = 0;

                    }

                    if(ordered[i].free == "")
                    {
                        ordered[i].free = 0;
                    }    

                    // ordered[i].discount = $(discountClass).val();

                    ordered[i].afterDiscount = parseInt(ordered[i].total) - parseInt(ordered[i].discount) - parseInt(ordered[i].free) * parseInt(ordered[i].price);
                }
                
                $(".orderList").empty();
                $(".orderList").append('<tr class="text-dark py-2 tableHead" style="background-color:#8a8e92"><th class="py-2 pl-3"><div class="mealOrder" >Name</div></th><th class=""><div class="mealCategory" style="font-size: .9rem; text-align: center;">Category</div></th><th><div class="price" style="font-size: .9rem; text-align: center;">Price</div></th><th><div class="count" style="font-size: .9rem; text-align: center;">Count</div></th><th><div class="priceBeforeDiscount" style="font-size: .95rem; text-align: center;">Total</div></th><th><div class="free" style="font-size: .9rem; text-align: center;">Free</div></th><th><div class="discount" style="font-size: .9rem; text-align: center;">Discount</div></th><th class=""><div class="priceDiscount" style=" text-align: center;">After Discount</div></th><th> </th><th> </th></tr>')

                for(var c = 0; c < ordered.length; c++)
                {
                    $(".orderList").append('<tr class="text-white line' + c + '"><td class="py-3 pl-3"><div class="mealOrder mealNumber' + c + '" style="font-size: .9rem;">' + ordered[c].name + '</div></td><td><div class="mealCategory " style="font-size: .9rem; text-align: center;">' + ordered[c].category + '</div></td><td><div class="price' + c + '" style="font-size: .9rem; text-align: center;">' + ordered[c].price + '</div></td><td><div class="count d-flex justify-content-center" style="font-size: .9rem;"><div class="count' + c + '" >' + ordered[c].count + '</div></div></td><td><div class="total' + c + '" style="font-size: .95rem; text-align: center;">' + ordered[c].total +'</div></td><td><div class="free d-flex justify-content-center" style="font-size: .9rem;"><input class="free' + c + '" type="text" value ="' + ordered[c].free + '" min ="1" style="width: 45px; border: none;"'+ ordered[c].disableFree +'></div></td><td><div class="discount d-flex justify-content-center" style="font-size: .9rem; text-align: center;"><input class="discount' + c + '" type="text" value ="' + ordered[c].discount + '" min ="0" max="100"  style="width: 45px;  border: none;"' + ordered[c].disableDiscount + '> </div></td><td><div class="discountPrice' + c + '" style=" text-align: center;">' + ordered[c].afterDiscount + '</div></td><td><div class="undo undo' + c + ' d-flex justify-content-center" style=" border-radius: 50%;  padding: 2px;" id="'+ c + '"><svg width="8" height="12" fill="none" viewBox="0 0 24 24"><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M9.25 4.75L4.75 9L9.25 13.25"/><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M5.5 9H15.25C17.4591 9 19.25 10.7909 19.25 13V19.25"/></svg></div></td></tr>');
                }

                exist = true;
            }

        }

        if(exist == false)
        {
            var times = [];
            times.push(1);

            for(var i in allThings)
            {
                if($(this).attr("id") == allThings[i].name)
                {
                    var itemName = allThings[i].name;
                    var itemCategory = allThings[i].category;
                    var itemPrice = allThings[i].price;
                    var itemCount = 1;
                    var itemTotal = itemPrice;
                }
            }
            
            ordered.push({ name : itemName, category : itemCategory, price : itemPrice, count : itemCount, free : "0", disableFree : " ", discount: "0", disableDiscount : " ", total : itemTotal, afterDiscount : itemTotal, stack : times});

            var times = [];

            orderNum.push(itemName);

            for(var y = 0; y < ordered.length; y++)
            {
                for(var e = y+1; e < ordered.length; e++)
                {
                    if(ordered[y].name == ordered[e].name)
                    {
                        ordered.splice(e, 1);
                    }
                }
            }
            
            $(".orderList").empty();
            $(".orderList").append('<tr class="text-dark py-2 tableHead" style="background-color:#8a8e92"><th class="py-2 pl-3"><div class="mealOrder" >Name</div></th><th class=""><div class="mealCategory" style="font-size: .9rem; text-align: center;">Category</div></th><th><div class="price" style="font-size: .9rem; text-align: center;">Price</div></th><th><div class="count" style="font-size: .9rem; text-align: center;">Count</div></th><th><div class="priceBeforeDiscount" style="font-size: .95rem; text-align: center;">Total</div></th><th><div class="free" style="font-size: .9rem; text-align: center;">Free</div></th><th><div class="discount" style="font-size: .9rem; text-align: center;">Discount</div></th><th class=""><div class="priceDiscount" style=" text-align: center;">After Discount</div></th><th> </th><th> </th></tr>')

            for(var c = 0; c < ordered.length; c++)
            {
                $(".orderList").append('<tr class="text-white line' + c + '"><td class="py-3 pl-3"><div class="mealOrder mealNumber' + c + '" style="font-size: .9rem;">' + ordered[c].name + '</div></td><td><div class="mealCategory " style="font-size: .9rem; text-align: center;">' + ordered[c].category + '</div></td><td><div class="price' + c + '" style="font-size: .9rem; text-align: center;">' + ordered[c].price + '</div></td><td><div class="count d-flex justify-content-center" style="font-size: .9rem;"><div class="count' + c + '" >' + ordered[c].count + '</div></div></td><td><div class="total' + c + '" style="font-size: .95rem; text-align: center;">' + ordered[c].total +'</div></td><td><div class="free d-flex justify-content-center" style="font-size: .9rem;"><input class="free' + c + '" type="text" value ="' + ordered[c].free + '" min ="1" style="width: 45px; border: none;"'+ ordered[c].disableFree +'></div></td><td><div class="discount d-flex justify-content-center" style="font-size: .9rem; text-align: center;"><input class="discount' + c + '" type="text" value ="' + ordered[c].discount + '" min ="0" max="100"  style="width: 45px;  border: none;"' + ordered[c].disableDiscount + '></div></td><td><div class="discountPrice' + c + '" style=" text-align: center;">' + ordered[c].afterDiscount + '</div></td><td><div class="undo undo' + c + ' d-flex justify-content-center" style=" border-radius: 50%;  padding: 2px;" id="'+ c + '"><svg width="8" height="12" fill="none" viewBox="0 0 24 24"><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M9.25 4.75L4.75 9L9.25 13.25"/><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M5.5 9H15.25C17.4591 9 19.25 10.7909 19.25 13V19.25"/></svg></div></td></tr>');
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

                if($("#discountOnTotal").val().includes('%'))
                {
                    var discountOnTotal = $("#discountOnTotal").val().split("");
                    discountOnTotal.pop();


                    discountOnTotal = discountOnTotal.toLocaleString(discountOnTotal);

                    discountOnTotal = discountOnTotal.replace(",","");

                    totalResult = totalResult - (totalResult * parseInt(discountOnTotal) / 100);
                }

                else{
                    totalResult = totalResult - parseInt($("#discountOnTotal").val());
                }


                // totalResult += parseInt($(field).text());
                

                $(".totalBill").empty();
                $(".totalBill").append("Total = " + totalResult + " $");
            }
    })


    $(document).on("click", ".minsOneItem", function(){
        var minsOne = $(this).attr("id");

        for(var i in ordered)
        {
            var discountClass = ".discount" + i;
            if(ordered[i].name == minsOne)
            {
                if(parseInt(ordered[i].count) > 1)
                {
                    ordered[i].count  = parseInt(ordered[i].count) - 1;
                    thirdPage(minsOne);

                    var lastItem = $(ordered[i].stack).get(-1);

                    lastItem = lastItem - 1;

                    ordered[i].stack.pop();

                    if(lastItem != 0)
                    {
                        ordered[i].stack.push(lastItem);
                    }
                    

                    ordered[i].total = ordered[i].price * ordered[i].count;            // ordered[i].discount = $(discountClass).val();

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

                        if($(discountClass).val() == "")
                        {
                            ordered[i].discount = 0;

                        }

                        if(ordered[i].free == "")
                        {
                            ordered[i].free = 0;
                        }    

                        // ordered[i].discount = $(discountClass).val();

                        ordered[i].afterDiscount = parseInt(ordered[i].total) - parseInt(ordered[i].discount) - parseInt(ordered[i].free) * parseInt(ordered[i].price);
                    }
                }
                else{
                    ordered.splice(i, 1);
                }
                
                
                
                
                $(".orderList").empty();
                $(".orderList").append('<tr class="text-dark py-2 tableHead" style="background-color:#8a8e92"><th class="py-2 pl-3"><div class="mealOrder" >Name</div></th><th class=""><div class="mealCategory" style="font-size: .9rem; text-align: center;">Category</div></th><th><div class="price" style="font-size: .9rem; text-align: center;">Price</div></th><th><div class="count" style="font-size: .9rem; text-align: center;">Count</div></th><th><div class="priceBeforeDiscount" style="font-size: .95rem; text-align: center;">Total</div></th><th><div class="free" style="font-size: .9rem; text-align: center;">Free</div></th><th><div class="discount" style="font-size: .9rem; text-align: center;">Discount</div></th><th class=""><div class="priceDiscount" style=" text-align: center;">After Discount</div></th><th> </th><th> </th></tr>')

                for(var c = 0; c < ordered.length; c++)
                {
                    $(".orderList").append('<tr class="text-white line' + c + '"><td class="py-3 pl-3"><div class="mealOrder mealNumber' + c + '" style="font-size: .9rem;">' + ordered[c].name + '</div></td><td><div class="mealCategory " style="font-size: .9rem; text-align: center;">' + ordered[c].category + '</div></td><td><div class="price' + c + '" style="font-size: .9rem; text-align: center;">' + ordered[c].price + '</div></td><td><div class="count d-flex justify-content-center" style="font-size: .9rem;"><div class="count' + c + '" >' + ordered[c].count + '</div></div></td><td><div class="total' + c + '" style="font-size: .95rem; text-align: center;">' + ordered[c].total +'</div></td><td><div class="free d-flex justify-content-center" style="font-size: .9rem;"><input class="free' + c + '" type="text" value ="' + ordered[c].free + '" min ="1" style="width: 45px; border: none;"'+ ordered[c].disableFree +'></div></td><td><div class="discount d-flex justify-content-center" style="font-size: .9rem; text-align: center;"><input class="discount' + c + '" type="text" value ="' + ordered[c].discount + '" min ="0" max="100"  style="width: 45px;  border: none;"' + ordered[c].disableDiscount + '> </div></td><td><div class="discountPrice' + c + '" style=" text-align: center;">' + ordered[c].afterDiscount + '</div></td><td><div class="undo undo' + c + ' d-flex justify-content-center" style=" border-radius: 50%;  padding: 2px;" id="'+ c + '"><svg width="8" height="12" fill="none" viewBox="0 0 24 24"><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M9.25 4.75L4.75 9L9.25 13.25"/><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M5.5 9H15.25C17.4591 9 19.25 10.7909 19.25 13V19.25"/></svg></div></td></tr>');
                }
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

                if($("#discountOnTotal").val().includes('%'))
                {
                    var discountOnTotal = $("#discountOnTotal").val().split("");
                    discountOnTotal.pop();


                    discountOnTotal = discountOnTotal.toLocaleString(discountOnTotal);

                    discountOnTotal = discountOnTotal.replace(",","");

                    totalResult = totalResult - (totalResult * parseInt(discountOnTotal) / 100);
                }

                else{
                    totalResult = totalResult - parseInt($("#discountOnTotal").val());
                }


                // totalResult += parseInt($(field).text());
                

                $(".totalBill").empty();
                $(".totalBill").append("Total = " + totalResult + " $");
            }
    })





    // <td class=" px-3 "><div class="delete delete' + c + ' d-flex justify-content-center" style=" border-radius: 50%;  padding: 2px;" id="' + c + '"><svg width="8" height="12" fill="none" viewBox="0 0 24 24"><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M17.25 6.75L6.75 17.25"/><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M6.75 6.75L17.25 17.25"/></svg></div></td>
    // $(document).on("click", ".delete", function(){
    //     var deleteId = $(this).attr("id");

    //     buy("nothing");

    //     var mealNumber = ".mealNumber" + deleteId;

    //     for(var s = 0; s < ordered.length; s++)
    //     {
    //         if(ordered[s].name == $(mealNumber).text()){
        


    //             if($(".head").text().includes(ordered[s].name))
    //             {
    //                 para = ordered[s].name;

    //                 $(".subCategory").removeClass("active");
            
    //                 $(".thirdPage").addClass("d-flex justify-content-center flex-column");


    //                 $(".thirdPage").empty();

                    

    //                 for(var l in allThings)
    //                 {
    //                     if(allThings[l].name == para){
    //                         var paraName = allThings[l].name; 
    //                         var paraPrice = allThings[l].price;
    //                         var paraDescription = allThings[l].description;
    //                     }
    //                 }

    //                 var currentCount = 0;
                    
    //                 for(var p in ordered)
    //                 {
    //                     if(ordered[p].name == para)
    //                     {
    //                         currentCount = 0;
    //                     }
    //                 }

    //                 $(".thirdPage").append('<div class="categoryHeadingTwo h2 py-2 text-white d-none justify-content-between"><div class="head"></div><div class="iconSection d-flex justify-content-between"><div class="homeBtn mx-2 backBtn d-flex justify-content-center align-items-center"><svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75024 19.2502H17.2502C18.3548 19.2502 19.2502 18.3548 19.2502 17.2502V9.75025L12.0002 4.75024L4.75024 9.75025V17.2502C4.75024 18.3548 5.64568 19.2502 6.75024 19.2502Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.74963 15.7493C9.74963 14.6447 10.6451 13.7493 11.7496 13.7493H12.2496C13.3542 13.7493 14.2496 14.6447 14.2496 15.7493V19.2493H9.74963V15.7493Z"/></svg></div><div class="thirdBackBtn backBtn d-flex justify-content-center align-items-center"><svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.75 8.75L14.25 12L10.75 15.25"/></svg></div></div></div><div class="card ' + para + " " + para + 'Card d-none" style=" background-color: inherit; border: none; color: white;"><div class="d-flex justify-content-center mb-2"><button class=" plusOneItem btn btn-sm" id="' + para + '">+</button><input class="currentCount" value="' + currentCount + '" type="text" style="width: 30px;"><button class="minsOneItem btn btn-sm" id="' + para + '">-</button></div><div class = "barNumber d-flex justify-content-center flex-column"><ul class = "d-flex justify-content-center flex-row"> <li class="countNumber counting0" style="margin: 2px; border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 0 </li><li class="countNumber counting1" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 1 </li><li class="countNumber counting2" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 2 </li> <li class="countNumber counting3" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 3 </li><li class="countNumber counting4" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 4 </li> <li class="countNumber counting5" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 5 </li><li class="countNumber counting6" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 6 </li><li class="countNumber counting7" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 7 </li><li class="countNumber counting8" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 8 </li><li class="countNumber counting9" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 9 </li></ul> <div class="d-flex justify-content-center"><div class="countingLabel " style ="width: 35px; margin-bottom: 15px; font-size: 1.2rem; background-color: white; color: var(--dark);" readOnly></div><div></div></div></div><div class="card-img d-flex justify-content-center"><img src="../../plugins/' + para + '.jpg" alt="" class="card-img-top" style="width: 14vw;"></div><div class="card-body"><div class="d-flex justify-content-between align-items-center pb-3"><h5 class="card-title pt-1" style="font-size: 1.5rem;">Ingredients</h5> <div class="h3">' + paraPrice + '</div> </div> <div class="card-text" style="font-size: 1rem;">' + paraDescription + '</div><div class="d-flex justify-content-center align-items-center pt-5"><button class="btn btn-primary w-50 buy'+ para +'" ' + status + '>Add</button> </div></div></div>');


    //                 $("hr.onHead").addClass("d-none");
                    
                    
    //                 $("."+para+"Card").removeClass("d-none");
                    
    //                 pageHead(paraName); 
                
    //                 $(".secondPage").fadeOut("fast", function(){

    //                     $(".firstPage").removeClass("d-block");

    //                     $(".categoryHeading").removeClass("d-flex");
    //                     $(".secondPage").removeClass("d-block");
    //                     $(".categoryHeadingTwo").removeClass("d-none");
    //                     $(".categoryHeadingTwo").addClass("d-flex");
            
    //                     $(".secondPage").css("display", "none");
    //                 });
                    
    //             }

                
    //             ordered.splice(s, 1);

    //             $(".orderList").empty();
    //             $(".orderList").append('<tr class="text-dark py-2 tableHead" style="background-color:#8a8e92"><th class="py-2 pl-3"><div class="mealOrder" >Name</div></th><th class=""><div class="mealCategory" style="font-size: .9rem; text-align: center;">Category</div></th><th><div class="price" style="font-size: .9rem; text-align: center;">Price</div></th><th><div class="count" style="font-size: .9rem; text-align: center;">Count</div></th><th><div class="priceBeforeDiscount" style="font-size: .95rem; text-align: center;">Total</div></th><th><div class="free" style="font-size: .9rem; text-align: center;">Free</div></th><th><div class="discount" style="font-size: .9rem; text-align: center;">Discount</div></th><th class=""><div class="priceDiscount" style=" text-align: center;">After Discount</div></th><th> </th><th> </th></tr>')

    //             for(var c = 0; c < ordered.length; c++)
    //             {
    //                 $(".orderList").append('<tr class="text-white line' + c + '"><td class="py-3 pl-3"><div class="mealOrder mealNumber' + c + '" style="font-size: .9rem;">' + ordered[c].name + '</div></td><td><div class="mealCategory " style="font-size: .9rem; text-align: center;">' + ordered[c].category + '</div></td><td><div class="price' + c + '" style="font-size: .9rem; text-align: center;">' + ordered[c].price + '</div></td><td><div class="count d-flex justify-content-center" style="font-size: .9rem;"><div class="count' + c + '" >' + ordered[c].count + '</div></div></td><td><div class="total' + c + '" style="font-size: .95rem; text-align: center;">' + ordered[c].total +'</div></td><td><div class="free d-flex justify-content-center" style="font-size: .9rem;"><input class="free' + c + '" type="text" value ="' + ordered[c].free + '" min ="1" style="width: 45px; border: none;"'+ ordered[c].disableFree +'></div></td><td><div class="discount d-flex justify-content-center" style="font-size: .9rem; text-align: center;"><input class="discount' + c + '" type="text" value ="' + ordered[c].discount + '" min ="0" max="100"  style="width: 45px;  border: none;"' + ordered[c].disableDiscount + '> </div></td><td><div class="discountPrice' + c + '" style=" text-align: center;">' + ordered[c].afterDiscount + '</div></td><td><div class="undo undo' + c + ' d-flex justify-content-center" style=" border-radius: 50%;  padding: 2px;" id="'+ c + '"><svg width="8" height="12" fill="none" viewBox="0 0 24 24"><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M9.25 4.75L4.75 9L9.25 13.25"/><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M5.5 9H15.25C17.4591 9 19.25 10.7909 19.25 13V19.25"/></svg></div></td></tr>');
    //             }
            
    //         }
    //     }
    

    //     var totalResult = 0;
    
    //     for(var t = 0; t < ordered.length; t++){
    //         var field = ".discountPrice" + t;
            
    //         var value = parseInt($(field).text());



    //         totalResult += parseInt(value);

    //                     if($("#discountOnTotal").val().includes('%'))
    //                     {
    //                         var discountOnTotal = $("#discountOnTotal").val().split("");
    //                         discountOnTotal.pop();


    //                         discountOnTotal = discountOnTotal.toLocaleString(discountOnTotal);

    //                         discountOnTotal = discountOnTotal.replace(",","");

    //                         totalResult = totalResult - (totalResult * parseInt(discountOnTotal) / 100);
    //                     }

    //                     else{
    //                         totalResult = totalResult - parseInt($("#discountOnTotal").val());
    //                     }


    //         // totalResult += parseInt($(field).text());
            

    //         $(".totalBill").empty();
    //         $(".totalBill").append("Total = " + totalResult + " $");
    //     }

    //     if(ordered.length == 0)
    //     {
    //         $(".totalBill").empty();
    //         $(".totalBill").append("Total = 0 $");
    //     }

    // })




    $(document).on("click", ".undo", function(){
        var undoId = $(this).attr("id");
    
        buy("nothing");

        var mealName = ".mealNumber" + undoId;

        for(var d = 0; d < ordered.length; d++)
        {
            if(ordered[d].name == $(mealName).text())
            {

                var discountClass = ".discount" + d;
                var lastItem = $(ordered[d].stack).get(-1);
                
                ordered[d].count = parseInt(ordered[d].count) - lastItem;

                ordered[d].stack.pop();

                
                if($(".head").text().includes(ordered[d].name))
                {
                    para = ordered[d].name;

                    $(".subCategory").removeClass("active");
            
                    $(".thirdPage").addClass("d-flex justify-content-center flex-column");


                    $(".thirdPage").empty();

                    

                    for(var l in allThings)
                    {
                        if(allThings[l].name == para){
                            var paraName = allThings[l].name; 
                            var paraPrice = allThings[l].price;
                            var paraDescription = allThings[l].description;
                        }
                    }

                    var currentCount = 0;
                    
                    for(var p in ordered)
                    {
                        if(ordered[p].name == para)
                        {
                            currentCount = ordered[p].count;
                        }
                    }

                    $(".thirdPage").append('<div class="categoryHeadingTwo h2 py-2 text-white d-none justify-content-between"><div class="head"></div><div class="iconSection d-flex justify-content-between"><div class="homeBtn mx-2 backBtn d-flex justify-content-center align-items-center"><svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75024 19.2502H17.2502C18.3548 19.2502 19.2502 18.3548 19.2502 17.2502V9.75025L12.0002 4.75024L4.75024 9.75025V17.2502C4.75024 18.3548 5.64568 19.2502 6.75024 19.2502Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.74963 15.7493C9.74963 14.6447 10.6451 13.7493 11.7496 13.7493H12.2496C13.3542 13.7493 14.2496 14.6447 14.2496 15.7493V19.2493H9.74963V15.7493Z"/></svg></div><div class="thirdBackBtn backBtn d-flex justify-content-center align-items-center"><svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.75 8.75L14.25 12L10.75 15.25"/></svg></div></div></div><div class="card ' + para + " " + para + 'Card d-none" style=" background-color: inherit; border: none; color: white;"><div class="d-flex justify-content-center mb-2"><button class=" plusOneItem btn btn-sm" id="' + para + '">+</button><input class="currentCount" value="' + currentCount + '" type="text" style="width: 30px;"><button class="minsOneItem btn btn-sm" id="' + para + '">-</button></div><div class = "barNumber d-flex justify-content-center flex-column"><ul class = "d-flex justify-content-center flex-row"> <li class="countNumber counting0" style="margin: 2px; border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 0 </li><li class="countNumber counting1" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 1 </li><li class="countNumber counting2" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 2 </li> <li class="countNumber counting3" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 3 </li><li class="countNumber counting4" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 4 </li> <li class="countNumber counting5" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 5 </li><li class="countNumber counting6" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 6 </li><li class="countNumber counting7" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 7 </li><li class="countNumber counting8" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 8 </li><li class="countNumber counting9" style="margin: 2px;border-radius: 50%; background-color: var(--primary); width: 1.3rem; text-align: center; display: flex; justify-content: center;"> 9 </li></ul> <div class="d-flex justify-content-center"><div class="countingLabel " style ="width: 35px; margin-bottom: 15px; font-size: 1.2rem; background-color: white; color: var(--dark);" readOnly></div><div></div></div></div><div class="card-img d-flex justify-content-center"><img src="../../plugins/' + para + '.jpg" alt="" class="card-img-top" style="width: 14vw;"></div><div class="card-body"><div class="d-flex justify-content-between align-items-center pb-3"><h5 class="card-title pt-1" style="font-size: 1.5rem;">Ingredients</h5> <div class="h3">' + paraPrice + '</div> </div> <div class="card-text" style="font-size: 1rem;">' + paraDescription + '</div><div class="d-flex justify-content-center align-items-center pt-5"><button class="btn btn-primary w-50 buy'+ para +'" ' + status + '>Add</button> </div></div></div>');


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
                    
                }

                if(ordered[d].count == 0)
                {
                    
                    ordered.splice(d, 1);

                }


                else{

                    ordered[d].total = parseInt(ordered[d].price) * parseInt(ordered[d].count);

            


                    if($(discountClass).val().includes('%'))
                    {
                        ordered[d].discount = $(discountClass).val();
                        
                        var discountValue = $(discountClass).val().split("");
                        discountValue.pop();


                        discountValue = discountValue.toLocaleString(discountValue);

                        discountValue = discountValue.replace(",","");
                        
                        // console.log("discountValue " + discountValue);
                        
                        ordered[d].afterDiscount = parseInt(ordered[d].total) - (parseInt(ordered[d].total) * discountValue / 100)  - parseInt(ordered[d].free) * parseInt(ordered[d].price);
                    }
                    else{
                        ordered[d].discount = parseInt($(discountClass).val());

                        ordered[d].afterDiscount = parseInt(ordered[d].total) - parseInt($(discountClass).val()) - parseInt(ordered[d].free) * parseInt(ordered[d].price);
                    }

                }

                



                $(".orderList").empty();
                $(".orderList").append('<tr class="text-dark py-2 tableHead" style="background-color:#8a8e92"><th class="py-2 pl-3"><div class="mealOrder" >Name</div></th><th class=""><div class="mealCategory" style="font-size: .9rem; text-align: center;">Category</div></th><th><div class="price" style="font-size: .9rem; text-align: center;">Price</div></th><th><div class="count" style="font-size: .9rem; text-align: center;">Count</div></th><th><div class="priceBeforeDiscount" style="font-size: .95rem; text-align: center;">Total</div></th><th><div class="free" style="font-size: .9rem; text-align: center;">Free</div></th><th><div class="discount" style="font-size: .9rem; text-align: center;">Discount</div></th><th class=""><div class="priceDiscount" style=" text-align: center;">After Discount</div></th><th> </th><th> </th></tr>')

                for(var c = 0; c < ordered.length; c++)
                {
                    $(".orderList").append('<tr class="text-white line' + c + '"><td class="py-3 pl-3"><div class="mealOrder mealNumber' + c + '" style="font-size: .9rem;">' + ordered[c].name + '</div></td><td><div class="mealCategory " style="font-size: .9rem; text-align: center;">' + ordered[c].category + '</div></td><td><div class="price' + c + '" style="font-size: .9rem; text-align: center;">' + ordered[c].price + '</div></td><td><div class="count d-flex justify-content-center" style="font-size: .9rem;"><div class="count' + c + '" >' + ordered[c].count + '</div></div></td><td><div class="total' + c + '" style="font-size: .95rem; text-align: center;">' + ordered[c].total +'</div></td><td><div class="free d-flex justify-content-center" style="font-size: .9rem;"><input class="free' + c + '" type="text" value ="' + ordered[c].free + '" min ="1" style="width: 45px; border: none;"'+ ordered[c].disableFree +'></div></td><td><div class="discount d-flex justify-content-center" style="font-size: .9rem; text-align: center;"><input class="discount' + c + '" type="text" value ="' + ordered[c].discount + '" min ="0" max="100"  style="width: 45px;  border: none;"' + ordered[c].disableDiscount + '> </div></td><td><div class="discountPrice' + c + '" style=" text-align: center;">' + ordered[c].afterDiscount + '</div></td><td><div class="undo undo' + c + ' d-flex justify-content-center" style=" border-radius: 50%;  padding: 2px;" id="'+ c + '"><svg width="8" height="12" fill="none" viewBox="0 0 24 24"><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M9.25 4.75L4.75 9L9.25 13.25"/><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M5.5 9H15.25C17.4591 9 19.25 10.7909 19.25 13V19.25"/></svg></div></td></tr>');
                }
            
             
                var totalResult = 0;
                
                for(var t = 0; t < ordered.length; t++){
                    var field = ".discountPrice" + t;
                    
                    var value = parseInt($(field).text());
                    

                    totalResult += parseInt(value);

                        if($("#discountOnTotal").val().includes('%'))
                        {
                            var discountOnTotal = $("#discountOnTotal").val().split("");
                            discountOnTotal.pop();


                            discountOnTotal = discountOnTotal.toLocaleString(discountOnTotal);

                            discountOnTotal = discountOnTotal.replace(",","");

                            console.log(discountOnTotal);

                            totalResult = totalResult - (totalResult * parseInt(discountOnTotal) / 100);
                        }

                        else{
                            totalResult = totalResult - parseInt($("#discountOnTotal").val());
                        }
 

                    $(".totalBill").empty();
                    $(".totalBill").append("Total = " + totalResult + " $");
                }

                if(ordered.length == 0)
                {
                    $(".totalBill").empty();
                    $(".totalBill").append("Total = 0 $");
                }

            

                
            }
            
        }



        

    })


    $(document).on("click", ".makeBill", function(){
        $('.totalInModal').empty();
        $('.totalInModal').append($('.totalBill').text());
    })


    $(document).on("change", ".choosingClient", function(){
        if($(".choosingClient").val() == "frequent")
        {
            $(".underClientType").empty();
            $(".underClientType").append('<select class="form-control" id="exampleFormControlSelect1"><option value="">Choose One</option><option value="ahmad">Ahmad</option><option value="mahmoud">Mahmoud</option></select>');

        }
        else if($(".choosingClient").val() == "new")
        {
            $(".underClientType").empty();
            $(".underClientType").append('<div class="form-group"><input type="text" class="form-control" style="" placeholder="Client Name"></div><div class="form-group"><input type="text" class="form-control" placeholder="Client Address"></div><div class="form-group"><input type="text" class="form-control" placeholder="Client Phone"></div><div class="form-group"><input type="text" class="form-control" placeholder="Client Mobile"></div>')
        }

        else{
            $(".underClientType").empty();
        }
    })



    $(document).on("change", ".orderType", function(){
        if($(".orderType").val() == "internal")
        {
            $(".underOrderType").empty();
            $(".underOrderType").append('<div class="form-group"><input type="text" class="form-control" placeholder="How Many Person"></div><div class="form-group"><input type="text" class="form-control" placeholder="Reach Time"></div><div class="form-group"><input type="text" class="form-control" placeholder="Cash Received"></div>')
        }

        else if($(".orderType").val() == "external")
        {
            $(".underOrderType").empty();
            $(".underOrderType").append('<div class="form-group"><input type="text" class="form-control" placeholder="Reach Time"></div>')
        }
    })



    // for(var y = 0; y < 10; y++)
    // {
        // var counting = ".counting" + y;
        $(document).on("click", ".counting1", function(){
            console.log("1");
            $(".countingLabel").empty();
            $(".countingLabel").append("1");

        })
    // }




    // $(document).on("click", ".cancelOrder", function(){
    //     ordered = [];

    //     $(".orderList").empty();
    //     $(".orderList").append('<tr class="text-dark py-2 tableHead" style="background-color:#8a8e92"><th class="py-2 pl-3"><div class="mealOrder" >Name</div></th><th class=""><div class="mealCategory" style="font-size: .9rem; text-align: center;">Category</div></th><th><div class="price" style="font-size: .9rem; text-align: center;">Price</div></th><th><div class="count" style="font-size: .9rem; text-align: center;">Count</div></th><th><div class="priceBeforeDiscount" style="font-size: .95rem; text-align: center;">Total</div></th><th><div class="free" style="font-size: .9rem; text-align: center;">Free</div></th><th><div class="discount" style="font-size: .9rem; text-align: center;">Discount</div></th><th class=""><div class="priceDiscount" style=" text-align: center;">After Discount</div></th><th> </th><th> </th></tr>')

    //     for(var c = 0; c < ordered.length; c++)
    //     {
    //         $(".orderList").append('<tr class="text-white line' + c + '"><td class="py-3 pl-3"><div class="mealOrder mealNumber' + c + '" style="font-size: .9rem;">' + ordered[c].name + '</div></td><td><div class="mealCategory " style="font-size: .9rem; text-align: center;">' + ordered[c].category + '</div></td><td><div class="price' + c + '" style="font-size: .9rem; text-align: center;">' + ordered[c].price + '</div></td><td><div class="count d-flex justify-content-center" style="font-size: .9rem;"><div class="count' + c + '" >' + ordered[c].count + '</div></div></td><td><div class="total' + c + '" style="font-size: .95rem; text-align: center;">' + ordered[c].total +'</div></td><td><div class="free d-flex justify-content-center" style="font-size: .9rem;"><input class="free' + c + '" type="text" value ="' + ordered[c].free + '" min ="1" style="width: 45px; border: none;"'+ ordered[c].disableFree +'></div></td><td><div class="discount d-flex justify-content-center" style="font-size: .9rem; text-align: center;"><input class="discount' + c + '" type="text" value ="' + ordered[c].discount + '" min ="0" max="100"  style="width: 45px;  border: none;"' + ordered[c].disableDiscount + '></div></td><td><div class="discountPrice' + c + '" style=" text-align: center;">' + ordered[c].afterDiscount + '</div></td><td><div class="undo undo' + c + ' d-flex justify-content-center" style=" border-radius: 50%;  padding: 2px;" id="'+ c + '"><svg width="8" height="12" fill="none" viewBox="0 0 24 24"><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M9.25 4.75L4.75 9L9.25 13.25"/><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M5.5 9H15.25C17.4591 9 19.25 10.7909 19.25 13V19.25"/></svg></div></td></tr>');
    //     }

    //     console.log(ordered);
            
    // })

   
    
    // Prevent changes in input number
    // Just by arrows
    // $(document).on("keydown", "input[type='number']", function(e){
    //     e.preventDefault();
    // })

    

    $(function() {  
        $("#scrolling").niceScroll({cursorborder: "none", scrollspeed: 30});
    });





    // choosing category from first page



    var title;
    


    $(".breakfast").click(function(){
        
        firstCategory("breakfast", breakfast);

        title = "breakfast";

        $(".secondBackBtn").attr('id', 'breakfast');
        
        
    })


    $(".lunch").click(function(){
        
        firstCategory("lunch", lunch);
        
        title = "lunch";

        $(".secondBackBtn").attr('id', 'lunch');
        
        
    })



    $(".dinner").click(function(){
        
        firstCategory("dinner", dinner);
        
        title = "dinner";

        $(".secondBackBtn").attr('id', 'dinner');
    })


    $(".drinks").click(function(){
        
        firstCategory("drinks", drink);

        title = "drinks";

        $(".secondBackBtn").attr('id', 'drinks');

    })


    $(".salads").click(function(){
        
        firstCategory("salad", salad);

        title = "salads";

        $(".secondBackBtn").attr('id', 'salads');
        
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
        
        $(".sandwichBackBtn").attr('id', 'sandwich');


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

        $(".hotBackBtn").attr('id', 'hot');
        
        pageHead("Hot"); 
         
    })


    $(document).on("click",".Cold", function(){

        secondPage(cold, "coldDrink");
        $(".secondPage").addClass("d-block");
        $(".subCategory").removeClass("active");
        $(".coldDrink").addClass("active");

        $(".secondBackBtn").addClass("coldBackBtn");
        $(".secondBackBtn").removeClass("secondBackBtn");

        
        $(".coldBackBtn").attr('id', 'cold');


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
            secondPage();

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
            
            var arrItem = [];
            
            if($('.thirdBackBtn').attr('id') == "breakfast")
            {
                arrItem = breakfast;
            }
            else if($('.thirdBackBtn').attr('id') == "lunch")
            {
                arrItem = lunch;
            }
            else if($('.thirdBackBtn').attr('id') == "dinner")
            {
                arrItem = dinner;
            }
            else if($('.thirdBackBtn').attr('id') == "hot")
            {
                arrItem = hot;
            }
            else if($('.thirdBackBtn').attr('id') == "cold")
            {
                arrItem = cold;
            }
            else if($('.thirdBackBtn').attr('id') == "sandwich")
            {
                arrItem = sandwich;
            }
            else if($('.thirdBackBtn').attr('id') == "salads")
            {
                arrItem = salad;
            }
            firstCategory($('.thirdBackBtn').attr('id'), arrItem);
            
            

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

    //     $(".thirdPage").append('<div class="card ' + name + " " + name + 'Card d-none" style=" background-color: inherit; border: none; color: white;"><div class="card-img d-flex justify-content-center"><img src="../../plugins/' + name + '.jpg" alt="" class="card-img-top" style="width: 14vw;"></div><div class="card-body"><h5 class="card-title">Ingredients</h5><div class="card-text" style="font-size: 12px;">Lorem ipsum dolor sit </div><div class="h4 py-4">50$</div><button class="btn btn-primary buyShawerma">Buy</button></div></div>')
    // }





    // add item to the bill
    // $(".steak").click(function(){
    //     $(".orderList").append(
    //     "<li class='d-flex justify-content-between p-2' style='background-color: var(--dark); border-radius: 7px;'><div class='mealOrder'>Steak</div><div class='count'>1</div></li>");
    // })

    // $(".scallop").click(function(){
    //     $(".orderList").append(
    //     "<li class='d-flex justify-content-between p-2' style='background-color: var(--dark); border-radius: 7px;'><div class='mealOrder'>Scallop</div><div class='count'>1</div></li>");
    // })
    
    // $(".burger").click(function(){
    //     $(".orderList").append(
    //     "<li class='d-flex justify-content-between p-2' style='background-color: var(--dark); border-radius: 7px;'><div class='mealOrder'>Burger</div><div class='count'>1</div></li>");
    // })

    // $(".barbecue").click(function(){
    //     $(".orderList").append(
    //     "<li class='d-flex justify-content-between p-2' style='background-color: var(--dark); border-radius: 7px;'><div class='mealOrder'>Barbecue</div><div class='count'>1</div></li>");
    // })

    // $(".kebab").click(function(){
    //     $(".orderList").append(
    //     "<li class='d-flex justify-content-between p-2' style='background-color: var(--dark); border-radius: 7px;'><div class='mealOrder'>Kebab</div><div class='count'>1</div></li>");
    // })

    // $(".coffee").click(function(){
    //     $(".orderList").append(
    //     "<li class='d-flex justify-content-between p-2' style='background-color: var(--dark); border-radius: 7px;'><div class='mealOrder'>Coffee</div><div class='count'>1</div></li>");
    // })

    // $(".tea").click(function(){
    //     $(".orderList").append(
    //     "<li class='d-flex justify-content-between p-2' style='background-color: var(--dark); border-radius: 7px;'><div class='mealOrder'>Tea</div><div class='count'>1</div></li>");
    // })

    // $(".strawberry").click(function(){
    //     $(".orderList").append(
    //     "<li class='d-flex justify-content-between p-2' style='background-color: var(--dark); border-radius: 7px;'><div class='mealOrder'>Strawberry</div><div class='count'>1</div></li>");
    // })

    // $(".orange").click(function(){
    //     $(".orderList").append(
    //     "<li class='d-flex justify-content-between p-2' style='background-color: var(--dark); border-radius: 7px;'><div class='mealOrder'>orange</div><div class='count'>1</div></li>");
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







    // for(i = 0; i < orderNum.length; i++)
            // {
            //     var nameClass = ".mealNumber" + i;
            //     var deleteLine = ".delete" + i;
                

            //     $(document).on("click", deleteLine, function(){
                
            //         for(var s = 0; s < ordered.length; s++)
            //         {
            //             if(ordered[s].name == $(nameClass).text()){
                    
                            
                            
            //                 ordered.splice(s, 1);

                            

            //                 $(".orderList").empty();
            //                 $(".orderList").append('<tr class="text-dark py-2 tableHead" style="background-color:#8a8e92"><th class="py-2 pl-3"><div class="mealOrder" >Name</div></th><th class=""><div class="mealCategory" style="font-size: .9rem; text-align: center;">Category</div></th><th><div class="price" style="font-size: .9rem; text-align: center;">Price</div></th><th><div class="count" style="font-size: .9rem; text-align: center;">Count</div></th><th><div class="priceBeforeDiscount" style="font-size: .95rem; text-align: center;">Total</div></th><th><div class="free" style="font-size: .9rem; text-align: center;">Free</div></th><th><div class="discount" style="font-size: .9rem; text-align: center;">Discount</div></th><th class=""><div class="priceDiscount" style=" text-align: center;">After Discount</div></th><th> </th><th> </th></tr>')

            //                 for(var c = 0; c < ordered.length; c++)
            //                 {
            //                     $(".orderList").append('<tr class="text-white line' + c + '"><td class="py-3 pl-3"><div class="mealOrder mealNumber' + c + '" style="font-size: .9rem;">' + ordered[c].name + '</div></td><td><div class="mealCategory " style="font-size: .9rem; text-align: center;">' + ordered[c].category + '</div></td><td><div class="price' + c + '" style="font-size: .9rem; text-align: center;">' + ordered[c].price + '</div></td><td><div class="count d-flex justify-content-center" style="font-size: .9rem;"><input class="count' + c + '" type="text" value ="' + ordered[c].count + '" min ="1" style="width: 45px; border: none;"></div></td><td><div class="total' + c + '" style="font-size: .95rem; text-align: center;">' + ordered[c].total +'</div></td><td><div class="free d-flex justify-content-center" style="font-size: .9rem;"><input class="free' + c + '" type="text" value ="' + ordered[c].free + '" min ="1" style="width: 45px; border: none;"'+ ordered[c].disableFree +'></div></td><td><div class="discount d-flex justify-content-center" style="font-size: .9rem; text-align: center;"><input class="discount' + c + '" type="text" value ="' + ordered[c].discount + '" min ="0" max="100"  style="width: 45px;  border: none;"' + ordered[c].disableDiscount + '> </div></td><td><div class="discountPrice' + c + '" style=" text-align: center;">' + ordered[c].afterDiscount + '</div></td><td><div class="undo undo' + c + ' d-flex justify-content-center" style=" border-radius: 50%;  padding: 2px;" id="'+ c + '"><svg width="8" height="12" fill="none" viewBox="0 0 24 24"><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M9.25 4.75L4.75 9L9.25 13.25"/><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M5.5 9H15.25C17.4591 9 19.25 10.7909 19.25 13V19.25"/></svg></div></td><td class=" px-3 "><div class="delete delete' + c + ' d-flex justify-content-center" style=" border-radius: 50%;  padding: 2px;"><svg width="8" height="12" fill="none" viewBox="0 0 24 24"><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M17.25 6.75L6.75 17.25"/><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M6.75 6.75L17.25 17.25"/></svg></div></td></tr>');
            //                 }
                        
                                                    
                            
            //                 // console.log(ordered);

            //             }
            //         }
                

            //         var totalResult = 0;
                
            //         for(var t = 0; t < ordered.length; t++){
            //             var field = ".discountPrice" + t;
                        
            //             var value = parseInt($(field).text());



            //             // if(isNaN(value))
            //             // {
            //             //     value = "0";
            //             // }

            //             // else{
            //                 // value = totalResult;
            //                 // var value = parseInt($(field).text());
            //             // }
                        

            //             totalResult += parseInt(value);

            //             // totalResult += parseInt($(field).text());
                        

            //             $(".totalBill").empty();
            //             $(".totalBill").append("Total = " + totalResult + " $");
            //         }

            //         if(ordered.length == 0)
            //         {
            //             $(".totalBill").empty();
            //             $(".totalBill").append("Total = 0 $");
            //         }

                
            //     })


            // }

            // for(var u in ordered)
            // {
            //     console.log("loop for " + u + " time");
            //     $(document).on("click", ".undo"+u, function(){
                    
            //         if(ordered[u].name == $(".mealNumber"+u).text())
            //         {
            //             console.log("hello to condition");
            //             var time = ordered[u].stack.slice(-1);

            //             var manyTime = ordered[u].stack.split("");
            //             manyTime.pop();
            //             console.log("time = " + time);
            //             console.log(manyTime);
            //         }
            //         else{
            //             console.log("Out of condition");
            //         }
            //     })
            // }








            // for(var z = 0; z < orderNum.length; z++)
            // {
            //     var nameClass = ".mealNumber" + z;
            //     var undoLine = ".undo" + z;


            //     console.log("------------------");
                

            //     $(document).on("click", ".undo0", function(){

            //         console.log(ordered.length);
                
            //         for(var t = 0; t < ordered.length; t++)
            //         {
            //             if(ordered[t].name == $(".mealNumber0").text()){
            //                 // console.log("undo line " + undoLine);
            //                 // console.log("name " + ordered[t].name);
            //                 console.log("meal = " + $(".mealNumber0").text());
            //                 // console.log(ordered[t].stack.pop());
            //                 ordered[t].stack.pop();
            //                 console.log(ordered[t].stack);
            //             }
            //             else{
            //                 console.log("fuck it");
            //             }
            //         }
            //         console.log(ordered);
            //     })
            // }
                    






            
            // for(var n = 0; n < orderNum.length; n++)
            // {
            //     var mealClass = ".mealNumber" + n;
            //     var undoLine = ".undo" + n;
                

            //     $(document).on("click", undoLine, function(){

            //         // console.log("ordered length second : " + ordered.length);
                
            //         for(var h = 0; h < ordered.length; h++)
            //         {

            //             console.log("h = " + h);
            //             if(ordered[h].name == $(mealClass).text()){

            //                 console.log("plus for time " + h);
                    
                            

            //                 var lastItem = $(ordered[h].stack).get(-1);

            //                 // for(var e = 0; e < ordered[s].stack.length; e++)
            //                 // {

            //                     // if(e == lastItem)
            //                     // {
            //                         // var lastItem = ordered[s].stack[e];
            //                         console.log("lastItem = " + lastItem);
            //                         // console.log("e " + e);
            //                         ordered[h].count = parseInt(ordered[h].count) - lastItem;

            //                         ordered[h].stack.pop();


            //                         if(ordered[h].count == 0)
            //                         {
                                        
            //                             ordered.splice(h, 1);

            //                             $(".orderList").empty();
            //                             $(".orderList").append('<tr class="text-dark py-2 tableHead" style="background-color:#8a8e92"><th class="py-2 pl-3"><div class="mealOrder" >Name</div></th><th class=""><div class="mealCategory" style="font-size: .9rem; text-align: center;">Category</div></th><th><div class="price" style="font-size: .9rem; text-align: center;">Price</div></th><th><div class="count" style="font-size: .9rem; text-align: center;">Count</div></th><th><div class="priceBeforeDiscount" style="font-size: .95rem; text-align: center;">Total</div></th><th><div class="free" style="font-size: .9rem; text-align: center;">Free</div></th><th><div class="discount" style="font-size: .9rem; text-align: center;">Discount</div></th><th class=""><div class="priceDiscount" style=" text-align: center;">After Discount</div></th><th> </th><th> </th></tr>')

            //                             for(var c = 0; c < ordered.length; c++)
            //                             {
            //                                 $(".orderList").append('<tr class="text-white line' + c + '"><td class="py-3 pl-3"><div class="mealOrder mealNumber' + c + '" style="font-size: .9rem;">' + ordered[c].name + '</div></td><td><div class="mealCategory " style="font-size: .9rem; text-align: center;">' + ordered[c].category + '</div></td><td><div class="price' + c + '" style="font-size: .9rem; text-align: center;">' + ordered[c].price + '</div></td><td><div class="count d-flex justify-content-center" style="font-size: .9rem;"><input class="count' + c + '" type="text" value ="' + ordered[c].count + '" min ="1" style="width: 45px; border: none;"></div></td><td><div class="total' + c + '" style="font-size: .95rem; text-align: center;">' + ordered[c].total +'</div></td><td><div class="free d-flex justify-content-center" style="font-size: .9rem;"><input class="free' + c + '" type="text" value ="' + ordered[c].free + '" min ="1" style="width: 45px; border: none;"'+ ordered[c].disableFree +'></div></td><td><div class="discount d-flex justify-content-center" style="font-size: .9rem; text-align: center;"><input class="discount' + c + '" type="text" value ="' + ordered[c].discount + '" min ="0" max="100"  style="width: 45px;  border: none;"' + ordered[c].disableDiscount + '> </div></td><td><div class="discountPrice' + c + '" style=" text-align: center;">' + ordered[c].afterDiscount + '</div></td><td><div class="undo undo' + c + ' d-flex justify-content-center" style=" border-radius: 50%;  padding: 2px;"><svg width="8" height="12" fill="none" viewBox="0 0 24 24"><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M9.25 4.75L4.75 9L9.25 13.25"/><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M5.5 9H15.25C17.4591 9 19.25 10.7909 19.25 13V19.25"/></svg></div></td><td class=" px-3 "><div class="delete delete' + c + ' d-flex justify-content-center" style=" border-radius: 50%;  padding: 2px;"><svg width="8" height="12" fill="none" viewBox="0 0 24 24"><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M17.25 6.75L6.75 17.25"/><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M6.75 6.75L17.25 17.25"/></svg></div></td></tr>');
            //                             }

            //                             var totalResult = 0;
                
            //                             for(var t = 0; t < ordered.length; t++){
            //                                 var field = ".discountPrice" + t;
                                            
            //                                 var value = parseInt($(field).text());
                                            

            //                                 totalResult += parseInt(value); 

            //                                 $(".totalBill").empty();
            //                                 $(".totalBill").append("Total = " + totalResult + " $");
            //                             }

            //                             if(ordered.length == 0)
            //                             {
            //                                 $(".totalBill").empty();
            //                                 $(".totalBill").append("Total = 0 $");
            //                             }

            //                             console.log(ordered);
                                    
            //                         }

            //                         else{

            //                             ordered[h].total = parseInt(ordered[h].price) * parseInt(ordered[h].count);

                                


            //                             if($(discountClass).val().includes('%'))
            //                             {
            //                                 ordered[h].discount = $(discountClass).val();
                                            
            //                                 var discountValue = $(discountClass).val().split("");
            //                                 discountValue.pop();


            //                                 discountValue = discountValue.toLocaleString(discountValue);

            //                                 discountValue = discountValue.replace(",","");
                                            
            //                                 // console.log("discountValue " + discountValue);
                                            
            //                                 ordered[h].afterDiscount = parseInt(ordered[h].total) - (parseInt(ordered[h].total) * discountValue / 100)  - parseInt(ordered[h].free) * parseInt(ordered[h].price);
            //                             }
            //                             else{
            //                                 ordered[h].discount = parseInt($(discountClass).val());

            //                                 ordered[h].afterDiscount = parseInt(ordered[h].total) - parseInt($(discountClass).val()) - parseInt(ordered[h].free) * parseInt(ordered[h].price);
            //                             }

            //                         }
                                    

            //                     // }
            //                 // }

                            

            //                 $(".orderList").empty();
            //                 $(".orderList").append('<tr class="text-dark py-2 tableHead" style="background-color:#8a8e92"><th class="py-2 pl-3"><div class="mealOrder" >Name</div></th><th class=""><div class="mealCategory" style="font-size: .9rem; text-align: center;">Category</div></th><th><div class="price" style="font-size: .9rem; text-align: center;">Price</div></th><th><div class="count" style="font-size: .9rem; text-align: center;">Count</div></th><th><div class="priceBeforeDiscount" style="font-size: .95rem; text-align: center;">Total</div></th><th><div class="free" style="font-size: .9rem; text-align: center;">Free</div></th><th><div class="discount" style="font-size: .9rem; text-align: center;">Discount</div></th><th class=""><div class="priceDiscount" style=" text-align: center;">After Discount</div></th><th> </th><th> </th></tr>')

            //                 for(var c = 0; c < ordered.length; c++)
            //                 {
            //                     $(".orderList").append('<tr class="text-white line' + c + '"><td class="py-3 pl-3"><div class="mealOrder mealNumber' + c + '" style="font-size: .9rem;">' + ordered[c].name + '</div></td><td><div class="mealCategory " style="font-size: .9rem; text-align: center;">' + ordered[c].category + '</div></td><td><div class="price' + c + '" style="font-size: .9rem; text-align: center;">' + ordered[c].price + '</div></td><td><div class="count d-flex justify-content-center" style="font-size: .9rem;"><input class="count' + c + '" type="text" value ="' + ordered[c].count + '" min ="1" style="width: 45px; border: none;"></div></td><td><div class="total' + c + '" style="font-size: .95rem; text-align: center;">' + ordered[c].total +'</div></td><td><div class="free d-flex justify-content-center" style="font-size: .9rem;"><input class="free' + c + '" type="text" value ="' + ordered[c].free + '" min ="1" style="width: 45px; border: none;"'+ ordered[c].disableFree +'></div></td><td><div class="discount d-flex justify-content-center" style="font-size: .9rem; text-align: center;"><input class="discount' + c + '" type="text" value ="' + ordered[c].discount + '" min ="0" max="100"  style="width: 45px;  border: none;"' + ordered[c].disableDiscount + '> </div></td><td><div class="discountPrice' + c + '" style=" text-align: center;">' + ordered[c].afterDiscount + '</div></td><td><div class="undo undo' + c + ' d-flex justify-content-center" style=" border-radius: 50%;  padding: 2px;"><svg width="8" height="12" fill="none" viewBox="0 0 24 24"><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M9.25 4.75L4.75 9L9.25 13.25"/><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M5.5 9H15.25C17.4591 9 19.25 10.7909 19.25 13V19.25"/></svg></div></td><td class=" px-3 "><div class="delete delete' + c + ' d-flex justify-content-center" style=" border-radius: 50%;  padding: 2px;"><svg width="8" height="12" fill="none" viewBox="0 0 24 24"><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M17.25 6.75L6.75 17.25"/><path stroke="var(--dark)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M6.75 6.75L17.25 17.25"/></svg></div></td></tr>');
            //                 }
                        
                                                    
                            
            //                 // console.log(ordered);

            //             }
            //         }
                

            //         var totalResult = 0;
                
            //         for(var t = 0; t < ordered.length; t++){
            //             var field = ".discountPrice" + t;
                        
            //             var value = parseInt($(field).text());
                        

            //             totalResult += parseInt(value); 

            //             $(".totalBill").empty();
            //             $(".totalBill").append("Total = " + totalResult + " $");
            //         }

            //         if(ordered.length == 0)
            //         {
            //             $(".totalBill").empty();
            //             $(".totalBill").append("Total = 0 $");
            //         }

                
            //     })


            // }








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