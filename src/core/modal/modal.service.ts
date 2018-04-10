import { Injectable } from "@angular/core";
import { ModalController } from "ionic-angular";
import { NewTransactionModal } from "./new-transaction/new-transaction.modal";
import { Contact } from "../../model/contact";

@Injectable()
export class ModalService {

    constructor(private modalCtrl: ModalController) { }

    activateNewTransactionModal(contact: Contact) {
        this.modalCtrl.create(NewTransactionModal, {contact: contact}).present();
    }
    
}