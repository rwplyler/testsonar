
import { HomeComponent } from './home.component';
import { HttpClientTestingModule  /*,HttpTestingController*/ } from '@angular/common/http/testing';
import { Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpService} from '../http.service'
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService} from '../login.service';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  class loginStub {
    login(): any {
      return ({
        email: "rwplyler@yahoo.com",
        firstName: "Ross",
        lastName: "Plyler",
        permissions: 1,
        username: "rwplyler",

      });
    }
    
  };
  
  beforeEach(async () => {    
    TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      HttpClientTestingModule
    ],
    declarations: [
      HomeComponent
    ],
    providers : [
      HttpService,
      LoginService
    ]
  }).compileComponents();
});
  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save Ross Name', () => {
    component.userName ="rwplyler";
    expect(component.login()).toBeTruthy;
  });

});
/*








f
f
f
f
f
f
f
f
f
f
f
f
f
f
f
f
f
f





8/*/
