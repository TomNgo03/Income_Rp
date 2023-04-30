export enum ReportType {
    INCOME = "income",
    EXPENSE = "expense"
}

export const data: Data = {
    report: [
        {
            id: "1",
            sources: "Salary",
            amount: 1000,
            create_at: new Date(),
            update_at: new Date(),
            type: ReportType.INCOME
        },

        {
            id: "2",
            sources: "Salary",
            amount: 2000,
            create_at: new Date(),
            update_at: new Date(),
            type: ReportType.INCOME
        },

        {
            id: "3",
            sources: "Fuel",
            amount: 3000,
            create_at: new Date(),
            update_at: new Date(),
            type: ReportType.EXPENSE
        },

        {
            id: "4",
            sources: "Food",
            amount: 4000,
            create_at: new Date(),
            update_at: new Date(),
            type: ReportType.EXPENSE
        }
    ]
}

interface Data {
    report: {
        id: string;
        sources: string;
        amount: number;
        create_at: Date;
        update_at: Date;
        type: ReportType;
    }[]
}
