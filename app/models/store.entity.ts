import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db";

interface IStore{
    id: number;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export type StoreCreationAttributes = Optional<IStore, 'id'>;

export class Store extends Model<IStore, StoreCreationAttributes> {
    declare id: number | null;
    declare name: string | null;
    public createdAt?: Date;
    public updatedAt?: Date;
}

Store.init(
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
        tableName: 'stores',
        modelName: 'store',
    }
)