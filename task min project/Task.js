class Task {
    constructor(dict) {
        this.doneBoolean = false;
        var dictDate = dict.duedate//parsed string
        // console.log("due date is ",dictDate);
        this.id=-1;
        this.text = dict.text;
        this.priority = dict.priority;
        this.duedate = new Date(dictDate);
        this.tag = dict.tag;
    }
    getFormattedDueDate() {
        var daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        var monthStr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug","Sept", "Oct", "Nov", "Dec"];
        return daysOfWeek[this.duedate.getDay()] +" "+ monthStr[parseInt(this.duedate.getMonth())] + " "
        + this.duedate.getDate() + " " + this.duedate.getFullYear();
    }
    toggleDone(){
        this.doneBoolean = !this.doneBoolean;  
        if (this.doneBoolean) {
            this.taskdom.addClass('done');
        } else {
            this.taskdom.removeClass('done');    
        }
    }
    addToDOM(element) {

        this.taskdom = $("<li></li>",{'class': 'taskItem'});
        this.done = $("<button></button>",{'html':'&#x2714','type':'button','class': 'doneButton','data-taskId':this.getId()});
        this.delete = $("<button></button>",{'html':'&#x2716','type':'button','class': 'deleteButton','data-taskId':this.getId()});
        //set color
        var color = tagColors[this.tag];
        $(this.taskdom).css("background-color",color);
        $(this.taskdom).attr('data-taskId',this.id);
        //the id is set by TaskList

        $(this.taskdom).append(this.getFormattedDueDate()).append(" ").append(this.priority).append(" ");
        $(this.taskdom).append(this.tag).append("<br>").append(this.text).append("<br>");
        $(this.taskdom).append(this.done).append(this.delete);

        $(element).append(this.taskdom);
        return this;
    }
    setId(num) {
        this.id=num;
    }
    getId(){
        return this.id;
    }
    deleteDOM() {
        this.taskdom.remove();
    }
}

