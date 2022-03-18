import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class TestGradeDetModel {
constructor(


        public testGradeDetId: number,
       public testGradeId: number,
                public fromScore: number,
                public toScore: number,
                public grade: string,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

