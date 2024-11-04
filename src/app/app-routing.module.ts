import { Component, NgModule, OnInit } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { AppComponent } from "./app.component";
import { ChatComponent } from "./components/chat/chat.component";


const routes: Routes = [
    { path: 'sign-in', component: SignInComponent },
    { path: '', component: ChatComponent, pathMatch : 'full'},
    { path: 'sign-up', component: SignUpComponent },
     
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}