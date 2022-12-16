import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera } from '@capacitor/camera';
import { CameraResultType, CameraSource } from '@capacitor/camera/dist/esm/definitions';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AvatarService } from 'src/app/services/avatar.service';
import { Usuario } from 'src/app/services/usuario';
import { Auth } from '@angular/fire/auth';
// import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registrar-clase',
  templateUrl: './registrar-clase.page.html',
  styleUrls: ['./registrar-clase.page.scss'],
})
export class RegistrarClasePage implements OnInit {

  profile:any=null;
  usuario: Usuario = null;
  @Input() id :string;
  modalCtrl: any;
  rol:string = '';

  constructor(private authService:AuthService,
    private avatarService:AvatarService,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private toastCtrl:ToastController,
    // private usuarioService:UsuarioService,
    private auth:Auth,
    private router:Router) {
        this.loadProfile();

    }

    ngOnInit() {
      this.getRol();
      this.getUsuario();
      console.log(this.getUsuario());

    }

    loadProfile(){
      this.avatarService.getUserProfile().subscribe(respuesta => {
        this.profile = respuesta
      });
    }

    getRol(){
      this.avatarService.getUsuarioById().subscribe(respuesta => {
          this.rol = respuesta.perfil;
      });
    }

    getUsuario(){
      this.avatarService.getUsuarioById().subscribe(respuesta => {
        this.usuario = respuesta;
      });
  }
}
