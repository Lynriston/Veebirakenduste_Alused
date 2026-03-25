type RequiredUser = {
    id: string
    name: string
    age: number
    address: {
        street: string
        city: string
    }
}

type A = Record<string, RequiredUser>

type C = Record<"admin" | "user", {test: string}>

const a:C = {
    admin: {test: "asd"},
    user: {test: "asd"}
}

type B = Record<PropertyKey, {test: string}>