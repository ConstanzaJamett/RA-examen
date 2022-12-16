import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { addDoc, collection, collectionData, doc, docData, Firestore, setDoc ,updateDoc} from '@angular/fire/firestore';
import { getDownloadURL, ref, Storage, uploadString } from '@angular/fire/storage';
import { Photo } from '@capacitor/camera';
import { base64 } from '@firebase/util';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(private auth:Auth,
    private firestore:Firestore,
    private storage:Storage) { }

    getUserProfile(){
      const user = this.auth.currentUser;
      const userDocRef = doc(this.firestore,`profesor/${user.uid}`);
      return docData(userDocRef);
    }

    getUserProfile1(){
      const user = this.auth.currentUser;
      const userDocRef = doc(this.firestore,`alumno/${user.uid}`);
      return docData(userDocRef);
    }

    async addProfesor(usuario: Usuario){
      const user = this.auth.currentUser;
      try {
          const userDocRef = doc(this.firestore,`profesor/${user.uid}`);
          await setDoc(userDocRef,{
            rut: usuario.run,
            name: usuario.nombre,
            lastname: usuario.apellido,
            email: usuario.email,
            age: usuario.anios,
            image: usuario.imagen,
            asignatura: usuario.asignatura,
            perfil: usuario.perfil
          });
        

        return true;
      } catch (error) {
        return false;
      }
    }

    async addAlumno(usuario: Usuario){
      const user = this.auth.currentUser;
      try {
          const userDocRef = doc(this.firestore,`alumno/${user.uid}`);
          await setDoc(userDocRef,{
            rut: usuario.run,
            name: usuario.nombre,
            lastname: usuario.apellido,
            email: usuario.email,
            age: usuario.anios,
            image: usuario.imagen,
            asignatura: usuario.asignatura,
            perfil: usuario.perfil
          });
        

        return true;
      } catch (error) {
        return false;
      }
    }

    getUser(){
      const user = this.auth.currentUser;
      return user.uid;
    }

    getEmail(){
      const user = this.auth.currentUser;
      return user.email;
    }

    async Getavatar(cameraFile:Photo){
      const user = this.auth.currentUser;
      const path = `uploads/${user.uid}/profile.png`;
      const storageRef = ref(this.storage,path);
        await uploadString(storageRef,cameraFile.base64String || '', 'base64');

        const imageUrl = await Promise.resolve(getDownloadURL(storageRef));
        const imagen: string =imageUrl;
        return imagen;
  }

  updateUsuario(usuario: Usuario){
    const user = this.auth.currentUser;
    const usuarioRef = doc(this.firestore, `profesor/${user.uid}`);
    return updateDoc(usuarioRef, 
      {
        rut: usuario.run,
        name: usuario.nombre,
        lastname: usuario.apellido,
        email: usuario.email,
        age: usuario.anios,
        image: usuario.imagen,
        asignatura: usuario.asignatura,
        perfil: usuario.perfil
      });
  }

  getUsuarioById(): Observable<Usuario>{
    const usuarioDocRef = doc(this.firestore, `profesor/${this.auth.currentUser.uid}`);
    return docData(usuarioDocRef) as Observable<Usuario>;
  }

  getUsuarioById1(): Observable<Usuario>{
    const usuarioDocRef = doc(this.firestore, `alumno/${this.auth.currentUser.uid}`);
    return docData(usuarioDocRef) as Observable<Usuario>;
  }

}
