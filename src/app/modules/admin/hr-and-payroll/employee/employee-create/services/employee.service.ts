import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IEmployee, IEmployeeState } from '../models/employee.types';

@Injectable({
    providedIn: 'root',
})
export class EmployeeService {
    constructor(
        private _httpClient: HttpClient,
        @Inject('config') private _config: any
    ) { }

    /**
     * Create EMPLOYEE
     */
    CreateEmployee(payload: IEmployee): Observable<any> {
        return this._httpClient.post<any>(this._config.EMPLOYEE, payload);
    }

    /**
     * Update Data
     *
     * @param id
     * @param paylod
     * @returns
     */
    // updateEmployee(id: number, paylod: CompanyDetails) {
    //     return this._httpClient
    //         .put(`${this._config.COMPANY}/${id}`, paylod)
    //         .pipe(
    //             map((updatedData: any) => {
    //                 // Return new company
    //                 return updatedData?.data;
    //             })
    //         );
    // }

    // deleteEmployee(id: number) {
    //     return this._httpClient.delete(`${this._config.COMPANY}/${id}`).pipe(
    //         map((isDeleted: boolean) => {
    //             return id;
    //         })
    //     );
    // }

    /**
     * Get list
     *
     * @param pageNumber
     * @param pageSize
     * @returns
     */

    // getEntityList(
    //     pageNumber: number = 1,
    //     pageSize: number = 10,
    //     ids?: any
    // ): Observable<any> {
    //     console.log("ser");
    //     const params = {};

    //     if (pageNumber) {
    //         params['page'] = '' + pageNumber;
    //     }
    //     if (pageSize) {
    //         params['limit'] = '' + pageSize;
    //     }

    //     let url = this._config.EMPLOYEE;

    //     if (ids) {
    //         const keys = Object.keys(ids)
    //             .map((key) => `${key}=${ids[key]}`)
    //             .join('&');
    //         url = `${url}?${keys}`;
    //     }


    //     this._httpClient
    //         .get(url, {
    //             params,
    //         })
    //         .pipe(
    //             map((response: any) => {
    //                 return {
    //                     data: response?.data?.data,
    //                     count: response?.data?.count,
    //                 };
    //             })
    //         ).subscribe(r=>console.log(r));
    //         return ;
    // }

    getEntityList(
        pageNumber: number = 1,
        pageSize: number = 10
    ): Observable<any> {
        const params = {};

        if (pageNumber) {
            params['page'] = '' + pageNumber;
        }
        if (pageSize) {
            params['limit'] = '' + pageSize;
        }

        return this._httpClient
            .get(this._config.EMPLOYEE, {
                params,
            })
            .pipe(
                map((response: any) => {
                    return {
                        data: response?.data?.data,
                        count: response?.data?.count,
                    };
                })
            );
    }


      /**
     * Get product by id
     */
       getEmployeeById(id: number): Observable<any>
       {
        let url = this._config.EMPLOYEE + '/' + id;
        return this._httpClient
            .get(url)
            .pipe(
                map((response: any) => {

                    return response?.data;
                })
            );
       }

    getReligionList() {
        return of(['Islam', 'Hinduism', 'Buddhism', 'Christianity', 'Other']);
    }
    getWeekDays() {
        return of([
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ]);
    }
    getBloodGroup() {
        return of(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']);
    }
    getGender() {
        return of(['Male', 'Female', 'Others']);
    }
    getDistrict() {
        return of(["Barguna",
            "Barisal",
            "Bhola",
            "Jhalokati",
            "Patuakhali",
            "Pirojpur",
            "Bandarban",
            "Brahmanbaria",
            "Chandpur",
            "Chittagong",
            "Comilla",
            "Cox's Bazar",
            "Feni",
            "Khagrachhari",
            "Lakshmipur",
            "Noakhali",
            "Rangamati",
            "Dhaka",
            "Faridpur",
            "Gazipur",
            "Gopalganj",
            "Kishoreganj",
            "Madaripur",
            "Manikganj",
            "Munshiganj",
            "Narayanganj",
            "Narsingdi",
            "Rajbari",
            "Shariatpur",
            "Tangail",
            "Bagerhat",
            "Chuadanga",
            "Jessore",
            "Jhenaidah",
            "Khulna",
            "Kushtia",
            "Magura",
            "Meherpur",
            "Narail",
            "Satkhira",
            "Jamalpur",
            "Mymensingh",
            "Netrokona",
            "Sherpur",
            "Bogra",
            "Joypurhat",
            "Naogaon",
            "Natore",
            "Chapainawabganj",
            "Pabna",
            "Rajshahi",
            "Sirajganj",
            "Dinajpur",
            "Gaibandha",
            "Kurigram",
            "Lalmonirhat",
            "Nilphamari",
            "Panchagarh",
            "Rangpur",
            "Thakurgaon",
            "Habiganj",
            "Moulvibazar",
            "Sunamganj",
            "Sylhet"])
    }
    getDivisions() {
        return of([
            "Barisal",
            "Chittagong",
            "Dhaka",
            "Khulna",
            "Mymensingh",
            "Rajshahi",
            "Rangpur",
            "Sylhet"
        ])
    }
    getRelatives() {
        return of([
            "Great-grandfather",
            "Great-grandmother",
            "Great-uncle",
            "Grandfather",
            "Grandmother",
            "Great-aunt",
            "Uncle",
            "Aunt",
            "Father",
            "Mother",
            "Uncle (Husband of Aunt)",
            "Sister",
            "Brother-in-law",
            "Brother",
            "Sister-in-law",
            "Husband",
            "Wife",
            "Cousin",
            "Cousin’s wife",
            "Cousin",
            "Cousin’s husband",
            "Nephew",
            "Niece",
            "Son",
            "Daughter-in-law",
            "Daughter",
            "Son-in-law",
            "The first cousin once removed",
            "Grandson",
            "Granddaughter"
        ])
    }
    getEducationList() {
        return of([
            "Primary School Certificate (PSC)",
            "Junior School Certificate (JSC)",
            "Secondary School Certificate (SSC)",
            "Junior Dakhil Certificate (JDC)",
            "Higher Secondary Certificate (HSC)",
            "Bangladesh Civil Service (BCS)",
            "Associate of Arts (AA)",
            "Associate of Science (AS)",
            "Associate of Applied Science (AAS)",
            "Bachelor of Arts (BA)",
            "Bachelor of Science (BSc)",
            "Bachelor of Fine Arts (BFA)",
            "Bachelor of Applied Science (BAS)",
            "Bachelor of Business Administration (BBA)",
            "Bachelor of Architecture (BArch)",
            "Master of Arts (MA)",
            "Master of Science (MS)",
            "Master of Business Administration (MBA)",
            "Master of Fine Arts (MFA)",
            "Master of Laws (LLM)",
            "Master of Publishing (MPub)",
            "Doctor of Philosophy (Ph.D.)",
            "Juris Doctor (JD)",
            "Doctor of Medicine (MD)",
            "Doctor of Dental Surgery (DDS)",
            "Doctor of Education (EdD)"
        ])
    }
}
