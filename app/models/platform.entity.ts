import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db";

interface IPlatform{
    id: number;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export type PlatformCreationAttributes = Optional<IPlatform, 'id'>;

export class Platform extends Model<IPlatform, PlatformCreationAttributes> {
    declare id: number | null;
    declare name: string | null;
    public createdAt?: Date;
    public updatedAt?: Date;
}

Platform.init(
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
        tableName: 'platforms',
        modelName: 'platform',
    }
)