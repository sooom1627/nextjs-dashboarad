'use server'

export async function createInvoice(formData:FormData) {
  const rawFormData = {
    customerId:formData.get('cutomerId'),
    amount:formData.get('amount'),
    status:formData.get('status')
  }

  console.log(rawFormData)
  
}