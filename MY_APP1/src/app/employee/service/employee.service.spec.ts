import{TestBed}from "@angular/core/testing";
import{employeeService}from "./employee.service";
describe("employeeService",()=>{
let service:employeeService;beforeEach(()=>{
	TestBed.configureTestingModule({
});
	service=TestBed.inject(employeeService)
});
it("should be created",()=>{
	expect(service).toBeTruthy()
})});