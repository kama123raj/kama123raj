import { Component, OnInit } from '@angular/core';
import { Post } from '../service/sample-data';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  posts: Post[] = [];
  myDate = new Date();
  p: number = 1;
  collection =[] ;

constructor(public service:CrudService){ }



ngOnInit(): void {

  this.service.getAll().subscribe((data: Post[])=>{
    this.posts = data;
    console.log(this.posts);
  }) 

}

}
