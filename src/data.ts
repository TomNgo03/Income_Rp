export const data: Data = {
    report: []
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

enum ReportType {
    INCOME = "income",
    EXPENSE = "expense"
}