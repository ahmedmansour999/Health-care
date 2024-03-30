export interface ListDoctor {
  id: number
  name: string
  specialty: any
  hospital: any
  description: any
  email: string
  email_verified_at: any
  password: string
  gender: string
  age: number
  number: string
  is_admin: string
  address: string
  remember_token: any
  created_at: string
  updated_at: string
  department_id: number
  image: string
  department: {
    id: number
    created_at: any
    updated_at: any
    description: string
    name: string
  }
  freetime: Array<{
    id: number
    created_at: string
    updated_at: string
    doctor_id: number
    doctor_freetimes: string
    doctor_freetimesto: string
  }>
  appointments: Array<{
    id: number
    created_at: string
    updated_at: string
    doctor_id: number
    patient_id: number
    price: number
    note: string
    date: string
    status: string
    description: string
    prescription: any
  }>
}



