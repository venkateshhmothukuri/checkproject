import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";

import { TodolistComponent } from "./todolist/todolist.component";

@NgModule({


declarations: [TodolistComponent, AppComponent],

imports: [BrowserModule, FormsModule],
bootstrap: [AppComponent],

})

export class AppModule {}