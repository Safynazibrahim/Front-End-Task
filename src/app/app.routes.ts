import { Routes } from '@angular/router';
import { ContentManagementComponent } from './components/content-management/content-management.component';
import { CreatePostComponent } from './components/content-management/create-post/create-post.component';
import { ManagePostsComponent } from './components/content-management/manage-posts/manage-posts.component';

export const routes: Routes = [
    {
        path:'', redirectTo:'/content-management', pathMatch: 'full'
    },
    {
        path:'content-management',
        component:ContentManagementComponent,
        children:[
            {
                path: '', redirectTo: 'create-post', pathMatch: 'full'
            },
            {
                path:'create-post',
                component:CreatePostComponent
            },
            {
                path:'manage-posts',
                component:ManagePostsComponent
            }
        ]
    }
];
