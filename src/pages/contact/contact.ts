import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Contact } from '../../model/contact';
import * as fromContacts from '../../store/contacts/reducers';
import * as contactActions from '../../store/contacts/actions/contact.actions';
import { Transaction } from '../../model/transaction';
import { Subscription } from 'rxjs/Subscription';
import { ModalService } from '../../core/modal/modal.service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  contact: Contact;
  selectedContactListener: Subscription;
  

  constructor(public navCtrl: NavController, private store: Store<fromContacts.ContactsState>, private modalService: ModalService) {
    this.createSelectedContactListener();
  }

  createSelectedContactListener(): void {
    this.selectedContactListener = this.store.select(fromContacts.getSelectedContact).subscribe(contact => {
      this.contact = contact;
    });
  }

  getCreditContactButtonText(): string {
    if(this.contact.owesMoney()) {
      return 'Lend';
    } else if (this.contact.owedMoney()) {
      return 'Pay';
    } else {
      return 'Lend';
    }
  }

  getDebitContactButtonText(): string {
    if(this.contact.owesMoney()) {
      return 'Receive';
    } else if (this.contact.owedMoney()) {
      return 'Borrow';
    } else {
      return 'Borrow';
    }
  }

  newTransactionButtonClicked(transactionType: string) {
    console.log('new transaction', transactionType)
    this.modalService.activateNewTransactionModal(this.contact);
  }

  ionViewWillLeave() {
    this.selectedContactListener.unsubscribe();
  }

}
