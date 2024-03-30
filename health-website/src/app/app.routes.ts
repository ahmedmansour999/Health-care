import { ApointmentComponent } from './apointment/apointment.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { Routes } from '@angular/router';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { MessageComponent } from './components/message/message.component';
import { ProfialComponent } from './components/profial/profial.component';
import { TestComponent } from './test/test.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { LayoutComponent } from './layout/layout.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { AppointmentApiService } from './service/appointment-api.service';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { FreetimeComponent } from './dashboard/free-time/free-time.component';
import { DashAppointmentComponent } from './dashboard/dash-appointment/dash-appointment.component';
import { HomeComponent } from './components/home/home.component';
import { ListOfDoctorsComponent } from './components/list-of-doctors/list-of-doctors.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { PostsComponent } from './components/posts/posts.component';
import { DashbordAdminComponent } from './components/dashbord-admin/dashbord-admin.component';
import { AboutComponent } from './about/about.component';
import { PatienttComponent } from './patientt/patientt.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AuthGuardLoginService } from './service/auth-guard-login.service';
import { RouteAppLoginService } from './service/route-app-login.service';
import { RouteAppLoginAndRegisterService } from './service/route-app-login-and-register.service';
import { DepartmentComponent } from './components/department/department.component';
import { ProtectdashboradService } from './service/protectdashborad.service';
import { ByLoginService } from './service/by-login.service';


export const routes: Routes = [
  {
    path:'payment',
    canActivate: [ByLoginService],
    component:PaymentComponent
  },

  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
    {
      path :'home' ,
      component : LayoutComponent ,
      children : [

        {
          path: "",
          component: HomeComponent ,
          title: "  Home Page "
      },
      {
        path:'about' ,
        component : AboutComponent ,
      },
      {
        path:'department' ,
        component : DepartmentComponent ,
      },

      {
          path: "ap",
          canActivate: [AuthGuardLoginService],
          component: ApointmentComponent ,
          title: "  apointment  Page ",
      },
      {
        path: "patient",
        canActivate: [AuthGuardLoginService],
        component: PatienttComponent ,
        title: "  patient  Page "
    },

      {
          path: "register",
          canActivate: [RouteAppLoginAndRegisterService],
          component: RegisterComponent ,
          title: " Registeration Page "
      },
      {
          path: "login",
          canActivate: [RouteAppLoginAndRegisterService],
          component: LoginComponent ,
          title: "login Page "
      },
      {
          path: "doctors",
          canActivate: [AuthGuardLoginService],
          component: ListOfDoctorsComponent ,
          title: "doctors Page "
      } ,
      {
          path: "pf",
          canActivate: [AuthGuardLoginService],
          component: PatientProfileComponent,
          title: "Profile "
      } ,
      {
        path:"doctorDetails/:id" ,
        canActivate: [AuthGuardLoginService],

        component:DoctorDetailsComponent ,
        title : "details"
      } ,
      {
        path:"profial/:id" ,
        canActivate: [AuthGuardLoginService],

        component:ProfialComponent ,
        title : "details"
      } ,


      {
        path:"messages" ,
        component:MessageComponent ,
        title : "message"
      } ,

      {
        path:"doctors/doctorDetails/:id" ,
        redirectTo:"doctorDetails/:id" ,
        pathMatch:"full"

      } ,


      {
        path:"**" ,
        redirectTo:'home' ,
        pathMatch:'full'
      }

      ]
    } ,


    {
      path : 'admin' ,
      canActivate: [AuthGuardLoginService , ProtectdashboradService ],
      component : AdminComponent ,
      title : "dashboard" ,
      children : [
        {
          path:'' ,
          component : OverviewComponent ,
        },
        {
          path:'home' ,
          component : OverviewComponent ,
        },

        {

          path:'docAppointment' ,
          component : DashAppointmentComponent ,

        } ,
        {

          path:'addAppointment' ,
          component : AddAppointmentComponent ,

        } ,
        {

          path:'posts' ,
          component : PostsComponent ,

        } ,
        {

          path:'dashadmin' ,
          canActivate: [RouteAppLoginService  ],

          component : DashbordAdminComponent ,

        } ,
        {
          path:'update-user',
          component:UpdateUserComponent
        },
        {
          path:'add-user',
          component:AddUserComponent
        },
        {

          path:'freeTimes' ,
          component : FreetimeComponent ,

        } ,
        {
          path : '**' ,
          redirectTo : 'home'
        }
      ]
    } ,





];




