import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlertBuilderFactory } from "./alert/alert-builder.factory";
import { AlertService } from "./alert/alert.service";
import { ModalService } from "./modal/modal.service";
import { NewTransactionModal } from "./modal/new-transaction/new-transaction.modal";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [     
    ],
    providers: [
        AlertService,
        AlertBuilderFactory,
        ModalService
    ],
    exports: [
    ],
    entryComponents: [
        NewTransactionModal
    ]
})
export class CoreModule {}