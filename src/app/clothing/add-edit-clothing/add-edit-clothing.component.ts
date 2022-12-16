import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-clothing',
  templateUrl: './add-edit-clothing.component.html',
  styleUrls: ['./add-edit-clothing.component.css']
})
export class AddEditClothingComponent {
  constructor(private service: SharedService) { }

  @Input() clothing: any;
  id: any;
  name!: string;
  brand!: string;
  productionDate!: string;
  size: any;
  model!: string;
  quantity: any;
  price: any;

  ngOnInit(): void {
    this.id = this.clothing.id;
    this.name = this.clothing.name;
    this.brand = this.clothing.brand;
    this.productionDate = this.clothing.productionDate.split("T")[0];
    this.size = parseInt(this.clothing.size);
    this.model = this.clothing.model;
    this.quantity = parseInt(this.clothing.quantity);
    this.price = parseInt(this.clothing.price);
  }

  addClothing() {
    var val = {
      name: this.name,
      brand: this.brand,
      productionDate: this.productionDate,
      size: parseInt(this.size),
      model: this.model,
      quantity: parseInt(this.quantity),
      price: parseInt(this.price)
    }

    if(val.name == '' || val.brand == '' || val.model == '')
    {
      return;
    }

    this.service.addClothing(val).subscribe(res => {
      alert("Added!");
    });
  }

  updateClothing() {
    var val = {
      id: this.id,
      name: this.name,
      brand: this.brand,
      productionDate: this.productionDate,
      size: parseInt(this.size),
      model: this.model,
      quantity: parseInt(this.quantity),
      price: parseInt(this.price)
    }

    if(val.name == '' || val.brand == '' || val.model == '')
    {
      return;
    }
    
    this.service.putClothing(val.id, val).subscribe(res => {
      alert("Updated!");
    });
  }
}
