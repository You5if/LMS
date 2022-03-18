import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class QuBanFillModel {
constructor(


        public quBanFillId: number,
public questionBankId: number,
                public answers: string,
                public orderNo: number,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

