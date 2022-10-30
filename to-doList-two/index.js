let form = document.querySelector("#form");
let input = document.querySelector("#input");
let msg = document.querySelector("#msg");
let posts = document.querySelector("#posts");
let tasksToDo = document.querySelector("#tasks-to-do");
let tasksDone = document.querySelector("#tasks-done");
let checkbox = document.querySelector(".checkbox");
let postButton = document.querySelector(".post-button");
let updateButton = document.querySelector(".update-button");

let readToDoPost;
let readDonePost;
function readPosts()
{
    fetch("https://inspectbackend.herokuapp.com/todo")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            tasksToDo.innerHTML = "";
            tasksDone.innerHTML = "";
            data.map(object => {
                if(object.status === "To Do" || object.status === "Doing")
                {
                    readToDoPost += `
                    <div class = "my-to-do-post">
                        <p>${object.work}</p>
                        <span class="options">
                            <i onClick="editPosts(this, ${object._id}, ${object.work}, ${object.status})" class="fas fa-edit"></i>
                            <i onClick="deletePosts(this, ${object._id})" class="fas fa-trash-alt"></i>
                            <input onClick = "toDoToDone(this)" type="checkbox" name="checkbox" class = "checkbox" />
                        </span>
                    </div>
                    `;
                }
                else if(object.status === "Done")
                {
                    readDonePost += `
                    <div class = "my-done-post">
                        <p>${object.work}</p>
                        <span class="options">
                            <i onClick="editPosts(this, ${object._id}, ${object.work}, ${object.status})" class="fas fa-edit"></i>
                            <i onClick="deletePosts(this, ${object._id})" class="fas fa-trash-alt"></i>
                        </span>
                    </div>
                    `;
                }
            })
            tasksToDo.innerHTML = readToDoPost;
            tasksDone.innerHTML = readDonePost;
        })
        .catch(err => console.error(err));
}
readPosts();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Button Clicked!");

    formValidation();    //WHENEVER WE SUBMIT OUR POST, WE WOULD INVOKE A FUNCTION THAT WOULD POST THE CONTENTS OF THAT PARTICULAR POST TO THE URL MENTIONED AND input.value = data.title; let id = 200 (GLOBAL VARIABLE) THEN IN THE FUNCTION WE WOULD INCREMENT THE id BY 1 EVERYTIME.
})

let id = 0;
let data;
function formValidation()
{
    if(input.value === "")
    {
        msg.innerHTML = "Posts cannot be blank!";
    }
    else
    {
        console.log("Submit Success");
        msg.innerHTML = "";
        id = id + 1;
        data = {
            _id: id,
            work: input.value,
            status: "To Do",
            date: "2022-08-14T20:08:29.168Z",
            priority: false,
            __v: 0
        };
        createPosts();
    }
}

function createPosts()
{
    fetch("https://inspectbackend.herokuapp.com/todo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("POST Request Successful!: ", data);
            readPosts();
            input.value = "";
        })
        .catch((error) => {
            console.error("Error:", error);
        })
}

function deletePosts(e, id)
{
    fetch("https://inspectbackend.herokuapp.com/todo" + "/" + id, {
        method: "DELETE"
    })
        .then((response) => response.json())
        .then((result) => {
            // e.parentElement.parentElement.remove();
            console.log(id);
            console.log("Deletion Successful");
            console.log(result);
            readPosts();
        })
        .catch((error) => {
            console.error("Error:", error);
        })
}

function editPosts(e, id, inputValue, status)
{
    input.value = inputValue;
    e.parentElement.parentElement.remove();
    postButton.style.display = "none";
    updateButton.style.display = "block";
    updateButton.addEventListener("click", updatePost());
    // let data = 
    updatePost()
    {
        console.log("Button Clicked!");
        if(input.value === "")
        {
            msg.innerHTML = "Posts cannot be blank!";
        }
        else
        {
                const data = {
                _id: id, 
                work: input.value, 
                status: status, 
                date:"2022-10-30T01:51:09.339Z", 
                priority:false, 
                __v:0
            }
            fetch("https://inspectbackend.herokuapp.com/todo" + "/" + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("PUT Request Successful!: ", data);
                    readPosts();
                })
                .catch((error) => {
                    console.error("Error:", error);
                })
        }
    }
}

function toDoToDone(e)
{
    if(e.checked == true)
    {
        console.log("Checkbox checked");
    }
    else
    {
        console.log("Checkbox unchecked");
    }
}
