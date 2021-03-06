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
import { AlertService } from '../../core/alert/alert.service';
import { AlertType } from '../../core/alert/alert-data';
import { ContactBuilder } from '../../core/contact.builder';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public contacts$: Observable<Contact[]>;
  public selectedContact$: Observable<Contact>;

  constructor(public navCtrl: NavController, private store: Store<fromContacts.ContactsState>, private alertService: AlertService) {
    this.getStoreData();
    this.subscribeToSelectedContact();
  }

  private addNew() {
    this.alertService.activate(AlertType.ADD_NEW_CONTACT, this.addNewContactCallback);
  }

  private addNewContactCallback = (data: any) => {
    if(data) {
      let contact: Contact = new ContactBuilder()
      .setName(data.name)
      .build();
      this.store.dispatch(new contactActions.Create(contact));
      this.store.dispatch(new contactActions.Load(contact.id));
    }
  };

  private cardSelected(contact: Contact) {
    this.store.dispatch(new contactActions.Load(contact.id));
  }

  private getStoreData(): any {
    this.contacts$ = this.store.select(fromContacts.getAllContacts);
    this.selectedContact$ = this.store.select(fromContacts.getSelectedContact);
  }

  private subscribeToSelectedContact(): any {
    this.selectedContact$.subscribe(contact => {
      if(contact) {
        this.navCtrl.push(ContactPage);
      }
    });
  }

}
