import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Contact } from '../../model/contact';
import * as fromContacts from '../../store/contacts/reducers';
import * as contactActions from '../../store/contacts/actions/contact.actions';
import { Transaction } from '../../model/transaction';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  selectedContact$: Observable<Contact>;
  transactions$: Observable<Transaction[]>;
  transactionSubscription: Subscription;

  constructor(public navCtrl: NavController, private store: Store<fromContacts.ContactsState>) {
  }

  ionViewDidLoad() {
    this.selectedContact$ = this.store.select(fromContacts.getSelectedContact)
    this.transactions$ = this.store.select(fromContacts.getTransactionsForContact);
    // this.transactionSubscription = this.transactions$.subscribe(transactions => console.log('transactions', transactions));
  }

  ionViewWillLeave() {
    // this.transactionSubscription.unsubscribe();
  }

}
