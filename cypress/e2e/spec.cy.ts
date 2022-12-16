// spec.cy.ts

//Atraves 
//Cypress
//ExamenAppMovil7 (master)E2E Testing


describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('app is running!')
  })
})
describe('AsistenciaPage', () => {
  cy.visit("asistencia")
  cy.contains('Asistencia tomada correctamente')
 }) 
  


// Pruebas Unitarias Ejecutadas 

// About - Asistencia - cuenta alumno - cuenta profesor - error 404 - inicio - registrar asistencia - registrar clase - ver asistencia - ver clase
 
// //describe('AboutPage', () => {
//   let component: AboutPage;
//   let fixture: ComponentFixture<AboutPage>;

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [ AboutPage ],
//       imports: [IonicModule.forRoot()]
//     }).compileComponents();

//     fixture = TestBed.createComponent(AboutPage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   }));

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// }); //*


// describe('AsistenciaPage', () => {
//   let component: AsistenciaPage;
//   let fixture: ComponentFixture<AsistenciaPage>;

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [ AsistenciaPage ],
//       imports: [IonicModule.forRoot()]
//     }).compileComponents();

//     fixture = TestBed.createComponent(AsistenciaPage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   }));

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

// describe('CuentaAlumnoPage', () => {
//   let component: CuentaAlumnoPage;
//   let fixture: ComponentFixture<CuentaAlumnoPage>;

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [ CuentaAlumnoPage ],
//       imports: [IonicModule.forRoot()]
//     }).compileComponents();

//     fixture = TestBed.createComponent(CuentaAlumnoPage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   }));

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

// describe('CuentaProfesorPage', () => {
//   let component: CuentaProfesorPage;
//   let fixture: ComponentFixture<CuentaProfesorPage>;

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [ CuentaProfesorPage ],
//       imports: [IonicModule.forRoot()]
//     }).compileComponents();

//     fixture = TestBed.createComponent(CuentaProfesorPage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   }));

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

// describe('Error404Page', () => {
//   let component: Error404Page;
//   let fixture: ComponentFixture<Error404Page>;

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [ Error404Page ],
//       imports: [IonicModule.forRoot()]
//     }).compileComponents();

//     fixture = TestBed.createComponent(Error404Page);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   }));

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

// describe('InicioPage', () => {
//   let component: InicioPage;
//   let fixture: ComponentFixture<InicioPage>;

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [ InicioPage ],
//       imports: [IonicModule.forRoot()]
//     }).compileComponents();

//     fixture = TestBed.createComponent(InicioPage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   }));

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


// describe('LoginPage', () => {
//   let component: LoginPage;
//   let fixture: ComponentFixture<LoginPage>;

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [ LoginPage ],
//       imports: [IonicModule.forRoot()]
//     }).compileComponents();

//     fixture = TestBed.createComponent(LoginPage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   }));

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


// describe('RegistrarAsistenciaPage', () => {
//   let component: RegistrarAsistenciaPage;
//   let fixture: ComponentFixture<RegistrarAsistenciaPage>;

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [ RegistrarAsistenciaPage ],
//       imports: [IonicModule.forRoot()]
//     }).compileComponents();

//     fixture = TestBed.createComponent(RegistrarAsistenciaPage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   }));

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

// describe('RegistrarClasePage', () => {
//   let component: RegistrarClasePage;
//   let fixture: ComponentFixture<RegistrarClasePage>;

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [ RegistrarClasePage ],
//       imports: [IonicModule.forRoot()]
//     }).compileComponents();

//     fixture = TestBed.createComponent(RegistrarClasePage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   }));

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

