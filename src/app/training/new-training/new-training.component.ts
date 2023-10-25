import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subscription } from 'rxjs';
import { UIService } from 'src/app/shared/ui.service';
import { Observable } from 'rxjs-compat/observable';
import * as fromRoot from '../../app.reducer';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy{

  exercises: Exercise[];
  isLoading$: Observable<boolean>;
  private exerciseSubscription: Subscription;
  

  constructor(
    private trainingService: TrainingService,
    private db: AngularFirestore,
    private uiService: UIService,
    private store: Store<fromRoot.State>) {
    
  }

  fetchExercises() {    
    this.trainingService.fetchAvailableExercises();
  }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.exerciseSubscription = this.trainingService.exercisesChanged.subscribe(exercises => {
      this.exercises = exercises;
    });
    this.fetchExercises();
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

  ngOnDestroy(): void {
    if (this.exerciseSubscription){
      this.exerciseSubscription.unsubscribe();
    }
    
  }
}
