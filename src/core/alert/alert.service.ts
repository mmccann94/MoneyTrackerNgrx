import { AlertController } from "ionic-angular";
import { Injectable } from "@angular/core";
import { AlertType } from "./alert-data";
import { AlertBuilderFactory } from "../alert/alert-builder.factory";

@Injectable()
export class AlertService {

    constructor(private alertCtrl: AlertController, private alertBuilderFactory: AlertBuilderFactory) {}

    activate(alertType: AlertType) {
        let alert = this.alertBuilderFactory.getBuilder(alertType).build();
        alert.present();
    }

}