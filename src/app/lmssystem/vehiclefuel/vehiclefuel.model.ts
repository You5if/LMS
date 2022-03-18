import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class VehicleFuelModel {
constructor(


        public vehicleFuelId: number,
                public vehicleId: number,
                public reFillDate: Date,
                public litres: number,
                public pricePerLitre: number,
                public driverId: number,
                public location: string,
                public remarks: string,
                public petrolPumpName: string,
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

