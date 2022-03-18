import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class SubTeMatModel {
constructor(


        public subTeMatId: number,
 public subjectTestId: number,
                public subTeQueId: number,
                public questionBankId: number,
                public studentId: number,
                public quBanMatId: number,
                public relatedQuBanMatId: number,
                public points: number,
                
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

