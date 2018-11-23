import {Component, OnInit} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";



@Component({
    selector: 'example',
    moduleId: module.id,
    templateUrl: './index.html',
    providers: [

    ]
})
export class ExampleComponent implements OnInit{
    item;

    constructor(private routerExtensions: RouterExtensions) {}

    ngOnInit() {
        console.log('!!!!!!:::::::');
        this.item = {
            "waId": "251521521521521521512",
            "wjStatus": "PROPOSED",
            "waReadableId": "60180000030",
            "waName": "Toast",
            "companyName": "Test company name",
            "hourlyWage": {
                "amount": 50,
                "currencyId": 3
            },
            "salary": {
                "amount": 29.17,
                "currencyId": 3
            },
            "hourlyWageWithHolidayPay": {
                "amount": 56.04,
                "currencyId": 3
            },
            "salaryWithHolidayPay": {
                "amount": 32.69,
                "currencyId": 3
            },
            "duration": 375,
            "requirements": "15 cooks on 1 day",
            "dresscodeDescription": "Good test",
            "companyIcon": "default-company-logo.png",
            "contactInfo": {
                "email": "test@email.com",
                "mobileNumber": "21512521525521",
                "type": "",
                "imageUrl": "test",
                "tenantName": "COOPLE UK"
            },
            "periodFrom": 1540712758000,
            "periodTo": 1542282178000,
            "jobAddress": {
                "addressStreet": "Unnamed road",
                "extraAddress": "",
                "zip": "NW1",
                "city": "London",
                "countryId": 78
            },
            "safetyRisks": "Good dress required",
            "jobSkill": {
                "jobProfileId": 4
            },
            "expenses": [],
            "isExternalPayroll": false,
            "waDates": []
        };

        setTimeout(() => {
            this.routerExtensions.back();
        }, 1500);

    }

}