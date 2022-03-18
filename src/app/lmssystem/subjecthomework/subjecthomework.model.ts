import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class SubjectHomeworkModel {
constructor(


        public subjectHomeworkId: number,
                public schoolYearId: number,
                public subjectId: number,
                public schoolGroupId: number,
                public homeworkDate: Date,
                public homeworkCon: string,
                public remarks: string,
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

