trigger Leadtrigger on Lead (before insert,before update,after update) {
    for(Lead leadRecord : trigger.new)
    {
        if(Trigger.isBefore && String.isBlank(leadRecord.LeadSource))
        {
            leadRecord.leadSource = 'Other';
           
        }
        if ( Trigger.isBefore && leadRecord.leadSource == 'Other')
        {
            leadRecord.Rating = 'Warm';
        }
        if(( leadRecord.Status == 'Closed - Converted' || leadRecord.Status == 'Closed - Not Converted')&& Trigger.oldMap.get(leadRecord.Id).Status == 'Open - Not Contacted')
        {   
            leadRecord.Status.addError('You can Not Directly Close an Open Lead Record');
        }
        if(String.isBlank(leadRecord.Industry) && (Trigger.isInsert || Trigger.isUpdate))
        {
            leadRecord.Industry.addError('The Industry Can not be blank');
        }
     
    }

}