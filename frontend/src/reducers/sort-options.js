const initialState = [
    {
        key: 'voteScore',
        text: 'Vote - Low to High'
    },
    {
        key: '-voteScore',
        text: 'Vote - Hight to Low'
    },
    {
        key: 'timestamp',
        text: 'Date - Oldest to Newest'
    },
    {
        key: '-timestamp',
        text: 'Date - Newest to Oldest'
    }
]

const sortOptions = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default sortOptions
