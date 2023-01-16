# JQuery_CRUD_Project
## _This is a simple CRUD Project using JQuery, Ajax, Json_


---
---


# Description
Here i am trying to apply CRUD operations on data stored in json file using JQuery to make Ajax Calls, and
display data inside a simple data table.

# First we need some preparation:
    =>we need to create file with name [db.json].
    =>intialize this file with some data.

    =>we need to install node
    =>after that we need to install json server{
        1- open bash inside the project directory.
        2- npm init
        3- npm install --save json-server
        4- we need to edit the file [package.json] by adding a script {
            =>"json:server": "json-server --watch db.json"
        }
        5- finally we will run the server by apply this command in bash{
            =>npm run json:server
        }
    }

# To get more details...
You can get more details by visiting this resource 
 [Visit Github Resource](https://github.com/typicode/json-server).

# We need to download latest version of JQuery
You can visit [JQuery Website](https://jquery.com/download/) to Download Latest Version.

# Second, files will be categorized into:
_HTML Files_
- index.html
- add.html
- update.html

_CSS Files_
- index.css
- addingForm.css

_JS Files_
- jquery-3.6.3.js
- ajax.js

---
---

 __ajax.js File Details__

- Get All Employess <br>
 _here we make ajax call of type 'GET' to the server to get all data then show the data inside the data table._
```JS
$.ajax({
        type: "get",
        url : "http://localhost:3000/employees",
        success: function(result){
            addingNewTr(result);
        }
    })
```

---
- Add New Employee <br>
_After Applying Validtion Rules To the entered Data we will make ajax call of type 'POST' to insert new employee Data_
    
```JS
$("#add").click(function(event){
    $.ajax({
        type: "post",
        url : "http://localhost:3000/employees",
        data: empObject,
        success: function(result){
            window.location.href("http://127.0.0.1:5500/index.html");
        }
    })
})
```

---
- Update Employee Data<br>
_Here we apply 'PUT' Request [ajax call] to update employee data_
    
```JS
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
```


---
- Delete Employee <br>
_We take the employee id then delete his data by making ajax call of type 'DELETE'_
    
```JS
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
```


---
---
# Finally I hope this docmentation help you to apply more about this great Topic.
<center>Wish You Success 😊</center>