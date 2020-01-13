function processDescriptions(descriptions) {
    descriptions.forEach(function(elt) {
        var nTask = new Task(elt);
        nTask.addToDOM(".mainList");
        console.log(nTask);
    })
}

function addTaskFromForm() {
    var result = { };
    $.each($(".addTaskForm").serializeArray(), function() {
        result[this.name] = this.value;
    });
    theTaskList.addTask(result);
    return result;
}

$("#addTaskFormButton").on('click',function () {
    //preventDefault();
    addTaskFromForm();
    closeAllDropDowns();
    $(".addTaskForm")[0].reset();
})

$("#cancelTaskFormButton").on('click',function () {
    //preventDefault();
    closeAllDropDowns();
})

$("body").on("click", "[class=deleteButton]", function (event) {
    // //console.log(event.target);
    var fTask = theTaskList.deleteTask(parseInt($(event.target).attr('data-taskId')));
    fTask.deleteDOM();
});

$("body").on("click", "[class=doneButton]", function (event) {
    //click on button, check selected against correct
    // console.log(event.target);
    // console.log("hello");
    // console.log($(event.target).closest("form").attr("data-answer"));
    // console.log($(event.target).attr('data-taskId'));
    var fTask = theTaskList.findTask(parseInt($(event.target).attr('data-taskId')));
    fTask.toggleDone();
});

$("#sortIdFormButton").on('click',function () {theTaskList.sortById();});

$("#sortDateFormButton").on('click',function () {theTaskList.sortByDueDate();});

$("#sortPriorityFormButton").on('click',function () {theTaskList.sortByPriority();});

$("#sortTagFormButton").on('click',function () {theTaskList.sortByTag();});

$("#localLoad").on('click',function () {theTaskList.load();});

$("#localSave").on('click',function () {theTaskList.save();});