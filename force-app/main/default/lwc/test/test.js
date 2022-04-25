/* eslint-disable radix */
import { LightningElement,api, track  } from 'lwc';
// import { ShowToastEvent } from 'lightning/platformShowToastEvent';

// importing Apex Class

export default class test extends LightningElement {
    @api recordId;
    @api objectApiName;
    @track fn;
    @track sn;
    @track newdata =[];
    @track alldata = "Data Shows Here";
    @track a = 0;
    @track reset = 0;
    connectedCallback(){
    var today = new Date();
    this.date=today.toISOString();
    
    
}   
    @track result=0;
    greetings = ["Sachin"];
handleSave()
        {
        
        // window.print("Date Saved");
        if(this.a <5)
        {
        this.a++;
        this.newdata = ["Saved "+this.a+" Times. Reset ="+ this.reset]
        }
        else{
            this.reset++;
            this.newdata = ["Saved "+this.a+" Times. Data Reset On "+ this.a+ " Times. Reset = "+ this.reset+" ."]
            this.a = 0;
            

        }
        this.alldata = this.greetings+" "+this.fn+" "+this.sn;
        // this.newdata = [];
        
        

        }
    handleInputChange(event)
    {   if(event.target.name==='greet')
    {
        this.greetings = event.target.value;

    }
        if(event.target.name === 'n1')
        {
            this.fn = event.target.value;
        }
        if(event.target.name === 'n2')
        {
            this.sn = event.target.value;
        }
        
    this.result = parseInt(this.fn) * parseInt(this.sn);
    
    
    }
   
    constructor(){
        super();
        
        console.log('Record Id:'+ this.recordId)
        console.log('Object API Name :'+ this.objectApiName)
    }
}