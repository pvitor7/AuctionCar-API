export interface IVehicle {
    id:          string
    heading:     string
    status:      string
    year:        string
    km:          string
    price:       string
    description: string
    published:   boolean
    img:         string
    created_at: Date
    updated_at: Date
}

export interface IVehicleRequestCreate {
    heading:     string
    status:      string
    year:        string
    km:          string
    price:       string
    description: string
    published:   boolean
    img:         string
    categorie:   string
}

export interface Categorie {
    id:        string
    categorie: string
}

export interface IVehicleResponseCreate  {
    id:          string
    heading:     string
    status:      string
    year:        string
    km:          string
    price:       string
    description: string
    published:   boolean
    img:         string
    crated_at:   Date
    categorie: Categorie
}