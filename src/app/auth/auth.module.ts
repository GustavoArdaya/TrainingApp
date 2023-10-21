import { NgModule } from "@angular/core";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";

@NgModule({
    declarations: [
        SignupComponent,
        LoginComponent],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        FlexLayoutModule,        
        AngularFireAuthModule,
    ],
    exports: []
})
export class AuthModule {}