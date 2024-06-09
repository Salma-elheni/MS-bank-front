export class Credit {
    duration: number;
    //monthlyAmount: number;
    contribution: number;
    creditAmount: number;


    constructor(duration?: number, monthlyAmount?: number,contribution?: number,creditAmount?:number) {
        this.duration = duration;
        //this.monthlyAmount = monthlyAmount;
        this.contribution =contribution;
        this.creditAmount=creditAmount;
    }
}
