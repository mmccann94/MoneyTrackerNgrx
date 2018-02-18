import { Alert } from "ionic-angular";

export interface AlertBuilder {

    build(callback: (data) => void): Alert;

}