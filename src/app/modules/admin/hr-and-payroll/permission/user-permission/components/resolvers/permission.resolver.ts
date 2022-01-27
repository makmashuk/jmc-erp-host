import { Injectable } from '@angular/core';

import { ActivatedRoute, Resolve } from '@angular/router';

import { ActivatedRouteSnapshot } from '@angular/router';
import { PermissionService } from '../../../permission-create/services/permission.service';
import { UserPermissionService } from '../../services/user-permission.service';

@Injectable()
export class PermissionResolver implements Resolve<any> {
    constructor(private _service: UserPermissionService) { }

    resolve(route: ActivatedRouteSnapshot) {
        let id = route.paramMap.get('id');
        // console.log(id);
        return this._service.getEmployeePermission(id);
    }
}
