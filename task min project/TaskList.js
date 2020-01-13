class TaskList {
    constructor(storageKey) {
        this.array = [];
        this.storageKey = storageKey;
    }
    pushTask(task) {
        task.setId(this.array.length);
        this.array.push(task); 
    }
    addTask(description){
        var nTask = new Task (description);
        this.pushTask(nTask);
        nTask.addToDOM(".mainList");
    }
    addTasks(descriptions){
        descriptions.forEach(function(elt){this.addTask(elt);}.bind(this))
    }
    findTask(id) {
        var taskId = this.array.find(element => element && (element.getId()==id));
        console.log(taskId);
        if (taskId!=-1) {
            return taskId;
        }
    }
    deleteTask(id) {
        var taskIndex = this.array.findIndex(element => element && (element.getId()==id));
        var cTask = this.array[taskIndex];
        if (taskIndex==-1) {
            return taskIndex;
        } else{
            delete this.array[taskIndex];
            return cTask;
        }
    }
    save(){
        var newDict = []
        this.array.forEach(function(elt){
            var dictObj = {};
            var vtext = elt.text;
            var vpriority = elt.priority;
            var vduedate = elt.getFormattedDueDate();
            var vtag = elt.tag;
            dictObj['text'] = vtext;
            dictObj['priority'] = vpriority;
            dictObj['duedate'] = vduedate;
            dictObj['tag'] = vtag;
            newDict.push(dictObj);
        }.bind(this))
        //console.log(JSON.stringify(newDict));
        localStorage.setItem(this.storageKey,JSON.stringify(newDict));
    }
    load() {
        this.array = [];
        $(".mainList").empty();
        var jsonDict = JSON.parse(localStorage.getItem(this.storageKey));
        jsonDict.forEach(function(elt){
            if (elt) { //skip over things that might b deleted
                this.addTask(elt);}}.bind(this))
        // console.log(this.array);
    }
    sortByTag() {
        this.array.sort(function(a,b){
            var x = a.tag;
            var y = b.tag;
            return  x.localeCompare(y);
        })
        $(".mainList").empty();
        this.array.forEach(function(elt){
            elt.addToDOM(".mainList");
        })
    }
    sortById() {
        this.array.sort(function(a,b){
            var x = a.id;
            var y = b.id;
            return  x-y;
        })
        $(".mainList").empty();
        this.array.forEach(function(elt){
            elt.addToDOM(".mainList");
        })
    }
    sortByDueDate(){
        this.array.sort(function(a,b){
            var x = a.duedate;
            var y = b.duedate;
            return x-y;
        })
        $(".mainList").empty();
        this.array.forEach(function(elt){
            elt.addToDOM(".mainList");
        })
    }
    sortByPriority(){
        this.array.sort(function(a,b){
            var ax = a.priority;
            var by = b.priority;
            if(ax == by) {return 0}
            else if((ax == "low") || (ax=="medium" && by=="high")) {return 1}
            else if((ax=="high")||(by=="low")) {return -1}
        })
        $(".mainList").empty();
        this.array.forEach(function(elt){
            elt.addToDOM(".mainList");
        })
    }
}

var theTaskList = new TaskList("SCOTT");
// var theTaskList2 = new TaskList("MX");
// var theTaskList3 = new TaskList("VI");