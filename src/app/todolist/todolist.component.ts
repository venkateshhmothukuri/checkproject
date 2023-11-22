import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {

  tasks: any[] | undefined;

  newTask: string = '';
  
addTask(){


if (this.newTask.trim()!== ''){

  const task = {

    id: this.tasks.length + 1,
    title: this.newTask,
    completed: false
 
    };
    this.tasks?.push(task);
    this.newTask = '';

}


}

  deleteTask(taskId: number){

    this.tasks = this.tasks?.filter(task => task.id !== taskId);

  }

get filteredTasks(): any[]{

  if (this.filter === 'completed') {

    filteredTasks = filteredTasks.filter(task => task.completed);

    

    // return this.tasks?.filter(task => task.completed);
  } else if (this.fiter === 'active') {

    // return this.tasks.filter(task => !task.complted);

    filteredTasks = filteredTasks.filter(task => !task.completed);

  } 


if(this.searchkeyword.trim()!==''){


  filteredTasks = filteredTasks.filter(task =>
    
    task.title.toLowerCase().include(this.searchKeyword.toLowerCase())
    );
}

return filteredTasks;


}

get totalTasksCount(): number {

  return this.tasks?.length;
}



get completedTasksCount(): number {

retrun this.tasks?.filter(task => task.complted).length;

}



}
