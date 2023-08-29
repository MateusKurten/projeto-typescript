import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../db';

interface IDonation{
    id: number;
    donor: number;
    value: number;
    date: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

export type DonationCreationAttributes = Optional<IDonation, 'id'>;

export class Donation extends Model<IDonation, DonationCreationAttributes> implements IDonation{
    declare id: number;
    declare donor: number;
    declare value: number;
    declare date: Date;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

Donation.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        donor: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'donors',
                key: 'id'
            }
        },
        value: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
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
    }, {
        sequelize,
        tableName: 'donations',
        modelName: 'donation',
    }
)