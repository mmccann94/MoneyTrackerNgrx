import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlertBuilderFactory } from "./alert/alert-builder.factory";
import { AlertService } from "./alert/alert.service";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [     
    ],
    providers: [
        AlertService,
        AlertBuilderFactory
    ],
    exports: [
    ]
})
export class CoreModule {}