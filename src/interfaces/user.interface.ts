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
    celphone:   string
    name:       string
    email:      string
    is_active:  boolean
    created_at: Date
}