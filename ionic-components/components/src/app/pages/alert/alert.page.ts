import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.page.html",
  styleUrls: ["./alert.page.scss"],
})
export class AlertPage implements OnInit {
  constructor(public alertController: AlertController) {}

  ngOnInit() {}

  async mostrarAlert() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Alert",
      subHeader: "Subtitle",
      message: "This is an alert message.",
      buttons: ["OK"],
    });
    await alert.present();
  }
  async mostrarAlertMultiple() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Elige",
      inputs: [
        {
          name: "Opcion1",
          type: "radio",
          label: "Opcion 1",
          value: "value1",
          checked: true,
        },
        {
          name: "Opcion2",
          type: "radio",
          label: "Opcion 2",
          value: "value2",
        },
        {
          name: "Opcion3",
          type: "radio",
          label: "Opcion 3",
          value: "value3",
        },
        {
          name: "Opcion4",
          type: "radio",
          label: "Opcion 4",
          value: "value4",
        },
        {
          name: "Opcion5",
          type: "radio",
          label: "Opcion 5",
          value: "value5",
        },
        {
          name: "Opcion6",
          type: "radio",
          label: "Opcion 6",
          value: "value6",
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          },
        },
        {
          text: "Ok",
          handler: () => {
            console.log("Confirm Ok");
          },
        },
      ],
    });

    await alert.present();
  }
}
