import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { reducers } from './reducers';
import { StoreModule } from "@ngrx/store";

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('contacts', reducers)
    ],
    providers: [
        
    ],
})
export class ContactsModule {}