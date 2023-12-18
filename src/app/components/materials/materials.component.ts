import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from "../../service/api.service";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-materials',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './materials.component.html',
  styleUrl: './materials.component.css'
})
export class MaterialsComponent {
  constructor(private authService:ApiService) {}

  //  varibles
  public dataMaterials:any


  getAllMaterial(){
    this.authService.services('GET','materials')
    .subscribe(
      res => this.dataMaterials = res,
      err => console.log(err)
    )
  }

  actualizar(item:Object){

  }

  deleteElement(item:any){
    const modal       = document.getElementById("eliminarModal");
    const backdrop    = document.getElementById("backdropModal");
    const eliminacion =  <HTMLInputElement>document.getElementById('idEliminacion');
    modal?.classList.toggle("hidden")
    backdrop?.classList.toggle("hidden");

    if(eliminacion) {eliminacion.value = item;}
  }

  cancelConfirm(){
    const modal = document.getElementById("eliminarModal");
    const backdrop = document.getElementById("backdropModal");
    modal?.classList.toggle("hidden");
    backdrop?.classList.toggle("hidden");
  }

  acceptDelete(){
    const eliminacion =  <HTMLInputElement>document.getElementById('idEliminacion');
    this.authService.services('DELETE',`material`,eliminacion.value)
    .subscribe(
      res => console.log(res)
      ,
      err => console.log(err)
    )

  }


  ngOnInit(): void {
    if(this.dataMaterials != null || this.dataMaterials != ''){
      this.getAllMaterial();
    }else{console.log(this.dataMaterials);
    }

  }
}
