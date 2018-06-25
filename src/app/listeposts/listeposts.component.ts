import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listeposts',
  templateUrl: './listeposts.component.html',
  styleUrls: ['./listeposts.component.css']
})
export class ListepostsComponent implements OnInit {
  @Input () posts;

  constructor() { }

  ngOnInit() {
  }

}
