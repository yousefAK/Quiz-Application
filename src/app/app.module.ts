import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatRadioModule,
    MatExpansionModule,
    MatDialogModule,
} from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {ApiServices} from './api.services';
import {AuthServices} from './auth.services';
import {AuthInterceptor} from './auth.interceptor';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {QuestionCompComponent} from './question-comp/question-comp.component';
import {QuestionsComponent} from './questions/questions.component';
import {HomeComponent} from './Home.component';
import {NavComponent} from './nav.component';
import {QuizComponent} from './quiz/quiz.component';
import {QuizcompComponent} from './quiz/quizcomp.component';
import {RegisterComponent} from './register.component';
import {LoginComponent} from './login.component';
import {PlayComponent} from './play.component';
import {PlayquizComponent} from './playquiz.component';
import {FinishedComponent} from './finished.component';


const routes = [
    {path: '', component: HomeComponent},
    {path: 'question', component: QuestionCompComponent},
    {path: 'question/:quizID', component: QuestionCompComponent},
    {path: 'questions', component: QuestionsComponent},
    {path: 'quiz', component: QuizComponent},
    {path: 'quizzes', component: QuizcompComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'play', component: PlayComponent},
    {path: 'playquiz/:quizID', component: PlayquizComponent},
];


@NgModule({
    declarations: [
        AppComponent,
        QuestionCompComponent,
        QuestionsComponent,
        HomeComponent,
        NavComponent,
        QuizComponent,
        QuizcompComponent,
        RegisterComponent,
        LoginComponent,
        PlayComponent,
        PlayquizComponent,
        FinishedComponent
    ],
    imports: [
        BrowserModule,
        FormsModule, ReactiveFormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(routes),

        MatButtonModule, MatInputModule, MatCardModule, MatExpansionModule,
        MatListModule, MatToolbarModule, MatRadioModule, MatDialogModule,
    ],
    providers: [ApiServices, AuthServices, {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }],
    bootstrap: [
        AppComponent
    ],
    entryComponents: [
        FinishedComponent,
    ],
})
export class AppModule {
}
