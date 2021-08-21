import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TalkingTomComponent } from './talking-tom/talking-tom.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'conversation', component: TalkingTomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
