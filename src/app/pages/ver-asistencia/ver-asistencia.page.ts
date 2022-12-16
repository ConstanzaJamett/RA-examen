import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Asistencia } from 'src/app/services/usuario';
import { AvatarService } from 'src/app/services/avatar.service';

@Component({
  selector: 'app-ver-asistencia',
  templateUrl: './ver-asistencia.page.html',
  styleUrls: ['./ver-asistencia.page.scss'],
})
export class VerAsistenciaPage {

  asistencia : Asistencia[] = [];

  constructor(private usuarioService:AvatarService, private modalCtrl:ModalController, private alertCtrl:AlertController,
    private toastCtrl:ToastController) {
    this.getAsistencias();
  }

  getAsistencias(){
    this.usuarioService.getAsistencias().subscribe(respuesta => {
      console.log(respuesta);
      this.asistencia = respuesta;
    });
  }

  async toastPresent(message:string){
    const toast = await this.toastCtrl.create({
      message:message,
      duration:1000
    });
    toast.present();
  }
}



