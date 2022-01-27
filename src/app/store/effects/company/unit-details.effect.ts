import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';

// Material snack bar
import {
    MatSnackBar,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

// @Actions
import * as fromAction from 'app/store/actions/company/unit-details.actions';

// @Selectos
import { getUnitList } from 'app/store/selectors/company/unit-details.selector';

// @Services
import { UnitDetailsService } from 'app/modules/admin/hr-and-payroll/company/unit-details-create/services/unit-details.service';

@Injectable({
    providedIn: 'root',
})
export class UnitDetailsEffect {
    public horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    public verticalPosition: MatSnackBarVerticalPosition = 'bottom';

    constructor(
        private _store: Store,
        private _action$: Actions,
        private _snackBar: MatSnackBar,
        private _service: UnitDetailsService
    ) {}

    createNewUnitDetails$ = createEffect(() => {
        return this._action$.pipe(
            ofType<fromAction.CreateNewUnitDetails>(
                fromAction.UNIT_DETAILS_ACTION.CREATE_NEW_UNIT
            ),
            switchMap(({ formData: data }) => {
                const payload = this.normalizePayload(data);
                return this._service.createUnitDetails(payload).pipe(
                    map((newUnit) => {
                        this.openSnackbar(
                            'Created Successfully',
                            null,
                            'bg-primary'
                        );
                        const data = this.nomalizeObject(
                            this.normalizePayload(newUnit)
                        );

                        return new fromAction.CreateNewUnitDetailsSuccess(data);
                    })
                );
            })
        );
    });

    updateUnitDetails$ = createEffect(() => {
        return this._action$.pipe(
            ofType<fromAction.UpdateUnitDetails>(
                fromAction.UNIT_DETAILS_ACTION.UPDATE_UNIT
            ),
            mergeMap(({ formData }) => {
                return of(formData).pipe(
                    withLatestFrom(this._store.select(getUnitList)),
                    map(([formData, list]) => ({ formData, list }))
                );
            }),
            mergeMap(({ formData, list }) => {
                const data = JSON.parse(JSON.stringify(formData));
                const { id } = data;
                delete data['id'];
                const updated_data = this.normalizePayload(data);

                return this._service.updateUnitDetails(id, updated_data).pipe(
                    map((updatedItem) => {
                        // Find index of update item
                        const index = list?.findIndex((item) => item.id === id);
                        // Make new list
                        const updated_list = JSON.parse(JSON.stringify(list));

                        // Update list
                        updated_list[index] = this.nomalizeObject(
                            this.normalizePayload(updatedItem)
                        );

                        // Open snackbar
                        this.openSnackbar(
                            'Updated Successfully',
                            null,
                            'bg-primary'
                        );

                        return new fromAction.UpdateUnitDetailsSuccess(
                            updated_list
                        );
                    })
                );
            })
        );
    });

    deleteUnitDetails$ = createEffect(() => {
        return this._action$.pipe(
            ofType<fromAction.DeleteUnitDetails>(
                fromAction.UNIT_DETAILS_ACTION.DELETE_UNIT
            ),
            mergeMap(({ id }) => {
                return of(id).pipe(
                    withLatestFrom(this._store.select(getUnitList)),
                    map(([id, list]) => ({ id, list }))
                );
            }),
            mergeMap(({ id, list }) => {
                return this._service.deleteUnitDetails(id).pipe(
                    map((id) => {
                        // Find the index of the deleted product
                        const index = list.findIndex((item) => item.id === id);

                        // Make a new list
                        const updated_list = JSON.parse(JSON.stringify(list));

                        // Update the list
                        updated_list.splice(index, 1);

                        // Open snackbar
                        this.openSnackbar(
                            'Deleted Successfully',
                            null,
                            'bg-warn'
                        );

                        return new fromAction.DeleteUnitDetailsSuccess(
                            updated_list
                        );
                    })
                );
            })
        );
    });

    getEntities$ = createEffect(() => {
        return this._action$.pipe(
            ofType<fromAction.GetListOfUnits>(
                fromAction.UNIT_DETAILS_ACTION.GET_LIST_OF_UNITS
            ),
            switchMap(
                ({
                    pageNumber,
                    pageSize,
                    filter_ids,
                    query,
                    sortBy,
                    sortDirection,
                }) => {
                    return this._service
                        .getEntityList(
                            pageNumber,
                            pageSize,
                            filter_ids,
                            query,
                            sortBy,
                            sortDirection
                        )
                        .pipe(
                            map(({ data, count }) => {
                                const normalizeData = data.map((entity) =>
                                    this.nomalizeObject(
                                        this.normalizePayload(entity)
                                    )
                                );
                                return new fromAction.GetListOfUnitsSuccess(
                                    normalizeData,
                                    count
                                );
                            })
                        );
                }
            )
        );
    });

    normalizePayload(data: any) {
        if (typeof data.status === 'string') {
            return { ...data, status: data?.status === 'active' };
        } else {
            return { ...data, status: data?.status ? 'active' : 'inactive' };
        }
    }

    openSnackbar(message: string, action: string = 'x', className: string) {
        this._snackBar.open(message, action, {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 2000,
            panelClass: [className],
        });
    }

    nomalizeObject(obj: any) {
        const newObj = JSON.parse(JSON.stringify(obj));
        for (let key in newObj) {
            if (newObj[key] instanceof Object) {
                for (let property in newObj[key]) {
                    newObj[`${key}_${property}`] = newObj[key][property];
                }
            }
        }
        return newObj;
    }
}
