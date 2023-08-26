import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db";

interface IGenre{
    id: number;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export type GenreCreationAttributes = Optional<IGenre, 'id'>;

export class Genre extends Model<IGenre, GenreCreationAttributes> {
    declare id: number | null;
    declare name: string | null;
    public createdAt?: Date;
    public updatedAt?: Date;
}

Genre.init(
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
        tableName: 'genres',
        modelName: 'genre',
    }
)