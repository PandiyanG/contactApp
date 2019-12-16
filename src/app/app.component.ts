import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contactApp';
  name = 'Pandiyan';
  contactName = "";
  contactMobile = "";
  contactMail = "";
  contactLists : any[] = [];
  edit : boolean = false;
  currentPlace = "";
  addContact()
  {
    var tempObj : any = {};
    tempObj.Name = this.contactName;
    tempObj.Mobile = this.contactMobile;
    tempObj.Mail = this.contactMail;
    this.contactLists.push(tempObj);
    this.clearfields();
    

  }
  clearfields()
  {
    this.contactName= "";
    this.contactMobile= "";
    this.contactMail = "";
  }
  deleteContact(i)
  {
    this.contactLists.splice(i,1);
  }

  editContact(i)
  {
    this.contactName=this.contactLists[i].Name;
    this.contactMobile=this.contactLists[i].Mobile;
    this.contactMail=this.contactLists[i].Mail;
    this.openModal(true);
    this.edit = true;
    this.currentPlace = i;
  }
  UpdateContact()
  {
    this.contactLists[this.currentPlace].Name = this.contactName;
    this.contactLists[this.currentPlace].Mobile = this.contactMobile;
    this.contactLists[this.currentPlace].Mail = this.contactMail;
  }
  private mdlSampleIsOpen : boolean = false;
  private openModal(open : boolean) : void {
    this.mdlSampleIsOpen = open;
}
}

