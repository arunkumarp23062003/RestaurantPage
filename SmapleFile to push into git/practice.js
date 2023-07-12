const taskContainer = document.querySelector('.task__container');
const globalArray = [];
const saveChanges= () => {
    const taskData ={
        imageUrl : document.getElementById("imageurl").value,
        taskTitle : document.getElementById("tasktitle").value,
        taskDescription : document.getElementById("taskdescription").value
    };
    taskContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));
    globalArray.push(taskData);
    localStorage.setItem("tasky",JSON.stringify({"cards":globalArray}));
};
const generateNewCard = (taskData) =>`
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
        <div class="card">
            <div class="inner">
                <img class="card-img-top" src="${taskData.imageUrl}" alt="Card image cap">
            </div>
            <div class="card-body">
                <h5 class="card-title">${taskData.taskTitle}</h5>
                <p class="card-text">${taskData.taskDescription}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
    `;
const getCardItems = () => {
    const items = localStorage.getItem("tasky");
    const {cards} = JSON.parse(items);
    cards.map(cardObj => {
        taskContainer.insertAdjacentHTML("beforeend",generateNewCard(cardObj))
    });   

    /*
    const cardData = localStorage.getItem("tasky");
    //convert it into obj of obj format
    const {cards} = JSON.parse(cardData);
    // loop every value and print the result
    cards.map (cardObject => {
        taskContainer.insertAdjacentHTML("beforeend",generateNewCard(cardObject));
    }); */
};