import React from 'react';

export const UserContext = React.createContext({
    user: {
        userName: null,
        hash: null, //password
        email: null, //find a way to hash
        profileImageUrl: null,
    }
});