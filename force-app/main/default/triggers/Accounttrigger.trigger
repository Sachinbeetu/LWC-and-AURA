trigger Accounttrigger on Account (before insert,before update,after insert,after update) {
for(Account Acctrigg : trigger.new)
    {
        if(Trigger.isBefore && String.isBlank(Acctrigg.AccountNumber))
        {
            Acctrigg.Site = 'Account Number Was Null';
           
        }
        if(Trigger.isbefore && (Acctrigg.Site == 'Account number not null'))
        {
            Acctrigg.TickerSymbol = '0';
        }
        else if(trigger.isbefore)
        {
            Acctrigg.Site = 'Account number not null';
        }
}
}