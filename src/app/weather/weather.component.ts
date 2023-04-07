import { Component, OnInit } from '@angular/core';
import { pipe,catchError } from 'rxjs';
import { WeatherService } from 'src/services/weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{
  
  // weatherService!: WeatherService;
   datas:any = [];
   message:string="";

   constructor(private weatherService: WeatherService){}
  
  ngOnInit(): void {
 
    
  }

  onSubmit(city:string){
    this.datas = this.weatherService.getWeather(city)
    .subscribe((data) =>{
        this.datas = data
        console.log(this.datas);
    },(er) => {
      this.datas = er.error;
      
  });
  }

 



}
