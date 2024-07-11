//typescript must be installed globally and eslint as VScode extension
// init project with tsc --init (create a tsconfig.json file)
//compile with tsc ts_tutorial.ts
//run with node ts_tutorial.js

// types
let userName: string = 'Romain'
let age: number = 41
let isAdmin: boolean = true
let ids: number[] = [1, 2, 3]
let x: any = 'Cake'
let xArr: any[] = ['Cake', 42, false]
let date: Date = new Date()

const concatenateValues = (a: string, b: string): string /*return type*/ => {
  return a + b
}

// interface (object type), union ( | ), null, void, read-only and not required (?)
interface UserInterface {
  readonly id: number | string
  name: string | null
  readonly startDate: Date
  age?: number
  greet(message: string): void
}
const user: UserInterface = {
  id: 2,
  name: 'Romain',
  startDate: new Date(),
  greet(message) {
    console.log(message)
  },
}

// type "schema"
type IdFieldType = string | number

const printId = (id: IdFieldType) => {
  console.log(id)
}

// intersection (&)
interface businessPartner {
  name: string
  creditScore: number
}
interface userIdentity {
  id: number | string
  email: string
}
type employee = businessPartner & userIdentity
const signContract = (employee: employee): void => {
  console.log(
    'Contract signed by ' + employee.name + ' with email ' + employee.email
  )
}
signContract({
  id: 2,
  creditScore: 12,
  name: 'Romain',
  email: 'romain@gmail.com',
})

// enum (kind of object but with fixed possible values)
enum LoginError {
  unauthorized = 'User not authorized',
  noUser = "user doesn't exist",
  wrongCredentials = 'wrong credentials',
  internal = 'internal error',
}
const printErrorMsg = (error: LoginError): void => {
  if (error == LoginError.unauthorized) {
    console.log(LoginError.unauthorized)
  } else if (error == LoginError.noUser) {
    console.log(LoginError.noUser)
  } else if (error == LoginError.wrongCredentials) {
    console.log(LoginError.wrongCredentials)
  } else {
    console.log(LoginError.internal)
  }
}
printErrorMsg(LoginError.wrongCredentials)
