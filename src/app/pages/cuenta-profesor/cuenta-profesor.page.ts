import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/services/usuario';
import { AvatarService } from 'src/app/services/avatar.service';
import { ModalController, AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-cuenta-profesor',
  templateUrl: './cuenta-profesor.page.html',
  styleUrls: ['./cuenta-profesor.page.scss'],
})
export class CuentaProfesorPage implements OnInit {

  @Input() id :string;
  usuario: Usuario = {
    uid :'',
    run: '' ,
    nombre: '',
    apellido: '',
    email: this.avatarService.getEmail(),
    anios: 0,
    imagen:'',
    asignatura:'',
    perfil: 'profesor'
  };

  constructor(private avatarService:AvatarService,private modalCtrl:ModalController, private alertCtrl:AlertController,
    private toastCtrl:ToastController, private loadingCtrl:LoadingController,private router:Router) { 

    }

  ngOnInit() {
  }

  async addProfesor(){
    this.avatarService.addProfesor(this.usuario);
    this.modalCtrl.dismiss();
    const toast = await this.toastCtrl.create({
      message:'Usuario Profesor Creado',
      duration:1000,
    });
    toast.present();
    this.router.navigateByUrl('/inicio',{replaceUrl:true});
  }

  async uploadAvatar(){
    const avatar = await Camera.getPhoto({
      quality:90,
      allowEditing:false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera //Photos o Prompt
    });
      const result = await Promise.resolve(this.avatarService.Getavatar(avatar));
      this.usuario.imagen = result;
      console.log(result);
    }

}
