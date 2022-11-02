export interface ICategory {
    id:         string
    categorie:  string
    created_at: Date
    updated_at: Date
}

export interface ICategoryRequestCreate {
    categorie: string
}

export interface ICategoryResponseCreate {
    id:         string
    categorie:  string
    created_at: Date
}