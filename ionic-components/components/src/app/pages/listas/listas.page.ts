import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { UsersService } from '../../services/users.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html',
  styleUrls: ['./listas.page.scss'],
})
export class ListasPage implements OnInit {

  usuarios: Observable<any>;

  @ViewChild(IonList) ionList : IonList;

  constructor( private dataService : UsersService, private toastCtrl : ToastController) { }

  ngOnInit() {
    //this.dataService.get_users().subscribe(console.log);
    this.usuarios = this.dataService.get_users();
  }
  favorite(item : any){
    console.log("Add to favorites")
    this.ionList.closeSlidingItems();
    this.presentToast("Agregado a Favoritos");
  }
  share(item : any){
    console.log("Share Succesfull")
    this.ionList.closeSlidingItems();
    this.presentToast("Compartido con éxito");
  }
  borrar(item : any){
    console.log("Delete")
    this.ionList.closeSlidingItems();
    this.presentToast("Elemento eliminado");
  }
  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 8000,
      cssClass: "toast-transparent"
    });
    toast.present();
  }


}
