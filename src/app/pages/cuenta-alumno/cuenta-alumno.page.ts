import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/services/usuario';
import { AvatarService } from 'src/app/services/avatar.service';
import { ModalController, AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-cuenta-alumno',
  templateUrl: './cuenta-alumno.page.html',
  styleUrls: ['./cuenta-alumno.page.scss'],
})
export class CuentaAlumnoPage implements OnInit {

  //Se agrego el componente
  pageTitle = 'Crear cuenta de alumno';
  isNotHome = true;
  //Fin componente

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
    perfil: 'alumno'
  };

  constructor(private avatarService:AvatarService,private modalCtrl:ModalController, private alertCtrl:AlertController,
    private toastCtrl:ToastController, private loadingCtrl:LoadingController,private router:Router) { 

    }

  ngOnInit() {
  }

  async addAlumno(){
    this.avatarService.addAlumno(this.usuario);
    this.modalCtrl.dismiss();
    const toast = await this.toastCtrl.create({
      message:'Usuario Alumno Creado',
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
