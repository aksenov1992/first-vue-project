export default {
    state: {
        organization: 11,
        customer: {
            id: 'c0175e65-7251-d98d-a5d4-8a4f5ce91829',
            name: '',
            surname: '',
            phone: '',
        },
        order: {
            id: 1111,
            externalId: '',
            data: 'newData()',
            phone: '',
            items: [
                {
                    id: 'itemId',
                    amount: '',
                    modifiers: []
                }
            ],
            isSelfService: false,
            comment: '',
            personsCount: 1,
            address: {
                city: '',
                home: '',
                comment: '',
                street: '',
                housing: '',
                apartment: ''
            },
            fullSumm: 1,
            paymentItems: [
                {
                    sum: 1,
                    paymentType: {
                        code: 'CASH'
                    },
                    isProcessedExternally: false
                }
            ]
        }
    }
}