export const appRoutes = {
    HOME: '/',
    LOGIN: '/authentication',
    DASHBOARD: {INDEX: '/dashboard'},
    CATEGORIES: {INDEX: 'dashboard/categories', NEW: '/dashboard/categories/new'},
    COMMITMENTS: {INDEX: '/dashboard/commitments', NEW: '/dashboard/commitments/new', ID: ':id'},
    FOLDERS: {INDEX: '/dashboard/folders', NEW: '/dashboard/folders/new', ID: ':id'},
    NEW_ITEM: {FOLDER:'/dashboard/create-folder', CATEGORY:'/dashboard/create-category', COMMITMENT:'/dashboard/create-commitment'},
    PROFILE: '/profile',
};

export const dashboardRoutes = {
    CATEGORIES: {INDEX: '/categories', NEW: '/categories/new'},
    COMMITMENTS: {INDEX: '/commitments', NEW: '/commitments/new', ID: ':id'},
    FOLDERS: {INDEX: '/folders', NEW: '/folders/new', ID: ':id'},
    // have a switch in the newitemform
    NEW_ITEM: {FOLDER:'/create-folder', CATEGORY:'/create-category', COMMITMENT:'/create-commitment'},
};