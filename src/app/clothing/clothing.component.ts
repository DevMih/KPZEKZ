import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent {
  constructor(private service:SharedService) {}

  ClothingList:any=[];
  ModalTitle!: string;
  ActivateAddEditClothingComp:boolean = false;
  clothing:any;

  ngOnInit(): void {
    this.refreshClothingList();
  }

  refreshClothingList(){
    this.service.getClothingList().subscribe(data=>{
      this.ClothingList=data;
    })
  }
  
  addClothing(){
    this.clothing={
      id:0,
      name:"",
      brand:"",
      productionDate: "",
      size:0,
      model: "",
      quantity: 0,
      price: 0
    }
    this.ModalTitle="Add Clothing";
    this.ActivateAddEditClothingComp = true;
  }

  closeClick(){
    this.ActivateAddEditClothingComp=false;
    this.refreshClothingList();
  }

  editClothing(item:any){
    this.clothing=item;
    this.ModalTitle="Edit Clothing";
    this.ActivateAddEditClothingComp=true;
  }

  deleteClothing(item:any){
    this.service.deleteClothing(item.id).subscribe(res=>{
      this.refreshClothingList();
    });
  }

  sellClothing(item:any){
    var tempClothing;
    this.service.getClothing(item.id).subscribe((data: any) => {
      tempClothing = data;
      tempClothing.quantity -= 1;

      this.service.putClothing(item.id, tempClothing).subscribe(res=>{
        this.refreshClothingList();
      });
    });
  }

  refillClothing(item:any){
    var tempClothing;
    this.service.getClothing(item.id).subscribe((data: any) => {
      tempClothing = data;
      tempClothing.quantity += 1;
      
      this.service.putClothing(item.id, tempClothing).subscribe(res=>{
        this.refreshClothingList();
      });
    });
  }
}
