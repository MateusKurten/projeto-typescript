import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db";

interface ICountry{
    id: number;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export type CountryCreationAttributes = Optional<ICountry, 'id'>;

export class Country extends Model<ICountry, CountryCreationAttributes> {
    declare id: number | null;
    declare name: string | null;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

Country.init(
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
        tableName: 'countries',
        modelName: 'country',
    }
)