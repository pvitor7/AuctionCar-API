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
    createdAt:    Date
    updatedAt:    Date
}

export interface IVehicleRequestCreate {
    heading:     string
    status:      boolean
    year:        string
    km:          string
    price:       string
    description: string
    published:   boolean
    auction:    boolean
    img:         string
    categorie:   string
    dateAuction?:   Date
}

export interface Categorie {
    id:        string
    categorie: string
}

export interface IVehicleResponseCreate  {
    id:          string
    heading:     string
    status:      boolean
    year:        string
    km:          string
    price:       string
    description: string
    published:   boolean
    auction?:     boolean
    img:         string
    cratedAt:    Date
    categorie:    Categorie
    dateAuction?: Date
}