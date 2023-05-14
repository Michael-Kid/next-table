interface Dictionary {
  [key: string]: string | number | object
}

interface Address {
  streetAddress: string
  city: string
  state: string
  zip: string
}

export interface Person extends Dictionary {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  description: string
  address: Address
}

