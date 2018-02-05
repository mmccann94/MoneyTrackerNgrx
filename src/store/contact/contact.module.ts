import { StoreModule } from "@ngrx/store/";
import { contactReducer } from "./contact.reducer";
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        StoreModule.forFeature('contact', contactReducer)
    ], declarations: []
})
export class ContactModule {}