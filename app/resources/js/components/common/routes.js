export const appRoutes = {
    HOME: '/',
    LOGIN: '/authentication',
    DASHBOARD: '/dashboard',
    CATEGORIES: {INDEX: '/dashboard/categories', NEW: '/dashboard/categories/new'},
    COMMITMENTS: {INDEX: '/dashboard/commitments', NEW: '/dashboard/commitments/new', ID: ':id'},
    FOLDERS: {INDEX: '/dashboard/folders', NEW: '/dashboard/folders/new', ID: ':id'},
    PROFILE: './profile',
};