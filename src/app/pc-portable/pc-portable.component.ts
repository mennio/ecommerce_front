import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Portable } from '../model/pcportable/portable';
import { PortableService } from '../service/pcportable/portable.service';


@Component({
  selector: 'app-pc-portable',
  templateUrl: './pc-portable.component.html',
  styleUrls: ['./pc-portable.component.css']
})
export class PCPORTABLEComponent implements OnInit {



  portableDetail !: FormGroup;
  portableObj: Portable = new Portable();
  portableList: Portable[] = [];

  constructor(private formBuilder: FormBuilder, private portableService: PortableService) { }

  ngOnInit(): void {
    this.getAllPcPortable();
    this.portableDetail = this.formBuilder.group({
      id : [''],
      article : [''],
      caracteristique : [''],
      prix : [''],
      image : [''],
    });
  }

  addPcPortable(addForm: NgForm) {
   this.portableService.addPcPortable(addForm.value).subscribe(res => {
      this.getAllPcPortable();
      addForm.reset();
    }, err => {
      console.log(err);
    });
  }

  updatePcPortable(updateForm : NgForm, pc : Portable){
    console.log(updateForm.value)
    this.portableService.updatePcPortable(updateForm.value, pc  ).subscribe(res => {
      console.log(res)
      this.getAllPcPortable();
    }, err => {
      console.log(err);
    });
  }

  getAllPcPortable() {
    this.portableService.getAllPcPortable().subscribe(res => {
      console.log(res);
      this.portableList = res;
    }, err => {
      console.log("error while fetching data.")
    });
  }

  editPcPortable(pc : Portable){
    this.portableObj = pc;
    this.portableDetail.controls['id'].setValue(pc.id);
    this.portableDetail.controls['article'].setValue(pc.article);
    this.portableDetail.controls['caracteristique'].setValue(pc.caracteristique);
    this.portableDetail.controls['prix'].setValue(pc.prix);
    this.portableDetail.controls['image'].setValue(pc.image);
  }

  getPc(pc : Portable){
    this.portableObj = pc;
  }

  deletePcPortable(pc : Portable){
    this.portableService.deletePcPortable(pc).subscribe(res => {
      console.log(res);
      this.getAllPcPortable();
    }, err => {
      console.log("error while fetching data.")
    });
  }

  

}
