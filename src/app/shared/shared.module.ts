import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

const SharedModules = [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
]

@NgModule({
    imports: [SharedModules],
    exports: [SharedModules]
})
export class SharedModule {

}