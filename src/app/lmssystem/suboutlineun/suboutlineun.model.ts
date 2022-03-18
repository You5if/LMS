import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class SubOutlineUnModel {
constructor(


        public subOutlineUnId: number,
                public subjectOutlineId: number,
                public unitName: string,
                public remarks: string,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

