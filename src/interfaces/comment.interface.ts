export interface IComment {
    id:         string
    comment:    string
    created_at: Date
    updated_at: Date
}

export interface ICommentCreateRequest {
    vehicle_id:      string
    user_id:         string
    comment:    string
}
