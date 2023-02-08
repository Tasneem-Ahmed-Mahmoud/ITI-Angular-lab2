import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl ,FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

@Output() task:EventEmitter<string>=new EventEmitter<string>();
taskForm :FormGroup= new FormGroup({taskName:new FormControl(null)})

addTask(taskForm:FormGroup){
  this.task.emit(taskForm.value.taskName);
}
}
