export interface IBasicInfo {
    name_bengali: string,
    father_name: string,
    father_name_bengali: string,
    mother_name: string,
    mother_name_bengali: string,
    spouse_name: string,
    spouse_name_bengali: string,
    nationality: string,
    dual_nationality: string,
    religion: string,
    sex: string,
    height: string,
    identification_sign: string,
    bloodGroup: string,
    dob: string,
    maritial_status: string,
    birthPlace: string,
    birth_reg_no: number,
    passport_no: number,
    passport_issue_date: string,
    passport_issue_place: string,
    driving_license_no: number,
    driving_license_issue_date: string,
    driving_license_issue_place: string,
    remark: string,
}

export interface IAddressInfo{
    present_address: {
        house_name: string,
        house_no: string,
        floor: string,
        road_no: string,
        block:string,
        area: string,
        word_name: string,
        word_number: string,
        post_office: string,
        post_office_code: string,
        police_station: string,
        district: string,
        division: string
      },
      permanent_address: {
        house_name: string,
        house_no: string,
        floor: string,
        road_no: string,
        block: string,
        area: string,
        word_name: string,
        word_number: string,
        post_office: string,
        post_office_code: string,
        police_station: string,
        district: string,
        division: string
      },
      land_phone: string,
      cell_phone: string,
      email: string,
      remark: string
}

export interface IBankSalary{
    bank_name: string,
    branch_name: string,
    routing_no: string,
    account_no: string,
    bank_salary_amount: 1,
    tax_amount: 1,
    salary_period: string,
    remark: string,
}

export interface IFamilyInfo{
  name: string;
  relation: string;
  dob: string;
  contact_no: string;
  occupation: string;
  remark: string;
}


export interface IJobInfo{
  organization_name: string;
  designation: string;
  joining_date: string;
  resigning_date: string;
  gross_salary: number;
  remark: string;
  employee_id: number;
}