import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db";

interface IDonor{
    id: number;
    name: string;
    country: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export type DonorCreationAttributes = Optional<IDonor, 'id'>;

export class Donor extends Model<IDonor, DonorCreationAttributes> {
    declare id: number;
    declare name: string;
    declare country: number;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

Donor.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        country: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'countries',
                key: 'id'
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    },
    {
        sequelize,
        tableName: 'donors',
        modelName: 'donor',
    }
)