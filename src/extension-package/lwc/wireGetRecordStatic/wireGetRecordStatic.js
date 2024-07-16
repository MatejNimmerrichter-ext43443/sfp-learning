import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import NAME_FIELD from '@salesforce/schema/CustomObject__c.Name';
import CUSTOM_FIELD from '@salesforce/schema/CustomObject__c.CustomField__c';
import CUSTOM_FIELD_2 from '@salesforce/schema/CustomObject__c.CustomField2__c';

const fields = [NAME_FIELD, CUSTOM_FIELD, CUSTOM_FIELD_2];

export default class WireGetRecordStatic extends LightningElement {
	@api recordId;

	@wire(getRecord, { recordId: '$recordId', fields })
	record;

	get name() {
		return getFieldValue(this.record.data, NAME_FIELD);
	}

	get customField() {
		return getFieldValue(this.record.data, CUSTOM_FIELD);
	}

	get customField2() {
		return getFieldValue(this.record.data, CUSTOM_FIELD_2);
	}
}
