import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit, } from '@angular/core';
import { EmailValidator, FormsModule } from '@angular/forms';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private builder: FormBuilder) {


  }

  ngOnInit(): void {
   
  }
  }


    Message;
