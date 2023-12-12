import { Component, OnDestroy, OnInit } from '@angular/core';
import { components } from '../../common/components';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from "../../service/api.service";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, CommonModule,FormsModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  components = components.filter((component) => !!component.card);
  public dataMaterials:any
  public selectedMaterial:any;
  gramos:any
  constructor(private authService:ApiService) {
    console.log(components)
  }

  getAllMaterial(){
    this.authService.services('GET','materials')
    .subscribe(
      res => this.dataMaterials = res,
      err => console.log(err)
    )
  }

  getPrice($event:any){
    this.selectedMaterial = parseInt($event.target.options[$event.target.selectedIndex].getAttribute('precio'));
  }

  calcular(){
    // Monto_Préstamo = (gramos * PRECIO_GRAMO) * 80%
    const Monto_Prestamo =  (this.gramos * this.selectedMaterial) * (80/100)
    console.log(Monto_Prestamo);
  }

  ngOnInit(): void {
    if(this.dataMaterials != null || this.dataMaterials != ''){
      this.getAllMaterial();
    }else{console.log(this.dataMaterials);
    }

  }
}

