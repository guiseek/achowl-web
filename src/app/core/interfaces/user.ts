import { firestore } from "firebase/app";

export interface UserRoles { 
  subscriber?: boolean
  editor?: boolean
  admin?: boolean
}
export interface UserTypes {
  customer: boolean
  provider: boolean
  place: boolean
  musician: boolean
}
export interface User {
  uid: string
  name: string
  email: string
  roles: UserRoles
  types: UserTypes
  password?: string
  photoURL?: string
  phone?: string
  cpf?: string
  created?: firestore.Timestamp
  updated?: firestore.Timestamp
}