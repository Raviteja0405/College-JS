let main = document.querySelector('.main')
let button = document.querySelector("button")

function getUsers(){
    fetch('https://reqres.in/api/users?page=2')
    .then(res => res.json())
    .then(usersObj => {
        let users = usersObj.data;
        console.log(users);
        //display data as grid of cards
        for(let user of users){
            main.innerHTML+=`
                <div class='col'>
                    <div class = 'card text-center h-100 '>
                        <img src = ${user.avatar } class = 'w-100'/>
                        <div class = 'card-body'>
                            <h3>${user.id}</h3>
                            <p class = 'lead'>${user.first_name} ${user.last_name}
                            <h4 class = 'text-primary'>
                            ${user.email}</h4>
                            <button class = "btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            `
        }
        // wanted to make a button when clicked removed the card. 
        // Still in progress
        // success fully done🔥
        for(let child of main.children){
            let button = child.querySelector("button");
            // console.log(button);
            button.addEventListener("click",()=>{
                child.remove();
                // console.log(e);
            })
            // i++;
            // child.remove();
            
        }
    })
    .catch(err => console.log(err))
}

getUsers();
