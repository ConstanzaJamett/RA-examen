import { HttpClient } from '@angular/common/http';
import { Component, OnInit,} from '@angular/core';
import { environment } from 'src/environments/environment';
import { Geolocation } from '@capacitor/geolocation'

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  coordenadas :any
  latitud :any
  longitud :any
  weatherTemp: any
  ubicacion = ""


  constructor(
    public httpClient : HttpClient
  ) {
    this.fetchLocation();
  }

  async fetchLocation(){
    const location = await Geolocation.getCurrentPosition();
      this.coordenadas = location['coords'];
      this.latitud = this.coordenadas['latitude'];
      this.longitud = this.coordenadas['longitude'];
      this.cargarDatos();
  }

  cargarDatos(){
    this.httpClient.get(`${API_URL}/weather?lat=${this.latitud}&lon=${this.longitud}&appid=${API_KEY}&units=metric`)
    .subscribe(results => {
       console.log(results)
       this.weatherTemp = results['main']
       this.ubicacion = results["name"]
       console.log('aqui es ubicacion',this.ubicacion)
       console.log('Pollito',this.weatherTemp)
    })
  }

  ngOnInit() {
  }

}
