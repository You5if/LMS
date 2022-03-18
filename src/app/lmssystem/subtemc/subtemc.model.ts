import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class SubtemcModel {
constructor(


        public subtemcId: number,
                public subjectTestId: number,
                public subTeQueId: number,
                public questionBankId: number,
                public studentId: number,
                public quBanMCId: number,
                public isSelected: boolean,
                public points: number,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

