import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ReactiveFormsComponent} from "./reactive-forms/reactive-forms.component";
import {NgrxRxjsComponent} from "./ngrx-rxjs/ngrx-rxjs.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'ngrx-rxjs',
    pathMatch: 'full',
    component: NgrxRxjsComponent
  },
  {
    path: 'reactive-forms',
    pathMatch: 'full',
    component: ReactiveFormsComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
