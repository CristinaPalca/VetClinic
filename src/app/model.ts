export interface IPatient {
  id: number;
  patientName: string;
  breed: string;
}
export interface IAppointment {
  id: number;
  animalId: number;
  date: string;
  doctorsName: string;
  diagnosis: string;
  status: number;
}
export interface IPatientPageComponent{
  id: number;
  patientName: string;
  breed: string;
  appointments: Array<IAppointment>;
}

export interface IDoctor{
  name: string;
}
