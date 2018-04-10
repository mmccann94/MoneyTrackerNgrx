import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, NavParams } from "ionic-angular";
import { Contact } from "../../../model/contact";

@Component({
    templateUrl: 'new-transaction.modal.html'
  })
 export class NewTransactionModal {

    private formGroup: FormGroup;
    private contact: Contact;

    constructor(private formBuilder: FormBuilder, private navCtrl: NavController, private navParams: NavParams) {
        this.formGroup = this.formBuilder.group({
            amount: ['', Validators.required],
            notes: [''],
        });
    }

    ionViewWillLoad() {
        console.log('navParamsData', this.navParams.data)
        this. contact = this.navParams.data['contact'];
    }

    private close() {
        this.navCtrl.pop();
    }

    private submit() {
        this.close();
    }

  }