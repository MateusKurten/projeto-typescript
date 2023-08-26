import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../db';

interface IGame{
    id: number;
    title: string;
    userId: number;
    genreId: number;
    platformId: number;
    storeId: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export type GameCreationAttributes = Optional<IGame, 'id'>;

export class Game extends Model<IGame, GameCreationAttributes> implements IGame{
    public id!: number;
    public title!: string;
    public userId!: number;
    public genreId!: number;
    public platformId!: number;
    public storeId!: number;
    public createdAt?: Date;
    public updatedAt?: Date;
}

Game.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        genreId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'genres',
                key: 'id'
            }
        },
        platformId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'platforms',
                key: 'id'
            }
        },
        storeId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'stores',
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
    }, {
        sequelize,
        modelName: 'game',
        tableName: 'games',
    }
)