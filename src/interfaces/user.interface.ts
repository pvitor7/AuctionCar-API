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

export interface IUserRequestUpdate {
    name:     string
    email:    string
    celphone: string
}

export interface IUserResponseUpdate {
    id:         string
    name:       string
    email:      string
    celphone:   string
    updated_at: Date
}