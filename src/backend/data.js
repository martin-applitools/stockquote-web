const DATA = [
    {
        email: "presales@applitools.com",
        password: "presales",
        fullname: "Presales Admin Account",
        type: "Savings",
        number: "50345631",
        balance: 50000,
        isAdmin: true, 
        transactions: []
    },
    {
        email: "client1@applitools.com",
        password: "client1",
        fullname: "Client 1 Account",
        type: "Checking",
        number: "93057227",
        balance: 103300.43,
        isAdmin: false,
        budget: [
            {
                title: "Tuition fee",
                amount: 12000
            },
            {
                title: "Food take out during the pandemic",
                amount: 4000
            }
        ],
        transactions: [
            {
                title: "Deposit",
                amount: 240,
                type: "credit",
                date: "June 1, 2023"
            },
            {
                title: "Transfer to Presales #7094023495",
                amount: 1243,
                type: "debit",
                date: "June 3, 2023"
            },
            {
                title: "Withdraw",
                amount: 414,
                type: "debit",
                date: "June 7, 2023"
            },
            {
                title: "Withdraw",
                amount: 897,
                type: "debit",
                date: "June 14, 2023"
            },
            {
                title: "Deposit",
                amount: 7403,
                type: "credit",
                date: "June 19, 2023"
            },
            {
                title: "Deposit",
                amount: 403,
                type: "credit",
                date: "June 23, 2023"
            },
            {
                title: "Withdraw",
                amount: 120,
                type: "debit",
                date: "June 25, 2023"
            },
            {
                title: "Deposit",
                amount: 500,
                type: "credit",
                date: "June 29, 2023"
            },
        ]
    },
    {
        email: "client2@applitools.com",
        password: "client2",
        fullname: "Client 2 Account",
        type: "Checking",
        number: "47420903",
        balance: 85043.22,
        isAdmin: false, 
        budget: [
            {
                title: "Tuition fee",
                amount: 12000
            },
            {
                title: "Food take out during the pandemic",
                amount: 4000
            }
        ],
        transactions: [
            {
                title: "Deposit",
                amount: 240,
                type: "debit",
                date: "May 1, 2023"
            },
            {
                title: "Transfer to Presales #123456",
                amount: 1243,
                type: "credit",
                date: "May 3, 2023"
            },
            {
                title: "Withdraw",
                amount: 414,
                type: "credit",
                date: "May 7, 2023"
            },
            {
                title: "Withdraw",
                amount: 897,
                type: "credit",
                date: "May 14, 2023"
            },
            {
                title: "Deposit",
                amount: 7403,
                type: "debit",
                date: "May 19, 2023"
            },
            {
                title: "Deposit",
                amount: 403,
                type: "debit",
                date: "May 23, 2023"
            },
            {
                title: "Withdraw",
                amount: 120,
                type: "credit",
                date: "May 25, 2023"
            },
            {
                title: "Deposit",
                amount: 500,
                type: "debit",
                date: "May 29, 2023"
            },
        ]
    },
];

export default DATA;
