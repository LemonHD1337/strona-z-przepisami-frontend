const idCategory = (category) => {
    switch (category) {
        case 'grill':
            return 1
        case 'dania':
            return 2
        case 'ciasta':
            return 3
        case 'diety':
            return 4
        case 'przekąski':
            return 5
        case 'wege':
            return 6
        default:
            return category
    }
}

export default idCategory