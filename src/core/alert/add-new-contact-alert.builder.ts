import { AlertBuilder } from "./alert.builder";
import { AlertController, Alert } from "ionic-angular";

export class AddNewContactAlertBuilder implements AlertBuilder {

    constructor(private alertCtrl: AlertController) {}

    build(callback: (data) => void): Alert {
        return this.alertCtrl.create({
            title: 'Create New',
            inputs: [
              {
                name: 'name',
                placeholder: 'Name'
              },
            ],
            buttons: [
              {
                text: 'Cancel'
              },
              {
                text: 'Save',
                handler: data => {
                  callback(data);
                }
              }
            ]
          });
    }

}