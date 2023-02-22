import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { product } from '../service/sample-data';
import {
trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations:[
    trigger('triggering',[
      transition('void => *', [
        style({
          opacity:0,
          transform:'scale(0.5)',
          'magin-bottom':0,
          paddingTop:0,
          paddingBottom:0,
          paddingRight:0,
          paddingLeft:0,
        }),
        animate('500ms', style({
          height:'*',
          'magin-bottom':'*',
          paddingTop:'*',
          paddingBottom:'*',
          paddingRight:'*',
          paddingLeft:'*',

        })),
        animate(500)

      ])
    ])
  ]
})
export class ProductsComponent implements OnInit {

  productList: product [] = [];
  s: number = 1;
  results:any;
  brands:any;
  displayList: product [] = [];
  brandList: product [] = [];
  cat: product [] = [];
  detailPage: product[] = [];
  selection:string = '';
  selectedBrand:string='';
  closeIcon:boolean=false;
  catIcon:boolean=false;
  brandIcon:boolean=false;
  selectreset:string = 'all';
  default:string = 'default';
  resetBrand:string = 'all';
  brandselection : string = "all"
  brandreset:string = 'all';
  useBrand:product[] = [];
  check:boolean= false;
  pageSize : any = '8';
  cartProductList = [];


  productQty:number = 1;
 
  constructor(private service:CrudService) { }

  ngOnInit(): void {
      this.service.getProduct().subscribe((prodata:product[])=>{
      this.productList = prodata;
      this.displayList = prodata;
      this.useBrand = prodata;
      console.log('Total First', this.productList);
      console.log(this.productList.values());

// seprate category
      let total = this.productList.map(({ category }) => category)
      console.log('Total Cat', total);
      this.results =total.filter((item, index) => total.indexOf(item) === index);
      console.log('result',this.results);
// seprate brand
this.brdselect();
    })
    this.displayList = this.productList;
  }

brdselect(){
  let selectbrd = this.displayList.map(({ brand }) => brand);
this.brands = selectbrd.filter((item,index)=> selectbrd.indexOf(item)== index )
return;
}

// Filter Catogeries

filterData(event : any) {
console.log(event.target.value);
this.selection = event.target.value;  
this.cat = this.productList.filter(function(item){
var search = item.category == event.target.value;   
return search; 

});
this.displayList = this.cat;
this.useBrand = this.cat
this.closeIcon =true ;
this.catIcon =true ;
this.brdselect();


if(event.target.value == 'all') {
  this.displayList = this.productList;
  this.closeIcon =false;
  this.brandIcon=false;
  this.brdselect();
  this.catIcon=false;
  this.useBrand = this.productList;
}
this.brandreset = 'all';
this.brandIcon=false;
this.default = 'default';
this.check= false;
}

// Filter Brand  after cat filter

filBrand(change : any) {
  console.log(change.target.value);
  this.selectedBrand = change.target.value;  
  var brandFinal = this.useBrand.filter(function(item){
    var search = item.brand == change.target.value;   
    return search; 
    });
    this.displayList = brandFinal;
    this.brandIcon =true ;
    this.closeIcon =true ;

    if(change.target.value == 'all') {
      this.displayList = this.useBrand;
      this.brandIcon =false;
      this.closeIcon =true ;
      this.brandIcon=false;

    }

    this.check= false;

}
// Clear filters
remove(evt : any){
  this.displayList = this.productList;
  this.closeIcon =false;
  this.catIcon=false;
  this.results.selectedIndex=0;
  this.selectreset = 'all';
  this.brandreset = 'all';
  this.brandIcon =false;
  this.brdselect();
  this.useBrand = this.productList;
  this.check= false;
}


// Sorting Price 

sort(event : any) {

  switch (event.target.value) {
    case "Low":
      {
        this.displayList = this.displayList.sort((low, high) => low.price - high.price);
        this.s = 1;
        break;
      }

    case "High":
      {
        this.displayList = this.displayList.sort((low, high) => high.price - low.price);
        this.s = 1;
        break;
      }
     case "default":
        {
          this.displayList = this.displayList;
          this.s = 1;
          break;
        }
    }

}

viewData(i:any){
// this.detailPage = this.useBrand.filter(function(item){
//   var sltprd = item.id == i.target.value;  
//   return sltprd; 
//   });
this.detailPage =i;
  console.log(this.detailPage)

  }

  // Product per peage 

  changePageSize(event : any){
    this.pageSize = event.target.value;
  }


  // Add to cart 

  increment(){
    if(this.productQty < 20){
    this.productQty = this.productQty + 1;
    }
  }
  degrement(){
    if(this.productQty > 1){
    this.productQty = this.productQty - 1;
  }
}

  addProductToCart(){
    
  }


}

  


 

