import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { BookService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  livros: any;
  bookService: BookService;

  constructor(bookService: BookService) {
    this.bookService = bookService;
  }

  ngOnInit(): void {
    this.livros = this.bookService.getBook..getBook().subrscribe((data => {

      this.livros = data;
      console.log(this.livros);
    }));
  }
}
