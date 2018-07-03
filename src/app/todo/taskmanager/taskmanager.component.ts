import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.css']
})
export class TaskmanagerComponent implements OnInit {

  project = "Task Manager App (Bare Bone)"

  task = ""

  addCounter = 0

  taskList = [
              "go to market",
              "plan the weekend"
                ]

  constructor() { }

  ngOnInit() {
    console.log("Default task list:")
    console.log(this.taskList)
  }

  addTask = function(){
    console.log("I am in AddTask Function")
    this.taskList.push(this.task)
    console.log(this.taskList)
    if (typeof(Storage) !== "undefined") {
      // Code for localStorage/sessionStorage.
      localStorage.setItem("task_number_" + this.addCounter, this.task);
      this.addCounter =  this.addCounter + 1
      localStorage.setItem("taskCounter", this.addCounter)
    } else {
      console.log("Sorry! No Web Storage support..")
    }

    
    this.task = ""


  }

  removeTask(receivedCounter){
    console.log("remove Task with index: " + receivedCounter)
    this.taskList.splice(receivedCounter, 1)
  }

}
