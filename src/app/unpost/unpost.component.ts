import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-unpost',
  templateUrl: './unpost.component.html',
  styleUrls: ['./unpost.component.css']
})
export class UnpostComponent implements OnInit {
  @Input () postTitre: String;
  @Input () postContenu: String;
  @Input () postCrea: Date;
  @Input () postLovecpt: number;

  constructor() { }

  inclovecpt () { this.postLovecpt++; }
  declovecpt () { this.postLovecpt--; }
  postcolor () {
    if (this.postLovecpt > 0)        { return 'aquamarine ';
    } else if (this.postLovecpt < 0) { return 'pink';
    } else                           { return 'white';
    } // if

  } // class UnpostComponent

  ngOnInit() {
  }

}