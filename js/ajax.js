$(document).ready(function(){
    /********** Showing Data *********/
    $.ajax({
        type: "get",
        url : "http://localhost:3000/employees",
        success: function(result){
            addingNewTr(result);
        }
    })

    /********** Delete Employee *********/
    $("table").on("click",".del",function(e){
        if(confirm("Confirm Delete This Employee?...")){
            let finalURL="http://localhost:3000/employees/"+$(e.target).parent().siblings(".id").text();
            $.ajax({
                type: "DELETE",
                url : finalURL,
                success: function(result){
                    alert("Employee Removed Successflly.");
                }
            })
        } 
    })

    /********** Add New Employee *********/
    $("#add").click(function(event){
        //alert(`${$("input[name=empID]").val()}`);
        let empID=$("input[name=empID]").val();
        let empName=$("input[name=empName]").val();
        let empAge=$("input[name=empAge]").val();
        let empSalary=$("input[name=empSalary]").val();

        let empObject={
            id: empID,
            Name: empName,
            Age: empAge,
            Salary: empSalary
        };

        //alert(`${empObject.id}`);

        if(!validate(empID,1)){
            $("#errorID").text("data must be entered here...!");
            event.preventDefault();
        }else if(!validate(empID,2)){
            $("#errorID").text("Employee ID must be a Number...!");
            event.preventDefault();
        }else if(!validate(empName,1)){
            $("#errorName").text("data must be entered here...!");
            event.preventDefault();
        }else if(validate(empName,2)){
            $("#errorName").text("Employee Name must be a String Value...!");
            event.preventDefault();
        }else if(!validate(empName,3)){
            $("#errorName").text("Employee Name must have at least 2 characters...!");
            event.preventDefault();
        }else if(!validate(empAge,1)){
            $("#errorAge").text("data must be entered here...!");
            event.preventDefault();
        }else if(!validate(empAge,2)){
            $("#errorAge").text("Employee ID must be a Number...!");
            event.preventDefault();
        }else if(!validate(empSalary,1)){
            $("#errorSalary").text("data must be entered here...!");
            event.preventDefault();
        }else if(!validate(empSalary,2)){
            $("#errorSalary").text("Employee ID must be a Number...!").hide(500);
            event.preventDefault();
        }else{
            $.ajax({
                type: "post",
                url : "http://localhost:3000/employees",
                data: empObject,
                success: function(result){
                    window.location.href("http://127.0.0.1:5500/index.html");
                }
            })
        }
        
    })


    /********** Update Employee Data *********/
    $("table").on("click",".upd",function(event){
        let oldID=$(event.target).parent().parent().siblings(".id").text();
        //$("input[name=empID]").val( `${}` );
        //alert(`${  $(event.target).parent().parent().siblings(".id").text()  }`)

        $("#update").click(function(event){
            //alert(`${$("input[name=empID]").val()}`);
            let empID=$("input[name=empID]").val();
            let empName=$("input[name=empName]").val();
            let empAge=$("input[name=empAge]").val();
            let empSalary=$("input[name=empSalary]").val();
    
            let empObject={
                id: empID,
                Name: empName,
                Age: empAge,
                Salary: empSalary
            };


            let link="http://localhost:3000/employees/"+$(oldID);
            $.ajax({
                type: "PUT",
                url : link,
                data: empObject,
                success: function(result){
                    if(result){
                        window.location.href("http://127.0.0.1:5500/index.html");
                    }else{
                        alert("noooooooooooo...");
                    }
                }
            })
    
            // if(!validate(empID,1)){
            //     $("#errorID").text("data must be entered here...!");
            //     event.preventDefault();
            // }else if(!validate(empID,2)){
            //     $("#errorID").text("Employee ID must be a Number...!");
            //     event.preventDefault();
            // }else if(!validate(empName,1)){
            //     $("#errorName").text("data must be entered here...!");
            //     event.preventDefault();
            // }else if(validate(empName,2)){
            //     $("#errorName").text("Employee Name must be a String Value...!");
            //     event.preventDefault();
            // }else if(!validate(empName,3)){
            //     $("#errorName").text("Employee Name must have at least 2 characters...!");
            //     event.preventDefault();
            // }else if(!validate(empAge,1)){
            //     $("#errorAge").text("data must be entered here...!");
            //     event.preventDefault();
            // }else if(!validate(empAge,2)){
            //     $("#errorAge").text("Employee ID must be a Number...!");
            //     event.preventDefault();
            // }else if(!validate(empSalary,1)){
            //     $("#errorSalary").text("data must be entered here...!");
            //     event.preventDefault();
            // }else if(!validate(empSalary,2)){
            //     $("#errorSalary").text("Employee ID must be a Number...!").hide(500);
            //     event.preventDefault();
            // }else{
                
            // }
            
        })
    })

    

})   








function addingNewTr(DataArrayObject) {
    DataArrayObject.forEach(items => {
        let trData = document.createElement("tr");
        for (prop in items) {
            let tdData = document.createElement("td");
            $(tdData).text(items[prop]);
            $(trData).append(tdData);
            if(prop == 'id'){
                $(tdData).addClass("id");
            }else if( prop == 'Name'){
                $(tdData).addClass("Name");
            }else if( prop == 'Age'){
                $(tdData).addClass("Age");
            }else{
                $(tdData).addClass("Salary");
            }
        }
        
        let btnsCol=document.createElement("td");
        $(btnsCol).append(`<a href='update.html'><button style='background-color:rgba(98, 184, 221, .5);' class='upd'>Update</button></a>
                            <button style='background-color:rgba(221, 98, 98, .5);' class='del'>Delete</button>`);
        $(trData).append(btnsCol);
        $("#dataTable").append(trData);
    });
}

function validate(input, flag){
    switch(flag){
        case 1:  //check empty...
            if(input.length>0){
                return true;
            }else{
                return false;
            }
            break;
        case 2:  //check number
            if(!isNaN(input)){
                return true;
            }else{
                return false;
            }
            break;
        case 3:  //check length
            if(input.length > 2){
                return true;
            }else{
                return false;
            }
            break;
    }
}
