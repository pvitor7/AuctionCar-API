export interface IUser {
    id:       string
    name:     string
    celphone: string
    email:    string
    password: string
    is_active:boolean
}

export interface IUserRequest {
    name:     string
    celphone: string
    email:    string
    password: string
}

export interface IUserResponseCreate {
    id:         string
    name:       string
    email:      string
    created_at: Date
}