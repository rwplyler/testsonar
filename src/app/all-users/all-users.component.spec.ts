import { HttpClientTestingModule ,HttpTestingController} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUsersComponent } from './all-users.component';

describe('AllUsersComponent', () => {
  let component: AllUsersComponent;
  let fixture: ComponentFixture<AllUsersComponent>;

  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AllUsersComponent]
    });
    component = TestBed.inject(AllUsersComponent);
    testingController = TestBed.get(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should increment "myNumber"', () => {
    component.function1();
    expect(component.myNumber).toBe(1);
    component.function1();
    expect(component.myNumber).toBe(2);
  });

  it('should concatenate the strings', () => {
    component.function2('testing', ' is fun');
    expect(component.myStrings).toBe('testing is fun');
  });

  it('should concatenate and return the string', () => {
    expect(component.function3('test')).toBe('testtest', 'funtion3 test failed.');
  });
});
