function getPendingInvoices(charges) {
  
    let arrFailed = [];
    let arrSuccess = [];
    let invoice = [];

    charges.map((arr) => { 
        if(arr.status == 'success') {
           arrSuccess.push(arr.invoice_id)
        }
        if(arr.status == 'failed') {
          if(!arrFailed.includes(arr.invoice_id)) {
              arrFailed.push(arr.invoice_id)
          }
        }
    });
  
  invoice = arrFailed.filter(fail => !arrSuccess.includes(fail))
  return (invoice)
}


getPendingInvoices([
    {
        amount: '50USD',
        invoice_id: 1,
        status: 'failed',
    },
    {
        amount: '50USD',
        invoice_id: 1 ,
        status: 'success',
    },
    {
        amount: '25USD',
        invoice_id: 2,
        status: 'success',
    },
    {
        amount: '50USD',
        invoice_id: 3,
        status: 'failed',
    },
    {
        amount: '75USD',
        invoice_id: 3,
        status: 'failed',
    }
]);