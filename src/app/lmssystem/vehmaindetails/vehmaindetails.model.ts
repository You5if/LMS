import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class VehMainDetailsModel {
constructor(


        public vehMainDetailsId: number,
                public vehMainId: number,
                public item: string,
                public cost: number,
                public remarks: string,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

