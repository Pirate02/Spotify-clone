// these are the initial values

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,

    // make sure to remove after development 
    token: null
    //'BQBrPHJAGC4FhT3YFJShN60lk-L5t9KWEM30vrZsZWZCtUvprw9z8flQMqsQ6IwOjcLItAhsXltD4zDMFi8_ZUKrQeVqmVnWZszHeMEfwdyDvbhkPJh0kepHjopXMUhqeouo7rSSp9fWyxqOGGtjzOdyZRgn36uL-gJKqFHbwg4XKa6jEoM_MqsFjY6qTkt60ghvK6XmmKcUYrBsRFpj'
};


// any action performed in the app is listened by this it is a listener 


// state is what is currently looks like action is action 
const reducer = (state, action) => {
    // for debug 
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,

            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,

            };

        default:
            return state;
    }

}

export default reducer; 