import { AlertBuilder } from "./alert.builder";
import { AlertController } from "ionic-angular";

export class AddNewContactAlertBuilder implements AlertBuilder {

    constructor(private alertCtrl: AlertController) {}

    build() {
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
                text: 'Cancel',
                handler: data => {
                  console.log('Cancel clicked');
                }
              },
              {
                text: 'Save',
                handler: data => {
                  console.log('Saved clicked');
                }
              }
            ]
          });
    }

}