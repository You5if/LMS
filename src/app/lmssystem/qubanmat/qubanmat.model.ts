import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class QuBanMatModel {
constructor(


        public quBanMatId: number,
    public questionBankId: number,
                public answer: string,
                public relatedQuBanMatId: number,
                public aPIImagePath: string,
                public aPIPath: string,
                public extension: string,
                public fileName: string,
                public fullPath: string,
                public originalFileName: string,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

