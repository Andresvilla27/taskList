import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ButtonComponent } from './componentes/button/button.component';
import { TasksComponent } from './componentes/tasks/tasks.component';
import { TasksItemComponent } from './tasks-item/tasks-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TasksItemComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
