import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Contact } from '../../model/contact';
import { Store } from '@ngrx/store';
import * as fromContacts from '../../store/contacts/reducers';
import * as contactActions from '../../store/contacts/actions/contact.actions';
import { enableDebugTools } from '@angular/platform-browser/src/browser/tools/tools';
import { Transaction } from '../../model/transaction';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public contacts$: Observable<any>;

  constructor(public navCtrl: NavController, private store: Store<fromContacts.ContactsState>) {
    this.getStoreData();
  }

  getStoreData(): any {
    this.contacts$ = this.store.select(fromContacts.getAllContacts);
  }

  cardSelected(contact: Contact) {
    console.log('contactSelected', contact)
    this.store.dispatch(new contactActions.Load(contact.id));
    this.navCtrl.push(ContactPage);
  }

}
