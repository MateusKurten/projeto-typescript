import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db";
import { Country } from "./country.entity";

interface IUser{
  id: number;
  name: string;
  email: string;
  password: string;
  country?: string;
  admin: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export type UserCreationAttributes = Optional<IUser, 'id'>;

export class User extends Model<IUser, UserCreationAttributes> {
  declare id: number | null;
  declare name: string | null;
  declare email: string | null;
  declare password: string | null;
  declare country: string | null;
  declare admin: boolean | null;
  declare createdAt: Date | null;
  declare updatedAt: Date | null;
}

User.init(
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
    email: {
      type: new DataTypes.STRING(70),
      allowNull: false,
      unique: true
    },
    password: {
      type: new DataTypes.STRING(256),
      allowNull: false
    },
    country: {
      type: DataTypes.INTEGER,
      references: {
        model: 'countries',
        key: 'id'
      }
    },
    admin: {
      type: new DataTypes.BOOLEAN,
      allowNull: false
    },
    createdAt: {
      type: new DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date()
    },
    updatedAt: {
      type: new DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date()
    }
  },
  {
    sequelize,
    tableName: 'users',
    modelName: 'user',
  }
)

User.belongsTo(Country, { foreignKey: 'country', as: 'modelCountry' });