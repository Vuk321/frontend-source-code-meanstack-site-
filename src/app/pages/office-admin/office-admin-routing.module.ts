import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserManagementComponent} from './user-management/user-management.component';
import {PermissionManagementComponent} from './permission-management/permission-management.component';
import {AddEditUserComponent} from "./user-management/add-edit-user/add-edit-user.component";
import {AddEditPermissionComponent} from "./permission-management/add-edit-permission/add-edit-permission.component";

const routes: Routes = [
    {
        path: 'user-management',
        component: UserManagementComponent,
    },
    {
        path: 'user-management/add',
        component: AddEditUserComponent
    },
    {path: 'user-management/edit/:id', component: AddEditUserComponent},
    {
        path: 'permission-management',
        component: PermissionManagementComponent,
    },
    {
        path: 'permission-management/add',
        component: AddEditPermissionComponent
    },
    {
        path: 'permission-management/edit/:id',
        component: AddEditPermissionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OfficeAdminRoutingModule {
}
