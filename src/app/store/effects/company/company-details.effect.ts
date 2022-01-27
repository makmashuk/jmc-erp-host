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
import * as fromAction from 'app/store/actions/company/company-details.actions';
import { UpdateCompanyDetailsSuccess } from 'app/store//actions/company/company-details.actions';

// @Selectos
import { getCompanyList } from 'app/store/selectors/company/company-details.selector';

// @Services
import { CompanyDetailsService } from 'app/modules/admin/hr-and-payroll/company/company-details-create/services/company-details.service';

@Injectable({
    providedIn: 'root',
})
export class CompanyDetailsEffect {
    public horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    public verticalPosition: MatSnackBarVerticalPosition = 'bottom';

    constructor(
        private _store: Store,
        private _action$: Actions,
        private _snackBar: MatSnackBar,
        private _service: CompanyDetailsService
    ) {}

    createNewCompanyDetails$ = createEffect(() => {
        return this._action$.pipe(
            ofType<fromAction.CreateNewCompanyDetails>(
                fromAction.COMPANY_DETAILS_ACTION.CREATE_NEW_COMPANY
            ),
            switchMap(({ formData: data }) => {
                const payload = this.normalizePayload(data);
                return this._service.createCompanyDetails(payload).pipe(
                    map((newCompany) => {
                        this.openSnackbar(
                            'Created Successfully',
                            null,
                            'bg-primary'
                        );
                        const data = this.normalizePayload(newCompany);
                        return new fromAction.CreateNewCompanyDetailsSuccess(
                            data
                        );
                    })
                );
            })
        );
    });

    updateCompanyDetails$ = createEffect(() => {
        return this._action$.pipe(
            ofType<fromAction.UpdateCompanyDetails>(
                fromAction.COMPANY_DETAILS_ACTION.UPDATE_COMPANY
            ),
            mergeMap(({ formData }) => {
                return of(formData).pipe(
                    withLatestFrom(this._store.select(getCompanyList)),
                    map(([formData, list]) => ({ formData, list }))
                );
            }),
            mergeMap(({ formData, list }) => {
                const data = JSON.parse(JSON.stringify(formData));
                const { id } = data;
                delete data['id'];
                const updated_data = this.normalizePayload(data);

                return this._service
                    .updateCompanyDetails(id, updated_data)
                    .pipe(
                        map((updatedItem) => {
                            // Find index of update item
                            const index = list.findIndex(
                                (item) => item.id === id
                            );
                            // Make new list
                            const updated_list = JSON.parse(
                                JSON.stringify(list)
                            );

                            // Update list
                            updated_list[index] =
                                this.normalizePayload(updatedItem);

                            // Open snackbar
                            this.openSnackbar(
                                'Updated Successfully',
                                null,
                                'bg-primary'
                            );

                            return new UpdateCompanyDetailsSuccess(
                                updated_list
                            );
                        })
                    );
            })
        );
    });

    deleteCompanyDetails$ = createEffect(() => {
        return this._action$.pipe(
            ofType<fromAction.DeleteCompanyDetails>(
                fromAction.COMPANY_DETAILS_ACTION.DELETE_COMPANY
            ),
            mergeMap(({ id }) => {
                return of(id).pipe(
                    withLatestFrom(this._store.select(getCompanyList)),
                    map(([id, list]) => ({ id, list }))
                );
            }),
            mergeMap(({ id, list }) => {
                return this._service.deleteCompanyDetails(id).pipe(
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

                        return new fromAction.DeleteCompanyDetailsSuccess(
                            updated_list
                        );
                    })
                );
            })
        );
    });

    getEntities$ = createEffect(() => {
        return this._action$.pipe(
            ofType<fromAction.GetListOfCompanies>(
                fromAction.COMPANY_DETAILS_ACTION.GET_LIST_OF_COMPANIES
            ),
            switchMap(
                ({ pageNumber, pageSize, query, sortBy, sortDirection }) => {
                    return this._service
                        .getEntityList(
                            pageNumber,
                            pageSize,
                            query,
                            sortBy,
                            sortDirection
                        )
                        .pipe(
                            map(({ data, count }) => {
                                const normalizeData = data.map((entity) =>
                                    this.normalizePayload(entity)
                                );
                                return new fromAction.GetListOfCompaniesSuccess(
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
}
