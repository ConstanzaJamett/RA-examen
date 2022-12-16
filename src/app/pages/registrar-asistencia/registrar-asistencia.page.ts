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
  selector: 'app-registrar-asistencia',
  templateUrl: './registrar-asistencia.page.html',
  styleUrls: ['./registrar-asistencia.page.scss'],
})
export class RegistrarAsistenciaPage implements OnInit {

    //Se agrego el componente
    pageTitle = 'Asistencia';
    isNotHome = true;
    //Fin componente

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
      this.getRol1();
      this.getUsuario1();
      this.getRol();
      this.getUsuario();
      console.log(this.getUsuario1());

    }

    loadProfile(){
      this.avatarService.getUserProfile1().subscribe(respuesta => {
        this.profile = respuesta
      });
    }

    getRol1(){
      this.avatarService.getUsuarioById1().subscribe(respuesta => {
          this.rol = respuesta.perfil;
      });
    }

    getUsuario1(){
      this.avatarService.getUsuarioById1().subscribe(respuesta => {
        this.usuario = respuesta;
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

