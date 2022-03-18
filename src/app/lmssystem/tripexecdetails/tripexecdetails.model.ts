import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class TripExecDetailsModel {
constructor(


        public tripExecDetailsId: number,
                public tripExecId: number,
                public customerAccountId: number,
                public teacherId: number,
                public orderNo: number,
                public location: string,
                public tripTime: Date,
                public remarks: string,
                public isAbsent: boolean,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

