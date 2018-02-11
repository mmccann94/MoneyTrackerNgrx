import { AlertType } from "./alert-data";
import { AlertBuilder } from "./alert.builder";
import { AddNewContactAlertBuilder } from "./add-new-contact-alert.builder";
import { AlertController } from "ionic-angular";
import { Injectable } from "@angular/core";

@Injectable()
export class AlertBuilderFactory  {

    constructor(private alertCtrl: AlertController){}

    getBuilder(alertType: AlertType): AlertBuilder {
        switch(alertType) {
            case AlertType.ADD_NEW_CONTACT:
                return new AddNewContactAlertBuilder(this.alertCtrl);
        }
    }

}