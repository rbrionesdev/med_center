import Home from "./Home";
import Appointments from "./Appointments";
import Doctors from "./Doctors";
import Patients from "./Patients";

export const Routes = [
  { pathname: "/", title: "Home", component: Home },
  { pathname: "/appointments", title: "Appointments", component: Appointments },
  { pathname: "/doctors", title: "Doctors", component: Doctors },
  { pathname: "/patients", title: "Patients", component: Patients },
  // { pathname: "/new_grade", title: "New Grade", component: NewGrade },
  // { pathname: "/demo", title: "Demo", component: Demo },
];
