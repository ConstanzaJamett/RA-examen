import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/services/usuario';
import { AvatarService } from 'src/app/services/avatar.service';
import { ModalController, AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-ver-clase',
  templateUrl: './ver-clase.page.html',
  styleUrls: ['./ver-clase.page.scss'],
})
export class VerClasePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async uploadAvatar(){
    const avatar = await Camera.getPhoto({
      quality:90,
      allowEditing:false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera //Photos o Prompt
    });
    }

}
