import { Component, OnInit } from '@angular/core';
import { TestAppService } from './test-app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from "sweetalert2";


@Component({
  selector: 'app-test-app-view',
  templateUrl: './test-app-view.component.html',
  styleUrls: ['./test-app-view.component.scss']
})
export class TestAppViewComponent implements OnInit {
  personal: any;
  firstFormGroup: FormGroup;
  model: any;
  p_id;
  p_name;
  p_quantity;
  p_price;
  p_des;
  constructor(private _serv: TestAppService, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.viewuser();
    this.From_group();
  }
  From_group() {
    this.firstFormGroup = this._formBuilder.group({
      p_name: ['', Validators.compose([Validators.required])],
      p_quantity: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      p_price: ['', Validators.compose([Validators.required])],
      p_des: ['', Validators.compose([Validators.required])],

    });
  }
  viewuser() {

    this._serv.get_user().subscribe(
      data => {
        this.personal = data.result;
        console.log(this.personal);

      });
  }
 
  save() {
    this._serv.addproduct(this.p_name, this.p_quantity, this.p_price, this.p_des).subscribe(data=>{
      if (data.msg == "Successfully Saved") {
        this.viewuser();
        Swal.fire('Your Offer has been Updated', '', 'success');
      }
      else {
        Swal.fire('ops SomeThing worng', '', 'error');
      }
    });

    this.viewuser();
    Swal.fire('Your Offer has been Save', '', 'success');
  }
  update() {
    this._serv.updateproducts(this.p_id, this.p_name, this.p_quantity, this.p_price, this.p_des).subscribe(data => {
      if (data.msg == "Successfully Updated") {
        this.viewuser();
        Swal.fire('Your Offer has been Updated', '', 'success');
      }
      else {
        Swal.fire('ops SomeThing worng', '', 'error');
      }
    });
  }

  DeleteOffer(id) {

    this._serv.Deleteproduct(id).subscribe(data => {
      if (data.msg == "Successfully Deleted") {
        Swal.fire('Your Products has been Deleted.', '', 'success');

        this.viewuser();
      }
      else {
        Swal.fire('Ops Something worng.', '', 'error');
      }
    });
  }
  // getvalues(furit.id,furit.product_name,furit.product_quantity,furit.product_price,furit.product_description){
  getvalues(val1, val2, val3, val4, val5) {
    this.p_id = val1;
    this.p_name = val2;
    this.p_quantity = val3;
    this.p_price = val4;
    this.p_des = val5;


  }

}
