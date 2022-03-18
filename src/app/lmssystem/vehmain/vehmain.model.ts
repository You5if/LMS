import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class VehMainModel {
constructor(


        public vehMainId: number,
                public reason: string,
                public fromDate: Date,
                public toDate: Date,
                public location: string,
                public contact1: string,
                public contact2: string,
                public vehicleId: number,
                public nextMainDate: Date,
                public isRouCheck: boolean,
                public remarks: string,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

