export function renderActiveJobClass(status){
    switch(status){
        case 'active':
            return 'active';
        case 'completed':
            return 'completed';
        case 'invoicing':
            return 'invoicing';
        case 'toPriced':
            return 'toPriced';
        default:
            return 'scheduled'

    }
}
export function calculateNewStatus(status,direction){
    if(direction==='forward'){
        switch(status){
            case 'active':
                return 'invoicing';
            case 'invoicing':
                return 'toPriced';
            case 'toPriced':
                return 'completed';
            case 'completed':
                return 'completed';
            case 'scheduled':
                return 'active';
        }
    }
    else{
        switch(status){
            case 'completed':
                return 'toPriced';
            case 'toPriced':
                return 'invoicing';
            case 'invoicing':
                return 'active';
            case 'active':
                return 'scheduled';
            case 'scheduled':
                return 'scheduled';
        }
    }

}