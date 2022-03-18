import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class TripShiftDetailsModel {
constructor(


        public tripShiftDetailsId: number,
                public tripShiftId: number,
                public customerAccountId: number,
                public teacherId: number,
                public orderNo: number,
                public location: string,
                public tripTime: Date,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

