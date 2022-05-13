import { LightningElement, api, track, wire} from 'lwc';
import  getAccountId from '@salesforce/apex/RecordIdClass.getAccountId';
import  QuoteList from '@salesforce/apex/QuoteHelper.QuoteList';

const columns = [
    { label: 'Id', fieldName: 'Id', type: 'Id' },
    { label: 'Name', fieldName: 'Name', type: 'name' },
    { label: 'Status', fieldName: 'Status', type: 'status' },
    { label: 'OpportunityId', fieldName: 'Id', type: 'id' }
];

export default class LoadRecord1 extends LightningElement {
    @api recordId;
    @api objectApiName;
    columns = columns;
    @track error;
    @track AccountId ;
    @track quoteList = [];
    

    @wire(getAccountId, {recordId: '$recordId'} ) 
    AccountRecord({error,data})
    {
        if (data) {
            console.log('data',data);
            this.AccountId = data[0].AccountId;
            console.log('the accout id is ',this.AccountId);
        } else if (error) {
            console.log('error',error);
            this.error = error;
        }
    }

    @track quoteIdList=[];
    @wire(QuoteList, {recordId: '$recordId'} )
    QuoteRecords({error,data})
    {
        if (data) {
            this.quoteList = data;
            for(let i=0; i<= this.quoteList.length; i++)
            {
            // console.log('The value of i is:',this.i);
            this.quoteIdList = this.quoteIdList[i].id;
            }
            console.log('that is quoteList',this.quoteList);
            console.log('quoteIdList',this.quoteIdList);
        } else if (error) {
            this.error = error;
        }
    }

    @wire(QuoteLineItemList, {quoteIdList: quoteIdList } ) 
    QuoteLineItemRecords({error,data})
    {
        if (data) {
            this.quoteLineItemList = data;
        } else if (error) {
            this.error = error;
        }
    }
}